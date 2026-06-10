
let { headers, url } = $request,
  isQX = typeof $task !== "undefined",
  isSurge = typeof $httpClient !== "undefined" && !isQX,
  isLoon = typeof $loon !== "undefined";

function normalizePlayUrl(raw) {
  var url = String(raw);
  url = url.replace(/-10play\./gi, "-long.");
  url = url.replace(/-120play\./gi, "-long.");
  url = url.replace(/([\w-]+)-10play/gi, "$1-long");
  url = url.replace(/([\w-]+)-120play/gi, "$1-long");
  url = url.replace(/([?&])seconds=\d+(&?)/gi, function (m, p1, p2) {
    return p2 ? p1 : "";
  });
  url = url.replace(/\?&/g, "?").replace(/&&/g, "&").replace(/[?&]$/g, "");
  if (!/via_m=/i.test(url)) {
    url += (url.indexOf("?") >= 0 ? "&" : "?") + "via_m=91pornwebapp";
  }
  return url;
}

function isDuplicate(link) {
  var key = "91porn_cap_" + link;
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

if (!/seconds=/i.test(playURL)) {
  notifyCapture(playURL);
}

$done({ response: { headers } });
