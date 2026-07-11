/******************************
# 脚本功能：Butterfly —— 全站广告净化 + VIP模拟
# 目标站点：https://d3sjt6i1mx4tjc.cloudfront.net
# 适用App：Butterfly 视频/动漫 H5 (iOS)
# 脚本作者：彭于晏💞
# 更新时间：2026-07-11
# 抓包校验：2026-07-11-102858 / 2026-07-11-104814 / d3sjt6i1mx4tjc.cloudfront.net
# 使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
# 
# 架构说明（与115小师妹/暗网禁区不同）：
#   本脚本无内嵌 CryptoJS，不走「拦截API→解密→改包→加密→重算sign」模式。
#   原因：Butterfly API响应为 {"code":200,"data":"<base64>","hash":true}，
#   解密逻辑在客户端混淆JS中，无法在QX侧解密。
#   因此采用：拦截HTML页面 → 注入JS → 在客户端hook JSON.parse修改解密后数据。
#
# 双模式（同文件）：
#   script-request-header：删除If-None-Match/If-Modified-Since，防止304缓存
#   script-response-body：注入去广告JS到HTML页面
#
# 广告来源（抓包确认）：
#   - 启动页广告：ad_slot_key=1, splash-{hash}.webp
#   - 九宫格广告：ad_slot_key=2
#   - 首页弹窗广告：ad_slot_key=4, popup-bg-{hash}.webp
#   - 顶部小方块：ad_slot_key=10
#   - 悬浮广告：ad_slot_key=11
#   - 导航站精品软件：ad_slot_key=100001_1
#   - 红包弹窗：/api/app/redPacket/info
#   - 事件追踪：d3k4e7spixznr4.cloudfront.net + 6个AWS IP
#   - 金币弹窗：VideoGoldPopupAdv-{hash}.js
*******************************/

