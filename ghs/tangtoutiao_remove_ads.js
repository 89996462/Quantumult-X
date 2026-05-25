/******************************
 * 汤头条 PWA 去广告
 *
 * 将下方 [rewrite_local]、[filter-local]、[mitm] 复制到 Quantumult X 配置文件
 * 脚本可放本地，或使用 raw 远程地址（请改成你自己的仓库路径）
 *
 * 远程示例：
 * https://raw.githubusercontent.com/89996462/Quantumult-X/main/ghs/tangtoutiao_remove_ads.js
 *
 * - 前端 Nuxt3：p1.ceogberj.cc /_nuxt/*.js
 * - API：api3.caanrrim.cc/pwa.php（响应加密，在客户端 Decrypt 后处理）
 * - 开屏：config.ads（getOpenAdsAndVersion）
 * - 首页广告位：element/list_element 返回的 .ads + dx-ads 组件
 * - 广告图 CDN：*/upload_01/ads/
 *
 * 更新脚本后请清除汤头条 PWA 网站数据，避免旧 JS 缓存
 *******************************

[rewrite_local]

# 主包：API 解密后剥离 ads 等字段（匹配含 mS 拦截器的入口 chunk）
^https?:\/\/[^\/]+\..+\/_nuxt\/[\w.-]+\.js url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ghs/tangtoutiao_remove_ads.js

[filter-local]

# 拦截广告图（勿拦 /upload/、/upload_01/xiao/ 等正常封面）
^https?:\/\/[^\/]+\/upload_01\/ads\/ url reject

[mitm]

hostname = p1.ceogberj.cc, *.ceogberj.cc, api3.caanrrim.cc, *.caanrrim.cc, new.iajckz.cn, *.iajckz.cn, tp5.iajckz.cn, tp6.iajckz.cn, 120play.*.cn

*******************************/


let body = $response.body;

const STRIP_FN =
  'function stripTT(o,d){if(!o||typeof o!="object"||d>12)return;if(Array.isArray(o)){for(const e of o)stripTT(e,d+1);return}for(const k of["ads","ad_list","banner","banners","floating_ads","ads_pop","ads_screen","popup_ads","open_ads"])Object.prototype.hasOwnProperty.call(o,k)&&(o[k]=Array.isArray(o[k])?[]):null);for(const k in o)stripTT(o[k],d+1)}';

function patchEntry(src) {
  let n = 0;
  if (
    src.includes("function mS(e,{$CryptoData:t,$Toast:r})") &&
    !src.includes("function stripTT(")
  ) {
    src = src.replace("function mS(e,{$CryptoData:t,$Toast:r})", STRIP_FN + "function mS(e,{$CryptoData:t,$Toast:r})");
    n++;
  }
  const needle = "const f=t.Decrypt(n.data);if(u===f.status)";
  const insert = "const f=t.Decrypt(n.data);stripTT(f.data??f,0);if(u===f.status)";
  if (src.includes(needle)) {
    src = src.replace(needle, insert);
    n++;
  }
  return { src, n };
}

function patchSplash(src) {
  let n = 0;
  const gsub = (from, to, label) => {
    if (!src.includes(from)) return;
    src = src.replace(from, to);
    n++;
    console.log(`[汤头条去广告] ${label}`);
  };
  gsub(
    "async function y(){b.value.length?k():E.replace(\"/home\")}",
    "async function y(){E.replace(\"/home\")}",
    "开屏跳过 ads"
  );
  gsub("b.value.length?k():E.replace", "!1?k():E.replace", "开屏跳过 ads(备用)");
  return { src, n };
}

function patchDxAds(src) {
  const from = 'setup(b){const s=b,u=ge*we';
  const to = "setup(b){return()=>null;const s=b,u=ge*we";
  if (!src.includes(from)) return { src, n: 0 };
  return { src: src.replace(from, to), n: 1 };
}

function run() {
  if (!body || body.length < 500) {
    console.log("[汤头条去广告] 跳过：响应过短");
    return body;
  }

  let total = 0;

  if (body.includes("function mS(e,{$CryptoData:t,$Toast:r})")) {
    const r = patchEntry(body);
    body = r.src;
    if (r.n) {
      total += r.n;
      console.log("[汤头条去广告] API 解密后剥离 ads");
    }
  }

  if (body.includes('__name:"splash"') && body.includes("config.ads")) {
    const r = patchSplash(body);
    body = r.src;
    total += r.n;
  }

  if (body.includes('__name:"dx-ads"')) {
    const r = patchDxAds(body);
    body = r.src;
    if (r.n) {
      total += r.n;
      console.log("[汤头条去广告] 禁用 dx-ads 组件");
    }
  }

  if (total === 0) console.log("[汤头条去广告] 未匹配到可补丁内容");
  else console.log(`[汤头条去广告] 共 ${total} 处补丁`);

  return body;
}

body = run();
$done({ body });
