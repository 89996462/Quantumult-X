/**********************************************
 * jiekrrj 去广告 + VIP模拟脚本
 * 目标网站: jiekrrj.cn 体系站点
 * 功能: 净化全站广告(开屏/悬浮窗/Banner/弹窗) + 模拟VIP
 *
 * 双模式:
 *   - script-request-header: 删除缓存头,强制200返回完整HTML
 *   - script-response-body: 注入去广告JS到HTML
 **********************************************/

// ========== 模式1: script-request-header ==========
if (typeof $response === 'undefined' || !$response) {
    var reqHeaders = $request.headers || {};
    // 删除所有缓存相关头
    var cacheKeys = ['If-None-Match', 'If-Modified-Since', 'if-none-match', 'if-modified-since', 'IF-NONE-MATCH', 'IF-MODIFIED-SINCE'];
    for (var i = 0; i < cacheKeys.length; i++) {
        if (reqHeaders[cacheKeys[i]]) delete reqHeaders[cacheKeys[i]];
    }
    for (var k in reqHeaders) {
        var kl = k.toLowerCase();
        if (kl === 'if-none-match' || kl === 'if-modified-since') delete reqHeaders[k];
    }
    reqHeaders['Cache-Control'] = 'no-cache, no-store, must-revalidate';
    reqHeaders['Pragma'] = 'no-cache';
    reqHeaders['Expires'] = '0';
    $done({ headers: reqHeaders });
}
// ========== 模式2: script-response-body ==========
else {

var url = $request.url;
var body = $response.body;

// 注入的JS代码
var injectScript = '\n<script>\n(function(){\n"use strict";\n' +
'var V=9,E="2099-12-31T23:59:59Z",N="至尊VIP",C=999999,I=999999;\n' +
'var A=["eqfx9bas.cc","yihaici.top","yihaici.com","epuf3tk.cc","jmnkojis4.com","speedfan","u7d2w.com","pg71json","pg71.epuf3tk","pg71h5.yihaici","pg71.epuf3tk.cc","t1nijvegfd.eqfx9bas.cc","va2p.com","worldcup-ad.com","float-ad.com","ia-tech.com","prize-ad.com","lottery-ad.com","api-dc-prod-008.cyou","api-dc2-prod-08.cyou","d3k4e7spixznr4.cloudfront.net"];\n' +
'function B(u){if(!u||typeof u!=="string")return false;u=u.toLowerCase();for(var i=0;i<A.length;i++){if(u.indexOf(A[i])!==-1)return true}return u.indexOf("eventtracking/batchreport")!==-1||u.indexOf("/mp4/splash-")!==-1||u.indexOf("/png/buygold-")!==-1||u.indexOf("/png/ad-card-bg-")!==-1||u.indexOf("/ads/click")!==-1||u.indexOf("/recreation/click")!==-1||u.indexOf("/webp/splash-")!==-1}\n' +
'var P=JSON.parse;JSON.parse=function(t){var r=P.apply(this,arguments);if(r&&typeof r==="object"&&!Array.isArray(r)&&r.hash===true&&typeof r.data==="string")return r;if(r&&typeof r==="object"){try{if(!Array.isArray(r)&&("isVip"in r||"vipLevel"in r||"vipExpireDate"in r||"snapVip"in r)){r.isVip=true;r.vipLevel=V;r.vipExpireDate=E;r.vipName=N;r.snapVip=V;r.hasLocked=false;r.hasBanned=false;r.forbidUpload=false;r.videoDiscountExpiration=E;r.goldVideoFreeExpire=E;r.videoFreeExpiration=E;r.broadcastExpire=E;r.loufengBookDiscountExpiration=E;r.coinMouthExpireDate=E;if("vipType"in r)r.vipType=V;if("vipStatus"in r)r.vipStatus=1;if("expireDate"in r)r.expireDate=E}if(!Array.isArray(r)&&(("amount"in r&&"integral"in r)||("fruitCoin"in r)||("coin"in r&&"integral"in r))){if(typeof r.amount==="number")r.amount=C;if(typeof r.integral==="number")r.integral=I;if(typeof r.coin==="number")r.coin=C;if("fruitCoin"in r)r.fruitCoin=C;if("lotteryTimes"in r)r.lotteryTimes=999;if("aiUndressFreeTimes"in r)r.aiUndressFreeTimes=999;if("aiChangeFaceImgFreeTimes"in r)r.aiChangeFaceImgFreeTimes=999;if("aiMateBalance"in r)r.aiMateBalance=999999;if("downloadCount"in r)r.downloadCount=999;if("goldCoin"in r)r.goldCoin=C;if("diamond"in r)r.diamond=999999}if(!Array.isArray(r)&&("tiroCountdown"in r||"tiroExpire"in r||"tiroStatus"in r)){r.tiroCountdown=0;r.tiroExpire="1970-01-01T00:00:00Z";if("tiroStatus"in r)r.tiroStatus=0;if("countdown"in r)r.countdown=0;if("canUse"in r)r.canUse=false}if(!Array.isArray(r)&&"canClick"in r&&("prizeAmount"in r||"redPacket"in r)){r.canClick=false;r.enabled=false;if("show"in r)r.show=false}L(r);R(r,0)}catch(e){}}return r};\n' +
'function L(o){if(!o||typeof o!=="object")return;if("adsInfoList"in o)o.adsInfoList=[];for(var k in o){if(!o.hasOwnProperty(k))continue;var v=o[k];if(v&&typeof v==="object"){if("adsInfoList"in v)v.adsInfoList=[];if(!Array.isArray(v))L(v);else{for(var i=0;i<v.length;i++){if(v[i]&&typeof v[i]==="object")L(v[i])}}}}}\n' +
'function R(o,d){if(d>10||!o||typeof o!=="object")return;if(Array.isArray(o)){for(var i=o.length-1;i>=0;i--){if(o[i]&&typeof o[i]==="object"){if(K(o[i]))o.splice(i,1);else R(o[i],d+1)}}}else{D(o);for(var k in o){if(o.hasOwnProperty(k)){var v=o[k];if(v&&typeof v==="object"){if(Array.isArray(v)){for(var j=v.length-1;j>=0;j--){if(v[j]&&typeof v[j]==="object"&&K(v[j]))v.splice(j,1)}R(v,d+1)}else R(v,d+1)}}}}}\n' +
'function D(o){if(!o||typeof o!=="object"||Array.isArray(o))return;if("adsInfoList"in o)o.adsInfoList=[];if("homeAdvFirst"in o)o.homeAdvFirst=false;var f=["showAd","adEnabled","hasAd","adSwitch","enableAd","adOpen","showBanner","showSplash","showPopup","showPromote","splashAd","bannerAd","popupAd","insertAd","feedAd","openAd","adShow","adDisplay","displayAd","showInsertAd","showFeedAd","showOpenAd","showVideoAd","adConfig","adSetting","adSettingSwitch","splashSwitch","splashEnabled","splashAdSwitch","splashAdEnabled","bannerSwitch","bannerEnabled","popupSwitch","popupEnabled","isAd","isAdvertisement","isPromote","isBanner","openScreenAd","openScreenAdSwitch","openScreenAdEnabled","rewardAdSwitch","rewardAdEnabled","rewardVideoAd","interstitialAd","interstitialAdSwitch","nativeAd","nativeAdSwitch","canShowAd","adVisible","adStatus","thirdAd","thirdAdSwitch","thirdAdEnabled","floatingAd","floatingAdSwitch","marqueeAd","marqueeAdSwitch","noticeAd","noticeAdSwitch","guideAd","guideAdSwitch"];for(var i=0;i<f.length;i++){var fk=f[i];if(fk in o){if(typeof o[fk]==="boolean")o[fk]=false;else if(typeof o[fk]==="number")o[fk]=0;else if(o[fk]&&typeof o[fk]==="object"){if("enabled"in o[fk])o[fk].enabled=false;if("show"in o[fk])o[fk].show=false;if("switch"in o[fk])o[fk]["switch"]=false;if("open"in o[fk])o[fk].open=false;if("enable"in o[fk])o[fk].enable=false;if("status"in o[fk])o[fk].status=0}}}var s=["splash","splashAd","splashConfig","splashData","splashInfo","openScreen","openScreenAd","launchAd","bootAd","splashAdv","splash_adv"];for(var j=0;j<s.length;j++){if(s[j]in o)o[s[j]]=null}if("redPacket"in o&&o.redPacket&&typeof o.redPacket==="object"){o.redPacket.canClick=false;o.redPacket.enabled=false;o.redPacket.show=false}if("redpacket"in o&&o.redpacket&&typeof o.redpacket==="object"){o.redpacket.canClick=false;o.redpacket.enabled=false;o.redpacket.show=false}}\n' +
'function K(i){if(!i||typeof i!=="object")return false;if(i.type==="adv"||i.type==="ADV")return true;if("position"in i&&i.position!=null&&i.position!==""&&i.position!==0&&i.position!==false)return true;if("advertising_key"in i&&i.advertising_key)return true;var uf=["link","url","jumpUrl","redirectUrl","href","actionUrl","clickUrl","h5Url","webUrl"];for(var m=0;m<uf.length;m++){if(uf[m]in i&&typeof i[uf[m]]==="string"&&B(i[uf[m]]))return true}if("type"in i&&(i.type==="float"||i.type==="popup"||i.type==="dialog"))return true;if("eventName"in i&&(i.eventName.indexOf("世界杯")!==-1||i.eventName.indexOf("红包雨")!==-1))return true;var at=["redRain","prize","lottery","worldCup","football","match","innovation","tech"];for(var n=0;n<at.length;n++){if(i.type===at[n]||(i.activityType&&i.activityType===at[n]))return true}return false}\n' +
'var _f=window.fetch;if(_f){window.fetch=function(i){var u=typeof i==="string"?i:(i&&i.url?i.url:"");if(B(u))return Promise.resolve(new Response("{}",{status:200,headers:{"Content-Type":"application/json"}}));return _f.apply(this,arguments)}}\n' +
'var _o=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(m,ru){if(B(ru))arguments[1]="data:application/json,{}";return _o.apply(this,arguments)};\n' +
'function H(){if(window.axios&&window.axios.interceptors&&window.axios.interceptors.response){var _u=window.axios.interceptors.response.use.bind(window.axios.interceptors.response);window.axios.interceptors.response.use=function(f,r){return _u(function(res){if(res&&res.data)try{R(res.data,0)}catch(e){}return f?f(res):res},r)}}}H();setTimeout(H,100);setTimeout(H,500);setTimeout(H,2000);\n' +
'function HV(){if(window.Vue&&window.Vue.prototype&&window.Vue.prototype.$axios){var ax=window.Vue.prototype.$axios;if(ax.interceptors&&ax.interceptors.response){ax.interceptors.response.use(function(res){if(res&&res.data)try{R(res.data,0)}catch(e){}return res})}}}setTimeout(HV,500);setTimeout(HV,2000);\n' +
'var _wo=window.open;window.open=function(u){if(B(u))return null;return _wo.apply(this,arguments)};\n' +
'var _as=window.location.assign.bind(window.location);var _rp=window.location.replace.bind(window.location);window.location.assign=function(u){if(!B(u))return _as(u)};window.location.replace=function(u){if(!B(u))return _rp(u)};\n' +
'function M(){if(!document.body)return;\n' +
'document.querySelectorAll("[class*=\\"splash\\"], [class*=\\"Splash\\"], [id*=\\"splash\\"], .splash_adv, .splashVideo, #splashVideo, .splash-loading-img, [class*=\\"launch-ad\\"], [class*=\\"boot-ad\\"], [class*=\\"open-screen\\"], [class*=\\"startup-ad\\"]").forEach(function(e){e.remove()});\n' +
'document.querySelectorAll(".adv-swiper-slide, [class*=\\"adv-swiper\\"], [class*=\\"advTitle\\"], [class*=\\"adv-card\\"], [class*=\\"adv-item\\"], [class*=\\"adv-list\\"], [class*=\\"adv-banner\\"], [class*=\\"adv-container\\"], [class*=\\"adv-wrapper\\"], [class*=\\"ad-banner\\"], [class*=\\"adBanner\\"], [class*=\\"ad_card\\"], [class*=\\"adCard\\"], [class*=\\"banner-ad\\"], [class*=\\"ad-container\\"], [class*=\\"adContainer\\"], [class*=\\"ad-wrapper\\"], [class*=\\"ad-item\\"], [class*=\\"ad-box\\"], [class*=\\"ad-slot\\"]").forEach(function(e){e.style.display="none"});\n' +
'document.querySelectorAll("[class*=\\"fullscreen-video-ad\\"], [class*=\\"fullScreenAd\\"], [class*=\\"video-ad\\"], [class*=\\"interstitial\\"], [class*=\\"insert-ad\\"]").forEach(function(e){e.remove()});\n' +
'document.querySelectorAll("[class*=\\"ad-popup\\"], [class*=\\"adPopup\\"], [class*=\\"popup-ad\\"], [class*=\\"ad-dialog\\"], [class*=\\"ad-modal\\"], [class*=\\"floating-ad\\"], [class*=\\"float-ad\\"], [class*=\\"ad-float\\"], [class*=\\"floating\\"], [class*=\\"float\\"], [class*=\\"popup\\"], [class*=\\"dialog\\"], [class*=\\"redRain\\"], [class*=\\"prize\\"], [class*=\\"lottery\\"], [class*=\\"worldCup\\"], [class*=\\"ia-tech\\"]").forEach(function(e){e.remove()});\n' +
'document.querySelectorAll("[class*=\\"ai_root\\"], [class*=\\"ai-root\\"], [class*=\\"ic_ai\\"], img[src*=\\"ai_root\\"], img[src*=\\"ic_ai\\"], [class*=\\"AiRoot\\"], [class*=\\"ai_float\\"]").forEach(function(e){e.remove()});\n' +
'document.querySelectorAll("[class*=\\"promote\\"], [class*=\\"Promote\\"], [class*=\\"promotion\\"], [class*=\\"sponsor\\"]").forEach(function(e){e.style.display="none"});\n' +
'document.querySelectorAll("iframe[src*=\\"eqfx9bas\\"], iframe[src*=\\"yihaici\\"], iframe[src*=\\"epuf3tk\\"], iframe[src*=\\"speedfan\\"], script[src*=\\"eqfx9bas\\"], script[src*=\\"yihaici\\"], script[src*=\\"epuf3tk\\"]").forEach(function(e){e.remove()});\n' +
'document.querySelectorAll("video[src*=\\"splash-\\"], video[src*=\\"ad-\\"]").forEach(function(e){e.remove()});\n' +
'document.querySelectorAll("[data-ad], [data-ad-type], [data-ad-id]").forEach(function(e){e.style.display="none"});\n' +
'document.querySelectorAll("[class*=\\"mask\\"], [class*=\\"overlay\\"]").forEach(function(e){if(e.children.length===0&&getComputedStyle(e).position==="fixed")e.style.display="none"});\n' +
'document.querySelectorAll(".corner-tag.isAdv, .corner-tag[class*=\\"isAdv\\"]").forEach(function(e){e.style.display="none"});\n' +
'document.querySelectorAll(".van-tabbar__item, .tabbar-item, [class*=\\"tabbar-item\\"], [class*=\\"tab-item\\"], [class*=\\"nav-item\\"], [role=\\"tab\\"]").forEach(function(e){var t=e.textContent||e.innerText||"";if(t.indexOf("AI科技")!==-1||t.indexOf("AI")===0)e.style.display="none"});\n' +
'}\n' +
'if(window.MutationObserver){var O=new MutationObserver(function(){if(!M.t){M.t=true;setTimeout(function(){M();M.t=false},100)}});(function S(){if(document.body){O.observe(document.body,{childList:true,subtree:true,attributes:false});M()}else setTimeout(S,100)})()}else setInterval(M,1000);\n' +
'var ST=document.createElement("style");ST.textContent="[class*=\\"vip-guide\\"], [class*=\\"VipGuide\\"], [class*=\\"buy-vip\\"], [class*=\\"buyVip\\"], [class*=\\"vip-expire\\"], [class*=\\"upgrade-vip\\"], [class*=\\"vip-banner\\"], [class*=\\"vipBanner\\"], [class*=\\"recharge-banner\\"], [class*=\\"first-charge\\"], [class*=\\"origin-price\\"], .splash_adv, .splashVideo, #splashVideo, .splash-loading-img, [class*=\\"splash-ad\\"], [class*=\\"splashAd\\"], .adv-swiper-slide, [class*=\\"adv-swiper\\"], [class*=\\"advTitle\\"], [class*=\\"adv-card\\"], [class*=\\"adv-item\\"], [class*=\\"adv-list\\"], [class*=\\"adv-banner\\"], [class*=\\"adv-container\\"], [class*=\\"adv-wrapper\\"], [class*=\\"ad-container\\"], [class*=\\"adContainer\\"], [class*=\\"ad-wrapper\\"], [class*=\\"google-ad\\"], .corner-tag.isAdv{display:none!important}";(document.head||document.documentElement).appendChild(ST);\n' +
'var _c=document.createElement.bind(document);document.createElement=function(t){var e=_c(t);if(t&&t.toLowerCase()==="script"){var d=Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype,"src");if(d&&d.set){Object.defineProperty(e,"src",{get:d.get,set:function(v){if(!B(v))d.set.call(e,v)},configurable:true})}}return e};\n' +
'})();\n</script>\n';

// ========== 判断是否为目标域名 ==========
var isTarget = url.indexOf('.cloudfront.net') !== -1 ||
               url.indexOf('jiekrrj') !== -1;

if (isTarget && body) {
    // 排除非HTML资源
    if (url.match(/\.(js|css|png|jpg|jpeg|gif|svg|json|xml|pdf|mp4|mp3|woff|woff2|ttf|eot|ico|map|webp|ts|m3u8)(\?|$)/i)) {
        $done({});
        return;
    }

    var bodyStr = typeof body === 'string' ? body : '';
    if (!bodyStr || bodyStr.length < 50) {
        $done({});
        return;
    }

    var ctype = ($response.headers || {})['Content-Type'] || ($response.headers || {})['content-type'] || '';
    
    // 更宽松的HTML判断：有Content-Type html或是疑似HTML内容
    var isHtmlByType = !ctype || ctype.indexOf('text/html') !== -1 || ctype.indexOf('html') !== -1;
    var isHtmlByContent = bodyStr.indexOf('<html') !== -1 || bodyStr.indexOf('<!DOCTYPE') !== -1 || bodyStr.indexOf('<!doctype') !== -1 || bodyStr.indexOf('<head') !== -1;
    
    if (!isHtmlByType && !isHtmlByContent) {
        $done({});
        return;
    }

    var newBody = bodyStr;

    // 多级注入 - 尝试多个注入点
    if (newBody.indexOf('</head>') !== -1) {
        newBody = newBody.replace('</head>', injectScript + '\n</head>');
    } else if (newBody.indexOf('<head>') !== -1) {
        newBody = newBody.replace('<head>', '<head>' + injectScript);
    } else if (newBody.indexOf('<div id="app">') !== -1) {
        newBody = newBody.replace('<div id="app">', '<div id="app">' + injectScript);
    } else if (newBody.indexOf('<body') !== -1) {
        newBody = newBody.replace(/<body([^>]*)>/, '<body$1>' + injectScript);
    } else if (newBody.indexOf('<html') !== -1) {
        newBody = newBody.replace(/<html([^>]*)>/, '<html$1>' + injectScript);
    } else {
        // 兜底：在第一个 > 之后注入
        var firstGt = newBody.indexOf('>');
        if (firstGt !== -1) {
            newBody = newBody.substring(0, firstGt + 1) + injectScript + newBody.substring(firstGt + 1);
        } else {
            newBody = injectScript + newBody;
        }
    }

    var headers = $response.headers || {};
    headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
    headers['Pragma'] = 'no-cache';
    headers['Expires'] = '0';

    $done({ body: newBody, headers: headers });
} else {
    $done({});
}

} // 结束
