/******************************

脚本功能：Focos+解锁订阅
下载地址：https://is.gd/vpRvsM
软件版本：2.1.0
脚本作者：彭于晏💞
更新时间：2023-9-2
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

*******************************

[rewrite_local]

^https?:\/\/.*\.oracle\.bendingspoonsapps\.com\/v\d\/(users\/.+|purchases\/verify) url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/Focos.js

[mitm]

hostname = *.oracle.bendingspoonsapps.com

*************************************/


if ($response.body != 'undefined'){
var ojbk = JSON.parse($response.body);
const url = $request.url;

if (url.indexOf('splice') != -1) { ids = "com.path36.SpliceFree.1y_t150_bundle";}
if (url.indexOf('filmicpro') != -1) { ids = "com.cinegenix.filmic.pro.1y_t130_bundle_creator";}
if (url.indexOf('firstlight') != -1) { ids = "com.filmicpro.firstlight.1y_t130_bundle_creator";}
if (url.indexOf('doubletake') != -1) { ids = "com.filmicpro.doubletake.1w_t20_bundle_creator";}
if (url.indexOf('focos') != -1) { ids = "com.focos.1y_t130_bundle_creator";}
if (url.indexOf('remini') != -1) { ids = "com.bigwinepot.nwdn.international.1y_p99_99_ft_pro";}
if (url.indexOf('focoslive') != -1) { ids = "com.focoslive.1y_t130_adj";}
if (url.indexOf('thirtydayfitness') != -1) { ids = "com.vigorapps.30DayFitness.1y_t130_bundle_adj";}
if (url.indexOf('sleep') != -1) { ids = "com.bendingspoonsapps.SleepHelp.1y_t100_bundle_adj";}
if (url.indexOf('yoga') != -1) { ids = "com.flyingnayeem.yoga.1y_t100_1w_bundle_adj";}

ojbk["me"]["active_subscriptions_ids"] = [(ids)];
ojbk["me"]["active_bundle_subscriptions"] = [{
   "expiry" : "2099-09-09T09:09:09+00:00",
   "product_id" : (ids),
   "features" : ["unlock"]
  }];
ojbk["settings"]["__identity__"]["expiration"] = "2099-09-09T09:09:09+00:00";
$done({body : JSON.stringify(ojbk)});
}