// ========== 模式1: script-request-header ==========
// 删除缓存头，强制200返回完整HTML，防止304导致无法注入
if (typeof $response === 'undefined' || !$response) {
    var reqHeaders = $request.headers || {};
    var cacheKeys = ['If-None-Match', 'If-Modified-Since', 'if-none-match', 'if-modified-since'];
    for (var i = 0; i < cacheKeys.length; i++) {
        if (reqHeaders[cacheKeys[i]]) delete reqHeaders[cacheKeys[i]];
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
}
// ========== 模式2: script-response-body ==========
else {
    var url = $request.url;
    var body = $response.body;

    // ========== 注入的JS代码 ==========
    var injectScript = '\n<script>\n' +
    '(function(){\n' +
    '"use strict";\n' +
    '\n' +
    'var DEBUG=!1;\n' +
    'var VIP_LEVEL=9,VIP_EXPIRE="2099-12-31T23:59:59Z",COIN=999999;\n' +
    '\n' +
    '// ===== 广告域名黑名单（基于2026-07-11抓包） =====\n' +
    'var AD_DOMAINS=["api-dc-prod-008.cyou","api-dc2-prod-08.cyou","d3k4e7spixznr4.cloudfront.net","13.212.103.98","47.129.175.127","54.255.68.213","54.169.217.47","52.221.252.171","54.255.167.20","54.179.7.38"];\n' +
    '\n' +
    'function isAdUrl(u){\n' +
    'if(!u||typeof u!=="string")return!1;\n' +
    'var l=u.toLowerCase();\n' +
    'for(var i=0;i<AD_DOMAINS.length;i++){if(l.indexOf(AD_DOMAINS[i])!==-1)return!0;}\n' +
    'if(l.indexOf("eventtracking/batchreport")!==-1)return!0;\n' +
    'if(l.indexOf("/mp4/splash-")!==-1)return!0;\n' +
    'if(l.indexOf("/png/buygold-")!==-1)return!0;\n' +
    'if(l.indexOf("/png/ad-card-bg-")!==-1)return!0;\n' +
    'if(l.indexOf("popup-bg-")!==-1)return!0;\n' +
    'if(l.indexOf("videogoldpopupadv")!==-1)return!0;\n' +
    'if(l.indexOf("splash-")!==-1&&(l.indexOf(".webp")!==-1||l.indexOf(".png")!==-1))return!0;\n' +
    'if(l.indexOf("/ads/click")!==-1||l.indexOf("/recreation/click")!==-1)return!0;\n' +
    'return!1;\n' +
    '}\n' +
    '\n' +
    '// ===== 广告项判定（保守模式 - 避免误伤正常内容） =====\n' +
    'function isAdItem(item){\n' +
    'if(!item||typeof item!=="object")return!1;\n' +
    '// type="adv" → 核心广告判断\n' +
    'if(item.type==="adv"||item.type==="ADV")return!0;\n' +
    '// advertising_key 存在 → 广告\n' +
    'if(item.advertising_key)return!0;\n' +
    '// 广告位组合检测（必须同时满足多项）\n' +
    'var hs=!!(item.ad_slot_key||item.adSlotKey||item.ad_slot_name||item.adSlotName);\n' +
    'var hi=!!(item.ad_id||item.adId||item.creative_id||item.creativeId);\n' +
    'var ht=!!(item.ad_type||item.adType);\n' +
    'if(hs&&(hi||ht))return!0;\n' +
    'if(hs&&(item.page_key||item.pageKey||item.page_name||item.pageName))return!0;\n' +
    '// URL指向广告域名\n' +
    'var uf=["link","url","jumpUrl","redirectUrl","href","actionUrl","clickUrl"];\n' +
    'for(var i=0;i<uf.length;i++){if(isAdUrl(item[uf[i]]))return!0;}\n' +
    '// 悬浮/弹窗\n' +
    'if(item.type==="float"||item.type==="popup"||item.type==="dialog")return!0;\n' +
    '// 活动类型\n' +
    'var at=["redRain","prize","lottery","worldCup","football","match"];\n' +
    'for(var i=0;i<at.length;i++){if(item.type===at[i]||item.activityType===at[i])return!0;}\n' +
    '// ⚠️ position不单独判断！它是常见排序字段\n' +
    'return!1;\n' +
    '}\n' +
    '\n' +
    '// ===== 清空广告列表 =====\n' +
    'function clearAdsInfoList(obj){\n' +
    'if(!obj||typeof obj!=="object")return;\n' +
    'if("adsInfoList"in obj)obj.adsInfoList=[];\n' +
    'for(var k in obj){\n' +
    'if(!obj.hasOwnProperty(k))continue;\n' +
    'var v=obj[k];\n' +
    'if(v&&typeof v==="object"){\n' +
    'if("adsInfoList"in v)v.adsInfoList=[];\n' +
    'if(!Array.isArray(v))clearAdsInfoList(v);\n' +
    'else for(var i=0;i<v.length;i++){if(v[i]&&typeof v[i]==="object")clearAdsInfoList(v[i]);}\n' +
    '}}\n' +
    '}\n' +
    '\n' +
    '// ===== 禁用广告配置 =====\n' +
    'function disableAdConfig(obj){\n' +
    'if(!obj||typeof obj!=="object"||Array.isArray(obj))return;\n' +
    'if("adsInfoList"in obj)obj.adsInfoList=[];\n' +
    'if("homeAdvFirst"in obj)obj.homeAdvFirst=!1;\n' +
    'var af=["showAd","adEnabled","hasAd","adSwitch","enableAd","adOpen","showBanner","showSplash","showPopup","showPromote","splashAd","bannerAd","popupAd","insertAd","feedAd","openAd","adShow","adDisplay","displayAd","showInsertAd","showFeedAd","showOpenAd","showVideoAd","adConfig","adSetting","adSettingSwitch","splashSwitch","splashEnabled","splashAdSwitch","bannerSwitch","bannerEnabled","popupSwitch","popupEnabled","isAd","isAdvertisement","isPromote","isBanner","openScreenAd","openScreenAdSwitch","openScreenAdEnabled","rewardAdSwitch","rewardAdEnabled","rewardVideoAd","interstitialAd","interstitialAdSwitch","nativeAd","nativeAdSwitch","canShowAd","adVisible","adStatus","thirdAd","thirdAdSwitch","thirdAdEnabled","floatingAd","floatingAdSwitch","marqueeAd","marqueeAdSwitch","noticeAd","noticeAdSwitch","guideAd","guideAdSwitch"];\n' +
    'for(var i=0;i<af.length;i++){\n' +
    'var k=af[i];\n' +
    'if(k in obj){\n' +
    'if(typeof obj[k]==="boolean")obj[k]=!1;\n' +
    'else if(typeof obj[k]==="number")obj[k]=0;\n' +
    'else if(obj[k]&&typeof obj[k]==="object"){\n' +
    'if("enabled"in obj[k])obj[k].enabled=!1;\n' +
    'if("show"in obj[k])obj[k].show=!1;\n' +
    'if("switch"in obj[k])obj[k]["switch"]=!1;\n' +
    'if("open"in obj[k])obj[k].open=!1;\n' +
    'if("enable"in obj[k])obj[k].enable=!1;\n' +
    'if("status"in obj[k])obj[k].status=0;\n' +
    '}}}\n' +
    'var sk=["splash","splashAd","splashConfig","splashData","splashInfo","openScreen","openScreenAd","launchAd","bootAd","splashAdv","splash_adv"];\n' +
    'for(var s=0;s<sk.length;s++){if(sk[s]in obj)obj[sk[s]]=null;}\n' +
    'if(obj.redPacket&&typeof obj.redPacket==="object"){obj.redPacket.canClick=!1;obj.redPacket.enabled=!1;obj.redPacket.show=!1;}\n' +
    'if(obj.redpacket&&typeof obj.redpacket==="object"){obj.redpacket.canClick=!1;obj.redpacket.enabled=!1;obj.redpacket.show=!1;}\n' +
    '}\n' +
    '\n' +
    '// ===== 递归处理 =====\n' +
    'function recursiveProcess(obj,depth){\n' +
    'if(depth>10||!obj||typeof obj!=="object")return;\n' +
    'if(Array.isArray(obj)){\n' +
    'for(var i=obj.length-1;i>=0;i--){\n' +
    'if(obj[i]&&typeof obj[i]==="object"){\n' +
    'if(isAdItem(obj[i]))obj.splice(i,1);else recursiveProcess(obj[i],depth+1);\n' +
    '}}\n' +
    '}else{\n' +
    'disableAdConfig(obj);\n' +
    'for(var k in obj){\n' +
    'if(!obj.hasOwnProperty(k))continue;\n' +
    'var v=obj[k];\n' +
    'if(v&&typeof v==="object"){\n' +
    'if(Array.isArray(v)){\n' +
    'for(var j=v.length-1;j>=0;j--){if(v[j]&&typeof v[j]==="object"&&isAdItem(v[j]))v.splice(j,1);}\n' +
    'recursiveProcess(v,depth+1);\n' +
    '}else recursiveProcess(v,depth+1);\n' +
    '}}\n' +
    '}\n' +
    '}\n' +
    '\n' +
    '// ===== 1. Hook JSON.parse =====\n' +
    'var _parse=JSON.parse;\n' +
    'JSON.parse=function(text){\n' +
    'var result=_parse.apply(this,arguments);\n' +
    '// 跳过加密外层 {code:200,data:"...",hash:true}\n' +
    'if(result&&typeof result==="object"&&!Array.isArray(result)&&result.hash===!0&&typeof result.data==="string")return result;\n' +
    'if(result&&typeof result==="object"){\n' +
    'try{\n' +
    '// VIP模拟\n' +
    'if(!Array.isArray(result)&&("isVip"in result||"vipLevel"in result||"vipExpireDate"in result||"snapVip"in result)){\n' +
    'result.isVip=!0;result.vipLevel=VIP_LEVEL;result.vipExpireDate=VIP_EXPIRE;result.snapVip=VIP_LEVEL;\n' +
    'result.hasLocked=!1;result.hasBanned=!1;result.forbidUpload=!1;\n' +
    'result.videoDiscountExpiration=VIP_EXPIRE;result.goldVideoFreeExpire=VIP_EXPIRE;result.videoFreeExpiration=VIP_EXPIRE;\n' +
    'result.broadcastExpire=VIP_EXPIRE;result.loufengBookDiscountExpiration=VIP_EXPIRE;result.coinMouthExpireDate=VIP_EXPIRE;\n' +
    'if("vipType"in result)result.vipType=VIP_LEVEL;\n' +
    'if("vipStatus"in result)result.vipStatus=1;\n' +
    'if("expireDate"in result)result.expireDate=VIP_EXPIRE;\n' +
    '}\n' +
    '// 钱包模拟\n' +
    'if(!Array.isArray(result)&&(("amount"in result&&"integral"in result)||("fruitCoin"in result)||("coin"in result&&"integral"in result))){\n' +
    'if(typeof result.amount==="number")result.amount=COIN;\n' +
    'if(typeof result.integral==="number")result.integral=COIN;\n' +
    'if(typeof result.coin==="number")result.coin=COIN;\n' +
    'if("fruitCoin"in result)result.fruitCoin=COIN;\n' +
    'if("lotteryTimes"in result)result.lotteryTimes=999;\n' +
    'if("aiUndressFreeTimes"in result)result.aiUndressFreeTimes=999;\n' +
    'if("aiMateBalance"in result)result.aiMateBalance=999999;\n' +
    'if("goldCoin"in result)result.goldCoin=COIN;\n' +
    'if("diamond"in result)result.diamond=999999;\n' +
    '}\n' +
    '// VIP试用倒计时 → 关闭\n' +
    'if(!Array.isArray(result)&&("tiroCountdown"in result||"tiroExpire"in result||"tiroStatus"in result)){\n' +
    'result.tiroCountdown=0;result.tiroExpire="1970-01-01T00:00:00Z";\n' +
    'if("tiroStatus"in result)result.tiroStatus=0;\n' +
    'if("countdown"in result)result.countdown=0;\n' +
    'if("canUse"in result)result.canUse=!1;\n' +
    '}\n' +
    '// 红包弹窗 → 关闭\n' +
    'if(!Array.isArray(result)&&"canClick"in result&&("prizeAmount"in result||"redPacket"in result)){\n' +
    'result.canClick=!1;result.enabled=!1;if("show"in result)result.show=!1;\n' +
    '}\n' +
    '// 清空广告 + 递归处理\n' +
    'clearAdsInfoList(result);\n' +
    'recursiveProcess(result,0);\n' +
    '}catch(e){}\n' +
    '}\n' +
    'return result;\n' +
    '};\n' +
    '\n' +
    '// ===== 2. 拦截fetch/XHR =====\n' +
    'var _fetch=window.fetch;\n' +
    'if(_fetch){window.fetch=function(input,init){var u=typeof input==="string"?input:(input&&input.url?input.url:"");if(isAdUrl(u))return Promise.resolve(new Response("{}",{status:200,headers:{"Content-Type":"application/json"}}));return _fetch.apply(this,arguments);};}\n' +
    'var _open=XMLHttpRequest.prototype.open;\n' +
    'XMLHttpRequest.prototype.open=function(method,url){if(isAdUrl(url))arguments[1]="data:application/json,{}";return _open.apply(this,arguments);};\n' +
    '\n' +
    '// ===== 3. Hook axios/Vue拦截器 =====\n' +
    'function hookAxios(){\n' +
    'if(window.axios&&window.axios.interceptors&&window.axios.interceptors.response){\n' +
    'var _use=window.axios.interceptors.response.use.bind(window.axios.interceptors.response);\n' +
    'window.axios.interceptors.response.use=function(ok,err){var w=function(r){if(r&&r.data)try{recursiveProcess(r.data,0)}catch(e){}return ok?ok(r):r;};return _use(w,err);};\n' +
    '}}\n' +
    'hookAxios();setTimeout(hookAxios,100);setTimeout(hookAxios,500);setTimeout(hookAxios,2000);\n' +
    '\n' +
    '// ===== 4. 阻止广告跳转 =====\n' +
    'var _wo=window.open;\n' +
    'window.open=function(u){if(isAdUrl(u))return null;return _wo.apply(this,arguments);};\n' +
    'var _as=window.location.assign.bind(window.location),_rp=window.location.replace.bind(window.location);\n' +
    'window.location.assign=function(u){if(!isAdUrl(u))return _as(u);};\n' +
    'window.location.replace=function(u){if(!isAdUrl(u))return _rp(u);};\n' +
    '\n' +
    '// ===== 5. 阻止脚本src注入广告JS =====\n' +
    'var _ce=document.createElement.bind(document);\n' +
    'document.createElement=function(tag){\n' +
    'var el=_ce(tag);\n' +
    'if(tag&&tag.toLowerCase()==="script"){\n' +
    'var d=Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype,"src");\n' +
    'if(d&&d.set){Object.defineProperty(el,"src",{get:d.get,set:function(v){if(!isAdUrl(v))d.set.call(el,v);},configurable:!0});}\n' +
    '}\n' +
    'return el;\n' +
    '};\n' +
    '\n' +
    '// ===== 6. DOM清理 =====\n' +
    'function removeAds(){\n' +
    'if(!document.body)return;\n' +
    '// 开屏广告\n' +
    'try{document.querySelectorAll(".splash_adv,.splashVideo,#splashVideo,.splash-loading-img,[class*=\\"splash-ad\\"],[class*=\\"splashAd\\"],[class*=\\"open-screen\\"],[class*=\\"launch-ad\\"],[class*=\\"boot-ad\\"]").forEach(function(e){e.remove();});}catch(e){}\n' +
    '// 广告轮播/卡片\n' +
    'try{document.querySelectorAll(".adv-swiper-slide,[class*=\\"adv-swiper\\"],[class*=\\"advTitle\\"],[class*=\\"adv-card\\"],[class*=\\"adv-item\\"],[class*=\\"adv-banner\\"],[class*=\\"adv-container\\"],[class*=\\"ad-banner\\"],[class*=\\"adBanner\\"],[class*=\\"ad_card\\"],[class*=\\"adCard\\"],[class*=\\"ad-container\\"],[class*=\\"ad-wrapper\\"],[class*=\\"ad-item\\"],[class*=\\"ad-slot\\"],[class*=\\"banner-ad\\"]").forEach(function(e){e.style.display="none";});}catch(e){}\n' +
    '// 弹窗/浮窗广告\n' +
    'try{document.querySelectorAll("[class*=\\"ad-popup\\"],[class*=\\"adPopup\\"],[class*=\\"popup-ad\\"],[class*=\\"ad-dialog\\"],[class*=\\"ad-modal\\"],[class*=\\"floating-ad\\"],[class*=\\"float-ad\\"],[class*=\\"ad-float\\"],[class*=\\"VideoGoldPopupAdv\\"],[class*=\\"gold-popup\\"],[class*=\\"gold-adv\\"]").forEach(function(e){e.remove();});}catch(e){}\n' +
    '// 推广/赞助\n' +
    'try{document.querySelectorAll("[class*=\\"promote\\"],[class*=\\"Promote\\"],[class*=\\"promotion\\"],[class*=\\"sponsor\\"]").forEach(function(e){e.style.display="none";});}catch(e){}\n' +
    '// 广告图片\n' +
    'try{document.querySelectorAll("img[src*=\\"ad-card-bg\\"],img[src*=\\"buyGold\\"],img[src*=\\"popup-bg\\"]").forEach(function(e){e.style.display="none";});}catch(e){}\n' +
    '// 广告角标\n' +
    'try{document.querySelectorAll(".corner-tag.isAdv").forEach(function(e){e.style.display="none";});}catch(e){}\n' +
    '}\n' +
    '\n' +
    '// MutationObserver 持续监控\n' +
    'if(window.MutationObserver){\n' +
    'var ob=new MutationObserver(function(){if(!removeAds._t){removeAds._t=!0;setTimeout(function(){removeAds();removeAds._t=!1;},100);}});\n' +
    'var st=function(){if(document.body){ob.observe(document.body,{childList:!0,subtree:!0,attributes:!1});removeAds();}else setTimeout(st,100);};\n' +
    'st();\n' +
    '}else{setInterval(removeAds,1000);}\n' +
    '\n' +
    '// ===== 7. CSS隐藏广告样式 =====\n' +
    'var st=document.createElement("style");\n' +
    'st.textContent=".splash_adv,.splashVideo,#splashVideo,.splash-loading-img,[class*=\\'splash-ad\\'],[class*=\\'splashAd\\'],.adv-swiper-slide,[class*=\\'adv-swiper\\'],[class*=\\'advTitle\\'],[class*=\\'adv-card\\'],[class*=\\'adv-item\\'],[class*=\\'adv-banner\\'],[class*=\\'adv-container\\'],[class*=\\'ad-container\\'],[class*=\\'ad-wrapper\\'],[class*=\\'google-ad\\'],[class*=\\'adsbygoogle\\'],[class*=\\'VideoGoldPopupAdv\\'],[class*=\\'gold-popup-adv\\'],.corner-tag.isAdv,[class*=\\'vip-guide\\'],[class*=\\'buy-vip\\'],[class*=\\'upgrade-vip\\'],[class*=\\'vip-banner\\'],[class*=\\'recharge-banner\\'],[class*=\\'first-charge\\'],[class*=\\'origin-price\\']{display:none !important;}";\n' +
    '(document.head||document.documentElement).appendChild(st);\n' +
    '\n' +
    'if(DEBUG)console.log("[Butterfly] 去广告+VIP已加载 v3 (d3sjt6i1mx4tjc)");\n' +
    '})();\n' +
    '</script>\n';

    // ========== 只在 d3sjt6i1mx4tjc.cloudfront.net 的HTML页面注入 ==========
    if (body && url.indexOf('d3sjt6i1mx4tjc.cloudfront.net') !== -1) {
        // 排除静态资源
        if (url.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|webp|json|xml|pdf|mp4|mp3|woff|woff2|ttf|eot|map|cur)(\?.*)?$/i)) {
            $done({});
            return;
        }

        var ct = ($response.headers || {})['Content-Type'] || ($response.headers || {})['content-type'] || '';
        // 确保是HTML
        if (ct.indexOf('text/html') === -1 && ct.indexOf('html') === -1) {
            // 可能是304/无Content-Type，检查body内容
            if (body && typeof body === 'string' && body.indexOf('<html') === -1 && body.indexOf('<!DOCTYPE') === -1) {
                $done({});
                return;
            }
        }

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
        delete headers['Content-Encoding'];
        delete headers['content-encoding'];

        $done({ body: newBody, headers: headers });
    } else {
        $done({});
    }
}
