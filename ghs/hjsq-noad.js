/******************************

脚本功能：海角社区——去开屏广告——去进入弹窗——去悬浮广告——去首页Banner
特别说明：① 必须将下方 [rewrite_local]、[mitm] 复制到 QX 主配置并开启 MITM
         ② 脚本放 Quantumult X/Scripts/，重写规则里的文件名需一致
         ③ 对 api2.* 与 p4.aozngkwm.com 安装并信任证书
         ④ 修改后清 Safari 缓存，完全退出页面再进
适配接口：api2.*/api/*（重点 getconfig / tabnew/list_construct）
更新时间：2026-05-26 v2
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/api2\.[^\/]+\/api\/ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ghs/hjsq-noad.js

^https?:\/\/ap\.dc-report\.cc\/ - reject

^https?:\/\/api-dc-prod-002\.cyou\/ - reject

^https?:\/\/api-dc2-prod-02\.cyou\/ - reject

[mitm]

hostname = api2.anpbbxdyo.com, *.anpbbxdyo.com, p4.aozngkwm.com, *.aozngkwm.com

[script]

hjsq-noad = type=http-response,pattern=^https?:\/\/api2\.[^\/]+\/api\/,requires-body=1,max-size=524288,timeout=120,script-path=hjsq-noad.js


*******************************/


const AES_KEY = "tjJHooEeIYLszIUt";
const AES_IV = "bleBrccsf7MZLG29";
const SIGN_SALT = "tjJHooEeIYLszIUt";

const AD_KEY_RE =
  /^(ads_screen|ads_pop|floating_ads|banner|ad_list|ads|advertise_list|popup_ads|launch_ads|screen_ads|active_pop|pop_ads)$/i;

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

function decryptPayload(dataB64) {
  const opts = {
    data: dataB64,
    key: AES_KEY,
    iv: AES_IV,
    type: "AES",
    mode: "CBC",
    padding: "pkcs7",
  };
  let plain;
  try {
    plain = $crypto.dataDecrypt(opts);
  } catch (e1) {
    try {
      plain = $crypto.decrypt({
        algorithm: "AES-CBC",
        key: AES_KEY,
        iv: AES_IV,
        data: dataB64,
        padding: "Pkcs7",
      });
    } catch (e2) {
      throw e2;
    }
  }
  if (plain && typeof plain === "object") return JSON.stringify(plain);
  return String(plain);
}

function encryptPayload(plainText) {
  try {
    return $crypto.dataEncrypt({
      text: plainText,
      key: AES_KEY,
      iv: AES_IV,
      type: "AES",
      mode: "CBC",
      padding: "pkcs7",
      encoding: "base64",
    });
  } catch (e) {
    return $crypto.encrypt({
      algorithm: "AES-CBC",
      key: AES_KEY,
      iv: AES_IV,
      data: plainText,
      padding: "Pkcs7",
      encoding: "base64",
    });
  }
}

function stripAds(node) {
  if (Array.isArray(node)) {
    for (let i = 0; i < node.length; i++) stripAds(node[i]);
    return;
  }
  if (!node || typeof node !== "object") return;

  for (const k of Object.keys(node)) {
    const v = node[k];
    if (AD_KEY_RE.test(k)) {
      if (Array.isArray(v)) node[k] = [];
      else if (v && typeof v === "object") node[k] = {};
      continue;
    }
    if (/^ads_/i.test(k) && (Array.isArray(v) || (v && typeof v === "object"))) {
      node[k] = Array.isArray(v) ? [] : {};
      continue;
    }
    stripAds(v);
  }
}

function processBody(body) {
  if (!body || body.indexOf('"data"') < 0) return null;

  let wrapper;
  try {
    wrapper = JSON.parse(body);
  } catch (e) {
    return null;
  }

  if (!wrapper || typeof wrapper.data !== "string" || !wrapper.data) return null;

  const plain = decryptPayload(wrapper.data);
  const payload = JSON.parse(plain);

  stripAds(payload);
  if (payload.data) stripAds(payload.data);

  const newData = encryptPayload(JSON.stringify(payload));
  const ts = String(wrapper.timestamp || Math.floor(Date.now() / 1000));

  wrapper.data = newData;
  wrapper.timestamp = ts;
  wrapper.sign = calcSign(newData, ts);
  if (wrapper.errcode !== undefined) wrapper.errcode = 0;

  return JSON.stringify(wrapper);
}

const body = $response.body;
const newBody = processBody(body);

if (newBody) {
  $done({ body: newBody, headers: $response.headers });
} else {
  $done();
}
