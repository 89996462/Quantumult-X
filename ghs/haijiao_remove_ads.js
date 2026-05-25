/*
 * 海角社区 PWA 去广告脚本 (Quantumult X)

 * ^https?:\/\/[^\/]+\..+\/main\.dart\.js(\?.*)? url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ghs/haijiao_remove_ads.js


 * hostname = p4.aozngkwm.com, *.aozngkwm.com, api2.fnomellx.cc, api2.anpbbxdyo.com, *.anpbbxdyo.com

 * ==============================
 */

const isQX = typeof $task !== "undefined";
const isSurge = typeof $httpClient !== "undefined" && !isQX;
const isLoon = typeof $loon !== "undefined";

let body = $response.body;

function patchMainDart(src) {
  let n = 0;
  const hit = (label) => { n++; console.log(`[海角去广告] ${label}`); };

  // ---- 1. /api/home/getconfig 全局广告配置 ----
  const cfgPatches = [
    [
      /p\.fx=c\.i\(a,n\)[^\n]+/,
      "p.fx=A.b([],t.n)",
      "清除开屏广告 ads_screen"
    ],
    [
      /p\.fy=c\.i\(a,m\)[^\n]+/,
      "p.fy=A.b([],t.n)",
      "清除弹窗广告 ads_pop"
    ],
    [
      /p\.go=c\.i\(a,j\)[^\n]+/,
      "p.go=[]",
      "清除悬浮广告 floating_ads"
    ],
    [
      /if\(c\.i\(a,g\)!=null&&b\.b\(c\.i\(a,g\)\)\)\{s=J\.ao\(b\.a\(c\.i\(a,g\)\),new A\.aN_\(\),t\.__\)\ns=A\.x\(s,!0,s\.\$ti\.j\("J\.E"\)\)\}else s=A\.b\(\[\],t\.lT\)\np\.db=s/,
      "s=A.b([],t.lT)\np.db=s",
      "清除应用中心/启动页推广 apps"
    ]
  ];

  for (const [re, rep, label] of cfgPatches) {
    if (re.test(src)) {
      src = src.replace(re, rep);
      hit(label);
    }
  }

  // ---- 2. 各页面 API 响应中的 banner / ad_list ----
  const bannerPatches = [
    [/t\.j\.b\(J\.d\(a,"banner"\)\)/g, "!1", "禁用 banner 字段解析"],
    [/t\.j\.b\(J\.d\(a,"banners"\)\)/g, "!1", "禁用 banners 字段解析"],
    [/t\.j\.b\(J\.d\(a,"ad_list"\)\)/g, "!1", "禁用 ad_list 字段解析"],
    [/m\.b\(n\.i\(a,"banner"\)\)/g, "!1", "禁用 appcenter banner"],
    [
      /r\.b\(s\.i\(a,p\)\)\?J\.cd\(J\.ao\(s\.i\(a,p\),new A\.bpb\(\),t\.U\)\):A\.b\(\[\],t\.n\)/g,
      "A.b([],t.n)",
      "禁用 top_banner"
    ],
    [
      /r\.b\(s\.i\(a,o\)\)\?J\.cd\(J\.ao\(s\.i\(a,o\),new A\.bpc\(\),t\.U\)\):A\.b\(\[\],t\.n\)/g,
      "A.b([],t.n)",
      "禁用 bot_banner"
    ]
  ];

  for (const [re, rep, label] of bannerPatches) {
    if (re.test(src)) {
      src = src.replace(re, rep);
      hit(label);
    }
  }

  // ---- 3. 启动弹窗 / 广告上报 ----
  const flowPatches = [
    [
      /r\.Z0\$=A\.x\(\$\.bf\(\)\.fy,!0,t\.z\)/,
      "r.Z0$=A.b([],t.z)",
      "禁用启动弹窗广告队列"
    ],
    [
      /Vq\(a,b\)\{var s="advertising"/,
      'Vq(a,b){return;var s="advertising"',
      "禁用广告埋点弹窗"
    ],
    [
      /b0_\(a\)\{var s=this\.c/,
      "b0_(a){return;var s=this.c",
      "禁用全屏广告弹层"
    ],
    [
      /b_Z\(a\)\{var s,r,q=\{\}/,
      "b_Z(a){return;var s,r,q={}",
      "禁用应用推广弹窗"
    ]
  ];

  for (const [re, rep, label] of flowPatches) {
    if (re.test(src)) {
      src = src.replace(re, rep);
      hit(label);
    }
  }

  console.log(`[海角去广告] 共应用 ${n} 处补丁`);
  return src;
}

if (body && body.includes("ayp(a){") && body.includes("ads_screen")) {
  body = patchMainDart(body);
} else if (body && body.length > 100000) {
  // 版本更新后字段名可能变化，仍尝试 banner 级补丁
  body = patchMainDart(body);
  console.log("[海角去广告] 未匹配完整特征，已尝试通用补丁");
} else {
  console.log("[海角去广告] 非 main.dart.js，跳过");
}

$done({ body });
