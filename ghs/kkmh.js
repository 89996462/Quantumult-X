/**********************************************
 * Butterfly 去广告 诊断版4 - 修复Content-Encoding
 * 关键修复: 清除 Content-Encoding，防止浏览器重复解压
 **********************************************/

if (typeof $response === 'undefined' || !$response) {
    var reqHeaders = $request.headers || {};
    var hk = ['If-None-Match', 'If-Modified-Since', 'if-none-match', 'if-modified-since'];
    for (var i = 0; i < hk.length; i++) if (reqHeaders[hk[i]]) delete reqHeaders[hk[i]];
    for (var k in reqHeaders) {
        if (k.toLowerCase() === 'if-none-match' || k.toLowerCase() === 'if-modified-since') delete reqHeaders[k];
    }
    reqHeaders['Cache-Control'] = 'no-cache, no-store, must-revalidate';
    reqHeaders['Pragma'] = 'no-cache';
    reqHeaders['Expires'] = '0';
    $done({ headers: reqHeaders });
} else {

var url = $request.url;
var body = $response.body;

// 空脚本 - 测试Content-Encoding修复
var injectScript = '';

if (body && url.indexOf('.cloudfront.net') !== -1) {
    var ct = ($response.headers || {})['Content-Type'] || ($response.headers || {})['content-type'] || '';
    if (ct.indexOf('html') === -1 && ct.indexOf('text/html') === -1) { $done({}); return; }
    if (url.match(/\.(js|css|png|jpg|jpeg|gif|svg|json|xml|pdf|mp4|mp3|woff|woff2|ttf|eot|ico|webp|map|cur)(\?.*)?$/i)) { $done({}); return; }
    if (body && body.indexOf('<html') === -1 && body.indexOf('<!DOCTYPE') === -1) { $done({}); return; }

    var newBody = body;
    if (injectScript && newBody.indexOf('</head>') !== -1) {
        newBody = newBody.replace('</head>', injectScript + '</head>');
    } else if (injectScript && newBody.indexOf('<body') !== -1) {
        newBody = newBody.replace(/<body([^>]*)>/, '<body$1>' + injectScript);
    }

    var headers = {};
    // 拷贝必要头，但清除编码相关的
    if ($response.headers) {
        for (var h in $response.headers) {
            var lh = h.toLowerCase();
            if (lh === 'content-encoding' || lh === 'content-length' || lh === 'transfer-encoding') continue;
            headers[h] = $response.headers[h];
        }
    }
    headers['Content-Type'] = 'text/html; charset=utf-8';

    $done({ body: newBody, headers: headers });
} else {
    $done({});
}

}
