/******************************
 * 海角社区 PWA 去广告 v3（开屏 + 进入弹窗）
 *
 * 抓包：2026-05-25-221112
 *
 * 失败常见原因：
 *   1. Service Worker 缓存了未 patch 的 main.dart.js → 本脚本会禁用 SW 缓存
 *   2. js/aware.js 拉起 e6eb7.aavhnube.cc/minor.html 外链广告 → 已禁用
 *
 * 生效：QX 重载 → 清除 p4.aozngkwm.com 网站数据 → 完全关闭 App 再开
 ******************************/

const url = ($request.url || "").toLowerCase();
let body = $response.body;

function patchMainDart(src) {
  let n = 0;
  const hit = (label) => {
    n++;
    console.log(`[海角去广告] ${label}`);
  };
  const gsub = (re, rep, label) => {
    const before = src;
    src = src.replace(re, rep);
    if (src !== before) hit(label);
  };

  // 禁用 aware.js（会打开 minor.html 外链开屏广告）
  gsub(
    /B\.VW=A\.b\(s\(\["js\/aware\.js[^"]*","https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/crypto-js\/[^"]+"\]\),t\.s\)/,
    'B.VW=A.b(s(["https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js?v=2"]),t.s)',
    "aware.js"
  );

  // getconfig：开屏 / 弹窗 / 悬浮
  gsub(/p\.fx=c\.i\(a,n\)[^\n]+/, "p.fx=A.b([],t.n)", "ads_screen 开屏");
  gsub(/p\.fy=c\.i\(a,m\)[^\n]+/, "p.fy=A.b([],t.n)", "ads_pop 弹窗");
  gsub(/p\.go=c\.i\(a,j\)[^\n]+/, "p.go=[]", "floating_ads 启动悬浮");
  gsub(
    /if\(c\.i\(a,g\)!=null&&b\.b\(c\.i\(a,g\)\)\)\{s=J\.ao\(b\.a\(c\.i\(a,g\)\),new A\.aN_\(\),t\.__\)\ns=A\.x\(s,!0,s\.\$ti\.j\("J\.E"\)\)\}else s=A\.b\(\[\],t\.lT\)\np\.db=s/,
    "s=A.b([],t.lT)\np.db=s",
    "apps 推广宫格"
  );
  gsub(/p\.y1=A\.i\(c\.i\(a,"floating_ai"\)\)/, 'p.y1=""', "floating_ai");

  // 开屏页：无广告时走默认 splash（双保险）
  gsub(
    /gaJY\(\)\{var s,r,q=null\nif\(J\.bh\(\$\.bf\(\)\.fx\)\)/,
    "gaJY(){var s,r,q=null\nif(!0)",
    "gaJY 默认开屏"
  );

  // 列表/详情内嵌广告
  gsub(/t\.j\.b\(J\.d\(a,"banner"\)\)/g, "!1", "banner");
  gsub(/t\.j\.b\(J\.d\(a,"banners"\)\)/g, "!1", "banners");
  gsub(/t\.j\.b\(J\.d\(a,"ad_list"\)\)/g, "!1", "ad_list");
  gsub(/t\.j\.b\(J\.d\(a,"ads"\)\)/g, "!1", "ads 数组");
  gsub(/m\.b\(n\.i\(a,"banner"\)\)/g, "!1", "appcenter banner");
  gsub(/p\.b\(o\.i\(a,"ads"\)\)/g, "!1", "mv ads");
  gsub(/p\.b\(o\.i\(a,"ads_media"\)\)/g, "!1", "mv ads_media");
  gsub(/p\.b\(q\.i\(a,"ads"\)\)/g, "!1", "page ads");
  gsub(/r\.b\(s\.i\(a,"ads"\)\)/g, "!1", "list ads");
  gsub(
    /r\.b\(s\.i\(a,p\)\)\?J\.cd\(J\.ao\(s\.i\(a,p\),new A\.bpb\(\),t\.U\)\):A\.b\(\[\],t\.n\)/g,
    "A.b([],t.n)",
    "top_banner"
  );
  gsub(
    /r\.b\(s\.i\(a,o\)\)\?J\.cd\(J\.ao\(s\.i\(a,o\),new A\.bpc\(\),t\.U\)\):A\.b\(\[\],t\.n\)/g,
    "A.b([],t.n)",
    "bot_banner"
  );

  // 启动弹窗调度链
  gsub(/r\.Z0\$=A\.x\(\$\.bf\(\)\.fy,!0,t\.z\)/, "r.Z0$=A.b([],t.z)", "启动 ads_pop 队列");
  gsub(/Vq\(a,b\)\{var s="advertising"/, 'Vq(a,b){return;var s="advertising"', "advertising 弹窗");
  gsub(/b0_\(a\)\{var s=this\.c/, "b0_(a){return;var s=this.c", "全屏开屏 b0_");
  gsub(/b05\(a\)\{var s=this,r=B\.b\.ha\(s\.Z0\$/, "b05(a){return;var s=this,r=B.b.ha(s.Z0$", "弹窗队列 b05");
  gsub(/b_Z\(a\)\{var s,r,q=\{\}/, "b_Z(a){return;var s,r,q={}", "活动弹窗 b_Z");
  gsub(/b0w\(a\)\{var s,r=null\nthis\.Vq\(B\.JO,a\)/, "b0w(a){return;var s,r=null\nthis.Vq(B.JO,a)", "悬浮 b0w");
  gsub(/acB\(\)\{var s=this/, "acB(){return;var s=this", "启动广告调度 acB");

  console.log(`[海角去广告] main.dart.js 共 ${n} 处补丁`);
  return src;
}

function patchServiceWorker(src) {
  let n = 0;
  const gsub = (re, rep, label) => {
    const before = src;
    src = src.replace(re, rep);
    if (src !== before) {
      n++;
      console.log(`[海角去广告] SW ${label}`);
    }
  };

  // main.dart.js 改为 network-first，避免 SW 返回未 patch 的旧缓存
  gsub(
    /if \(key == '\/'\) \{\n    return onlineFirst\(event\);\n  \}/,
    "if (key == '/' || key == 'main.dart.js') {\n    return onlineFirst(event);\n  }",
    "main.dart.js online-first"
  );

  console.log(`[海角去广告] service_worker 共 ${n} 处补丁`);
  return src;
}

function patchBootstrap(src) {
  let n = 0;
  const gsub = (re, rep, label) => {
    const before = src;
    src = src.replace(re, rep);
    if (src !== before) {
      n++;
      console.log(`[海角去广告] bootstrap ${label}`);
    }
  };

  // 禁用 Service Worker 注册，强制每次从网络加载（经 QX patch）
  gsub(/loadServiceWorker\(e\)\{/, "loadServiceWorker(e){return Promise.resolve();", "disable SW");
  gsub(/return b\(s,t,"prepareServiceWorker"\)/, "return Promise.resolve(null)", "disable SW return");

  console.log(`[海角去广告] bootstrap 共 ${n} 处补丁`);
  return src;
}

function patchIndexHtml(src) {
  if (src.includes("hj-no-sw")) return src;
  const inject =
    '<script id="hj-no-sw">' +
    "try{navigator.serviceWorker.getRegistrations().then(function(r){r.forEach(function(x){x.unregister()})});" +
    "caches.keys().then(function(k){k.forEach(function(n){caches.delete(n)})})}catch(e){}" +
    "</script>";
  if (src.includes("<body>")) {
    src = src.replace("<body>", "<body>\n  " + inject);
    console.log("[海角去广告] index.html 注入 SW 清理");
  }
  return src;
}

if (!body) {
  console.log("[海角去广告] 空响应，跳过");
} else if (url.includes("main.dart.js")) {
  if (body.length > 100000 && body.includes("ayp(a){")) {
    body = patchMainDart(body);
  } else {
    console.log("[海角去广告] main.dart.js 格式不符，跳过");
  }
} else if (url.includes("flutter_service_worker.js")) {
  body = patchServiceWorker(body);
} else if (url.includes("flutter_bootstrap.js")) {
  body = patchBootstrap(body);
} else if (url.includes("aware.js")) {
  body = "// haijiao ad blocker\n";
  console.log("[海角去广告] aware.js 已置空");
} else if (
  url.includes("index.html") ||
  /\/\?(hjsqapp|trace_id|aff)/.test(url) ||
  /\/$/.test(url.split("?")[0].replace(/^https?:\/\/[^/]+/, ""))
) {
  if (body.includes("<html") || body.includes("<!DOCTYPE")) {
    body = patchIndexHtml(body);
  }
}

$done({ body });
