/******************************
 * 海角社区 PWA 去广告（开屏 + 进入弹窗）
 *
 * 抓包依据：2026-05-25-221112
 *   域名 p4.aozngkwm.com / api2.anpbbxdyo.com / new.iajckz.cn
 *   配置接口 POST /api/home/getconfig（响应加密，改 main.dart.js 解析逻辑）
 *
 * 净化项：
 *   ① 开屏广告      getconfig → ads_screen / floating_ads
 *   ② 进入弹窗      getconfig → ads_pop / apps 推广宫格
 *   ③ 弹窗调度      acB / b0_ / b_Z / Vq
 *
 * 使用：将 海角.conf 中 [rewrite_local][filter-local][mitm] 复制到 QX 配置
 * 脚本放到 QX 本地脚本目录，或改成你的 raw 地址
 *
 * 生效后：QX 重载 → 清除 p4.aozngkwm.com 网站数据 → 重新打开
 ******************************/


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

  // 列表/详情内嵌广告（顺带净化，不影响开屏弹窗逻辑）
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
  gsub(/b_Z\(a\)\{var s,r,q=\{\}/, "b_Z(a){return;var s,r,q={}", "活动弹窗 b_Z");
  gsub(/acB\(\)\{var s=this/, "acB(){return;var s=this", "启动广告调度 acB");

  console.log(`[海角去广告] 共 ${n} 处补丁`);
  return src;
}

if (body && body.length > 100000 && body.includes("ayp(a){")) {
  body = patchMainDart(body);
} else {
  console.log("[海角去广告] 跳过：非 main.dart.js");
}

$done({ body });
