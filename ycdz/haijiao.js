/******************************

脚本功能：海角社区视频解析脚本
网站地址：https://haijiao.com
脚本作者：彭于晏💞
更新时间：2023-7-9
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/.*(haijiao|hj).+(api\/topic\/|post\/details\?pid=)(\d+)$ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/haijiao.js

[mitm]

hostname = *hj*,*haijiao*

*******************************/

(e=>{const t=document.createElement("style");t.dataset.source="vite-plugin-monkey",t.textContent=e,document.head.append(t)})(" .crack_container{position:fixed;top:80px;right:20px}.crack_title{font-size:20px;font-weight:700;text-align:center;border:1px solid #000;cursor:pointer;display:block}.crack_player{position:fixed;top:0;bottom:0;left:0;right:0}.crack_player .iframeBox{width:70vw;margin:auto} ");

(function (DPlayer, hls_js, $) {
  'use strict';

  var _GM_setClipboard = /* @__PURE__ */ (() => typeof GM_setClipboard != "undefined" ? GM_setClipboard : void 0)();
  var _GM_xmlhttpRequest = /* @__PURE__ */ (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();
  const isMobile = () => {
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      navigator.userAgent.toLowerCase()
    );
  };
  function isValidHttpUrl(str) {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$",
      // fragment locator
      "i"
    );
    return pattern.test(str);
  }
  function main(url) {
    try {
      let init = function() {
        crackBtn = $('<div class="crack_title" id="crack_anal">解析</div>');
        jumpLink1 = $(
          '<a class="crack_title" target="_blank" id="crack_jump">跳转播放1</a>'
        ).hide();
        jumpLink2 = $(
          '<a class="crack_title" target="_blank" id="crack_jump">跳转播放2</a>'
        ).hide();
        copyBtn = $(
          '<div class="crack_title" id="crack_copy">本页可观看</div>'
        ).hide();
        container = $(`<div class="crack_container" id="crack_container"></div>`).append(crackBtn).append(jumpLink1).append(jumpLink2).append(copyBtn);
        crackBtn.one("click", crack);
        $("body").append(container);
      }, crack = function() {
        crackBtn.html("解析成功");
        const encodeUrl2 = `https://m3u8play.com/?play=${encodeURIComponent(
        url
      )}`;
        const encodeUrl1 = `https://m.auok.run/player/#${url}`;
        const sellContainer2 = getSellerContainer();
        jumpLink1.attr("href", encodeUrl1);
        jumpLink2.attr("href", encodeUrl2);
        if (sellContainer2) {
          sellContainer2.innerHTML = "";
          if (isMobile()) {
            const $iframe = $(
              `<iframe src="${encodeUrl1}" allowfullscreen='true'></iframe>`
            ).css({
              width: "100%"
            });
            $(sellContainer2).append($iframe);
          } else {
            new DPlayer({
              container: sellContainer2,
              autoplay: false,
              theme: "#FADFA3",
              loop: true,
              lang: "zh",
              screenshot: true,
              hotkey: true,
              preload: "auto",
              video: {
                url,
                type: "hls"
              }
            });
          }
        }
        copyBtn.on("click", () => {
          _GM_setClipboard(url, "text/plain");
        });
        jumpLink1.show();
        jumpLink2.show();
        copyBtn.show();
        return;
      }, track = function() {
        init();
        crack();
      };
      let crackBtn;
      let jumpLink1;
      let jumpLink2;
      let copyBtn;
      let container;
      const sellContainer = getSellerContainer();
      if (sellContainer) {
        track();
        return;
      }
      setTimeout(() => {
        track();
      }, 2e3);
    } catch (error) {
    }
  }
  function getCodeFromString(strInput) {
    const str = String(strInput);
    const dataArr = str.split("\n").filter((str2) => !str2.includes("#"));
    const first = dataArr.shift();
    const isUrl = isValidHttpUrl(first);
    let currentCode = "";
    if (isUrl) {
      const lastSlashIndex = first.lastIndexOf("/");
      const lastDotIndex = first.lastIndexOf(".");
      currentCode = first.substring(lastSlashIndex + 1, lastDotIndex);
    } else {
      currentCode = first.split(".")[0];
    }
    const code = currentCode.substring(0, currentCode.length - 1);
    return code;
  }
  function formatUrl(url, code) {
    const lastSlashIndex = url.lastIndexOf("/");
    const lastDotIndex = url.lastIndexOf(".");
    const tmpCode = url.substring(lastSlashIndex + 1, lastDotIndex);
    const newUrl = url.replace(tmpCode, code);
    return newUrl;
  }
  function crackUrl(url) {
    _GM_xmlhttpRequest({
      method: "GET",
      url,
      onload: function({ response }) {
        const code = getCodeFromString(response);
        if (code) {
          const newUrl = formatUrl(url, code);
          main(newUrl);
        }
      }
    });
  }
  let injectEntryUrl = "";
  function getSellerContainer() {
    const element = document.querySelector("span.sell-btn") || document.querySelector("div.pagecontainer") || document.querySelector("div.publicContainer");
    return element;
  }
  (() => {
    let oldUrl = window.location.href;
    const mutationObserver = new MutationObserver(() => {
      const newUrl = window.location.href;
      const isHaiJiaoPid = window.location.href.includes("?pid=");
      const sellContainer = getSellerContainer();
      if (!sellContainer) {
        return;
      }
      if (oldUrl !== newUrl) {
        oldUrl = newUrl;
        if (isHaiJiaoPid) {
          if (injectEntryUrl !== window.location.href) {
            injectEntry();
          }
        } else {
          const hide$Element = $("#crack_container");
          if (hide$Element.length > 0) {
            hide$Element.remove();
          }
        }
      } else {
        if (isHaiJiaoPid && injectEntryUrl !== window.location.href) {
          injectEntry();
        }
      }
    });
    function injectEntry() {
      const sellContainer = getSellerContainer();
      if (sellContainer) {
        let [pid] = window.location.search.match(/\d+/) || [];
        if (!pid) {
          return;
        }
        const formatUrl2 = `${location.origin}/api/topic/${pid}`;
        injectEntryUrl = window.location.href;
        _GM_xmlhttpRequest({
          method: "GET",
          url: formatUrl2,
          onload: function({ response }) {
            const formatData = JSON.parse(response);
            if (formatData == null ? void 0 : formatData.data) {
              try {
                const data = JSON.parse(atob(atob(atob(formatData.data))));
                const attachments = data.attachments;
                const usefulData = attachments.find(
                  (item) => {
                    const remoteUrl = item.remoteUrl || "";
                    return remoteUrl.includes("m3u8");
                  }
                );
                const url = usefulData == null ? void 0 : usefulData.remoteUrl;
                if (url) {
                  crackUrl(url);
                }
              } catch (error) {
                console.log("海角解析失败了: ", error);
              }
            }
          }
        });
      }
    }
    if (!isMobile()) {
      setTimeout(() => {
        mutationObserver.disconnect();
      }, 120 * 1e3);
    }
    mutationObserver.observe(document.body, {
      attributes: true,
      childList: true
    });
  })();

})(DPlayer, Hls, jQuery);
