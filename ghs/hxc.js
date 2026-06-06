/******************************

# 脚本功能：含羞草(h9mcq)——m3u8 / flv / API 播放链接捕获
# 匹配规则：任意域名 + .m3u8 或 .flv；API 响应内嵌播放地址
# 特别说明：捕获成功后，点击通知即可观看
# 抓包校验：2026-06-06-164219 / 2026-06-06-172716
# 脚本作者：彭于晏💞
# 更新时间：2026-6-6
# 使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************/

let { headers, url } = $request || {};
let isQX = typeof $task !== "undefined";
let isSurge = typeof $httpClient !== "undefined" && !isQX;
let isLoon = typeof $loon !== "undefined";

function isPreviewLink(link) {
  return /preview|\/short\/|_short\.|seconds=\d+/i.test(String(link));
}

function isPlayLink(link) {
  return /\.m3u8(\?|$)|\.flv(\?|$)|\/m3u8\/|\/hls\//i.test(String(link));
}

function isDuplicate(link) {
  var key = "h9mcq_cap_" + link;
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

function extractUrlFromJson(body) {
  if (!body || body.indexOf('"url"') < 0) return "";
  try {
    var data = JSON.parse(body);
    if (!data || data.code !== 0 || !data.data) return "";
    var d = data.data;
    return d.url || d.playUrl || d.downloadUrl || d.m3u8 || "";
  } catch (e) {
    return "";
  }
}

// API 响应改包路径：从 getUrl / getPreUrl / getShortUrl 响应里提取
if (typeof $response !== "undefined" && $response) {
  var apiUrl = String(($request && $request.url) || "");
  if (/\/videos\/(?:v2\/getUrl|getPreUrl|getShortUrl)/i.test(apiUrl)) {
    var playLink = extractUrlFromJson($response.body);
    if (playLink && isPlayLink(playLink) && !isPreviewLink(playLink)) {
      notifyCapture(playLink);
    }
  }
  $done();
} else {
  // m3u8 / flv 请求头拦截
  var playURL = String(url || "");
  if (playURL && isPlayLink(playURL) && !isPreviewLink(playURL)) {
    notifyCapture(playURL);
  }
  $done({ response: { headers } });
}
