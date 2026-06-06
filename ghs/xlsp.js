/******************************

脚本功能：汤头条 / 小蓝视频 —— m3u8 完整版链接捕获（需配合去广告脚本解锁）
特别说明：捕获成功后，点击通知即可观看
下载地址：https://ttt.news
脚本作者：彭于晏💞
更新时间：2026-6-6
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

# 汤头条 / 同类旧 CDN
^https?:\/\/[^\/]*\..*\.cn\/\w+\/[a-z0-9]{32}\/[a-z0-9]{32}\.m3u8(\?.*)? url script-request-header https://raw.githubusercontent.com/89996462/Quantumult-X/main/ghs/xlsp.js

# 小蓝视频 CDN（rnhqeo.cn）
^https?:\/\/[^\/]+\.rnhqeo\.cn\/videos\d+\/[a-f0-9]{32}\/[a-f0-9]{32}\.m3u8(\?.*)? url script-request-header https://raw.githubusercontent.com/89996462/Quantumult-X/main/ghs/xlsp.js

[mitm]

hostname = 120play.*.cn, tp5.iajckz.cn, h5play.*.com, long.*.cn, *.fipxor.cn, *.rnhqeo.cn, wyyl-120play.rnhqeo.cn, wyyl-long.rnhqeo.cn

*******************************/


let { headers, url } = $request,
  isQX = typeof $task !== "undefined",
  isSurge = typeof $httpClient !== "undefined" && !isQX,
  isLoon = typeof $loon !== "undefined",
  isRnhqeo = /\.rnhqeo\.cn/i.test(url),
  isPreview = /[?&]seconds=\d+/i.test(url),
  playURL;

function hasPlaybackHeader(h) {
  return Object.keys(h || {}).some(function (k) {
    return k.toLowerCase() === "x-playback-session-id";
  });
}

function shouldCapture() {
  if (isRnhqeo) return !isPreview;
  return hasPlaybackHeader(headers);
}

function isDuplicate(link) {
  var key = "m3u8_cap_" + link;
  var last = $prefs.valueForKey(key);
  var now = Date.now();
  if (last && now - Number(last) < 120000) return true;
  $prefs.setValueForKey(String(now), key);
  return false;
}

function notifyCapture(link) {
  if (isDuplicate(link)) return;
  console.log("视频链接捕获: " + link);
  var title = "视频链接捕获成功";
  var sub = ">_ 点击此通知可跳转观看";
  if (isQX) {
    $notify("彭于晏提示❗️" + title, sub, "", { "open-url": link });
  }
  if (isSurge) {
    $notification.post("彭于晏提示❗️" + title, sub, "", { url: link });
  }
  if (isLoon) {
    $notification.post("彭于晏提示❗️" + title, sub, "", { openUrl: link });
  }
}

if (isRnhqeo) {
  playURL = url
    .replace(/wyyl-120play\.rnhqeo\.cn/i, "wyyl-long.rnhqeo.cn")
    .replace(/[?&]seconds=\d+/gi, "")
    .replace(/[?&]via_m=[^&]*/gi, "")
    .replace(/\?&/, "?")
    .replace(/[?&]$/, "");
  if (playURL.indexOf("via_m=") < 0) {
    playURL += (playURL.indexOf("?") >= 0 ? "&" : "?") + "via_m=xblue";
  }
} else {
  playURL = url.replace(/\/\/(?!long)[^\.]+\./, "//long.");
}

if (shouldCapture()) {
  notifyCapture(playURL);
} else if (isRnhqeo && isPreview) {
  console.log("跳过预览片段(seconds=10)");
}

$done({ response: { headers } });
