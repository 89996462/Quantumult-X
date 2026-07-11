/**********************************************
 * Butterfly 诊断版2 - 仅VIP模拟，无广告处理
 * 目标: 隔离问题，确认基础功能正常
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

var injectScript = '' +
'<script>' +
'(function(){' +
'"use strict";' +
'var VIP_LEVEL=9,VIP_EXPIRE="2099-12-31T23:59:59Z",COIN=999999;' +

'var _parse=JSON.parse;' +
'JSON.parse=function(text){' +
'var r=_parse.apply(this,arguments);' +
'if(r&&typeof r==="object"&&!Array.isArray(r)&&r.hash===!0&&typeof r.data==="string")return r;' +
'if(r&&typeof r==="object"){try{' +

'// 仅VIP模拟' +
'if(!Array.isArray(r)&&("isVip"in r||"vipLevel"in r||"vipExpireDate"in r||"snapVip"in r)){' +
'r.isVip=!0;r.vipLevel=VIP_LEVEL;r.vipExpireDate=VIP_EXPIRE;r.snapVip=VIP_LEVEL;' +
'r.hasLocked=!1;r.hasBanned=!1;r.forbidUpload=!1;' +
'r.videoDiscountExpiration=VIP_EXPIRE;r.goldVideoFreeExpire=VIP_EXPIRE;r.videoFreeExpiration=VIP_EXPIRE;' +
'r.broadcastExpire=VIP_EXPIRE;r.coinMouthExpireDate=VIP_EXPIRE;' +
'if("vipType"in r)r.vipType=VIP_LEVEL;if("vipStatus"in r)r.vipStatus=1;if("expireDate"in r)r.expireDate=VIP_EXPIRE;}' +

'// 仅钱包模拟' +
'if(!Array.isArray(r)&&(("amount"in r&&"integral"in r)||("fruitCoin"in r)||("coin"in r&&"integral"in r))){' +
'if(typeof r.amount==="number")r.amount=COIN;if(typeof r.integral==="number")r.integral=COIN;' +
'if(typeof r.coin==="number")r.coin=COIN;if("fruitCoin"in r)r.fruitCoin=COIN;' +
'if("lotteryTimes"in r)r.lotteryTimes=999;' +
'if("goldCoin"in r)r.goldCoin=COIN;if("diamond"in r)r.diamond=999999;}' +

'}catch(e){}}return r;};' +

'})();' +
'</script>';

if (body && (url.indexOf('.cloudfront.net') !== -1)) {
    var ct = ($response.headers || {})['Content-Type'] || ($response.headers || {})['content-type'] || '';
    if (ct.indexOf('html') === -1 && ct.indexOf('text/html') === -1) { $done({ body: body }); return; }
    if (url.match(/\.(js|css|png|jpg|jpeg|gif|svg|json|xml|pdf|mp4|mp3|woff|woff2|ttf|eot|ico|webp|map|cur)$/i)) { $done({ body: body }); return; }
    if (body && body.indexOf('<html') === -1 && body.indexOf('<!DOCTYPE') === -1) { $done({ body: body }); return; }

    var newBody = body;
    if (newBody.indexOf('</head>') !== -1) {
        newBody = newBody.replace('</head>', injectScript + '</head>');
    } else if (newBody.indexOf('<body') !== -1) {
        newBody = newBody.replace(/<body([^>]*)>/, '<body$1>' + injectScript);
    } else {
        newBody = injectScript + newBody;
    }

    var headers = $response.headers || {};
    headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
    headers['Pragma'] = 'no-cache';
    headers['Expires'] = '0';

    $done({ body: newBody, headers: headers });
} else {
    $done({});
}

}
