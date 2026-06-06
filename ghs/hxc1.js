/******************************

# 脚本功能：含羞草———解锁———金币视频———VIP视频-付费帖子
# 特别说明：必须开启HTTP抓包,并且关闭其他的脚本
# 特别说明：捕获成功后，点击通知即可观看
# 脚本作者：彭于晏💞
# 更新时间：2026-6-7
# TG反馈群：https://t.me/plus8889
# TG频道群：https://t.me/py996
# 使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/[^\/]+\/.*\.m3u8(\?.*)?$ url script-request-header https://raw.githubusercontent.com/89996462/Quantumult-X/main/ghs/hxc.js

^https?:\/\/[^\/]+\/.*\.flv(\?.*)?$ url script-request-header https://raw.githubusercontent.com/89996462/Quantumult-X/main/ghs/hxc.js

[mitm]

hostname = *.q3df4.com, *.n4e4.com, *.nasuiyile.com, *.uwegu.com, *.s1p7t.com, *.h9mcq.com

*******************************/


let { headers, url } = $request,
  isQX = typeof $task !== "undefined",
  isSurge = typeof $httpClient !== "undefined" && !isQX,
  isLoon = typeof $loon !== "undefined";

function isPreviewLink(link) {
  return /preview|\/short\/|_short\.|seconds=\d+/i.test(String(link));
}

function isDuplicate(link) {
  var key = "h9mcq_cap_" + link;
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

var playURL = String(url);

if (!isPreviewLink(playURL)) {
  notifyCapture(playURL);
}

$done({ response: { headers } });
