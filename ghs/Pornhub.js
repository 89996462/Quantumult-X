let { headers, url } = $request,
  isQX = typeof $task !== "undefined",
  isSurge = typeof $httpClient !== "undefined" && !isQX,
  isLoon = typeof $loon !== "undefined";

const VIA_M = "pzhan";

function normalizePlayUrl(raw) {
  var u = String(raw);
  u = u.replace(/-(\d+)play\./gi, function (_, n) {
    return Number(n) === 10 ? "-10play." : "-10play.";
  });
  u = u.replace(/(\d+)play\./gi, function (_, n) {
    return Number(n) === 10 ? "10play." : "10play.";
  });
  u = u.replace(/[?&]seconds=\d+/gi, "");
  u = u.replace(/\?&/g, "?").replace(/\?$/, "").replace(/&$/, "");
  if (!/via_m=/.test(u)) {
    u += (u.indexOf("?") >= 0 ? "&" : "?") + "via_m=" + VIA_M;
  }
  return u;
}

function isPreviewLink(link) {
  if (/[?&]seconds=\d/i.test(link)) return true;
  var m = String(link).match(/(\d+)play\./i);
  return !!(m && Number(m[1]) !== 10);
}

function isDuplicate(link) {
  var key = "phb_cap_" + link;
  var last = $prefs.valueForKey(key);
  var now = Date.now();
  if (last && now - Number(last) < 120000) return true;
  $prefs.setValueForKey(String(now), key);
  return false;
}

function notifyCapture(link) {
  if (isDuplicate(link)) return;
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

var playURL = normalizePlayUrl(url);

if (!isPreviewLink(playURL)) {
  notifyCapture(playURL);
}

$done({ response: { headers } });
