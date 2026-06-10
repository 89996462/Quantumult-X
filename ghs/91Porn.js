/******************************

# 脚本功能：91Porn——m3u8 捕获 + com_video_url 换链通知
# 规则1：com_video_url 响应体 → 轻量解密并通知（不走 69KB 去广告脚本）
# 规则2：*.m3u8 请求头 → 捕获 long.chxgdn / oviluf 明文链
# 脚本作者：彭于晏💞
# 更新时间：2026-6-11
# 使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************/

var AES_KEY = "7f21f0eb260e396e";
var AES_IV = "6cbe8a2b687e0ffb";
var isQX = typeof $task !== "undefined";
var isSurge = typeof $httpClient !== "undefined" && !isQX;
var isLoon = typeof $loon !== "undefined";

function mapPlayUrl(raw) {
  return String(raw).replace(/:\/\/10play\.chxgdn\.cn/i, "://long.chxgdn.cn");
}

function isPlayableUrl(raw) {
  var u = mapPlayUrl(raw);
  if (/kmcbyg\.cn/i.test(u)) return false;
  return /long\.chxgdn\.cn|oviluf\.cn/i.test(u);
}

function normalizePlayUrl(raw) {
  var u = mapPlayUrl(String(raw));
  u = u.replace(/([?&])seconds=\d+(&?)/gi, function (m, p1, p2) {
    return p2 ? p1 : "";
  });
  u = u.replace(/\?&/g, "?").replace(/&&/g, "&").replace(/[?&]$/g, "");
  if (!/via_m=/i.test(u)) {
    u += (u.indexOf("?") >= 0 ? "&" : "?") + "via_m=91pornwebapp";
  }
  return u;
}

function videoHash(raw) {
  var m = String(raw).match(/\/(?:videos\d+|static|watch\d*)\/([0-9a-fA-F]{32})\//i);
  return m ? m[1] : String(raw);
}

function isDuplicate(link, raw, priority) {
  var key = "91porn_cap_" + videoHash(raw);
  var last = $prefs.valueForKey(key);
  var now = Date.now();
  if (last) {
    var parts = String(last).split("|");
    var ts = Number(parts[0]);
    var prevPri = Number(parts[1] || 0);
    if (now - ts < 120000 && priority <= prevPri) return true;
  }
  $prefs.setValueForKey(String(now) + "|" + priority + "|" + link, key);
  return false;
}

function pushNotify(link, raw, priority) {
  link = normalizePlayUrl(link);
  raw = mapPlayUrl(String(raw));
  if (!/\.m3u8/i.test(link) || !isPlayableUrl(link)) {
    try {
      $prefs.setValueForKey("skip:" + link.slice(0, 100), "91porn_notify_debug");
    } catch (e) {}
    return;
  }
  if (isDuplicate(link, raw, priority)) return;
  try {
    $prefs.setValueForKey(link, "91porn_last_capture");
    $prefs.setValueForKey(String(Date.now()), "91porn_last_capture_ts");
    $prefs.setValueForKey("cap_notify:" + link.slice(0, 100), "91porn_notify_debug");
  } catch (e) {}
  if (isQX) {
    if (typeof $notify === "function") {
      $notify("彭于晏提示❗️视频链接捕获成功", ">_ 点击此通知可跳转观看 🔞", "", { "open-url": link });
    } else if (typeof $notification !== "undefined" && typeof $notification.post === "function") {
      $notification.post("彭于晏提示❗️视频链接捕获成功", ">_ 点击此通知可跳转观看 🔞", "", { "open-url": link });
    }
  }
  if (isSurge && typeof $notification !== "undefined") {
    $notification.post("彭于晏提示❗️视频链接捕获成功", ">_ 点击此通知可跳转观看 🔞", "", { url: link });
  }
  if (isLoon && typeof $notification !== "undefined") {
    $notification.post("彭于晏提示❗️视频链接捕获成功", ">_ 点击此通知可跳转观看 🔞", "", { openUrl: link });
  }
}

function strToBytes(s) {
  var out = [];
  for (var i = 0; i < s.length; i++) out.push(s.charCodeAt(i) & 0xff);
  return out;
}

function aesDecryptB64(b64) {
  if (!b64) return "";
  var data = String(b64).replace(/ /g, "+");
  if (typeof $crypto === "undefined" || !$crypto.data || typeof $crypto.data.decrypt !== "function") {
    return "";
  }
  var tries = [
    { algorithm: "AES-CBC", key: AES_KEY, iv: AES_IV, data: data, encoding: "base64" },
    { algorithm: "AES-CBC", key: AES_KEY, iv: AES_IV, data: data },
    { algorithm: "AES-CBC", key: strToBytes(AES_KEY), iv: strToBytes(AES_IV), data: data, encoding: "base64" },
  ];
  for (var i = 0; i < tries.length; i++) {
    try {
      var ret = $crypto.data.decrypt(tries[i]);
      if (typeof ret === "string" && ret.indexOf("{") >= 0) return ret;
      if (ret && typeof ret.toString === "function") {
        var s = ret.toString();
        if (s && s.indexOf("{") >= 0) return s;
      }
    } catch (e) {}
  }
  return "";
}

function extractPlayUrl(plain) {
  if (!plain) return "";
  try {
    var payload = JSON.parse(plain);
    if (!payload || payload.status != 1) return "";
    var inner = payload.data;
    if (inner && typeof inner === "object" && inner.play_url && /\.m3u8/i.test(inner.play_url)) {
      return inner.play_url;
    }
    if (typeof inner === "string" && /\.m3u8/i.test(inner)) return inner;
  } catch (e) {}
  var flat = plain.replace(/\\\//g, "/");
  var m = flat.match(/https?:\/\/10play\.chxgdn\.cn\/[^"'\s]+\.m3u8[^"'\s]*/i);
  return m ? m[0] : "";
}

function captureComVideoResponse(body) {
  try {
    $prefs.setValueForKey(String(Date.now()), "91porn_cap_script_hit");
  } catch (e) {}
  if (!body || body.indexOf('"data"') < 0) return;
  try {
    var wrapper = JSON.parse(body);
    if (!wrapper || typeof wrapper.data !== "string" || !wrapper.data) return;
    var plain = aesDecryptB64(wrapper.data);
    if (!plain) {
      try {
        $prefs.setValueForKey("decrypt_fail", "91porn_notify_debug");
      } catch (e) {}
      return;
    }
    try {
      $prefs.setValueForKey(plain.slice(0, 160), "91porn_cv_plain_debug");
    } catch (e) {}
    var play = extractPlayUrl(plain);
    if (play) pushNotify(play, play, 5);
  } catch (e) {
    try {
      $prefs.setValueForKey("err:" + String(e), "91porn_notify_debug");
    } catch (e2) {}
  }
}

var respBody = $response && $response.body;
var reqUrl = String(($request && $request.url) || "");

if (respBody && /\/api\/home\/com_video_url/i.test(reqUrl)) {
  captureComVideoResponse(respBody);
  $done();
} else if ($request && $request.url) {
  var u = String($request.url);
  if (!/seconds=\d+/i.test(u) && isPlayableUrl(u)) {
    pushNotify(u, u, 3);
  }
  $done({});
} else {
  $done();
}
