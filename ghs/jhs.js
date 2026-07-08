/**
 * Butterfly m3u8 视频链接捕获脚本
 * 站点：d18v10algpi965.cloudfront.net
 * CDN：d35vb76r8ef604.cloudfront.net
 * 
 * m3u8 请求路径：/api/app/vid/h5/m3u8/{hash}?token={JWT}&c={CDN_URL}
 * 
 * Quantumult X script-request-header
 */

// ============ 去重缓存（2分钟内同链接不重复通知） ============
var URL_CACHE = {};
var CACHE_TTL = 2 * 60 * 1000; // 2分钟

// ============ 主逻辑 ============
var url = $request.url;

// 清理过期缓存
var now = Date.now();
for (var k in URL_CACHE) {
  if (now - URL_CACHE[k] > CACHE_TTL) {
    delete URL_CACHE[k];
  }
}

// 去重检查
if (URL_CACHE[url]) {
  console.log('[Butterfly] m3u8 duplicate, skip');
  $done({});
  return;
}

// 标记已通知
URL_CACHE[url] = now;

// 通知
var title = '彭于晏提示❗️视频链接捕获成功';
var subtitle = '>_ 点击此通知可跳转观看 🔞';

$notification.post(title, subtitle, url, {
  'url': url
});

console.log('[Butterfly] m3u8 captured: ' + url);
$done({});
