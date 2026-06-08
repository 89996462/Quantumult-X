

let { headers, url } = $request || {};
let isQX = typeof $task !== "undefined";
let isSurge = typeof $httpClient !== "undefined" && !isQX;
let isLoon = typeof $loon !== "undefined";

const VIA_M = "tiktok";
const DEDUP_MS = 120000;

function normalizePlayUrl(link) {
  if (!link) return "";
  let u = String(link);
  u = u.replace(/-\d*120play\./gi, (m) => m.replace(/120play/i, "long"));
  u = u.replace(/120play\./gi, "long.");
  u = u.replace(/([?&])seconds=\d+/gi, "$1");
  u = u.replace(/[?&]$/, "");
  if (!/via_m=/i.test(u)) u += (u.includes("?") ? "&" : "?") + "via_m=" + VIA_M;
  return u;
}

function isPreviewLink(link) {
  return /preview|\/short\/|_short\.|seconds=\d+|120play/i.test(String(link));
}

function isPlayLink(link) {
  return /\.m3u8(\?|$)/i.test(String(link));
}

function isDuplicate(link) {
  var key = "tiktok_cap_" + link;
  var last = $prefs.valueForKey(key);
  var now = Date.now();
  if (last && now - Number(last) < DEDUP_MS) return true;
  $prefs.setValueForKey(String(now), key);
  return false;
}

function notifyCapture(link) {
  if (!link || isDuplicate(link)) return;
  var sub = ">_ 点击此通知可跳转观看 🔞";
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

var playURL = normalizePlayUrl(String(url || ""));
if (playURL && isPlayLink(playURL) && !isPreviewLink(playURL)) {
  notifyCapture(playURL);
}
$done({ response: { headers } });
