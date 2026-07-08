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
        // App源码确认的广告API
        if (lower.indexOf('/ads/click') !== -1) return true;
        if (lower.indexOf('/recreation/click') !== -1) return true;
        // ===== 红包雨 API =====
        if (lower.indexOf('/redpacket/') !== -1) return true;
        // ===== 娱乐活动点击追踪 API =====
        if (lower.indexOf('/recreation/click') !== -1) return true;
        // ===== AI模块点击追踪 API =====
        if (lower.indexOf('/ai/mod/click') !== -1) return true;
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
                if (!Array.isArray(result) && ('canClick' in result && ('prizeAmount' in result || 'redPacket' in result))) {
                    result.canClick = false;
                    result.enabled = false;
                    if ('show' in result) result.show = false;
                }
                // ===== 红包数据检测 (redPacket字段) =====
                if (!Array.isArray(result) && 'redPacket' in result && result.redPacket && typeof result.redPacket === 'object') {
                    result.redPacket.canClick = false;
                    result.redPacket.enabled = false;
                    result.redPacket.show = false;
                    result.redPacket.active = false;
                    if ('status' in result.redPacket) result.redPacket.status = 0;
                }
                // ===== 活动弹窗检测 (activity/campaign/event/worldcup等) =====
                if (!Array.isArray(result) && ('activity' in result || 'campaign' in result || 'event' in result)) {
                    if ('activity' in result && result.activity && typeof result.activity === 'object') {
                        result.activity.enabled = false;
                        result.activity.show = false;
                        result.activity.active = false;
                        if ('status' in result.activity) result.activity.status = 0;
                    }
                    if ('campaign' in result && result.campaign && typeof result.campaign === 'object') {
                        result.campaign.enabled = false;
                        result.campaign.show = false;
                        if ('status' in result.campaign) result.campaign.status = 0;
                    }
                    if ('event' in result && result.event && typeof result.event === 'object') {
                        result.event.enabled = false;
                        result.event.show = false;
                        if ('status' in result.event) result.event.status = 0;
                    }
                }

                // ===== VIP产品列表 =====
                if (!Array.isArray(result) && 'list' in result && 'isNewUser' in result) {
                    result.isNewUser = false;
                }

                // ===== AI模块数据处理 (解密后的数据) =====
                if (!Array.isArray(result)) {
                    var resultStr = JSON.stringify(result);
                    // 检测AI模块相关数据
                    if (resultStr.indexOf('aiMod') !== -1 || resultStr.indexOf('ai_club') !== -1 || 
                        resultStr.indexOf('aiClub') !== -1 || resultStr.indexOf('ai_mod') !== -1) {
                        // 禁用AI相关字段
                        if ('ai' in result && typeof result.ai === 'object') {
                            result.ai.enabled = false;
                            result.ai.show = false;
                            result.ai.open = false;
                            if ('status' in result.ai) result.ai.status = 0;
                        }
                        // 清空AI模块列表
                        if ('list' in result && Array.isArray(result.list)) {
                            for (var aiIdx = result.list.length - 1; aiIdx >= 0; aiIdx--) {
                                var item = result.list[aiIdx];
                                if (item && typeof item === 'object') {
                                    var itemStr = JSON.stringify(item);
                                    if (itemStr.indexOf('ai') !== -1 || itemStr.indexOf('AI') !== -1 ||
                                        itemStr.indexOf('科技') !== -1 || itemStr.indexOf('tech') !== -1) {
                                        result.list.splice(aiIdx, 1);
                                    }
                                }
                            }
                        }
                    }
                    // 检测娱乐活动相关数据
                    if (resultStr.indexOf('recreation') !== -1 || resultStr.indexOf('worldcup') !== -1 ||
                        resultStr.indexOf('carnival') !== -1 || resultStr.indexOf('festival') !== -1) {
                        // 禁用娱乐活动字段
                        if ('recreation' in result && typeof result.recreation === 'object') {
                            result.recreation.enabled = false;
                            result.recreation.show = false;
                            if ('status' in result.recreation) result.recreation.status = 0;
                        }
                        // 清空娱乐活动列表
                        if ('list' in result && Array.isArray(result.list)) {
                            for (var recIdx = result.list.length - 1; recIdx >= 0; recIdx--) {
                                var recItem = result.list[recIdx];
                                if (recItem && typeof recItem === 'object') {
                                    var recItemStr = JSON.stringify(recItem);
                                    if (recItemStr.indexOf('recreation') !== -1 || 
                                        recItemStr.indexOf('worldcup') !== -1 ||
                                        recItemStr.indexOf('carnival') !== -1 || 
                                        recItemStr.indexOf('festival') !== -1 ||
                                        recItemStr.indexOf('世界杯') !== -1 ||
                                        recItemStr.indexOf('狂欢') !== -1) {
                                        result.list.splice(recIdx, 1);
                                    }
                                }
                            }
                        }
                    }
                }

                // ===== 清空广告列表 (App源码确认: appConfig.adsInfoList是广告数据源) =====
                clearAdsInfoList(result);

                // ===== 过滤模块列表中的广告模块 =====
                filterAdModules(result);

                // ===== 递归处理: 禁用广告配置 + 过滤广告数组 =====
                recursiveProcess(result, 0);

            } catch(e) { if (window.console) console.log('[Butterfly] parse error:', e); }
        }

        return result;
    };

    // ========== 清空广告列表 (App源码确认: adsInfoList是广告数据源) ==========
    // bb()函数从 appConfig.adsInfoList 获取广告,清空后所有广告组件无数据
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

    // ========== 过滤模块列表中的广告模块 ==========
    // /api/app/modules/list 返回的模块列表中包含广告模块
    function filterAdModules(obj) {
        if (!obj || typeof obj !== 'object') return;

        // 直接处理 modules 数组
        if ('modules' in obj && Array.isArray(obj.modules)) {
            for (var i = obj.modules.length - 1; i >= 0; i--) {
                var module = obj.modules[i];
                if (module && typeof module === 'object') {
                    if (isAdModule(module)) {
                        obj.modules.splice(i, 1);
                    }
                }
            }
        }

        // 处理 list 数组 (可能是模块列表)
        if ('list' in obj && Array.isArray(obj.list)) {
            for (var j = obj.list.length - 1; j >= 0; j--) {
                var item = obj.list[j];
                if (item && typeof item === 'object') {
                    if (isAdModule(item)) {
                        obj.list.splice(j, 1);
                    }
                }
            }
        }

        // 递归查找嵌套的 modules/list
        for (var key in obj) {
            if (!obj.hasOwnProperty(key)) continue;
            var val = obj[key];
            if (val && typeof val === 'object') {
                filterAdModules(val);
            }
        }
    }

    // ========== 判断是否为广告模块 ==========
    function isAdModule(module) {
        if (!module || typeof module !== 'object') return false;

        // 1. type字段匹配广告类型
        if ('type' in module && typeof module.type === 'string') {
            var typeLower = module.type.toLowerCase();
            if (typeLower.indexOf('adv') !== -1 || typeLower.indexOf('ad') !== -1 ||
                typeLower.indexOf('promote') !== -1 || typeLower.indexOf('sponsor') !== -1 ||
                typeLower.indexOf('worldcup') !== -1 || typeLower.indexOf('world_cup') !== -1 ||
                typeLower.indexOf('copa') !== -1 || typeLower.indexOf('carnival') !== -1 ||
                typeLower.indexOf('festival') !== -1 || typeLower.indexOf('recreation') !== -1 ||
                typeLower.indexOf('ai') !== -1 || typeLower.indexOf('tech') !== -1 ||
                typeLower.indexOf('redpacket') !== -1 || typeLower.indexOf('rain') !== -1 ||
                typeLower.indexOf('float') !== -1 || typeLower.indexOf('ball') !== -1) {
                return true;
            }
        }

        // 2. name/title字段包含广告关键词
        var nameFields = ['name', 'title', 'label', 'desc', 'description', 'moduleName', 'displayName'];
        for (var i = 0; i < nameFields.length; i++) {
            if (nameFields[i] in module && typeof module[nameFields[i]] === 'string') {
                var text = module[nameFields[i]].toLowerCase();
                if (text.indexOf('广告') !== -1 || text.indexOf('adv') !== -1 ||
                    text.indexOf('promote') !== -1 || text.indexOf('sponsor') !== -1 ||
                    text.indexOf('world cup') !== -1 || text.indexOf('worldcup') !== -1 ||
                    text.indexOf('copa') !== -1 || text.indexOf('carnival') !== -1 ||
                    text.indexOf('festival') !== -1 || text.indexOf('狂欢') !== -1 ||
                    text.indexOf('recreation') !== -1 || text.indexOf('ai') !== -1 ||
                    text.indexOf('科技') !== -1 || text.indexOf('gpt') !== -1 ||
                    text.indexOf('redpacket') !== -1 || text.indexOf('红包') !== -1 ||
                    text.indexOf('rain') !== -1 || text.indexOf('雨') !== -1 ||
                    text.indexOf('tech') !== -1 || text.indexOf('robot') !== -1) {
                    return true;
                }
            }
        }

        // 3. 检测模块类型字段
        var typeFields = ['type', 'moduleType', 'modType', 'category', 'cat'];
        for (var t = 0; t < typeFields.length; t++) {
            if (typeFields[t] in module && typeof module[typeFields[t]] === 'string') {
                var typeVal = module[typeFields[t]].toLowerCase();
                if (typeVal.indexOf('ai') !== -1 || typeVal.indexOf('tech') !== -1 ||
                    typeVal.indexOf('worldcup') !== -1 || typeVal.indexOf('recreation') !== -1 ||
                    typeVal.indexOf('carnival') !== -1 || typeVal.indexOf('festival') !== -1) {
                    return true;
                }
            }
        }

        // 3. position字段存在 (广告位)
        if ('position' in module && module.position != null && 
            module.position !== '' && module.position !== 0 && module.position !== false) {
            return true;
        }

        // 4. advertising_key字段存在
        if ('advertising_key' in module && module.advertising_key) {
            return true;
        }

        // 5. 包含广告相关字段
        if ('adUrl' in module || 'adLink' in module || 'adImg' in module ||
            'adClick' in module || 'adShow' in module) {
            return true;
        }

        return false;
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
            // ===== 活动/红包相关 =====
            'activity', 'activityEnabled', 'activitySwitch', 'showActivity',
            'campaign', 'campaignEnabled', 'campaignSwitch', 'showCampaign',
            'event', 'eventEnabled', 'eventSwitch', 'showEvent',
            'redPacket', 'redPacketEnabled', 'showRedPacket', 'canClick',
            // ===== AI科技相关 =====
            'aiModule', 'aiEnabled', 'aiSwitch', 'showAi', 'aiMod', 'aiOpen',
            'aiStatus', 'aiClub', 'ai_club', 'aiclub',
            // ===== 世界杯/娱乐活动 =====
            'worldcup', 'worldCup', 'worldCupEnabled', 'showWorldCup',
            'recreation', 'recreationEnabled', 'showRecreation',
            'rain', 'rainEnabled', 'showRain', 'redRain',
            'floatBall', 'floatBallEnabled', 'showFloatBall',
            'carnival', 'carnivalEnabled', 'showCarnival',
            'festival', 'festivalEnabled', 'showFestival'
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
            obj.redPacket.active = false;
            if ('status' in obj.redPacket) obj.redPacket.status = 0;
        }

        // 活动/世界杯弹窗 → 关闭
        if ('activity' in obj && obj.activity && typeof obj.activity === 'object') {
            obj.activity.enabled = false;
            obj.activity.show = false;
            obj.activity.active = false;
            if ('status' in obj.activity) obj.activity.status = 0;
        }

        // 活动/世界杯弹窗 → 关闭
        if ('campaign' in obj && obj.campaign && typeof obj.campaign === 'object') {
            obj.campaign.enabled = false;
            obj.campaign.show = false;
            if ('status' in obj.campaign) obj.campaign.status = 0;
        }

        // 事件弹窗 → 关闭
        if ('event' in obj && obj.event && typeof obj.event === 'object') {
            obj.event.enabled = false;
            obj.event.show = false;
            if ('status' in obj.event) obj.event.status = 0;
        }

        // AI模块 → 关闭
        if ('ai' in obj && obj.ai && typeof obj.ai === 'object') {
            obj.ai.enabled = false;
            obj.ai.show = false;
            obj.ai.open = false;
            if ('status' in obj.ai) obj.ai.status = 0;
        }

        // AI俱乐部 → 关闭
        if ('aiClub' in obj && obj.aiClub && typeof obj.aiClub === 'object') {
            obj.aiClub.enabled = false;
            obj.aiClub.show = false;
            if ('status' in obj.aiClub) obj.aiClub.status = 0;
        }

        // 世界杯活动 → 关闭
        if ('worldcup' in obj && obj.worldcup && typeof obj.worldcup === 'object') {
            obj.worldcup.enabled = false;
            obj.worldcup.show = false;
            obj.worldcup.open = false;
            if ('status' in obj.worldcup) obj.worldcup.status = 0;
        }
        if ('worldCup' in obj && obj.worldCup && typeof obj.worldCup === 'object') {
            obj.worldCup.enabled = false;
            obj.worldCup.show = false;
            obj.worldCup.open = false;
            if ('status' in obj.worldCup) obj.worldCup.status = 0;
        }

        // 娱乐活动/recreation → 关闭
        if ('recreation' in obj && obj.recreation && typeof obj.recreation === 'object') {
            obj.recreation.enabled = false;
            obj.recreation.show = false;
            if ('status' in obj.recreation) obj.recreation.status = 0;
        }

        // 狂欢节/嘉年华 → 关闭
        if ('carnival' in obj && obj.carnival && typeof obj.carnival === 'object') {
            obj.carnival.enabled = false;
            obj.carnival.show = false;
            if ('status' in obj.carnival) obj.carnival.status = 0;
        }

        // 节日活动 → 关闭
        if ('festival' in obj && obj.festival && typeof obj.festival === 'object') {
            obj.festival.enabled = false;
            obj.festival.show = false;
            if ('status' in obj.festival) obj.festival.status = 0;
        }

        // 浮动球 → 关闭
        if ('floatBall' in obj && obj.floatBall && typeof obj.floatBall === 'object') {
            obj.floatBall.enabled = false;
            obj.floatBall.show = false;
            if ('status' in obj.floatBall) obj.floatBall.status = 0;
        }
    }

    // ========== 广告项检测函数 (保守模式 - 只检查源码确认的字段) ==========
    // App源码确认: isAdv = ("adv" === info.type) || info.position
    // advType是组件prop不是数据字段,isAdv是计算属性不是数据字段
    function isAdItem(item) {
        if (!item || typeof item !== 'object') return false;

        // 1. type === "adv" → 广告 (App源码确认的核心判断)
        if (item.type === 'adv' || item.type === 'ADV') return true;

        // 2. position 字段存在且非空 → 广告 (App源码确认)
        if ('position' in item && item.position != null && item.position !== '' && item.position !== 0 && item.position !== false) return true;

        // 3. advertising_key 存在 → 广告 (App源码确认)
        if ('advertising_key' in item && item.advertising_key) return true;

        // 4. URL字段指向广告域名 → 广告
        var urlFields = ['link', 'url', 'jumpUrl', 'redirectUrl', 'href', 'actionUrl', 'clickUrl', 'h5Url', 'webUrl'];
        for (var m = 0; m < urlFields.length; m++) {
            if (urlFields[m] in item && typeof item[urlFields[m]] === 'string') {
                if (isAdUrl(item[urlFields[m]])) return true;
            }
        }

        // 5. 活动类型广告 → 广告 (type字段匹配活动关键词)
        if ('type' in item && typeof item.type === 'string') {
            var typeLower = item.type.toLowerCase();
            if (typeLower.indexOf('activity') !== -1 || typeLower.indexOf('campaign') !== -1 || 
                typeLower.indexOf('event') !== -1 || typeLower.indexOf('recreation') !== -1 ||
                typeLower.indexOf('worldcup') !== -1 || typeLower.indexOf('world_cup') !== -1 ||
                typeLower.indexOf('redpacket') !== -1 || typeLower.indexOf('red_packet') !== -1 ||
                typeLower.indexOf('rain') !== -1 || typeLower.indexOf('ai') !== -1) {
                return true;
            }
        }

        // 6. 标题/名称包含广告关键词 → 广告
        var titleFields = ['title', 'name', 'label', 'desc', 'description'];
        for (var t = 0; t < titleFields.length; t++) {
            if (titleFields[t] in item && typeof item[titleFields[t]] === 'string') {
                var text = item[titleFields[t]].toLowerCase();
                if (text.indexOf('广告') !== -1 || text.indexOf('adv') !== -1 || 
                    text.indexOf('promote') !== -1 || text.indexOf('sponsor') !== -1 ||
                    text.indexOf('world cup') !== -1 || text.indexOf('worldcup') !== -1 ||
                    text.indexOf('copa') !== -1 || text.indexOf('carnival') !== -1 ||
                    text.indexOf('festival') !== -1 || text.indexOf('狂欢') !== -1 ||
                    text.indexOf('recreation') !== -1 || text.indexOf('ai') !== -1 || 
                    text.indexOf('科技') !== -1 || text.indexOf('gpt') !== -1) {
                    return true;
                }
            }
        }

        // 7. 红包/活动相关字段 → 广告
        if ('redPacket' in item || 'redpacket' in item || 'prizeAmount' in item || 
            'canClick' in item || 'activityId' in item || 'campaignId' in item ||
            'eventId' in item || 'rain' in item || 'floatBall' in item) {
            return true;
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

        // 开屏广告 (App源码确认: splash_adv, splashVideo, splash-loading-img)
        document.querySelectorAll(
            '[class*="splash"], [class*="Splash"], [id*="splash"], [id*="Splash"],' +
            '.splash_adv, .splashVideo, #splashVideo, .splash-loading-img,' +
            '[class*="launch-ad"], [class*="boot-ad"], [class*="open-screen"],' +
            '[class*="startup-ad"]'
        ).forEach(function(el) { el.remove(); });

        // 广告轮播/列表项 (App源码确认: adv-swiper-slide, advTitle)
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
            '[class*="floating-ad"], [class*="float-ad"], [class*="ad-float"]'
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

        // 广告视频/图片
        document.querySelectorAll('video[src*="splash-"], video[src*="ad-"]').forEach(function(el) { el.remove(); });
        document.querySelectorAll('img[src*="ad-card-bg"], img[src*="buyGold"], img[src*="ad-banner"]').forEach(function(el) { el.style.display = 'none'; });

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

        // 删除底部导航中的"AI科技"项
        document.querySelectorAll(
            '.van-tabbar__item, .tabbar-item, [class*="tabbar-item"], [class*="tab-item"], [class*="nav-item"], [role="tab"]'
        ).forEach(function(el) {
            var text = el.textContent || el.innerText || '';
            if (text.indexOf('AI科技') !== -1) {
                el.style.display = 'none';
            }
        });

        // 删除底部导航中的"AI"相关项
        document.querySelectorAll(
            '.van-tabbar__item, .tabbar-item, [class*="tabbar-item"], [class*="tab-item"], [class*="nav-item"], [role="tab"]'
        ).forEach(function(el) {
            var text = el.textContent || el.innerText || '';
            if (text.indexOf('AI') !== -1 && !text.indexOf('AI科技') === -1) {
                el.style.display = 'none';
            }
        });

        // 红包雨/活动弹窗
        document.querySelectorAll(
            '[class*="redpacket"], [class*="redPacket"], [class*="RedPacket"],' +
            '[class*="red-packet"], [class*="red_rain"], [class*="redRain"],' +
            '[class*="rain"], [class*="Rain"], [class*="hongbao"], [class*="HongBao"],' +
            '[class*="prize"], [class*="Prize"], [class*="bonus"], [class*="Bonus"],' +
            '[class*="canClick"]'
        ).forEach(function(el) { el.remove(); });

        // 世界杯/狂欢活动弹窗 (精确匹配)
        document.querySelectorAll(
            '[class*="-worldcup"], [class*="-worldCup"], [class*="-WorldCup"],' +
            '[class*="world-cup"], [class*="worldcup-"],' +
            '[class*="-copa"], [class*="copa-"], [class*="-Copa"], [class*="Copa-"],' +
            '[class*="-recreation"], [class*="recreation-"],' +
            '[class*="-festival"], [class*="festival-"],' +
            '[class*="-event-"], [class*="event-"], [class*="-campaign-"], [class*="campaign-"],' +
            '[class*="-activity-"], [class*="activity-"]'
        ).forEach(function(el) { el.style.display = 'none'; });

        // 根据文本内容删除世界杯/狂欢活动弹窗
        document.querySelectorAll('[class*="popup"], [class*="modal"], [class*="dialog"]').forEach(function(el) {
            var text = el.textContent || el.innerText || '';
            if (text.indexOf('世界杯') !== -1 || text.indexOf('狂欢') !== -1 ||
                text.indexOf('AI') !== -1 || text.indexOf('科技') !== -1) {
                el.remove();
            }
        });

        // 根据文本内容删除底部导航中的AI科技项
        document.querySelectorAll(
            '.van-tabbar__item, .tabbar-item, [class*="tabbar-item"], [class*="tab-item"], [class*="nav-item"], [role="tab"]'
        ).forEach(function(el) {
            var text = el.textContent || el.innerText || '';
            if (text.indexOf('AI科技') !== -1 || text.indexOf('AI') !== -1) {
                el.style.display = 'none';
            }
        });

        // AI科技相关元素 (精确匹配，避免误删app/main等正常元素)
        document.querySelectorAll(
            '[class*="-ai-"], [class*="-AI-"], [class*="-Ai-"],' +
            '[class*="aiclub"], [class*="ai-club"], [class*="aiClub"],' +
            '[class*="-tech-"], [class*="-Tech-"],' +
            '[class*="gpt"], [class*="GPT"], [class*="robot"], [class*="Robot"],' +
            '[class*="float-ball"], [class*="floatBall"], [class*="FloatBall"],' +
            '[class*="float-ball-btn"], [class*="floatBallBtn"]'
        ).forEach(function(el) {
            var text = el.textContent || el.innerText || '';
            if (text.indexOf('AI') !== -1 || text.indexOf('科技') !== -1 || 
                text.indexOf('robot') !== -1 || text.indexOf('gpt') !== -1) {
                el.style.display = 'none';
            }
        });

        // 根据文本内容删除AI科技相关元素
        document.querySelectorAll('*').forEach(function(el) {
            var text = el.textContent || el.innerText || '';
            if ((text.indexOf('AI科技') !== -1 || text.indexOf('AI科技') !== -1) && 
                el.children.length === 0) {
                el.style.display = 'none';
            }
        });

        // 根据文本内容删除活动弹窗
        document.querySelectorAll('[class*="popup"], [class*="modal"], [class*="dialog"]').forEach(function(el) {
            var text = el.textContent || el.innerText || '';
            if (text.indexOf('红包') !== -1 || text.indexOf('雨') !== -1 || 
                text.indexOf('世界杯') !== -1 || text.indexOf('狂欢') !== -1 ||
                text.indexOf('AI') !== -1 || text.indexOf('科技') !== -1) {
                el.remove();
            }
        });

        // ========== 强力文本内容检测 ==========
        // 直接删除包含广告关键词的元素 (不管类名，只要文本包含关键词)
        document.querySelectorAll('*').forEach(function(el) {
            try {
                var text = el.textContent || el.innerText || '';
                if (text.length > 0 && text.length < 50) {
                    // 检测广告关键词
                    if (text.indexOf('世界杯') !== -1 || 
                        text.indexOf('狂欢') !== -1 ||
                        text.indexOf('AI科技') !== -1 ||
                        text.indexOf('AI') !== -1 ||
                        text.indexOf('科技') !== -1 ||
                        text.indexOf('红包') !== -1 ||
                        text.indexOf('雨') !== -1) {
                        // 获取元素的计算样式
                        var style = getComputedStyle(el);
                        // 如果是fixed定位的悬浮元素，直接删除
                        if (style.position === 'fixed' || style.position === 'absolute') {
                            el.remove();
                            return;
                        }
                        // 如果是按钮、图标或小尺寸元素，直接删除
                        if (el.tagName === 'BUTTON' || el.tagName === 'A' || 
                            el.tagName === 'IMG' || (el.offsetWidth < 200 && el.offsetHeight < 200)) {
                            el.remove();
                        }
                    }
                }
            } catch(e) {}
        });

        // ========== 右下角悬浮广告检测 ==========
        // 悬浮球/悬浮按钮通常使用fixed定位，位于右下角
        document.querySelectorAll('*').forEach(function(el) {
            try {
                var style = getComputedStyle(el);
                // 检测固定定位且位于右下角的元素
                if (style.position === 'fixed') {
                    // 获取元素位置
                    var rect = el.getBoundingClientRect();
                    var windowWidth = window.innerWidth || document.documentElement.clientWidth;
                    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
                    
                    // 判断是否位于右下角 (右边缘300px内，下边缘300px内)
                    var isBottomRight = rect.right > windowWidth - 300 && rect.bottom > windowHeight - 300;
                    
                    // 判断是否是小尺寸悬浮按钮 (宽高小于200px)
                    var isSmallButton = rect.width < 200 && rect.height < 200;
                    
                    if (isBottomRight && isSmallButton) {
                        var text = el.textContent || el.innerText || '';
                        var className = el.className || '';
                        
                        // 如果包含广告关键词，移除
                        if (text.indexOf('AI') !== -1 || text.indexOf('科技') !== -1 ||
                            text.indexOf('世界杯') !== -1 || text.indexOf('狂欢') !== -1 ||
                            text.indexOf('红包') !== -1 || text.indexOf('雨') !== -1 ||
                            className.indexOf('ai') !== -1 || className.indexOf('tech') !== -1 ||
                            className.indexOf('worldcup') !== -1 || className.indexOf('recreation') !== -1 ||
                            className.indexOf('float') !== -1 || className.indexOf('ball') !== -1) {
                            el.remove();
                        }
                    }
                }
            } catch(e) {}
        });

        // ========== 针对图片中的悬浮广告类名检测 ==========
        // 常见的悬浮广告类名模式
        document.querySelectorAll(
            '[class*="float-btn"], [class*="floatBtn"], [class*="Float-btn"],' +
            '[class*="float-button"], [class*="floatButton"], [class*="FloatButton"],' +
            '[class*="float-icon"], [class*="floatIcon"],' +
            '[class*="quick-btn"], [class*="quickBtn"], [class*="Quick-btn"],' +
            '[class*="quick-entry"], [class*="quickEntry"],' +
            '[class*="speed-btn"], [class*="speedBtn"],' +
            '[class*="fab-btn"], [class*="fabBtn"], [class*="Fab-btn"],' +
            '[class*="mini-btn"], [class*="miniBtn"],' +
            '[class*="hot-btn"], [class*="hotBtn"],' +
            '[class*="red-btn"], [class*="redBtn"],' +
            '[class*="ai-btn"], [class*="aiBtn"], [class*="Ai-btn"],' +
            '[class*="tech-btn"], [class*="techBtn"],' +
            '[class*="worldcup-btn"], [class*="worldcupBtn"],' +
            '[class*="recreation-btn"], [class*="recreationBtn"],' +
            '[class*="carnival-btn"], [class*="carnivalBtn"],' +
            '[class*="festival-btn"], [class*="festivalBtn"],' +
            '[class*="suspend"], [class*="Suspend"],' +
            '[class*="float-ball"], [class*="floatBall"], [class*="FloatBall"],' +
            '[class*="float-bubble"], [class*="floatBubble"],' +
            '[class*="float-dot"], [class*="floatDot"],' +
            '[class*="float-pill"], [class*="floatPill"],' +
            '[class*="float-tag"], [class*="floatTag"],' +
            '[class*="float-card"], [class*="floatCard"],' +
            '[class*="float-container"], [class*="floatContainer"],' +
            '[class*="float-wrapper"], [class*="floatWrapper"],' +
            '[class*="popup-ball"], [class*="popupBall"],' +
            '[class*="popup-btn"], [class*="popupBtn"]'
        ).forEach(function(el) {
            var text = el.textContent || el.innerText || '';
            // 如果包含广告关键词，移除
            if (text.indexOf('AI') !== -1 || text.indexOf('科技') !== -1 ||
                text.indexOf('世界杯') !== -1 || text.indexOf('狂欢') !== -1 ||
                text.indexOf('红包') !== -1 || text.indexOf('雨') !== -1) {
                el.remove();
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
        /* App源码确认的开屏广告 */
        .splash_adv, .splashVideo, #splashVideo, .splash-loading-img,
        [class*="splash-ad"], [class*="splashAd"], [class*="SplashAd"],
        /* App源码确认的广告轮播/卡片 */
        .adv-swiper-slide, [class*="adv-swiper"], [class*="advTitle"],
        [class*="adv-card"], [class*="adv-item"], [class*="adv-list"],
        [class*="adv-banner"], [class*="adv-container"], [class*="adv-wrapper"],
        /* 广告容器 */
        [class*="ad-container"], [class*="adContainer"], [class*="ad-wrapper"],
        [class*="google-ad"], [class*="adsbygoogle"],
        /* 广告角标 */
        .corner-tag.isAdv,
        /* 红包雨相关 */
        [class*="redpacket"], [class*="redPacket"], [class*="RedPacket"],
        [class*="red-packet"], [class*="red_rain"], [class*="redRain"],
        [class*="rain"], [class*="HongBao"], [class*="hongbao"],
        /* 世界杯/狂欢活动 */
        [class*="worldcup"], [class*="worldCup"], [class*="WorldCup"],
        [class*="world-cup"], [class*="copa"], [class*="recreation"],
        [class*="festival"], [class*="狂欢"],
        /* AI科技相关 */
        [class*="-ai-"], [class*=" ai "], [class*="-AI-"], [class*="-Ai-"],
        [class*="aiclub"], [class*="ai-club"], [class*="aiClub"],
        [class*="-tech-"], [class*=" tech "], [class*="-Tech-"],
        [class*="gpt"], [class*="robot"], [class*="Robot"],
        /* 活动弹窗 */
        [class*="activity"], [class*="Activity"],
        [class*="campaign"], [class*="Campaign"],
        [class*="event"], [class*="Event"],
        /* 浮动球/悬浮广告 */
        [class*="float-ball"], [class*="floatBall"], [class*="FloatBall"],
        [class*="float-ball-btn"], [class*="floatBallBtn"],
        [class*="float-btn"], [class*="floatBtn"], [class*="Float-btn"],
        [class*="float-button"], [class*="floatButton"], [class*="FloatButton"],
        [class*="float-icon"], [class*="floatIcon"],
        [class*="float-bubble"], [class*="floatBubble"],
        [class*="float-dot"], [class*="floatDot"],
        [class*="float-pill"], [class*="floatPill"],
        [class*="float-tag"], [class*="floatTag"],
        [class*="float-card"], [class*="floatCard"],
        [class*="float-container"], [class*="floatContainer"],
        [class*="float-wrapper"], [class*="floatWrapper"],
        [class*="quick-btn"], [class*="quickBtn"], [class*="Quick-btn"],
        [class*="quick-entry"], [class*="quickEntry"],
        [class*="speed-btn"], [class*="speedBtn"],
        [class*="fab-btn"], [class*="fabBtn"], [class*="Fab-btn"],
        [class*="mini-btn"], [class*="miniBtn"],
        [class*="hot-btn"], [class*="hotBtn"],
        [class*="red-btn"], [class*="redBtn"],
        [class*="ai-btn"], [class*="aiBtn"], [class*="Ai-btn"],
        [class*="tech-btn"], [class*="techBtn"],
        [class*="worldcup-btn"], [class*="worldcupBtn"],
        [class*="recreation-btn"], [class*="recreationBtn"],
        [class*="carnival-btn"], [class*="carnivalBtn"],
        [class*="festival-btn"], [class*="festivalBtn"],
        [class*="suspend"], [class*="Suspend"],
        [class*="popup-ball"], [class*="popupBall"],
        [class*="popup-btn"], [class*="popupBtn"] {
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
