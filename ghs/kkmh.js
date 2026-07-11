/**********************************************

脚本功能：快看漫画——解锁—金币视频—VIP视频-去广告-漫画无解
特别说明：开启脚本即可在线观看视频
特别说明：必须开启HTTP抓包,并且关闭其他的脚本
更新时间：2026—7-11
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️ 

 **********************************************/

// ========== 模式1: script-request-header ==========
// 删除浏览器缓存头,防止304导致无法注入
if (typeof $response === 'undefined' || !$response) {
    var reqHeaders = $request.headers || {};
    // 删除所有大小写变体
    var keysToDelete = ['If-None-Match', 'If-Modified-Since', 'if-none-match', 'if-modified-since', 'IF-NONE-MATCH', 'IF-MODIFIED-SINCE'];
    for (var i = 0; i < keysToDelete.length; i++) {
        if (reqHeaders[keysToDelete[i]]) {
            delete reqHeaders[keysToDelete[i]];
        }
    }
    // 遍历删除所有包含If-None-Match/If-Modified-Since的key (不区分大小写)
    for (var k in reqHeaders) {
        if (k.toLowerCase() === 'if-none-match' || k.toLowerCase() === 'if-modified-since') {
            delete reqHeaders[k];
        }
    }
    // 强制设置不缓存的请求头
    reqHeaders['Cache-Control'] = 'no-cache, no-store, must-revalidate';
    reqHeaders['Pragma'] = 'no-cache';
    reqHeaders['Expires'] = '0';
    
    $done({ headers: reqHeaders });
}
// ========== 模式2: script-response-body ==========
else {

const url = $request.url;
const body = $response.body;

// ========== 注入的JS代码 (IIFE) ==========
const injectScript = `
<script>
(function() {
    'use strict';

    // ========== 配置 ==========
    var VIP_LEVEL = 9;
    var VIP_EXPIRE = "2099-12-31T23:59:59Z";
    var VIP_NAME = "\\u81f3\\u5c0aVIP";
    var COIN_AMOUNT = 999999;
    var INTEGRAL_AMOUNT = 999999;
    var DEBUG_MODE = false; // 调试模式，生产环境关闭

    // ========== 广告域名黑名单 (基于d3sjt6i1mx4tjc抓包分析) ==========
    var adDomains = [
        // 事件追踪上报域名
        'api-dc-prod-008.cyou',
        'api-dc2-prod-08.cyou',
        // 事件追踪CDN域名
        'd3k4e7spixznr4.cloudfront.net',
        // 事件追踪IP (AWS新加坡等)
        '13.212.103.98',
        '47.129.175.127',
        '54.255.68.213',
        '54.169.217.47',
        '52.221.252.171',
        '54.255.167.20',
        '54.179.7.38'
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
        // 弹窗广告背景图
        if (lower.indexOf('popup-bg-') !== -1) return true;
        // 启动页广告
        if (lower.indexOf('splash-') !== -1 && (lower.indexOf('.webp') !== -1 || lower.indexOf('.png') !== -1 || lower.indexOf('.jpg') !== -1)) return true;
        // App源码确认的广告API
        if (lower.indexOf('/ads/click') !== -1) return true;
        if (lower.indexOf('/recreation/click') !== -1) return true;
        // 广告弹窗JS (VideoGoldPopupAdv)
        if (lower.indexOf('videogoldpopupadv') !== -1) return true;
        return false;
    }

    // ========== 1. 拦截JSON.parse 修改解密后的API数据 ==========
    var _parse = JSON.parse;
    JSON.parse = function(text) {
        var result = _parse.apply(this, arguments);

        // 跳过加密外层包装 {code:200, data:"...", hash:true}
        if (result && typeof result === 'object' && !Array.isArray(result) && result.hash === true && typeof result.data === 'string') {
            return result;
        }

        if (result && typeof result === 'object') {
            try {
                // 调试: 打印解密后的数据结构 (帮助识别广告字段)
                if (!Array.isArray(result) && DEBUG_MODE) {
                    var keys = Object.keys(result).slice(0, 15).join(',');
                    if (window.console) console.log('[AdBlock] JSON.parse keys:', keys);
                }
                // ===== VIP模拟 (特定字段检测) =====
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

                // ===== 钱包模拟 =====
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

                // ===== VIP试用倒计时 =====
                if (!Array.isArray(result) && ('tiroCountdown' in result || 'tiroExpire' in result || 'tiroStatus' in result)) {
                    result.tiroCountdown = 0;
                    result.tiroExpire = "1970-01-01T00:00:00Z";
                    if ('tiroStatus' in result) result.tiroStatus = 0;
                    if ('countdown' in result) result.countdown = 0;
                    if ('canUse' in result) result.canUse = false;
                }

                // ===== 红包弹窗关闭 =====
                if (!Array.isArray(result) && 'canClick' in result && ('prizeAmount' in result || 'redPacket' in result)) {
                    result.canClick = false;
                    result.enabled = false;
                    if ('show' in result) result.show = false;
                }

                // ===== VIP产品列表 =====
                if (!Array.isArray(result) && 'list' in result && 'isNewUser' in result) {
                    result.isNewUser = false;
                }

                // ===== 清空广告列表 (App源码确认: appConfig.adsInfoList是广告数据源) =====
                clearAdsInfoList(result);

                // ===== 递归处理: 禁用广告配置 + 过滤广告数组 =====
                recursiveProcess(result, 0);

            } catch(e) { if (window.console) console.log('[AdBlock] parse error:', e); }
        }

        return result;
    };

    // ========== 清空广告列表 (App源码确认: adsInfoList是广告数据源) ==========
    function clearAdsInfoList(obj) {
        if (!obj || typeof obj !== 'object') return;
        // 直接清空 adsInfoList
        if ('adsInfoList' in obj) {
            obj.adsInfoList = [];
        }
        // 递归查找嵌套的 adsInfoList
        for (var key in obj) {
            if (!obj.hasOwnProperty(key)) continue;
            var val = obj[key];
            if (val && typeof val === 'object') {
                if ('adsInfoList' in val) {
                    val.adsInfoList = [];
                }
                // 继续递归
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

    // ========== 递归处理函数: 深度遍历所有嵌套对象/数组 ==========
    function recursiveProcess(obj, depth) {
        if (depth > 10 || !obj || typeof obj !== 'object') return;

        if (Array.isArray(obj)) {
            // 过滤数组中的广告项
            for (var i = obj.length - 1; i >= 0; i--) {
                if (obj[i] && typeof obj[i] === 'object') {
                    if (isAdItem(obj[i])) {
                        obj.splice(i, 1); // 删除广告项
                    } else {
                        recursiveProcess(obj[i], depth + 1);
                    }
                }
            }
        } else {
            // 对象: 先禁用广告配置,再递归处理子属性
            disableAdConfig(obj);

            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    var val = obj[key];
                    if (val && typeof val === 'object') {
                        if (Array.isArray(val)) {
                            // 过滤数组中的广告
                            for (var j = val.length - 1; j >= 0; j--) {
                                if (val[j] && typeof val[j] === 'object' && isAdItem(val[j])) {
                                    val.splice(j, 1);
                                }
                            }
                            // 递归处理剩余项
                            recursiveProcess(val, depth + 1);
                        } else {
                            recursiveProcess(val, depth + 1);
                        }
                    }
                }
            }
        }
    }

    // ========== 禁用广告配置标志 ==========
    function disableAdConfig(obj) {
        if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return;

        // App源码确认: adsInfoList是广告数据源,清空它
        if ('adsInfoList' in obj) {
            obj.adsInfoList = [];
        }
        // homeAdvFirst是store状态,控制首页广告优先
        if ('homeAdvFirst' in obj) obj.homeAdvFirst = false;

        // 广告开关字段 → 全部关闭
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
            'guideAd', 'guideAdSwitch',
            // 抓包确认的广告位字段
            'adSlotKey', 'adSlotName', 'adSlot', 'adId', 'creativeId', 'adType'
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

        // 开屏/splash相关配置 → 清空
        var splashKeys = ['splash', 'splashAd', 'splashConfig', 'splashData', 'splashInfo', 'openScreen', 'openScreenAd', 'launchAd', 'bootAd', 'splashAdv', 'splash_adv'];
        for (var s = 0; s < splashKeys.length; s++) {
            if (splashKeys[s] in obj) {
                obj[splashKeys[s]] = null;
            }
        }

        // 红包/活动弹窗 → 关闭
        if ('redPacket' in obj && obj.redPacket && typeof obj.redPacket === 'object') {
            obj.redPacket.canClick = false;
            obj.redPacket.enabled = false;
            obj.redPacket.show = false;
        }
        if ('redpacket' in obj && obj.redpacket && typeof obj.redpacket === 'object') {
            obj.redpacket.canClick = false;
            obj.redpacket.enabled = false;
            obj.redpacket.show = false;
        }
    }

    // ========== 广告项检测函数 ==========
    function isAdItem(item) {
        if (!item || typeof item !== 'object') return false;

        // 1. type === "adv" → 广告
        if (item.type === 'adv' || item.type === 'ADV') return true;

        // 2. position 字段存在且非空 → 广告
        if ('position' in item && item.position != null && item.position !== '' && item.position !== 0 && item.position !== false) return true;

        // 3. advertising_key 存在 → 广告
        if ('advertising_key' in item && item.advertising_key) return true;

        // 4. URL字段指向广告域名 → 广告
        var urlFields = ['link', 'url', 'jumpUrl', 'redirectUrl', 'href', 'actionUrl', 'clickUrl', 'h5Url', 'webUrl'];
        for (var m = 0; m < urlFields.length; m++) {
            if (urlFields[m] in item && typeof item[urlFields[m]] === 'string') {
                if (isAdUrl(item[urlFields[m]])) return true;
            }
        }

        // 5. 悬浮广告特征检测
        if ('type' in item && (item.type === 'float' || item.type === 'popup' || item.type === 'dialog')) {
            return true;
        }
        
        // 6. 抓包确认的广告位特征检测
        // ad_slot_key 存在 → 广告数据
        if ('ad_slot_key' in item || 'adSlotKey' in item) return true;
        // ad_id 存在且 ad_type 存在 → 广告数据
        if (('ad_id' in item || 'adId' in item) && ('ad_type' in item || 'adType' in item)) return true;
        // creative_id 存在 → 广告创意
        if ('creative_id' in item || 'creativeId' in item) return true;
        
        // 7. 活动类型检测
        var activityTypes = ['redRain', 'prize', 'lottery', 'worldCup', 'football', 'match', 'innovation', 'tech'];
        for (var n = 0; n < activityTypes.length; n++) {
            if (item.type === activityTypes[n] || (item.activityType && item.activityType === activityTypes[n])) {
                return true;
            }
        }

        return false;
    }

    // ========== 2. 拦截fetch 阻止广告请求 ==========
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

    // ========== 3. 拦截XMLHttpRequest 阻止广告请求 ==========
    var _open = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, reqUrl) {
        if (isAdUrl(reqUrl)) {
            arguments[1] = 'data:application/json,{}';
        }
        return _open.apply(this, arguments);
    };

    // Hook XHR responseText getter - 拦截解密后的响应数据
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
                            // 这是加密包装,让app正常解密
                            // 但我们hook了JSON.parse,解密后的数据会被处理
                        }
                    } catch(e) {}
                }
                return text;
            },
            configurable: true
        });
    }

    // ========== 3.5 Hook axios响应拦截器 ==========
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
            if (window.console && DEBUG_MODE) console.log('[AdBlock] axios拦截器已hook');
        }
    }
    hookAxios();
    setTimeout(hookAxios, 100);
    setTimeout(hookAxios, 500);
    setTimeout(hookAxios, 2000);

    // ========== 3.6 Hook Vue.prototype.$axios (如果存在) ==========
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
                if (window.console && DEBUG_MODE) console.log('[AdBlock] Vue.$axios拦截器已hook');
            }
        }
    }
    setTimeout(hookVueAxios, 500);
    setTimeout(hookVueAxios, 2000);

    // ========== 4. 拦截window.open 阻止广告跳转 ==========
    var _windowOpen = window.open;
    window.open = function(u) {
        if (isAdUrl(u)) return null;
        return _windowOpen.apply(this, arguments);
    };

    // ========== 5. 拦截location跳转 阻止广告重定向 ==========
    var _assign = window.location.assign.bind(window.location);
    var _replace = window.location.replace.bind(window.location);
    window.location.assign = function(u) {
        if (!isAdUrl(u)) return _assign(u);
    };
    window.location.replace = function(u) {
        if (!isAdUrl(u)) return _replace(u);
    };

    // ========== 6. 拦截Service Worker注册 阻止广告缓存 ==========
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

    // ========== 7. DOM监听 移除广告元素 ==========
    function removeAdElements() {
        if (!document.body) return;

        // 开屏广告
        document.querySelectorAll(
            '[class*="splash"], [class*="Splash"], [id*="splash"], [id*="Splash"],' +
            '.splash_adv, .splashVideo, #splashVideo, .splash-loading-img,' +
            '[class*="launch-ad"], [class*="boot-ad"], [class*="open-screen"],' +
            '[class*="startup-ad"]'
        ).forEach(function(el) { el.remove(); });

        // 广告轮播/列表项
        document.querySelectorAll(
            '.adv-swiper-slide, [class*="adv-swiper"], [class*="advTitle"],' +
            '[class*="adv-card"], [class*="adv-item"], [class*="adv-list"],' +
            '[class*="adv-banner"], [class*="adv-container"], [class*="adv-wrapper"],' +
            '[class*="ad-banner"], [class*="adBanner"], [class*="ad_card"], [class*="adCard"],' +
            '[class*="banner-ad"], [class*="ad-container"], [class*="adContainer"],' +
            '[class*="ad-wrapper"], [class*="ad-item"], [class*="ad-box"], [class*="ad-slot"]'
        ).forEach(function(el) { el.style.display = 'none'; });

        // 全屏视频广告/插屏广告
        document.querySelectorAll(
            '[class*="fullscreen-video-ad"], [class*="fullScreenAd"],' +
            '[class*="video-ad"], [class*="interstitial"], [class*="insert-ad"]'
        ).forEach(function(el) { el.remove(); });

        // 广告弹窗/浮窗
        document.querySelectorAll(
            '[class*="ad-popup"], [class*="adPopup"], [class*="popup-ad"],' +
            '[class*="ad-dialog"], [class*="ad-modal"],' +
            '[class*="floating-ad"], [class*="float-ad"], [class*="ad-float"],' +
            '[class*="float"], [class*="popup"], [class*="dialog"],' +
            '[class*="redRain"], [class*="\\u7ea2\\u5305"], [class*="prize"], [class*="lottery"],' +
            '[class*="worldCup"], [class*="\\u4e16\\u754c\\u676f"]'
        ).forEach(function(el) { el.remove(); });

        // 金币弹窗广告 (抓包确认: VideoGoldPopupAdv)
        document.querySelectorAll(
            '[class*="VideoGoldPopupAdv"], [class*="gold-popup"], [class*="GoldPopup"],' +
            '[class*="gold-adv"], [class*="goldAdv"]'
        ).forEach(function(el) { el.remove(); });

        // 推广/赞助
        document.querySelectorAll(
            '[class*="promote"], [class*="Promote"], [class*="promotion"], [class*="Promotion"],' +
            '[class*="sponsor"], [class*="Sponsor"]'
        ).forEach(function(el) { el.style.display = 'none'; });

        // 广告注入的iframe/script
        document.querySelectorAll(
            'iframe[src*="eventTracking"], iframe[src*="batchReport"],' +
            'script[src*="eventTracking"], script[src*="batchReport"]'
        ).forEach(function(el) { el.remove(); });

        // 广告视频/图片
        document.querySelectorAll('video[src*="splash-"], video[src*="ad-"]').forEach(function(el) { el.remove(); });
        document.querySelectorAll('img[src*="ad-card-bg"], img[src*="buyGold"], img[src*="ad-banner"], img[src*="popup-bg"]').forEach(function(el) { el.style.display = 'none'; });

        // 带ad属性的元素
        document.querySelectorAll('[data-ad], [data-ad-type], [data-ad-id]').forEach(function(el) { el.style.display = 'none'; });

        // 弹窗遮罩层 (空遮罩移除)
        document.querySelectorAll('[class*="mask"], [class*="overlay"]').forEach(function(el) {
            if (el.children.length === 0 && getComputedStyle(el).position === 'fixed') {
                el.style.display = 'none';
            }
        });

        // 隐藏带isAdv标记的corner-tag (广告角标)
        document.querySelectorAll('.corner-tag.isAdv, .corner-tag[class*="isAdv"]').forEach(function(el) {
            el.style.display = 'none';
        });

        // 导航站广告项 (抓包确认: ad_slot_name="导航站-精品软件")
        document.querySelectorAll('[class*="app-list"], [class*="appList"], [class*="navigation"]').forEach(function(el) {
            var text = el.textContent || el.innerText || '';
            if (text.indexOf('\\u7cbe\\u54c1\\u8f6f\\u4ef6') !== -1 || text.indexOf('\\u5e7f\\u544a') !== -1) {
                el.style.display = 'none';
            }
        });
    }

    // 使用MutationObserver持续监控（性能优化版本）
    if (window.MutationObserver) {
        var observer = new MutationObserver(function(mutations) {
            if (!removeAdElements.throttle) {
                removeAdElements.throttle = true;
                setTimeout(function() {
                    removeAdElements();
                    removeAdElements.throttle = false;
                }, 100);
            }
        });
        var startObserve = function() {
            if (document.body) {
                observer.observe(document.body, { 
                    childList: true, 
                    subtree: true, 
                    attributes: false,
                    characterData: false
                });
                removeAdElements();
            } else {
                setTimeout(startObserve, 100);
            }
        };
        startObserve();
    } else {
        setInterval(removeAdElements, 1000);
    }

    // ========== 8. 隐藏VIP购买提示 + 广告样式 ==========
    var style = document.createElement('style');
    style.textContent = \`
        /* VIP购买提示 */
        [class*="vip-guide"], [class*="VipGuide"], [class*="vipGuide"],
        [class*="buy-vip"], [class*="buyVip"], [class*="BuyVip"],
        [class*="vip-expire"], [class*="vipExpire"],
        [class*="upgrade-vip"], [class*="upgradeVip"],
        [class*="vip-banner"], [class*="vipBanner"],
        [class*="recharge-banner"], [class*="rechargeBanner"],
        [class*="first-charge"], [class*="firstCharge"],
        /* 原价标签 */
        [class*="origin-price"], [class*="originPrice"],
        /* 开屏广告 */
        .splash_adv, .splashVideo, #splashVideo, .splash-loading-img,
        [class*="splash-ad"], [class*="splashAd"], [class*="SplashAd"],
        /* 广告轮播/卡片 */
        .adv-swiper-slide, [class*="adv-swiper"], [class*="advTitle"],
        [class*="adv-card"], [class*="adv-item"], [class*="adv-list"],
        [class*="adv-banner"], [class*="adv-container"], [class*="adv-wrapper"],
        /* 广告容器 */
        [class*="ad-container"], [class*="adContainer"], [class*="ad-wrapper"],
        [class*="google-ad"], [class*="adsbygoogle"],
        /* 抓包确认的弹窗广告 */
        [class*="VideoGoldPopupAdv"], [class*="gold-popup-adv"],
        /* 广告角标 */
        .corner-tag.isAdv {
            display: none !important;
        }
    \`;
    (document.head || document.documentElement).appendChild(style);

    // ========== 9. 拦截addEventListener 阻止广告SDK初始化 ==========
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
                            return; // 阻止设置广告脚本src
                        }
                        _src.set.call(el, val);
                    },
                    configurable: true
                });
            }
        }
        return el;
    };

    if (window.console && DEBUG_MODE) console.log('[AdBlock] 去广告+VIP模拟脚本已加载 v1.0 (d3sjt6i1mx4tjc)');
})();
</script>
`;

// ========== 注入脚本到HTML页面 ==========
// 只对HTML文件注入，避免破坏JS/CSS文件
if (body && (url.indexOf('d3sjt6i1mx4tjc.cloudfront.net') !== -1)) {
    // 检查是否为HTML文件（通过响应头判断）
    var contentType = $response.headers['Content-Type'] || $response.headers['content-type'] || '';
    if (contentType.indexOf('html') === -1 && contentType.indexOf('text/html') === -1) {
        $done({ body: body });
        return;
    }

    // Enhanced file type detection - 更严格的HTML检测
    if (url.match(/\.(js|css|png|jpg|jpeg|gif|svg|json|xml|pdf|mp4|mp3|woff|woff2|ttf|eot|ico|woff|ttf|map|webp|ico|cur)$/i)) {
        $done({ body: body });
        return;
    }
    // 检查Content-Type确保是HTML
    if (contentType.indexOf('text/html') === -1 && contentType.indexOf('html') === -1) {
        $done({ body: body });
        return;
    }
    // 检查响应内容是否为HTML
    if (body && body.indexOf('<html') === -1 && body.indexOf('<!DOCTYPE') === -1) {
        $done({ body: body });
        return;
    }

    var newBody = body;

    // 在</head>前注入 (最优先)
    if (newBody.indexOf('</head>') !== -1) {
        newBody = newBody.replace('</head>', injectScript + '</head>');
    }
    // 在<div id="app">后注入
    else if (newBody.indexOf('<div id="app">') !== -1) {
        newBody = newBody.replace('<div id="app">', '<div id="app">' + injectScript);
    }
    // 在<body>后注入
    else if (newBody.indexOf('<body') !== -1) {
        newBody = newBody.replace(/<body([^>]*)>/, '<body$1>' + injectScript);
    }
    // 在/init.js前注入
    else if (newBody.indexOf('/init.js') !== -1) {
        newBody = newBody.replace('/init.js', injectScript + '/init.js');
    }
    // 末尾追加
    else {
        newBody = newBody + injectScript;
    }

    // 强制设置不缓存的响应头
    var headers = $response.headers || {};
    headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
    headers['Pragma'] = 'no-cache';
    headers['Expires'] = '0';

    $done({ body: newBody, headers: headers });
} else {
    $done({});
}

} // 结束 script-response-body 模式
