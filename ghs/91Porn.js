/******************************

# 脚本功能：91Porn——m3u8 链接捕获（long.chxgdn 明文链 Safari 直播）
# 匹配规则：任意域名 + /路径/32位hash/32位hash.m3u8*
# 特别说明：10play.chxgdn 映射为 long.chxgdn；不捕获 kmcbyg 加密链
# com_video_url 换链通知由 91porn去广告.js 处理（需 CryptoJS 解密）
# 脚本作者：彭于晏💞
# 更新时间：2026-6-11
# 使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************/

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

function notifyCapture(link, raw, priority) {
  if (isDuplicate(link, raw, priority)) return;
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

var u = String(($request && $request.url) || "");
if (u && !/seconds=\d+/i.test(u) && isPlayableUrl(u)) {
  notifyCapture(normalizePlayUrl(u), u, 3);
}

$done({});
