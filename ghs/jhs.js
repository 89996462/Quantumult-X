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
 **********************************************/

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

        if (result && typeof result === 'object' && !Array.isArray(result)) {
            try {
                // ===== 用户信息 mine/info - VIP模拟 =====
                if ('isVip' in result || 'vipLevel' in result || 'vipExpireDate' in result || 'snapVip' in result) {
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

                // ===== 钱包信息 mine/wallet - 金币/积分模拟 =====
                if (('amount' in result && 'integral' in result) || ('fruitCoin' in result) || ('coin' in result && 'integral' in result)) {
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

                // ===== VIP试用倒计时 vip/tiroCountdown - 设为已过期 =====
                if ('tiroCountdown' in result || 'tiroExpire' in result || 'countdown' in result || 'tiroStatus' in result) {
                    result.tiroCountdown = 0;
                    result.tiroExpire = "1970-01-01T00:00:00Z";
                    if ('tiroStatus' in result) result.tiroStatus = 0;
                    if ('countdown' in result) result.countdown = 0;
                    if ('canUse' in result) result.canUse = false;
                }

                // ===== 红包/活动弹窗 - 关闭 =====
                if ('canClick' in result && ('prizeAmount' in result || 'redPacket' in result)) {
                    result.canClick = false;
                    result.enabled = false;
                    if ('show' in result) result.show = false;
                }

                // ===== VIP产品列表 - 标记为已购买 =====
                if ('list' in result && 'isNewUser' in result) {
                    result.isNewUser = false;
                }

                // ===== 模块列表 modules/list - 过滤广告模块 =====
                if (result.homePage && Array.isArray(result.homePage)) {
                    result.homePage = filterAdArray(result.homePage);
                }
                if (result.modules && Array.isArray(result.modules)) {
                    result.modules = filterAdArray(result.modules);
                }
                if (result.list && Array.isArray(result.list)) {
                    // 针对模块列表中的广告
                    var filtered = filterAdArray(result.list);
                    if (filtered.length > 0) result.list = filtered;
                }

                // ===== 娱乐/内容列表 recreation/list_v2 - 过滤广告条目 =====
                if (result.data && Array.isArray(result.data)) {
                    result.data = filterAdArray(result.data);
                }
                if (result.records && Array.isArray(result.records)) {
                    result.records = filterAdArray(result.records);
                }
                if (result.items && Array.isArray(result.items)) {
                    result.items = filterAdArray(result.items);
                }

                // ===== 签到任务 task/sign - 保持正常 =====
                // ===== 证书二维码 mine/certificate/qr - 不修改 =====
                // ===== 货币汇率 mine/currencys - 不修改 =====

            } catch(e) { if (window.console) console.log('[Butterfly] parse error:', e); }
        }

        // 处理数组类型 (解密后的数组数据)
        if (result && Array.isArray(result)) {
            var filtered = filterAdArray(result);
            if (filtered.length > 0 || result.length === 0) {
                return filtered;
            }
        }

        return result;
    };

    // ========== 广告过滤函数 ==========
    function filterAdArray(arr) {
        if (!Array.isArray(arr)) return arr;
        var filtered = [];
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            if (item && typeof item === 'object') {
                if (!isAdItem(item)) {
                    filtered.push(item);
                }
            } else {
                filtered.push(item);
            }
        }
        return filtered;
    }

    function isAdItem(item) {
        if (!item || typeof item !== 'object') return false;
        // 检查广告标识字段
        var adKeys = ['adType', 'adId', 'adUrl', 'isAd', 'adBanner', 'adImage', 'adLink', 'adCode', 'adPosition', 'adSource'];
        for (var j = 0; j < adKeys.length; j++) {
            if (adKeys[j] in item) return true;
        }
        // 检查type字段
        if ('type' in item) {
            var t = String(item.type).toLowerCase();
            if (t === 'ad' || t === 'banner' || t === 'splash' || t === 'popup' || t === 'promote' || t === 'promotion') return true;
        }
        // 检查showType字段 (showType=98/99通常是广告)
        if ('showType' in item && (item.showType === 99 || item.showType === 98 || item.showType === '99' || item.showType === '98')) return true;
        // 检查name/title中包含广告关键词
        var nameFields = ['name', 'title', 'titleName', 'moduleName'];
        for (var k = 0; k < nameFields.length; k++) {
            if (nameFields[k] in item && typeof item[nameFields[k]] === 'string') {
                var nv = item[nameFields[k]].toLowerCase();
                if (nv.indexOf('广告') !== -1 || nv.indexOf('ad ') !== -1 || nv.indexOf('推广') !== -1 || nv.indexOf('sponsor') !== -1) return true;
            }
        }
        // 检查link/url是否指向广告域名
        var urlFields = ['link', 'url', 'jumpUrl', 'redirectUrl', 'icon', 'imgUrl', 'imageUrl'];
        for (var m = 0; m < urlFields.length; m++) {
            if (urlFields[m] in item && typeof item[urlFields[m]] === 'string') {
                if (isAdUrl(item[urlFields[m]])) return true;
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

        // 移除开屏广告
        document.querySelectorAll('[class*="splash"], [class*="Splash"], [id*="splash"], [id*="Splash"]').forEach(function(el) { el.remove(); });

        // 移除广告横幅 (仅含ad关键字的)
        document.querySelectorAll('[class*="ad-banner"], [class*="adBanner"], [class*="ad_card"], [class*="adCard"], [class*="banner-ad"]').forEach(function(el) { el.style.display = 'none'; });

        // 移除全屏视频广告
        document.querySelectorAll('[class*="fullscreen-video-ad"], [class*="FullscreenVideoAd"], [class*="fullScreenAd"], [class*="video-ad"]').forEach(function(el) { el.remove(); });

        // 移除广告弹窗
        document.querySelectorAll('[class*="ad-popup"], [class*="adPopup"], [class*="popup-ad"]').forEach(function(el) { el.remove(); });

        // 移除推广链接
        document.querySelectorAll('[class*="promote"], [class*="Promote"], [class*="promotion"], [class*="Promotion"]').forEach(function(el) { el.style.display = 'none'; });

        // 移除广告注入的iframe/script
        document.querySelectorAll('iframe[src*="eqfx9bas"], iframe[src*="yihaici"], iframe[src*="epuf3tk"], iframe[src*="speedfan"], script[src*="eqfx9bas"], script[src*="yihaici"], script[src*="epuf3tk"]').forEach(function(el) { el.remove(); });

        // 移除赌博/代理广告
        document.querySelectorAll('[class*="gamble"], [class*="Gamble"], [class*="agent"], [class*="proxy-ad"]').forEach(function(el) { el.style.display = 'none'; });
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
