/******************************

# 脚本功能：489vm PWA——去开屏—去悬浮窗—去Banner—净化全站广告
# 目标站点：https://489vm.com ( -> u89ym.com -> dobeumye0uzlf.cloudfront.net )
# 特别说明：站点API使用AES加密，采用前端DOM注入方式净化广告
# 脚本作者：彭于晏💞
# 更新时间：2026-07-12
# 抓包校验：2026-07-12-085805 / dobeumye0uzlf.cloudfront.net / d2zkz38ccmsfz5.cloudfront.net
# 使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************/

// 拦截目标站点的 HTML 页面响应，注入广告净化代码
const targetPattern = /dobeumye0uzlf\.cloudfront\.net/;

function normalizeBody(raw) {
  if (raw == null) return "";
  if (typeof raw === "string") return raw;
  if (typeof raw === "object" && raw.length != null) {
    try {
      return String.fromCharCode.apply(null, raw);
    } catch (e) {
      var s = "";
      for (var i = 0; i < raw.length; i++) s += String.fromCharCode(raw[i]);
      return s;
    }
  }
  return String(raw);
}

var body = normalizeBody($response.body);

// 只处理 HTML 页面
if (!body || body.indexOf("<html") < 0) {
  $done();
} else {
  var injectScript = `
<script>
(function(){
  "use strict";

  // ========== 注入 CSS 净化广告样式 ==========
  var adCSS = document.createElement("style");
  adCSS.id = "adblock-injected-css";
  adCSS.textContent = \`
    /* 隐藏开屏广告图片 */
    img[src*="splash"],
    img[src*="launch"],
    div[class*="splash"],
    div[class*="Splash"],
    div[class*="launch"],
    div[id*="splash"],
    div[id*="Splash"],
    /* 悬浮窗广告 */
    div[class*="floating"],
    div[class*="Floating"],
    div[class*="float-ad"],
    div[class*="floatAd"],
    div[id*="floating"],
    div[id*="floating-ad"],
    div[id*="floatAd"],
    div[class*="suspend"],
    div[class*="Suspend"],
    /* 右下角 AI/客服悬浮按钮 */
    div[class*="ai-root"],
    div[class*="AiRoot"],
    div[class*="ai_float"],
    div[class*="robot"],
    div[class*="assistant-float"],
    img[class*="ai_root"],
    img[class*="ic_ai"],
    /* 弹窗广告 */
    div[class*="popup"],
    div[class*="Popup"],
    div[class*="modal-ad"],
    div[class*="dialog-ad"],
    div[class*="overlay-ad"],
    div[class*="ad-popup"],
    div[class*="adPopup"],
    div[class*="adPop"],
    /* Banner 广告 */
    div[class*="banner"],
    div[class*="Banner"],
    div[class*="ad-banner"],
    div[class*="adBanner"],
    div[id*="banner"],
    div[id*="Banner"],
    /* 宫格导流/推荐应用 */
    div[class*="apps"],
    div[class*="Apps"],
    div[class*="recommend-app"],
    div[class*="recommendApp"],
    div[class*="partner-app"],
    div[class*="partnerApp"],
    div[class*="app_ads"],
    /* 视频内广告 */
    div[class*="video-ad"],
    div[class*="videoAd"],
    div[class*="player-ad"],
    div[class*="playerAd"],
    div[class*="ads_media"],
    div[class*="adsMedia"],
    /* 广告占位 */
    div[class*="ad-placeholder"],
    div[class*="adPlaceholder"],
    iframe[src*="ad"],
    /* 通用广告类名 */
    div[class*="advertisement"],
    div[class*="advertise"],
    div[class*="ad_slot"],
    div[class*="adSlot"],
    a[href*="advertise"],
    a[href*="promotion"],
    /* 红包/福利浮窗 */
    div[class*="red-envelope"],
    div[class*="redEnvelope"],
    div[class*="redPacket"],
    div[class*="red-packet"],
    /* VIP/付费倒计时弹窗 */
    div[class*="tiro-countdown"],
    div[class*="tiroCountdown"],
    div[class*="vip-popup"],
    div[class*="vipPopup"],
    div[class*="pay-popup"],
    div[class*="payPopup"] {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
      pointer-events: none !important;
      width: 0 !important;
      height: 0 !important;
      position: absolute !important;
      z-index: -9999 !important;
    }
  \`;
  document.head.appendChild(adCSS);

  // ========== 拦截网络请求，阻止广告/追踪请求 ==========
  var adRequestPatterns = [
    /\\/api\\/eventTracking\\//i,
    /\\/api\\/app\\/redRecordRouter\\//i,
    /\\/api\\/app\\/vip\\/tiroCountdown/i,
    /api-dc-prod/i,
    /api-dc2-prod/i,
    /dc-report/i,
    /batchReport/i,
  ];

  // 拦截 fetch
  var originalFetch = window.fetch;
  window.fetch = function(url, options) {
    var urlStr = typeof url === "string" ? url : (url && url.url) || "";
    for (var i = 0; i < adRequestPatterns.length; i++) {
      if (adRequestPatterns[i].test(urlStr)) {
        return Promise.resolve(new Response("{}", { status: 200, headers: { "Content-Type": "application/json" } }));
      }
    }
    return originalFetch.apply(this, arguments);
  };

  // 拦截 XMLHttpRequest
  var originalXHROpen = XMLHttpRequest.prototype.open;
  var originalXHRSend = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.open = function(method, url) {
    this.__adblock_url = url;
    return originalXHROpen.apply(this, arguments);
  };
  XMLHttpRequest.prototype.send = function() {
    var url = this.__adblock_url || "";
    for (var i = 0; i < adRequestPatterns.length; i++) {
      if (adRequestPatterns[i].test(url)) {
        try { this.abort(); } catch(e) {}
        return;
      }
    }
    return originalXHRSend.apply(this, arguments);
  };

  // ========== 移除开屏广告 ==========
  function removeSplashScreen() {
    // 移除开屏图片和容器
    var splashImgs = document.querySelectorAll('img[src*="splash"], img[src*="Splash"], [class*="splash"], [class*="Splash"], [id*="splash"], [id*="Splash"]');
    for (var i = 0; i < splashImgs.length; i++) {
      splashImgs[i].remove();
    }
    // 恢复页面滚动
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }

  // ========== 移除悬浮窗广告 ==========
  function removeFloatingAds() {
    var floatEls = document.querySelectorAll('[class*="floating"], [class*="Floating"], [class*="float-ad"], [class*="floatAd"], [id*="floating"], [class*="suspend"], [class*="Suspend"]');
    for (var i = 0; i < floatEls.length; i++) {
      floatEls[i].remove();
    }
    // 移除右下角 AI 图标
    var aiIcons = document.querySelectorAll('[class*="ai_root"], [class*="ai-root"], [class*="ic_ai"], img[src*="ai_root"], img[src*="ic_ai"]');
    for (var j = 0; j < aiIcons.length; j++) {
      aiIcons[j].remove();
    }
  }

  // ========== 移除弹窗广告 ==========
  function removePopupAds() {
    var popups = document.querySelectorAll('[class*="popup"], [class*="Popup"], [class*="modal"][class*="ad"], [class*="dialog"][class*="ad"], [class*="overlay"][class*="ad"]');
    for (var i = 0; i < popups.length; i++) {
      popups[i].remove();
    }
  }

  // ========== 移除 Banner 广告 ==========
  function removeBannerAds() {
    var banners = document.querySelectorAll('[class*="banner"], [class*="Banner"], [id*="banner"], [id*="Banner"]');
    for (var i = 0; i < banners.length; i++) {
      banners[i].remove();
    }
  }

  // ========== 周期性清理 ==========
  function cleanAllAds() {
    removeSplashScreen();
    removeFloatingAds();
    removePopupAds();
    removeBannerAds();
  }

  // 页面加载后立即清理
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function() {
      cleanAllAds();
    });
  } else {
    cleanAllAds();
  }

  // 延迟清理（等待 Vue 渲染）
  setTimeout(cleanAllAds, 500);
  setTimeout(cleanAllAds, 1500);
  setTimeout(cleanAllAds, 3000);

  // ========== MutationObserver 实时监控 ==========
  var observer = new MutationObserver(function(mutations) {
    var shouldClean = false;
    for (var i = 0; i < mutations.length; i++) {
      var addedNodes = mutations[i].addedNodes;
      if (addedNodes.length > 0) {
        shouldClean = true;
        break;
      }
    }
    if (shouldClean) {
      cleanAllAds();
    }
  });

  observer.observe(document.body || document.documentElement, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["class", "style", "src"]
  });

  // ========== 拦截图片广告请求 ==========
  var origImageSrc = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, "src");
  if (origImageSrc && origImageSrc.set) {
    var origSet = origImageSrc.set;
    Object.defineProperty(HTMLImageElement.prototype, "src", {
      set: function(value) {
        var v = String(value);
        if (/splash|advertise|\\/upload.*\\/ads\\/|\\/ads\\/|\\.gif.*ad/i.test(v)) {
          return;
        }
        origSet.call(this, value);
      },
      get: origImageSrc.get
    });
  }

})();
<\/script>
`;

  // 在 </head> 之前注入
  body = body.replace("</head>", injectScript + "\n</head>");

  // 清除响应头
  var headers = $response.headers || {};
  delete headers["Content-Encoding"];
  delete headers["content-encoding"];
  delete headers["Content-Length"];
  delete headers["content-length"];
  delete headers["Transfer-Encoding"];
  delete headers["transfer-encoding"];

  $done({ body: body, headers: headers });
}
