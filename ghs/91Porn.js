


let { headers, url } = $request,
  isQX = typeof $task !== "undefined",
  isSurge = typeof $httpClient !== "undefined" && !isQX,
  isLoon = typeof $loon !== "undefined";

function isPreviewHost(raw) {
  return /10play|120play/i.test(String(raw));
}

function isFullHost(raw) {
  var u = String(raw);
  if (isPreviewHost(u)) return false;
  return /:\/\/yd-long\.|:\/\/long\.kmcbyg\.cn|:\/\/[^\/]*-long\./i.test(u);
}

function toFullHost(raw) {
  var u = String(raw);
  if (!isPreviewHost(u) && !/^https?:\/\/long\.kmcbyg\.cn/i.test(u)) return u;
  u = u.replace(/-10play/gi, "-long").replace(/-120play/gi, "-long");
  u = u.replace(/^https?:\/\/long\.kmcbyg\.cn/i, "https://yd-long.kmcbyg.cn");
  return u;
}

function normalizePlayUrl(raw) {
  var u = toFullHost(String(raw));
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
  var m = String(raw).match(/\/videos\d+\/([0-9a-fA-F]{32})\//i);
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
    $notify("彭于晏提示❗️视频链接捕获成功", ">_ 点击此通知可跳转观看 🔞", "", { "open-url": link });
  }
  if (isSurge) {
    $notification.post("彭于晏提示❗️视频链接捕获成功", ">_ 点击此通知可跳转观看 🔞", "", { url: link });
  }
  if (isLoon) {
    $notification.post("彭于晏提示❗️视频链接捕获成功", ">_ 点击此通知可跳转观看 🔞", "", { openUrl: link });
  }
}

var u = String(url);
if (/seconds=\d+/i.test(u)) {
  $done({ response: { headers } });
} else if (isFullHost(u)) {
  notifyCapture(normalizePlayUrl(u), u, 3);
} else if (isPreviewHost(u)) {
  notifyCapture(normalizePlayUrl(u), u, 1);
}

$done({ response: { headers } });
