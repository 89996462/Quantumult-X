

let { headers, url } = $request || {};
let isQX = typeof $task !== "undefined";
let isSurge = typeof $httpClient !== "undefined" && !isQX;
let isLoon = typeof $loon !== "undefined";

function isPreviewLink(link) {
  return /\/m3u8-preview\/|preview_video|max_preview|\/short\/|_short\.|seconds=\d+/i.test(String(link));
}

function isPlayLink(link) {
  return /\.m3u8(\?|$)|\.flv(\?|$)|\/m3u8\/|\/hls\//i.test(String(link));
}

function isDuplicate(link) {
  var key = "bkh056_cap_" + link;
  var last = $prefs.valueForKey(key);
  var now = Date.now();
  if (last && now - Number(last) < 120000) return true;
  $prefs.setValueForKey(String(now), key);
  return false;
}

function notifyCapture(link, title) {
  if (!link || isDuplicate(link)) return;
  var sub = title || ">_ 点击此通知可跳转观看 🔞";
  if (isQX) {
    $notify("彭于晏提示❗️视频链接捕获成功", sub, "", { "open-url": link });
  }
  if (isSurge) {
    $notification.post("彭于晏提示❗️视频链接捕获成功", sub, "", { url: link });
  }
  if (isLoon) {
    $notification.post("彭于晏提示❗️视频链接捕获成功", sub, "", { openUrl: link });
  }
}

function normalizePlayUrl(link) {
  var playURL = String(link || "");
  if (!playURL) return "";
  if (!/^https?:\/\//i.test(playURL)) {
    var host = String((headers && headers.host) || "h5.bkh056.com");
    playURL = "https://" + host + (playURL.indexOf("/") === 0 ? playURL : "/" + playURL);
  }
  return playURL;
}

// m3u8 / flv 请求头拦截（API 内 play_links 由 bkh056去广告.js 解锁并通知）
var playURL = normalizePlayUrl(url);
if (playURL && isPlayLink(playURL) && !isPreviewLink(playURL)) {
  notifyCapture(playURL);
}
$done({ response: { headers } });
