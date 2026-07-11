/**********************************************
 * Butterfly 去广告 + VIP模拟 (精简诊断版)
 * 目标: d3sjt6i1mx4tjc.cloudfront.net
 * 此版本仅做数据层修改，去掉所有DOM操作
 * 用于排查"点击无反应"问题
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
'var VIP_LEVEL=9,VIP_EXPIRE="2099-12-31T23:59:59Z",COIN=999999,DEBUG=!!0;' +

'var adDomains=[' +
'"eqfx9bas.cc","yihaici.top","yihaici.com","epuf3tk.cc","jmnkojis4.com",' +
'"speedfan","u7d2w.com","pg71json","pg71.epuf3tk","pg71h5.yihaici","pg71.epuf3tk.cc",' +
'"t1nijvegfd.eqfx9bas.cc","va2p.com","worldcup-ad.com","float-ad.com","ia-tech.com",' +
'"prize-ad.com","lottery-ad.com","api-dc-prod-008.cyou","api-dc2-prod-08.cyou",' +
'"13.212.103.98","47.129.175.127","54.255.68.213","54.169.217.47","52.221.252.171","54.255.167.20","54.179.7.38"' +
'];' +

'function isAdUrl(u){' +
'if(!u||typeof u!=="string")return !1;' +
'var l=u.toLowerCase();' +
'for(var i=0;i<adDomains.length;i++){if(l.indexOf(adDomains[i])!==-1)return !0;}' +
'if(l.indexOf("eventtracking/batchreport")!==-1)return !0;' +
'if(l.indexOf("/mp4/splash-")!==-1)return !0;' +
'if(l.indexOf("/png/buygold-")!==-1)return !0;' +
'if(l.indexOf("/png/ad-card-bg-")!==-1)return !0;' +
'if(l.indexOf("/ads/click")!==-1)return !0;' +
'if(l.indexOf("/recreation/click")!==-1)return !0;' +
'return !1;' +
'}' +

'function isAdItem(item){' +
'if(!item||typeof item!=="object")return !1;' +
'if(item.type==="adv"||item.type==="ADV")return !0;' +
'if("position"in item&&item.position!=null&&item.position!==""&&item.position!==0&&item.position!==!1)return !0;' +
'if("advertising_key"in item&&item.advertising_key)return !0;' +
'var uf=["link","url","jumpUrl","redirectUrl","href","actionUrl","clickUrl","h5Url","webUrl"];' +
'for(var m=0;m<uf.length;m++){if(uf[m]in item&&typeof item[uf[m]]==="string"&&isAdUrl(item[uf[m]]))return !0;}' +
'if("type"in item&&(item.type==="float"||item.type==="popup"||item.type==="dialog"))return !0;' +
'if("eventName"in item&&(item.eventName.indexOf("世界杯")!==-1||item.eventName.indexOf("红包雨")!==-1))return !0;' +
'var at=["redRain","prize","lottery","worldCup","football","match","innovation","tech"];' +
'for(var n=0;n<at.length;n++){if(item.type===at[n]||(item.activityType&&item.activityType===at[n]))return !0;}' +
'return !1;' +
'}' +

'function clearAdsInfoList(obj){' +
'if(!obj||typeof obj!=="object")return;' +
'if("adsInfoList"in obj)obj.adsInfoList=[];' +
'for(var k in obj){if(!obj.hasOwnProperty(k))continue;var v=obj[k];' +
'if(v&&typeof v==="object"){if("adsInfoList"in v)v.adsInfoList=[];' +
'if(typeof v==="object"&&!Array.isArray(v))clearAdsInfoList(v);' +
'else if(Array.isArray(v))for(var i=0;i<v.length;i++){if(v[i]&&typeof v[i]==="object")clearAdsInfoList(v[i]);}}}' +
'}' +

'function disableAdConfig(obj){' +
'if(!obj||typeof obj!=="object"||Array.isArray(obj))return;' +
'if("adsInfoList"in obj)obj.adsInfoList=[];' +
'if("homeAdvFirst"in obj)obj.homeAdvFirst=!1;' +
'var af=["showAd","adEnabled","hasAd","adSwitch","enableAd","adOpen","showBanner","showSplash","showPopup","showPromote","splashAd","bannerAd","popupAd","insertAd","feedAd","openAd","adShow","adDisplay","displayAd","showInsertAd","showFeedAd","showOpenAd","showVideoAd","adConfig","adSetting","adSettingSwitch","splashSwitch","splashEnabled","splashAdSwitch","bannerSwitch","bannerEnabled","popupSwitch","popupEnabled","isAd","isAdvertisement","isPromote","isBanner","openScreenAd","openScreenAdSwitch","openScreenAdEnabled","rewardAdSwitch","rewardAdEnabled","rewardVideoAd","interstitialAd","interstitialAdSwitch","nativeAd","nativeAdSwitch","canShowAd","adVisible","adStatus","thirdAd","thirdAdSwitch","thirdAdEnabled","floatingAd","floatingAdSwitch","marqueeAd","marqueeAdSwitch","noticeAd","noticeAdSwitch","guideAd","guideAdSwitch"];' +
'for(var i=0;i<af.length;i++){var k=af[i];if(k in obj){' +
'if(typeof obj[k]==="boolean")obj[k]=!1;' +
'else if(typeof obj[k]==="number")obj[k]=0;' +
'else if(obj[k]&&typeof obj[k]==="object"){' +
'if("enabled"in obj[k])obj[k].enabled=!1;if("show"in obj[k])obj[k].show=!1;' +
'if("switch"in obj[k])obj[k].switch=!1;if("open"in obj[k])obj[k].open=!1;' +
'if("enable"in obj[k])obj[k].enable=!1;if("status"in obj[k])obj[k].status=0;}}}' +
'var sk=["splash","splashAd","splashConfig","splashData","splashInfo","openScreen","openScreenAd","launchAd","bootAd","splashAdv","splash_adv"];' +
'for(var s=0;s<sk.length;s++){if(sk[s]in obj)obj[sk[s]]=null;}' +
'if("redPacket"in obj&&obj.redPacket&&typeof obj.redPacket==="object"){obj.redPacket.canClick=!1;obj.redPacket.enabled=!1;obj.redPacket.show=!1;}' +
'if("redpacket"in obj&&obj.redpacket&&typeof obj.redpacket==="object"){obj.redpacket.canClick=!1;obj.redpacket.enabled=!1;obj.redpacket.show=!1;}' +
'}' +

'function recursiveProcess(obj,depth){' +
'if(depth>10||!obj||typeof obj!=="object")return;' +
'if(Array.isArray(obj)){for(var i=obj.length-1;i>=0;i--){if(obj[i]&&typeof obj[i]==="object"){if(isAdItem(obj[i]))obj.splice(i,1);else recursiveProcess(obj[i],depth+1);}}}' +
'else{disableAdConfig(obj);' +
'for(var k in obj){if(!obj.hasOwnProperty(k))continue;var v=obj[k];' +
'if(v&&typeof v==="object"){if(Array.isArray(v)){for(var j=v.length-1;j>=0;j--){if(v[j]&&typeof v[j]==="object"&&isAdItem(v[j]))v.splice(j,1);}recursiveProcess(v,depth+1);}else recursiveProcess(v,depth+1);}}}' +
'}' +

'// JSON.parse hook' +
'var _parse=JSON.parse;' +
'JSON.parse=function(text){var r=_parse.apply(this,arguments);' +
'if(r&&typeof r==="object"&&!Array.isArray(r)&&r.hash===!0&&typeof r.data==="string")return r;' +
'if(r&&typeof r==="object"){try{' +
'if(!Array.isArray(r)&&("isVip"in r||"vipLevel"in r||"vipExpireDate"in r||"snapVip"in r)){' +
'r.isVip=!0;r.vipLevel=VIP_LEVEL;r.vipExpireDate=VIP_EXPIRE;r.snapVip=VIP_LEVEL;' +
'r.hasLocked=!1;r.hasBanned=!1;r.forbidUpload=!1;' +
'r.videoDiscountExpiration=VIP_EXPIRE;r.goldVideoFreeExpire=VIP_EXPIRE;r.videoFreeExpiration=VIP_EXPIRE;' +
'r.broadcastExpire=VIP_EXPIRE;r.coinMouthExpireDate=VIP_EXPIRE;' +
'if("vipType"in r)r.vipType=VIP_LEVEL;if("vipStatus"in r)r.vipStatus=1;if("expireDate"in r)r.expireDate=VIP_EXPIRE;}' +
'if(!Array.isArray(r)&&(("amount"in r&&"integral"in r)||("fruitCoin"in r)||("coin"in r&&"integral"in r))){' +
'if(typeof r.amount==="number")r.amount=COIN;if(typeof r.integral==="number")r.integral=COIN;' +
'if(typeof r.coin==="number")r.coin=COIN;if("fruitCoin"in r)r.fruitCoin=COIN;' +
'if("lotteryTimes"in r)r.lotteryTimes=999;if("aiUndressFreeTimes"in r)r.aiUndressFreeTimes=999;' +
'if("aiMateBalance"in r)r.aiMateBalance=999999;if("goldCoin"in r)r.goldCoin=COIN;if("diamond"in r)r.diamond=999999;}' +
'if(!Array.isArray(r)&&("tiroCountdown"in r||"tiroExpire"in r||"tiroStatus"in r)){' +
'r.tiroCountdown=0;r.tiroExpire="1970-01-01T00:00:00Z";if("tiroStatus"in r)r.tiroStatus=0;if("countdown"in r)r.countdown=0;if("canUse"in r)r.canUse=!1;}' +
'if(!Array.isArray(r)&&"canClick"in r&&("prizeAmount"in r||"redPacket"in r)){r.canClick=!1;r.enabled=!1;if("show"in r)r.show=!1;}' +
'if(!Array.isArray(r)&&"list"in r&&"isNewUser"in r)r.isNewUser=!1;' +
'clearAdsInfoList(r);recursiveProcess(r,0);' +
'}catch(e){}}return r;};' +

'// fetch拦截' +
'var _fetch=window.fetch;' +
'if(_fetch){window.fetch=function(input,init){var u=typeof input==="string"?input:(input&&input.url?input.url:"");if(isAdUrl(u))return Promise.resolve(new Response("{}",{status:200,headers:{"Content-Type":"application/json"}}));return _fetch.apply(this,arguments);};}' +

'// XHR拦截' +
'var _open=XMLHttpRequest.prototype.open;' +
'XMLHttpRequest.prototype.open=function(m,u){if(isAdUrl(u))arguments[1]="data:application/json,{}";return _open.apply(this,arguments);};' +

'// axios hook' +
'function ha(){if(window.axios&&window.axios.interceptors&&window.axios.interceptors.response){var u=window.axios.interceptors.response.use.bind(window.axios.interceptors.response);window.axios.interceptors.response.use=function(f,r){var w=function(rp){if(rp&&rp.data)try{recursiveProcess(rp.data,0)}catch(e){}return f?f(rp):rp;};return u(w,r);};}}' +
'ha();setTimeout(ha,100);setTimeout(ha,500);setTimeout(ha,2000);' +

'// Vue axios hook' +
'function hv(){if(window.Vue&&window.Vue.prototype&&window.Vue.prototype.$axios){var a=window.Vue.prototype.$axios;if(a.interceptors&&a.interceptors.response){a.interceptors.response.use(function(r){if(r&&r.data)try{recursiveProcess(r.data,0)}catch(e){}return r;});}}}' +
'setTimeout(hv,500);setTimeout(hv,2000);' +

'// window.open拦截' +
'var _wo=window.open;window.open=function(u){if(isAdUrl(u))return null;return _wo.apply(this,arguments);};' +

'// location跳转拦截' +
'var _as=window.location.assign.bind(window.location),_rp=window.location.replace.bind(window.location);' +
'window.location.assign=function(u){if(!isAdUrl(u))return _as(u);};' +
'window.location.replace=function(u){if(!isAdUrl(u))return _rp(u);};' +

'// createElement拦截' +
'var _ce=document.createElement.bind(document);' +
'document.createElement=function(tag){var el=_ce(tag);if(tag&&tag.toLowerCase()==="script"){var d=Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype,"src");if(d&&d.set){Object.defineProperty(el,"src",{get:d.get,set:function(v){if(!isAdUrl(v))d.set.call(el,v);},configurable:!0});}}return el;};' +

'// ⚠️ 诊断版：不注入CSS样式，不做DOM元素移除，不用MutationObserver' +
'// 如果此版本点击正常，则说明DOM操作是问题根源' +

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
