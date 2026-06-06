/******************************

# 脚本功能：小蓝视频——m3u8 播放链接捕获
# 抓包校验：2026-06-06-144513 / wyyl-120play.rnhqeo.cn
# 特别说明：捕获成功后，点击通知即可观看
# 脚本作者：彭于晏💞
# 更新时间：2026-6-6
# 使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/[^\/]+\.rnhqeo\.cn\/videos\d+\/[a-f0-9]{32}\/[a-f0-9]{32}\.m3u8 url script-request-header https://raw.githubusercontent.com/89996462/Quantumult-X/main/ghs/xlsp.js

[mitm]

hostname = *.rnhqeo.cn, wyyl-120play.rnhqeo.cn, wyyl-long.rnhqeo.cn, long.rnhqeo.cn

*******************************/


let { headers, url } = $request,
  isQX = typeof $task !== "undefined",
  isSurge = typeof $httpClient !== "undefined" && !isQX,
  isLoon = typeof $loon !== "undefined",
  isPreview = /[?&]seconds=\d+/i.test(url),
  playURL = url
    .replace(/wyyl-120play\.rnhqeo\.cn/i, "wyyl-long.rnhqeo.cn")
    .replace(/[?&]seconds=\d+/gi, "")
    .replace(/\?&/, "?")
    .replace(/\?$/, "");

if (headers.hasOwnProperty("X-Playback-Session-Id")) {
  console.log("小蓝视频 m3u8 捕获: " + playURL);
  var title = isPreview ? "捕获到预览片段(10秒)" : "视频链接捕获成功";
  var sub = isPreview
    ? ">_ 需金币/VIP 解锁后才会请求完整版链接"
    : ">_ 点击此通知可跳转观看";
  if (isQX) {
    $notify("彭于晏提示❗️" + title, sub, "", { "open-url": playURL });
  }
  if (isSurge) {
    $notification.post("彭于晏提示❗️" + title, sub, "", { url: playURL });
  }
  if (isLoon) {
    $notification.post("彭于晏提示❗️" + title, sub, "", { openUrl: playURL });
  }
}

$done({ response: { headers } });
