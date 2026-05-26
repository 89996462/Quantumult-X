/******************************

脚本功能：海角社区——去开屏广告——去进入弹窗——去悬浮广告
特别说明：需开启 MITM，对 api / H5 域名安装并信任证书后生效
适配接口：getconfig、navigation/index、tabnew/list_construct（api2.*）
脚本说明：解密接口响应后清空 ads_screen / ads_pop / floating_ads 并回写签名
更新时间：2026-05-26
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/api2\.[^\/]+\/api\/(home\/getconfig|navigation\/index|tabnew\/list_construct) url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ghs/hjsq-ad.js

^https?:\/\/ap\.dc-report\.cc\/ - reject

^https?:\/\/api-dc-prod-002\.cyou\/ - reject

^https?:\/\/api-dc2-prod-02\.cyou\/ - reject

[mitm]

hostname = api2.anpbbxdyo.com, p4.aozngkwm.com, *.aozngkwm.com


*******************************/


const AES_KEY = "tjJHooEeIYLszIUt";
const AES_IV = "bleBrccsf7MZLG29";
const SIGN_SALT = "tjJHooEeIYLszIUt";
const AD_KEYS = ["ads_screen", "ads_pop", "floating_ads"];

function calcSign(dataB64, timestamp) {
  const raw = `data=${dataB64}&timestamp=${timestamp}${SIGN_SALT}`;
  const sha256hex = $crypto.digest({
    type: "SHA-256",
    message: raw,
    output: "hex",
  });
  return $crypto.digest({
    type: "MD5",
    message: sha256hex,
    output: "hex",
  });
}

function stripAds(obj) {
  if (!obj || typeof obj !== "object") return;
  for (const k of AD_KEYS) {
    if (Array.isArray(obj[k])) obj[k] = [];
    else if (obj[k] != null && typeof obj[k] === "object") obj[k] = {};
  }
  if (Array.isArray(obj.ad_list)) obj.ad_list = [];
  if (obj.list && Array.isArray(obj.list)) {
    obj.list.forEach((item) => {
      stripAds(item);
      if (item && Array.isArray(item.ad_list)) item.ad_list = [];
    });
  }
}

function decryptPayload(dataB64) {
  const plain = $crypto.dataDecrypt({
    data: dataB64,
    key: AES_KEY,
    iv: AES_IV,
    type: "AES",
    mode: "CBC",
    padding: "pkcs7",
  });
  return typeof plain === "string" ? plain : String(plain);
}

function encryptPayload(plainText) {
  return $crypto.dataEncrypt({
    text: plainText,
    key: AES_KEY,
    iv: AES_IV,
    type: "AES",
    mode: "CBC",
    padding: "pkcs7",
    encoding: "base64",
  });
}

const body = $response.body;

if (!body || body.indexOf('"data"') < 0) {
  $done();
} else {
  let wrapper;
  try {
    wrapper = JSON.parse(body);
  } catch (e) {
    $done();
  }

  if (!wrapper || !wrapper.data || typeof wrapper.data !== "string") {
    $done();
  } else {
    try {
      const plain = decryptPayload(wrapper.data);
      const payload = JSON.parse(plain);

      if (payload.data && typeof payload.data === "object") {
        stripAds(payload.data);
      }
      stripAds(payload);

      const newData = encryptPayload(JSON.stringify(payload));
      const ts = String(Math.floor(Date.now() / 1000));

      wrapper.data = newData;
      wrapper.timestamp = ts;
      wrapper.sign = calcSign(newData, ts);
      if (wrapper.errcode !== undefined) wrapper.errcode = 0;

      $done({ body: JSON.stringify(wrapper) });
    } catch (e) {
      $done();
    }
  }
}
