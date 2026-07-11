/**********************************************
 * Butterfly 去广告 + VIP模拟 (完整版)
 * 目标: d3sjt6i1mx4tjc.cloudfront.net
 * Content-Encoding 修复 + 副本 isAdItem 逻辑
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

var injectScript = '\n<script>\n(function(){\n"use strict";\n' +
'var VIP_LEVEL=9,VIP_EXPIRE="2099-12-31T23:59:59Z",COIN=999999,INTEGRAL=999999,DEBUG=!1;\n' +
'var adDomains=[\n' +
'"eqfx9bas.cc","yihaici.top","yihaici.com","epuf3tk.cc","jmnkojis4.com",\n' +
'"speedfan","u7d2w.com","pg71json","pg71.epuf3tk","pg71h5.yihaici","pg71.epuf3tk.cc",\n' +
'"t1nijvegfd.eqfx9bas.cc","va2p.com","worldcup-ad.com","float-ad.com",\n' +
'"ia-tech.com","prize-ad.com","lottery-ad.com",\n' +
'"api-dc-prod-008.cyou","api-dc2-prod-08.cyou",\n' +
// d3sjt6i1mx4tjc 特有追踪IP
'"13.212.103.98","47.129.175.127","54.255.68.213","54.169.217.47","52.221.252.171","54.255.167.20","54.179.7.38"];\n' +

'function isAdUrl(u){if(!u||typeof u!=="string")return!1;var l=u.toLowerCase();\n' +
'for(var i=0;i<adDomains.length;i++){if(l.indexOf(adDomains[i])!==-1)return!0;}\n' +
'if(l.indexOf("eventtracking/batchreport")!==-1)return!0;\n' +
'if(l.indexOf("/mp4/splash-")!==-1)return!0;\n' +
'if(l.indexOf("/png/buygold-")!==-1)return!0;\n' +
'if(l.indexOf("/png/ad-card-bg-")!==-1)return!0;\n' +
'if(l.indexOf("/ads/click")!==-1||l.indexOf("/recreation/click")!==-1)return!0;\n' +
'return!1;}\n' +

'// isAdItem - 与副本完全一致的逻辑\n' +
'function isAdItem(item){if(!item||typeof item!=="object")return!1;\n' +
'if(item.type==="adv"||item.type==="ADV")return!0;\n' +
'if("position"in item&&item.position!=null&&item.position!==""&&item.position!==0&&item.position!==!1)return!0;\n' +
'if("advertising_key"in item&&item.advertising_key)return!0;\n' +
'var uf=["link","url","jumpUrl","redirectUrl","href","actionUrl","clickUrl","h5Url","webUrl"];\n' +
'for(var m=0;m<uf.length;m++){if(uf[m]in item&&typeof item[uf[m]]==="string"&&isAdUrl(item[uf[m]]))return!0;}\n' +
'if("type"in item&&(item.type==="float"||item.type==="popup"||item.type==="dialog"))return!0;\n' +
'if("eventName"in item&&(item.eventName.indexOf("世界杯")!==-1||item.eventName.indexOf("红包雨")!==-1))return!0;\n' +
'var at=["redRain","prize","lottery","worldCup","football","match","innovation","tech"];\n' +
'for(var n=0;n<at.length;n++){if(item.type===at[n]||(item.activityType&&item.activityType===at[n]))return!0;}\n' +
'return!1;}\n' +

'var _parse=JSON.parse;\n' +
'JSON.parse=function(text){var r=_parse.apply(this,arguments);\n' +
'if(r&&typeof r==="object"&&!Array.isArray(r)&&r.hash===!0&&typeof r.data==="string")return r;\n' +
'if(r&&typeof r==="object"){try{\n' +
'if(!Array.isArray(r)&&("isVip"in r||"vipLevel"in r||"vipExpireDate"in r||"snapVip"in r)){\n' +
'r.isVip=!0;r.vipLevel=VIP_LEVEL;r.vipExpireDate=VIP_EXPIRE;r.snapVip=VIP_LEVEL;\n' +
'r.hasLocked=!1;r.hasBanned=!1;r.forbidUpload=!1;\n' +
'r.videoDiscountExpiration=VIP_EXPIRE;r.goldVideoFreeExpire=VIP_EXPIRE;r.videoFreeExpiration=VIP_EXPIRE;\n' +
'r.broadcastExpire=VIP_EXPIRE;r.coinMouthExpireDate=VIP_EXPIRE;\n' +
'if("vipType"in r)r.vipType=VIP_LEVEL;if("vipStatus"in r)r.vipStatus=1;if("expireDate"in r)r.expireDate=VIP_EXPIRE;}\n' +
'if(!Array.isArray(r)&&(("amount"in r&&"integral"in r)||("fruitCoin"in r)||("coin"in r&&"integral"in r))){\n' +
'if(typeof r.amount==="number")r.amount=COIN;if(typeof r.integral==="number")r.integral=INTEGRAL;\n' +
'if(typeof r.coin==="number")r.coin=COIN;if("fruitCoin"in r)r.fruitCoin=COIN;\n' +
'if("lotteryTimes"in r)r.lotteryTimes=999;if("aiUndressFreeTimes"in r)r.aiUndressFreeTimes=999;\n' +
'if("aiChangeFaceImgFreeTimes"in r)r.aiChangeFaceImgFreeTimes=999;\n' +
'if("aiMateBalance"in r)r.aiMateBalance=999999;if("downloadCount"in r)r.downloadCount=999;\n' +
'if("goldCoin"in r)r.goldCoin=COIN;if("diamond"in r)r.diamond=999999;}\n' +
'if(!Array.isArray(r)&&("tiroCountdown"in r||"tiroExpire"in r||"tiroStatus"in r)){\n' +
'r.tiroCountdown=0;r.tiroExpire="1970-01-01T00:00:00Z";if("tiroStatus"in r)r.tiroStatus=0;\n' +
'if("countdown"in r)r.countdown=0;if("canUse"in r)r.canUse=!1;}\n' +
'if(!Array.isArray(r)&&"canClick"in r&&("prizeAmount"in r||"redPacket"in r)){r.canClick=!1;r.enabled=!1;if("show"in r)r.show=!1;}\n' +
'if(!Array.isArray(r)&&"list"in r&&"isNewUser"in r)r.isNewUser=!1;\n' +
'clearAdsInfoList(r);recursiveProcess(r,0);\n' +
'}catch(e){}}return r;};\n' +

'function clearAdsInfoList(o){if(!o||typeof o!=="object")return;if("adsInfoList"in o)o.adsInfoList=[];\n' +
'for(var k in o){if(!o.hasOwnProperty(k))continue;var v=o[k];if(v&&typeof v==="object")\n' +
'{if("adsInfoList"in v)v.adsInfoList=[];if(typeof v==="object"&&!Array.isArray(v))clearAdsInfoList(v);\n' +
'else if(Array.isArray(v))for(var i=0;i<v.length;i++){if(v[i]&&typeof v[i]==="object")clearAdsInfoList(v[i]);}}}\n' +
'}\n' +

'function recursiveProcess(o,d){if(d>10||!o||typeof o!=="object")return;\n' +
'if(Array.isArray(o)){for(var i=o.length-1;i>=0;i--){if(o[i]&&typeof o[i]==="object"){if(isAdItem(o[i]))o.splice(i,1);else recursiveProcess(o[i],d+1);}}}\n' +
'else{disableAdConfig(o);for(var k in o){if(!o.hasOwnProperty(k))continue;var v=o[k];\n' +
'if(v&&typeof v==="object"){if(Array.isArray(v)){for(var j=v.length-1;j>=0;j--){if(v[j]&&typeof v[j]==="object"&&isAdItem(v[j]))v.splice(j,1);}\n' +
'recursiveProcess(v,d+1);}else recursiveProcess(v,d+1);}}}\n' +
'}\n' +

'function disableAdConfig(o){if(!o||typeof o!=="object"||Array.isArray(o))return;\n' +
'if("adsInfoList"in o)o.adsInfoList=[];if("homeAdvFirst"in o)o.homeAdvFirst=!1;\n' +
'var af=["showAd","adEnabled","hasAd","adSwitch","enableAd","adOpen","showBanner","showSplash","showPopup","showPromote","splashAd","bannerAd","popupAd","insertAd","feedAd","openAd","adShow","adDisplay","displayAd","showInsertAd","showFeedAd","showOpenAd","showVideoAd","adConfig","adSetting","adSettingSwitch","splashSwitch","splashEnabled","splashAdSwitch","bannerSwitch","bannerEnabled","popupSwitch","popupEnabled","isAd","isAdvertisement","isPromote","isBanner","openScreenAd","openScreenAdSwitch","openScreenAdEnabled","rewardAdSwitch","rewardAdEnabled","rewardVideoAd","interstitialAd","interstitialAdSwitch","nativeAd","nativeAdSwitch","canShowAd","adVisible","adStatus","thirdAd","thirdAdSwitch","thirdAdEnabled","floatingAd","floatingAdSwitch","marqueeAd","marqueeAdSwitch","noticeAd","noticeAdSwitch","guideAd","guideAdSwitch"];\n' +
'for(var i=0;i<af.length;i++){var k=af[i];if(k in o){\n' +
'if(typeof o[k]==="boolean")o[k]=!1;else if(typeof o[k]==="number")o[k]=0;\n' +
'else if(o[k]&&typeof o[k]==="object"){if("enabled"in o[k])o[k].enabled=!1;if("show"in o[k])o[k].show=!1;\n' +
'if("switch"in o[k])o[k].switch=!1;if("open"in o[k])o[k].open=!1;if("enable"in o[k])o[k].enable=!1;if("status"in o[k])o[k].status=0;}}}\n' +
'var sk=["splash","splashAd","splashConfig","splashData","splashInfo","openScreen","openScreenAd","launchAd","bootAd","splashAdv","splash_adv"];\n' +
'for(var s=0;s<sk.length;s++){if(sk[s]in o)o[sk[s]]=null;}\n' +
'if("redPacket"in o&&o.redPacket&&typeof o.redPacket==="object"){o.redPacket.canClick=!1;o.redPacket.enabled=!1;o.redPacket.show=!1;}\n' +
'if("redpacket"in o&&o.redpacket&&typeof o.redpacket==="object"){o.redpacket.canClick=!1;o.redpacket.enabled=!1;o.redpacket.show=!1;}\n' +
'}\n' +

'var _fetch=window.fetch;\n' +
'if(_fetch){window.fetch=function(i,o){var u=typeof i==="string"?i:(i&&i.url?i.url:"");if(isAdUrl(u))return Promise.resolve(new Response("{}",{status:200,headers:{"Content-Type":"application/json"}}));return _fetch.apply(this,arguments);};}\n' +
'var _open=XMLHttpRequest.prototype.open;\n' +
'XMLHttpRequest.prototype.open=function(m,u){if(isAdUrl(u))arguments[1]="data:application/json,{}";return _open.apply(this,arguments);};\n' +
'var _rtd=Object.getOwnPropertyDescriptor(XMLHttpRequest.prototype,"responseText");\n' +
'if(_rtd&&_rtd.get){var _og=_rtd.get;Object.defineProperty(XMLHttpRequest.prototype,"responseText",{get:function(){var t=_og.call(this);if(t&&typeof t==="string"&&t.indexOf(\'"hash":true\')!==-1){try{var p=_parse(t);}catch(e){}}return t;},configurable:!0});}\n' +
'function ha(){if(window.axios&&window.axios.interceptors&&window.axios.interceptors.response){var u=window.axios.interceptors.response.use.bind(window.axios.interceptors.response);window.axios.interceptors.response.use=function(f,r){var w=function(rp){if(rp&&rp.data)try{recursiveProcess(rp.data,0)}catch(e){}return f?f(rp):rp;};return u(w,r);};}}\n' +
'ha();setTimeout(ha,100);setTimeout(ha,500);setTimeout(ha,2000);\n' +
'function hv(){if(window.Vue&&window.Vue.prototype&&window.Vue.prototype.$axios){var a=window.Vue.prototype.$axios;if(a.interceptors&&a.interceptors.response){a.interceptors.response.use(function(r){if(r&&r.data)try{recursiveProcess(r.data,0)}catch(e){}return r;});}}}\n' +
'setTimeout(hv,500);setTimeout(hv,2000);\n' +
'var _wo=window.open;window.open=function(u){if(isAdUrl(u))return null;return _wo.apply(this,arguments);};\n' +
'var _as=window.location.assign.bind(window.location),_rp=window.location.replace.bind(window.location);\n' +
'window.location.assign=function(u){if(!isAdUrl(u))return _as(u);};\n' +
'window.location.replace=function(u){if(!isAdUrl(u))return _rp(u);};\n' +
'if("serviceWorker"in navigator){var _reg=navigator.serviceWorker.register.bind(navigator.serviceWorker);navigator.serviceWorker.register=function(s,o){var u=typeof s==="string"?s:(s&&s.url?s.url:"");if(isAdUrl(u)||(u&&u.indexOf("registerSW")!==-1))return Promise.reject(new Error("blocked"));return _reg(s,o);};}\n' +
'function removeAds(){if(!document.body)return;\n' +
'try{document.querySelectorAll(".splash_adv,.splashVideo,#splashVideo,.splash-loading-img,[class*=\\"splash-ad\\"],[class*=\\"splashAd\\"],[class*=\\"launch-ad\\"],[class*=\\"boot-ad\\"],[class*=\\"open-screen\\"]").forEach(function(e){e.remove();});}catch(e){}\n' +
'try{document.querySelectorAll(".adv-swiper-slide,[class*=\\"adv-swiper\\"],[class*=\\"advTitle\\"],[class*=\\"adv-card\\"],[class*=\\"adv-item\\"],[class*=\\"adv-list\\"],[class*=\\"adv-banner\\"],[class*=\\"ad-banner\\"],[class*=\\"adBanner\\"],[class*=\\"ad_card\\"],[class*=\\"adCard\\"],[class*=\\"banner-ad\\"],[class*=\\"ad-container\\"],[class*=\\"ad-wrapper\\"],[class*=\\"ad-item\\"],[class*=\\"ad-box\\"],[class*=\\"ad-slot\\"]").forEach(function(e){e.style.display="none";});}catch(e){}\n' +
'try{document.querySelectorAll("[class*=\\"ad-popup\\"],[class*=\\"adPopup\\"],[class*=\\"popup-ad\\"],[class*=\\"ad-dialog\\"],[class*=\\"ad-modal\\"],[class*=\\"floating-ad\\"],[class*=\\"float-ad\\"],[class*=\\"ad-float\\"],[class*=\\"float\\"],[class*=\\"popup\\"],[class*=\\"dialog\\"],[class*=\\"redRain\\"],[class*=\\"红包\\"],[class*=\\"prize\\"],[class*=\\"lottery\\"],[class*=\\"worldCup\\"],[class*=\\"世界杯\\"],[class*=\\"ia-tech\\"],[class*=\\"IA\\u79d1\\u6280\\"]").forEach(function(e){e.remove();});}catch(e){}\n' +
'try{document.querySelectorAll("[class*=\\"promote\\"],[class*=\\"Promote\\"],[class*=\\"promotion\\"],[class*=\\"sponsor\\"]").forEach(function(e){e.style.display="none";});}catch(e){}\n' +
'try{document.querySelectorAll("iframe[src*=\\"eqfx9bas\\"],iframe[src*=\\"yihaici\\"],iframe[src*=\\"epuf3tk\\"],iframe[src*=\\"speedfan\\"],iframe[src*=\\"u7d2w\\"],script[src*=\\"eqfx9bas\\"],script[src*=\\"yihaici\\"],script[src*=\\"epuf3tk\\"]").forEach(function(e){e.remove();});}catch(e){}\n' +
'try{document.querySelectorAll("[class*=\\"gamble\\"],[class*=\\"Gamble\\"],[class*=\\"agent-ad\\"],[class*=\\"proxy-ad\\"]").forEach(function(e){e.style.display="none";});}catch(e){}\n' +
'try{document.querySelectorAll("video[src*=\\"splash-\\"],video[src*=\\"ad-\\"]").forEach(function(e){e.remove();});}catch(e){}\n' +
'try{document.querySelectorAll("img[src*=\\"ad-card-bg\\"],img[src*=\\"buyGold\\"],img[src*=\\"ad-banner\\"]").forEach(function(e){e.style.display="none";});}catch(e){}\n' +
'try{document.querySelectorAll("[data-ad],[data-ad-type],[data-ad-id]").forEach(function(e){e.style.display="none";});}catch(e){}\n' +
'try{document.querySelectorAll(".corner-tag.isAdv,.corner-tag[class*=\\"isAdv\\"]").forEach(function(e){e.style.display="none";});}catch(e){}\n' +
'try{document.querySelectorAll(".van-tabbar__item,.tabbar-item,[class*=\\"tabbar-item\\"],[class*=\\"tab-item\\"],[class*=\\"nav-item\\"],[role=\\"tab\\"]").forEach(function(e){var t=e.textContent||e.innerText||"";if(t.indexOf("AI\\u79d1\\u6280")!==-1)e.style.display="none";});}catch(e){}\n' +
'}\n' +
'if(window.MutationObserver){var ob=new MutationObserver(function(){if(!removeAds._t){removeAds._t=!0;setTimeout(function(){removeAds();removeAds._t=!1;},100);}});\n' +
'var st=function(){if(document.body){ob.observe(document.body,{childList:!0,subtree:!0,attributes:!1});removeAds();}else setTimeout(st,100);};st();}else{setInterval(removeAds,1000);}\n' +
'var s=document.createElement("style");s.textContent="[class*=\\"vip-guide\\"],[class*=\\"buy-vip\\"],[class*=\\"upgrade-vip\\"],[class*=\\"vip-banner\\"],[class*=\\"recharge-banner\\"],[class*=\\"first-charge\\"],[class*=\\"origin-price\\"],.splash_adv,.splashVideo,#splashVideo,.splash-loading-img,[class*=\\"splash-ad\\"],[class*=\\"splashAd\\"],.adv-swiper-slide,[class*=\\"adv-swiper\\"],[class*=\\"advTitle\\"],[class*=\\"adv-card\\"],[class*=\\"adv-item\\"],[class*=\\"adv-banner\\"],[class*=\\"adv-container\\"],[class*=\\"ad-container\\"],[class*=\\"ad-wrapper\\"],[class*=\\"google-ad\\"],.corner-tag.isAdv{display:none !important;}";(document.head||document.documentElement).appendChild(s);\n' +
'var _ce=document.createElement.bind(document);document.createElement=function(t){var e=_ce(t);if(t&&t.toLowerCase()==="script"){var d=Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype,"src");if(d&&d.set){Object.defineProperty(e,"src",{get:d.get,set:function(v){if(!isAdUrl(v))d.set.call(e,v);},configurable:!0});}}return e;};\n' +
'})();\n</script>\n';

if (body && url.indexOf('.cloudfront.net') !== -1) {
    var ct = ($response.headers || {})['Content-Type'] || ($response.headers || {})['content-type'] || '';
    if (ct.indexOf('html') === -1 && ct.indexOf('text/html') === -1) { $done({}); return; }
    if (url.match(/\.(js|css|png|jpg|jpeg|gif|svg|json|xml|pdf|mp4|mp3|woff|woff2|ttf|eot|ico|webp|map|cur)(\?.*)?$/i)) { $done({}); return; }
    if (body && body.indexOf('<html') === -1 && body.indexOf('<!DOCTYPE') === -1) { $done({}); return; }

    var newBody = body;
    if (newBody.indexOf('</head>') !== -1) {
        newBody = newBody.replace('</head>', injectScript + '</head>');
    } else if (newBody.indexOf('<body') !== -1) {
        newBody = newBody.replace(/<body([^>]*)>/, '<body$1>' + injectScript);
    } else {
        newBody = injectScript + newBody;
    }

    var headers = {};
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
