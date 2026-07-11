/**********************************************
 * 诊断版3 - 空注入，测试QX改HTML是否破坏页面
 **********************************************/

if (typeof $response === 'undefined' || !$response) {
    var reqHeaders = $request.headers || {};
    var keysToDelete = ['If-None-Match', 'If-Modified-Since', 'if-none-match', 'if-modified-since', 'IF-NONE-MATCH', 'IF-MODIFIED-SINCE'];
    for (var i = 0; i < keysToDelete.length; i++) {
        if (reqHeaders[keysToDelete[i]]) delete reqHeaders[keysToDelete[i]];
    }
    for (var k in reqHeaders) {
        if (k.toLowerCase() === 'if-none-match' || k.toLowerCase() === 'if-modified-since') {
            delete reqHeaders[k];
        }
    }
    reqHeaders['Cache-Control'] = 'no-cache, no-store, must-revalidate';
    reqHeaders['Pragma'] = 'no-cache';
    reqHeaders['Expires'] = '0';
    $done({ headers: reqHeaders });
} else {

var url = $request.url;
var body = $response.body;

// 空脚本 - 什么都不做
var injectScript = '<!-- diag -->';

if (body && (url.indexOf('.cloudfront.net') !== -1)) {
    var ct = ($response.headers || {})['Content-Type'] || ($response.headers || {})['content-type'] || '';
    if (ct.indexOf('html') === -1 && ct.indexOf('text/html') === -1) { $done({ body: body }); return; }
    if (url.match(/\.(js|css|png|jpg|jpeg|gif|svg|json|xml|pdf|mp4|mp3|woff|woff2|ttf|eot|ico|webp|map|cur)$/i)) { $done({ body: body }); return; }
    if (body && body.indexOf('<html') === -1 && body.indexOf('<!DOCTYPE') === -1) { $done({ body: body }); return; }

    // 不做任何注入，原样返回
    $done({ body: body });
} else {
    $done({});
}

}
