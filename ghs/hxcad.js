if (typeof $response === 'undefined' || !$response) {
var reqHeaders = $request.headers || {};
var keysToDelete = ['If-None-Match', 'If-Modified-Since', 'if-none-match', 'if-modified-since', 'IF-NONE-MATCH', 'IF-MODIFIED-SINCE'];
for (var i = 0; i < keysToDelete.length; i++) {
if (reqHeaders[keysToDelete[i]]) {
delete reqHeaders[keysToDelete[i]];
}
}
for (var k in reqHeaders) {
if (k.toLowerCase() === 'if-none-match' || k.toLowerCase() === 'if-modified-since') {
delete reqHeaders[k];
}
}
$done({ headers: reqHeaders });
}
else {
const url = $request.url;
const body = $response.body;
const injectScript = `
<script>
(function() {
'use strict';
var VIP_LEVEL = 9;
var VIP_EXPIRE = "2099-12-31T23:59:59Z";
var VIP_NAME = "\\u81f3\\u5c0aVIP";
var COIN_AMOUNT = 999999;
var INTEGRAL_AMOUNT = 999999;
var adDomains = [
'eqfx9bas.cc',
'yihaici.top',
'yihaici.com',
'epuf3tk.cc',
'jmnkojis4.com',
'speedfan',
'u7d2w.com',
'pg71json',
'pg71.epuf3tk',
'pg71h5.yihaici'
];
function isAdUrl(u) {
if (!u || typeof u !== 'string') return false;
var lower = u.toLowerCase();
for (var i = 0; i < adDomains.length; i++) {
if (lower.indexOf(adDomains[i]) !== -1) return true;
}
if (lower.indexOf('eventtracking/batchreport') !== -1) return true;
if (lower.indexOf('/mp4/splash-') !== -1) return true;
if (lower.indexOf('/png/buygold-') !== -1) return true;
if (lower.indexOf('/png/ad-card-bg-') !== -1) return true;
if (lower.indexOf('/ads/click') !== -1) return true;
if (lower.indexOf('/recreation/click') !== -1) return true;
return false;
}
var _parse = JSON.parse;
JSON.parse = function(text) {
var result = _parse.apply(this, arguments);
if (result && typeof result === 'object' && !Array.isArray(result) && result.hash === true && typeof result.data === 'string') {
return result;
}
if (result && typeof result === 'object') {
try {
if (!Array.isArray(result)) {
var keys = Object.keys(result).slice(0, 15).join(',');
if (window.console) console.log('[Butterfly] JSON.parse keys:', keys);
}
if (!Array.isArray(result) && ('isVip' in result || 'vipLevel' in result || 'vipExpireDate' in result || 'snapVip' in result)) {
result.isVip = true;
result.vipLevel = VIP_LEVEL;
result.vipExpireDate = VIP_EXPIRE;
result.vipName = VIP_NAME;
result.snapVip = VIP_LEVEL;
result.hasLocked = false;
result.hasBanned = false;
result.forbidUpload = false;
result.videoDiscountExpiration = VIP_EXPIRE;
result.goldVideoFreeExpire = VIP_EXPIRE;
result.videoFreeExpiration = VIP_EXPIRE;
result.broadcastExpire = VIP_EXPIRE;
result.loufengBookDiscountExpiration = VIP_EXPIRE;
result.coinMouthExpireDate = VIP_EXPIRE;
if ('vipType' in result) result.vipType = VIP_LEVEL;
if ('vipStatus' in result) result.vipStatus = 1;
if ('expireDate' in result) result.expireDate = VIP_EXPIRE;
}
if (!Array.isArray(result) && (('amount' in result && 'integral' in result) || ('fruitCoin' in result) || ('coin' in result && 'integral' in result))) {
if (typeof result.amount === 'number') result.amount = COIN_AMOUNT;
if (typeof result.integral === 'number') result.integral = INTEGRAL_AMOUNT;
if (typeof result.coin === 'number') result.coin = COIN_AMOUNT;
if ('fruitCoin' in result) result.fruitCoin = COIN_AMOUNT;
if ('lotteryTimes' in result) result.lotteryTimes = 999;
if ('aiUndressFreeTimes' in result) result.aiUndressFreeTimes = 999;
if ('aiChangeFaceImgFreeTimes' in result) result.aiChangeFaceImgFreeTimes = 999;
if ('aiMateBalance' in result) result.aiMateBalance = 999999;
if ('downloadCount' in result) result.downloadCount = 999;
if ('goldCoin' in result) result.goldCoin = COIN_AMOUNT;
if ('diamond' in result) result.diamond = 999999;
}
if (!Array.isArray(result) && ('tiroCountdown' in result || 'tiroExpire' in result || 'tiroStatus' in result)) {
result.tiroCountdown = 0;
result.tiroExpire = "1970-01-01T00:00:00Z";
if ('tiroStatus' in result) result.tiroStatus = 0;
if ('countdown' in result) result.countdown = 0;
if ('canUse' in result) result.canUse = false;
}
if (!Array.isArray(result) && 'canClick' in result && ('prizeAmount' in result || 'redPacket' in result)) {
result.canClick = false;
result.enabled = false;
if ('show' in result) result.show = false;
}
if (!Array.isArray(result) && 'list' in result && 'isNewUser' in result) {
result.isNewUser = false;
}
clearAdsInfoList(result);
recursiveProcess(result, 0);
} catch(e) { if (window.console) console.log('[Butterfly] parse error:', e); }
}
return result;
};
function clearAdsInfoList(obj) {
if (!obj || typeof obj !== 'object') return;
if ('adsInfoList' in obj) {
obj.adsInfoList = [];
}
for (var key in obj) {
if (!obj.hasOwnProperty(key)) continue;
var val = obj[key];
if (val && typeof val === 'object') {
if ('adsInfoList' in val) {
val.adsInfoList = [];
}
if (typeof val === 'object' && !Array.isArray(val)) {
clearAdsInfoList(val);
} else if (Array.isArray(val)) {
for (var i = 0; i < val.length; i++) {
if (val[i] && typeof val[i] === 'object') clearAdsInfoList(val[i]);
}
}
}
}
}
function recursiveProcess(obj, depth) {
if (depth > 10 || !obj || typeof obj !== 'object') return;
if (Array.isArray(obj)) {
for (var i = obj.length - 1; i >= 0; i--) {
if (obj[i] && typeof obj[i] === 'object') {
if (isAdItem(obj[i])) {
obj.splice(i, 1);
} else {
recursiveProcess(obj[i], depth + 1);
}
}
}
} else {
disableAdConfig(obj);
for (var key in obj) {
if (obj.hasOwnProperty(key)) {
var val = obj[key];
if (val && typeof val === 'object') {
if (Array.isArray(val)) {
for (var j = val.length - 1; j >= 0; j--) {
if (val[j] && typeof val[j] === 'object' && isAdItem(val[j])) {
val.splice(j, 1);
}
}
recursiveProcess(val, depth + 1);
} else {
recursiveProcess(val, depth + 1);
}
}
}
}
}
}
function disableAdConfig(obj) {
if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return;
if ('adsInfoList' in obj) {
obj.adsInfoList = [];
}
if ('homeAdvFirst' in obj) obj.homeAdvFirst = false;
var adFlags = [
'showAd', 'adEnabled', 'hasAd', 'adSwitch', 'enableAd', 'adOpen',
'showBanner', 'showSplash', 'showPopup', 'showPromote',
'splashAd', 'bannerAd', 'popupAd', 'insertAd', 'feedAd',
'openAd', 'adShow', 'adDisplay', 'displayAd',
'showInsertAd', 'showFeedAd', 'showOpenAd', 'showVideoAd',
'adConfig', 'adSetting', 'adSettingSwitch',
'splashSwitch', 'splashEnabled', 'splashAdSwitch', 'splashAdEnabled',
'bannerSwitch', 'bannerEnabled', 'popupSwitch', 'popupEnabled',
'isAd', 'isAdvertisement', 'isPromote', 'isBanner',
'openScreenAd', 'openScreenAdSwitch', 'openScreenAdEnabled',
'rewardAdSwitch', 'rewardAdEnabled', 'rewardVideoAd',
'interstitialAd', 'interstitialAdSwitch',
'nativeAd', 'nativeAdSwitch',
'canShowAd', 'adVisible', 'adStatus',
'thirdAd', 'thirdAdSwitch', 'thirdAdEnabled',
'floatingAd', 'floatingAdSwitch',
'marqueeAd', 'marqueeAdSwitch',
'noticeAd', 'noticeAdSwitch',
'guideAd', 'guideAdSwitch'
];
for (var i = 0; i < adFlags.length; i++) {
var key = adFlags[i];
if (key in obj) {
if (typeof obj[key] === 'boolean') obj[key] = false;
else if (typeof obj[key] === 'number') obj[key] = 0;
else if (obj[key] && typeof obj[key] === 'object') {
if ('enabled' in obj[key]) obj[key].enabled = false;
if ('show' in obj[key]) obj[key].show = false;
if ('switch' in obj[key]) obj[key]['switch'] = false;
if ('open' in obj[key]) obj[key].open = false;
if ('enable' in obj[key]) obj[key].enable = false;
if ('status' in obj[key]) obj[key].status = 0;
}
}
}
var splashKeys = ['splash', 'splashAd', 'splashConfig', 'splashData', 'splashInfo', 'openScreen', 'openScreenAd', 'launchAd', 'bootAd', 'splashAdv', 'splash_adv'];
for (var s = 0; s < splashKeys.length; s++) {
if (splashKeys[s] in obj) {
obj[splashKeys[s]] = null;
}
}
if ('redPacket' in obj && obj.redPacket && typeof obj.redPacket === 'object') {
obj.redPacket.canClick = false;
obj.redPacket.enabled = false;
obj.redPacket.show = false;
}
}
function isAdItem(item) {
if (!item || typeof item !== 'object') return false;
if (item.type === 'adv' || item.type === 'ADV') return true;
if ('position' in item && item.position != null && item.position !== '' && item.position !== 0 && item.position !== false) return true;
if ('advertising_key' in item && item.advertising_key) return true;
var urlFields = ['link', 'url', 'jumpUrl', 'redirectUrl', 'href', 'actionUrl', 'clickUrl', 'h5Url', 'webUrl'];
for (var m = 0; m < urlFields.length; m++) {
if (urlFields[m] in item && typeof item[urlFields[m]] === 'string') {
if (isAdUrl(item[urlFields[m]])) return true;
}
}
return false;
}
var _fetch = window.fetch;
if (_fetch) {
window.fetch = function(input, init) {
var reqUrl = typeof input === 'string' ? input : (input && input.url ? input.url : '');
if (isAdUrl(reqUrl)) {
return Promise.resolve(new Response('{}', {
status: 200,
headers: { 'Content-Type': 'application/json' }
}));
}
return _fetch.apply(this, arguments);
};
}
var _open = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function(method, reqUrl) {
if (isAdUrl(reqUrl)) {
arguments[1] = 'data:application/json,{}';
}
return _open.apply(this, arguments);
};
var _responseTextDesc = Object.getOwnPropertyDescriptor(XMLHttpRequest.prototype, 'responseText');
if (_responseTextDesc && _responseTextDesc.get) {
var _origGet = _responseTextDesc.get;
Object.defineProperty(XMLHttpRequest.prototype, 'responseText', {
get: function() {
var text = _origGet.call(this);
if (text && typeof text === 'string' && text.indexOf('"hash":true') !== -1) {
try {
var parsed = _parse(text);
if (parsed && parsed.hash === true && typeof parsed.data === 'string') {
}
} catch(e) {}
}
return text;
},
configurable: true
});
}
function hookAxios() {
if (window.axios && window.axios.interceptors && window.axios.interceptors.response) {
var _use = window.axios.interceptors.response.use.bind(window.axios.interceptors.response);
window.axios.interceptors.response.use = function(onFulfilled, onRejected) {
var wrappedFulfilled = function(response) {
if (response && response.data) {
try {
recursiveProcess(response.data, 0);
} catch(e) {}
}
return onFulfilled ? onFulfilled(response) : response;
};
return _use(wrappedFulfilled, onRejected);
};
if (window.console) console.log('[Butterfly] axios拦截器已hook');
}
}
hookAxios();
setTimeout(hookAxios, 100);
setTimeout(hookAxios, 500);
setTimeout(hookAxios, 2000);
function hookVueAxios() {
if (window.Vue && window.Vue.prototype && window.Vue.prototype.$axios) {
var ax = window.Vue.prototype.$axios;
if (ax.interceptors && ax.interceptors.response) {
ax.interceptors.response.use(function(response) {
if (response && response.data) {
try { recursiveProcess(response.data, 0); } catch(e) {}
}
return response;
});
if (window.console) console.log('[Butterfly] Vue.$axios拦截器已hook');
}
}
}
setTimeout(hookVueAxios, 500);
setTimeout(hookVueAxios, 2000);
var _windowOpen = window.open;
window.open = function(u) {
if (isAdUrl(u)) return null;
return _windowOpen.apply(this, arguments);
};
var _locationDesc = Object.getOwnPropertyDescriptor(window, 'location');
var _assign = window.location.assign.bind(window.location);
var _replace = window.location.replace.bind(window.location);
window.location.assign = function(u) {
if (!isAdUrl(u)) return _assign(u);
};
window.location.replace = function(u) {
if (!isAdUrl(u)) return _replace(u);
};
if ('serviceWorker' in navigator) {
var _register = navigator.serviceWorker.register.bind(navigator.serviceWorker);
navigator.serviceWorker.register = function(scriptUrl, options) {
var swUrl = typeof scriptUrl === 'string' ? scriptUrl : (scriptUrl && scriptUrl.url ? scriptUrl.url : '');
if (isAdUrl(swUrl) || (swUrl && swUrl.indexOf('registerSW') !== -1)) {
return Promise.reject(new Error('blocked'));
}
return _register(scriptUrl, options);
};
}
function removeAdElements() {
if (!document.body) return;
document.querySelectorAll(
'[class*="splash"], [class*="Splash"], [id*="splash"], [id*="Splash"],' +
'.splash_adv, .splashVideo, #splashVideo, .splash-loading-img,' +
'[class*="launch-ad"], [class*="boot-ad"], [class*="open-screen"],' +
'[class*="startup-ad"]'
).forEach(function(el) { el.remove(); });
document.querySelectorAll(
'.adv-swiper-slide, [class*="adv-swiper"], [class*="advTitle"],' +
'[class*="adv-card"], [class*="adv-item"], [class*="adv-list"],' +
'[class*="adv-banner"], [class*="adv-container"], [class*="adv-wrapper"],' +
'[class*="ad-banner"], [class*="adBanner"], [class*="ad_card"], [class*="adCard"],' +
'[class*="banner-ad"], [class*="ad-container"], [class*="adContainer"],' +
'[class*="ad-wrapper"], [class*="ad-item"], [class*="ad-box"], [class*="ad-slot"]'
).forEach(function(el) { el.style.display = 'none'; });
document.querySelectorAll(
'[class*="fullscreen-video-ad"], [class*="fullScreenAd"],' +
'[class*="video-ad"], [class*="interstitial"], [class*="insert-ad"]'
).forEach(function(el) { el.remove(); });
document.querySelectorAll(
'[class*="ad-popup"], [class*="adPopup"], [class*="popup-ad"],' +
'[class*="ad-dialog"], [class*="ad-modal"],' +
'[class*="floating-ad"], [class*="float-ad"], [class*="ad-float"]'
).forEach(function(el) { el.remove(); });
document.querySelectorAll(
'[class*="promote"], [class*="Promote"], [class*="promotion"], [class*="Promotion"],' +
'[class*="sponsor"], [class*="Sponsor"]'
).forEach(function(el) { el.style.display = 'none'; });
document.querySelectorAll(
'iframe[src*="eqfx9bas"], iframe[src*="yihaici"], iframe[src*="epuf3tk"],' +
'iframe[src*="speedfan"], iframe[src*="u7d2w"],' +
'script[src*="eqfx9bas"], script[src*="yihaici"], script[src*="epuf3tk"]'
).forEach(function(el) { el.remove(); });
document.querySelectorAll(
'[class*="gamble"], [class*="Gamble"], [class*="agent-ad"], [class*="proxy-ad"]'
).forEach(function(el) { el.style.display = 'none'; });
document.querySelectorAll('video[src*="splash-"], video[src*="ad-"]').forEach(function(el) { el.remove(); });
document.querySelectorAll('img[src*="ad-card-bg"], img[src*="buyGold"], img[src*="ad-banner"]').forEach(function(el) { el.style.display = 'none'; });
document.querySelectorAll('[data-ad], [data-ad-type], [data-ad-id]').forEach(function(el) { el.style.display = 'none'; });
document.querySelectorAll('[class*="mask"], [class*="overlay"]').forEach(function(el) {
if (el.children.length === 0 && getComputedStyle(el).position === 'fixed') {
el.style.display = 'none';
}
});
document.querySelectorAll('.corner-tag.isAdv, .corner-tag[class*="isAdv"]').forEach(function(el) {
el.style.display = 'none';
});
document.querySelectorAll(
'.van-tabbar__item, .tabbar-item, [class*="tabbar-item"], [class*="tab-item"], [class*="nav-item"], [role="tab"]'
).forEach(function(el) {
var text = el.textContent || el.innerText || '';
if (text.indexOf('AI科技') !== -1) {
el.style.display = 'none';
}
});
}
if (window.MutationObserver) {
var observer = new MutationObserver(function() { removeAdElements(); });
var startObserve = function() {
if (document.body) {
observer.observe(document.body, { childList: true, subtree: true, attributes: false });
removeAdElements();
} else {
setTimeout(startObserve, 100);
}
};
startObserve();
} else {
setInterval(removeAdElements, 500);
}
var style = document.createElement('style');
style.textContent = \`
[class*="vip-guide"], [class*="VipGuide"], [class*="vipGuide"],
[class*="buy-vip"], [class*="buyVip"], [class*="BuyVip"],
[class*="vip-expire"], [class*="vipExpire"],
[class*="upgrade-vip"], [class*="upgradeVip"],
[class*="vip-banner"], [class*="vipBanner"],
[class*="recharge-banner"], [class*="rechargeBanner"],
[class*="first-charge"], [class*="firstCharge"],
[class*="origin-price"], [class*="originPrice"],
.splash_adv, .splashVideo, #splashVideo, .splash-loading-img,
[class*="splash-ad"], [class*="splashAd"], [class*="SplashAd"],
.adv-swiper-slide, [class*="adv-swiper"], [class*="advTitle"],
[class*="adv-card"], [class*="adv-item"], [class*="adv-list"],
[class*="adv-banner"], [class*="adv-container"], [class*="adv-wrapper"],
[class*="ad-container"], [class*="adContainer"], [class*="ad-wrapper"],
[class*="google-ad"], [class*="adsbygoogle"],
.corner-tag.isAdv {
display: none !important;
}
\`;
(document.head || document.documentElement).appendChild(style);
var _createElement = document.createElement.bind(document);
document.createElement = function(tagName) {
var el = _createElement(tagName);
if (tagName && tagName.toLowerCase() === 'script') {
var _src = Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype, 'src');
if (_src && _src.set) {
Object.defineProperty(el, 'src', {
get: _src.get,
set: function(val) {
if (isAdUrl(val)) {
return;
}
_src.set.call(el, val);
},
configurable: true
});
}
}
return el;
};
if (window.console) console.log('[Butterfly] 去广告+VIP模拟脚本已加载 v2.0');
})();
</script>
`;
if (body && (url.indexOf('d18v10algpi965.cloudfront.net') !== -1)) {
var newBody = body;
if (newBody.indexOf('</head>') !== -1) {
newBody = newBody.replace('</head>', injectScript + '</head>');
}
else if (newBody.indexOf('<div id="app">') !== -1) {
newBody = newBody.replace('<div id="app">', '<div id="app">' + injectScript);
}
else if (newBody.indexOf('<body') !== -1) {
newBody = newBody.replace(/<body([^>]*)>/, '<body$1>' + injectScript);
}
else if (newBody.indexOf('/init.js') !== -1) {
newBody = newBody.replace('/init.js', injectScript + '/init.js');
}
else {
newBody = newBody + injectScript;
}
$done({ body: newBody });
} else {
$done({});
}
}
