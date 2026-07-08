/**********************************************
 * Butterfly 去广告 + VIP模拟脚本
 * 目标网站: https://d18v10algpi965.cloudfront.net
 * App: com.abc.Butterfly v2.2.0 (iOS H5)
 * 功能: 净化全部广告 + 模拟VIP响应
 *
 * 原理:
 *   1. API响应为加密格式 {"code":200,"data":"<base64>","hash":true}
 *   2. App前端JS解密data字段后通过JSON.parse解析
 *   3. 本脚本注入JS,hook JSON.parse拦截解密后的数据并修改
 *   4. 同时拦截fetch/XHR阻止广告请求,移除广告DOM元素
 *
 * 双模式:
 *   - script-request-header: 删除If-None-Match/If-Modified-Since,强制200返回完整HTML
 *   - script-response-body: 注入去广告JS到HTML
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

    // ========== 广告域名黑名单 ==========
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
                if (!Array.isArray(result)) {
                    var keys = Object.keys(result).slice(0, 15).join(',');
                    if (window.console) console.log('[Butterfly] JSON.parse keys:', keys);
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

                // ===== 递归处理: 禁用广告配置 + 过滤广告数组 =====
                recursiveProcess(result, 0);

            } catch(e) { if (window.console) console.log('[Butterfly] parse error:', e); }
        }

        return result;
    };

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
            'guideAd', 'guideAdSwitch'
        ];

        for (var i = 0; i < adFlags.length; i++) {
            var key = adFlags[i];
            if (key in obj) {
                // 布尔值 → false
                if (typeof obj[key] === 'boolean') obj[key] = false;
                // 数字 → 0
                else if (typeof obj[key] === 'number') obj[key] = 0;
                // 对象 → 置空enabled/show
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
        var splashKeys = ['splash', 'splashAd', 'splashConfig', 'splashData', 'splashInfo', 'openScreen', 'openScreenAd', 'launchAd', 'bootAd'];
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
    }

    // ========== 广告项检测函数 (更激进) ==========
    function isAdItem(item) {
        if (!item || typeof item !== 'object') return false;

        // 1. 检查广告标识字段 (存在即判定为广告)
        var adKeys = [
            'adType', 'adId', 'adUrl', 'isAd', 'adBanner', 'adImage', 'adLink',
            'adCode', 'adPosition', 'adSource', 'adImg', 'adTitle', 'adDesc',
            'adPic', 'adVideo', 'adAction', 'adTarget', 'adSpace', 'adSlot',
            'adPlace', 'adPlatform', 'adNetwork', 'adProvider', 'advertiser',
            'isAdvertisement', 'isPromote', 'isBanner', 'isSplash', 'isPopup',
            'showType', 'adShowType', 'itemType', 'contentType'
        ];
        for (var j = 0; j < adKeys.length; j++) {
            if (adKeys[j] in item) {
                // showType/itemType/contentType 需要额外检查值
                if (adKeys[j] === 'showType' || adKeys[j] === 'adShowType' || adKeys[j] === 'itemType' || adKeys[j] === 'contentType') {
                    var sv = String(item[adKeys[j]]);
                    if (sv === '99' || sv === '98' || sv === 'ad' || sv === 'banner' || sv === 'splash' || sv === 'popup' || sv === 'promote') return true;
                    // 如果不是广告类型,继续检查其他字段
                } else {
                    return true;
                }
            }
        }

        // 2. 检查type字段
        if ('type' in item) {
            var t = String(item.type).toLowerCase();
            if (['ad', 'banner', 'splash', 'popup', 'promote', 'promotion', 'advert', 'advertisement', 'sponsor', 'insert', 'float', 'marquee', 'notice'].indexOf(t) !== -1) return true;
            // 数字类型 98/99
            if (item.type === 99 || item.type === 98 || item.type === '99' || item.type === '98') return true;
        }

        // 3. 检查moduleType字段
        if ('moduleType' in item) {
            var mt = String(item.moduleType).toLowerCase();
            if (['ad', 'banner', 'splash', 'popup', 'promote', 'promotion', 'sponsor'].indexOf(mt) !== -1) return true;
        }

        // 4. 检查name/title等文本字段中的广告关键词
        var nameFields = ['name', 'title', 'titleName', 'moduleName', 'desc', 'description', 'label', 'tag'];
        var adKeywords = ['广告', '推广', '赞助', 'sponsor', 'advert', ' promotion', '推广位', '广告位'];
        for (var k = 0; k < nameFields.length; k++) {
            if (nameFields[k] in item && typeof item[nameFields[k]] === 'string') {
                var nv = item[nameFields[k]].toLowerCase();
                for (var kw = 0; kw < adKeywords.length; kw++) {
                    if (nv.indexOf(adKeywords[kw]) !== -1) return true;
                }
            }
        }

        // 5. 检查URL字段是否指向广告域名
        var urlFields = ['link', 'url', 'jumpUrl', 'redirectUrl', 'icon', 'imgUrl', 'imageUrl', 'picUrl', 'coverUrl', 'thumbnail', 'logo', 'actionUrl', 'clickUrl', 'h5Url', 'webUrl'];
        for (var m = 0; m < urlFields.length; m++) {
            if (urlFields[m] in item && typeof item[urlFields[m]] === 'string') {
                if (isAdUrl(item[urlFields[m]])) return true;
            }
        }

        // 6. 检查是否有jumpType/action为广告跳转
        if ('jumpType' in item || 'action' in item || 'actionType' in item) {
            var jt = String(item.jumpType || item.action || item.actionType || '').toLowerCase();
            if (jt === 'ad' || jt === 'advert' || jt === 'web' && ('adUrl' in item || 'adLink' in item)) return true;
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

    // ========== 3. 拦截XMLHttpRequest 阻止广告请求 + 响应处理 ==========
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
                // 如果响应包含加密包装,尝试处理
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
    // Vue应用通常使用axios,hook其响应拦截器作为后备
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
    // 立即尝试 + 延迟尝试 (axios可能尚未加载)
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
                if (window.console) console.log('[Butterfly] Vue.$axios拦截器已hook');
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
    var _locationDesc = Object.getOwnPropertyDescriptor(window, 'location');
    // 通过监听beforeunload来阻止广告跳转 (兼容方案)
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

        // 开屏广告/启动广告 (视频/图片/容器)
        document.querySelectorAll(
            '[class*="splash"], [class*="Splash"], [id*="splash"], [id*="Splash"],' +
            '[class*="launch-ad"], [class*="LaunchAd"], [class*="boot-ad"], [class*="BootAd"],' +
            '[class*="open-screen"], [class*="OpenScreen"], [class*="openScreen"],' +
            '[class*="startup-ad"], [class*="StartupAd"]'
        ).forEach(function(el) { el.remove(); });

        // 广告横幅/卡片
        document.querySelectorAll(
            '[class*="ad-banner"], [class*="adBanner"], [class*="ad_card"], [class*="adCard"],' +
            '[class*="banner-ad"], [class*="ad-container"], [class*="adContainer"],' +
            '[class*="ad-wrapper"], [class*="adWrapper"], [class*="ad-item"], [class*="adItem"],' +
            '[class*="ad-box"], [class*="adBox"], [class*="ad-slot"], [class*="adSlot"],' +
            '[class*="ad-feed"], [class*="adFeed"], [class*="ad-cell"], [class*="adCell"],' +
            '[class*="ad-list"], [class*="adList"], [class*="ad-row"], [class*="adRow"]'
        ).forEach(function(el) { el.style.display = 'none'; });

        // 全屏视频广告/插屏广告
        document.querySelectorAll(
            '[class*="fullscreen-video-ad"], [class*="FullscreenVideoAd"], [class*="fullScreenAd"],' +
            '[class*="video-ad"], [class*="VideoAd"], [class*="interstitial"], [class*="Interstitial"],' +
            '[class*="insert-ad"], [class*="InsertAd"], [class*="insertAd"]'
        ).forEach(function(el) { el.remove(); });

        // 广告弹窗/浮窗
        document.querySelectorAll(
            '[class*="ad-popup"], [class*="adPopup"], [class*="popup-ad"],' +
            '[class*="ad-dialog"], [class*="adDialog"], [class*="ad-modal"], [class*="adModal"],' +
            '[class*="floating-ad"], [class*="FloatingAd"], [class*="floatingAd"],' +
            '[class*="float-ad"], [class*="floatAd"], [class*="ad-float"], [class*="adFloat"]'
        ).forEach(function(el) { el.remove(); });

        // 推广/赞助
        document.querySelectorAll(
            '[class*="promote"], [class*="Promote"], [class*="promotion"], [class*="Promotion"],' +
            '[class*="sponsor"], [class*="Sponsor"]'
        ).forEach(function(el) { el.style.display = 'none'; });

        // 广告注入的iframe/script
        document.querySelectorAll(
            'iframe[src*="eqfx9bas"], iframe[src*="yihaici"], iframe[src*="epuf3tk"],' +
            'iframe[src*="speedfan"], iframe[src*="u7d2w"],' +
            'script[src*="eqfx9bas"], script[src*="yihaici"], script[src*="epuf3tk"]'
        ).forEach(function(el) { el.remove(); });

        // 赌博/代理广告
        document.querySelectorAll(
            '[class*="gamble"], [class*="Gamble"], [class*="agent-ad"], [class*="proxy-ad"]'
        ).forEach(function(el) { el.style.display = 'none'; });

        // 通用: 检查所有video元素,移除广告视频
        document.querySelectorAll('video[src*="splash-"], video[src*="ad-"]').forEach(function(el) { el.remove(); });

        // 通用: 检查所有img元素,移除广告图片
        document.querySelectorAll('img[src*="ad-card-bg"], img[src*="buyGold"], img[src*="ad-banner"]').forEach(function(el) { el.style.display = 'none'; });

        // 通用: 检查所有带ad属性的元素
        document.querySelectorAll('[data-ad], [data-ad-type], [data-ad-id], [ad-type], [ad-id]').forEach(function(el) { el.style.display = 'none'; });

        // 弹窗遮罩层 (如果只剩遮罩没有内容,移除)
        document.querySelectorAll('[class*="mask"], [class*="Mask"], [class*="overlay"], [class*="Overlay"]').forEach(function(el) {
            if (el.children.length === 0 && getComputedStyle(el).position === 'fixed') {
                el.style.display = 'none';
            }
        });
    }

    // 使用MutationObserver持续监控
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
        [class*="splash-ad"], [class*="splashAd"], [class*="SplashAd"],
        /* 广告容器 */
        [class*="ad-container"], [class*="adContainer"], [class*="ad-wrapper"],
        [class*="google-ad"], [class*="adsbygoogle"] {
            display: none !important;
        }
    \`;
    (document.head || document.documentElement).appendChild(style);

    // ========== 9. 拦截addEventListener 阻止广告SDK初始化 ==========
    // 阻止 eqfx9bas 广告SDK的脚本加载
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

    if (window.console) console.log('[Butterfly] 去广告+VIP模拟脚本已加载 v2.0');
})();
</script>
`;

// ========== 注入脚本到HTML页面 ==========
if (body && (url.indexOf('d18v10algpi965.cloudfront.net') !== -1)) {
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

    $done({ body: newBody });
} else {
    $done({});
}

} // 结束 script-response-body 模式
