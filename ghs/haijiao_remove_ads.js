/******************************
 * 海角社区 PWA 去广告 v2
 *
 * 将下方 [rewrite_local]、[filter-local]、[mitm] 复制到 Quantumult X 配置文件
 * 脚本可放本地，或使用 raw 远程地址（请改成你自己的仓库路径）
 *
 * 远程示例：
 * https://raw.githubusercontent.com/89996462/Quantumult-X/main/ghs/haijiao_remove_ads.js
 *
 * 生效后请清除 p4.aozngkwm.com 网站数据（避免 Service Worker 缓存旧 JS）
 *******************************

[rewrite_local]

# patch Flutter 主程序，去除广告解析逻辑
^https?:\/\/[^\/]+\..+\/main\.dart\.js(\?.*)? url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ghs/haijiao_remove_ads.js

[filter-local]

# 拦截广告图 CDN（抓包路径：*/upload_01/ads/，勿拦 /xiao/ 正常封面）
^https?:\/\/[^\/]+\/upload_01\/ads\/ url reject

[mitm]

hostname = p4.aozngkwm.com, *.aozngkwm.com, api2.fnomellx.cc, *.fnomellx.cc, api2.anpbbxdyo.com, *.anpbbxdyo.com, new.iajckz.cn, *.iajckz.cn

*******************************/


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

  // getconfig 全局广告
  gsub(/p\.fx=c\.i\(a,n\)[^\n]+/, "p.fx=A.b([],t.n)", "ads_screen");
  gsub(/p\.fy=c\.i\(a,m\)[^\n]+/, "p.fy=A.b([],t.n)", "ads_pop");
  gsub(/p\.go=c\.i\(a,j\)[^\n]+/, "p.go=[]", "floating_ads");
  gsub(
    /if\(c\.i\(a,g\)!=null&&b\.b\(c\.i\(a,g\)\)\)\{s=J\.ao\(b\.a\(c\.i\(a,g\)\),new A\.aN_\(\),t\.__\)\ns=A\.x\(s,!0,s\.\$ti\.j\("J\.E"\)\)\}else s=A\.b\(\[\],t\.lT\)\np\.db=s/,
    "s=A.b([],t.lT)\np.db=s",
    "apps 推广"
  );
  gsub(/p\.y1=A\.i\(c\.i\(a,"floating_ai"\)\)/, 'p.y1=""', "floating_ai");

  // 列表/详情 banner、ads、ads_media
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

  // 启动弹窗 / 广告组件
  gsub(/r\.Z0\$=A\.x\(\$\.bf\(\)\.fy,!0,t\.z\)/, "r.Z0$=A.b([],t.z)", "启动 ads_pop");
  gsub(/Vq\(a,b\)\{var s="advertising"/, 'Vq(a,b){return;var s="advertising"', "advertising 弹窗");
  gsub(/b0_\(a\)\{var s=this\.c/, "b0_(a){return;var s=this.c", "全屏广告");
  gsub(/b_Z\(a\)\{var s,r,q=\{\}/, "b_Z(a){return;var s,r,q={}", "应用推广");
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
