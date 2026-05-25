/******************************
 * 汤头条 PWA 去广告 v3
 *
 * 远程：https://raw.githubusercontent.com/89996462/Quantumult-X/main/ghs/tangtoutiao_remove_ads.js
 *
 * v3 修复：抓包无 _nuxt 请求时 JS 缓存导致补丁未生效
 *   - HTML 注入 cache-bust + 隐藏广告 CSS
 *   - 增强 stripTT（advertise_code / /ads/ 图片）
 *   - 补丁 setConfigByKeys、dx-ad-link
 *
 * 更新后请清除汤头条 PWA 网站数据
 *******************************/


let body = $response.body;

const STRIP_FN =
  'function stripTT(o,d){if(!o||typeof o!="object"||d>12)return;if(Array.isArray(o)){for(var i=o.length-1;i>=0;i--){var e=o[i];if(e&&typeof e=="object"&&(e.advertise_code||e.advertise_location_code||String(e.img_url||e.url||"").indexOf("/ads/")>-1))o.splice(i,1);else stripTT(e,d+1)}return}for(var k of["ads","ad_list","banner","banners","floating_ads","ads_pop","ads_screen","popup_ads","open_ads","advertise_list"])Object.prototype.hasOwnProperty.call(o,k)&&(o[k]=Array.isArray(o[k])?[]):null);for(var k in o)stripTT(o[k],d+1)}';

const HTML_INJECT =
  '<style id="tt-no-ads">.welcome-ad,.marquee,.ad-title,.ad-swipe-item,.my-swipe-item{display:none!important}.grid.grid-cols-6.gap-x-1.gap-y-0\\.5{display:none!important}</style>' +
  '<script>(function(){try{var k=location.hostname;if(!/\\.cc$/.test(k))return;document.querySelectorAll(\'script[type="module"][src*="/_nuxt/"]\').forEach(function(s){if(s.src.indexOf("v=tt3")<0)s.src+=(s.src.indexOf("?")<0?"?":"&")+"v=tt3"})}catch(e){}})();<\/script>';

function patchHtml(src) {
  if (!src.includes('__NUXT__') && !src.includes('id="mobile"')) return { src, n: 0 };
  let n = 0;
  if (!src.includes('id="tt-no-ads"')) {
    src = src.replace('</head>', HTML_INJECT + '</head>');
    n++;
  }
  const bust = /(\/_nuxt\/[\w.-]+\.js)(?=")/g;
  const next = src.replace(bust, '$1?v=tt3');
  if (next !== src) {
    src = next;
    n++;
  }
  return { src, n };
}

function patchEntry(src) {
  let n = 0;
  if (
    src.includes("function mS(e,{$CryptoData:t,$Toast:r})") &&
    !src.includes("function stripTT(")
  ) {
    src = src.replace(
      "function mS(e,{$CryptoData:t,$Toast:r})",
      STRIP_FN + "function mS(e,{$CryptoData:t,$Toast:r})"
    );
    n++;
  }
  const decryptNeedle = "const f=t.Decrypt(n.data);if(u===f.status)";
  const decryptInsert =
    "const f=t.Decrypt(n.data);stripTT(f.data??f,0);if(u===f.status)";
  if (src.includes(decryptNeedle)) {
    src = src.replace(decryptNeedle, decryptInsert);
    n++;
  }
  const cfgNeedle =
    "setConfigByKeys(e){Object.keys(e).forEach(t=>{this.config[t]=e[t]})}";
  const cfgInsert =
    "setConfigByKeys(e){stripTT(e,0);Object.keys(e).forEach(t=>{this.config[t]=e[t]})}";
  if (src.includes(cfgNeedle) && src.includes("function stripTT(")) {
    src = src.replace(cfgNeedle, cfgInsert);
    n++;
  }
  return { src, n };
}

function patchSplash(src) {
  let n = 0;
  const rules = [
    [
      'async function y(){b.value.length?k():E.replace("/home")}',
      'async function y(){E.replace("/home")}',
      "开屏跳过",
    ],
    ["b.value.length?k():E.replace", "!1?k():E.replace", "开屏跳过(备用)"],
  ];
  for (const [from, to, label] of rules) {
    if (src.includes(from)) {
      src = src.replace(from, to);
      n++;
      console.log(`[汤头条去广告] ${label}`);
    }
  }
  return { src, n };
}

function patchDxAds(src) {
  let n = 0;
  const rules = [
    ['setup(b){const s=b,u=ge*we', "setup(b){return()=>null;const s=b,u=ge*we", "dx-ads"],
    [
      'setup(k,{emit:m}){var d,_;',
      "setup(k,{emit:m}){return()=>null;var d,_;",
      "dx-ad-link",
    ],
  ];
  for (const [from, to, label] of rules) {
    if (src.includes(from)) {
      src = src.replace(from, to);
      n++;
      console.log(`[汤头条去广告] 禁用 ${label}`);
    }
  }
  return { src, n };
}

function run() {
  if (!body) {
    console.log("[汤头条去广告] 跳过：空响应");
    return body;
  }

  let total = 0;

  if (body.includes("__NUXT__") || body.includes('id="mobile"')) {
    const r = patchHtml(body);
    body = r.src;
    if (r.n) {
      total += r.n;
      console.log(`[汤头条去广告] HTML 注入 ${r.n} 处（缓存破坏+CSS）`);
    }
  }

  if (body.length >= 500) {
    if (body.includes("function mS(e,{$CryptoData:t,$Toast:r})")) {
      const r = patchEntry(body);
      body = r.src;
      if (r.n) {
        total += r.n;
        console.log(`[汤头条去广告] 入口包补丁 ${r.n} 处`);
      }
    }

    if (body.includes('__name:"splash"') && body.includes("config.ads")) {
      const r = patchSplash(body);
      body = r.src;
      total += r.n;
    }

    if (body.includes('__name:"dx-ads"') || body.includes('__name:"dx-ad-link"')) {
      const r = patchDxAds(body);
      body = r.src;
      total += r.n;
    }
  }

  if (total === 0) console.log("[汤头条去广告] 未匹配");
  else console.log(`[汤头条去广告] 共 ${total} 处`);

  return body;
}

body = run();
$done({ body });
