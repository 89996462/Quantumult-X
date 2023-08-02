/*******************************

脚本功能：Focos+解锁订阅
下载地址：https://is.gd/vpRvsM
软件版本：2.9.1
脚本作者：彭于晏💞
更新时间：2023-8-2
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************

[rewrite_local]

^https?:\/\/focos\.oracle\.bendingspoonsapps\.com\/v\d\/(users\/setup|purchases\/verify) url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/Focos.js

[mitm]

hostname = focos.oracle.bendingspoonsapps.com

*******************************/

var ojbk = JSON.parse($response.body);

ojbk["me"]["active_subscriptions_ids"] = ["com.focos.1y_t130_bundle_creator"];
ojbk["me"]["active_bundle_subscriptions"] = [{
   "expiry" : "2099-09-09T09:09:09+00:00",
   "product_id" : "com.focos.1y_t130_bundle_creator",
   "features" : ["unlock"]
  }];
ojbk["settings"]["__identity__"]["expiration"] = "2099-09-09T09:09:09.09+00:00";

$done({body : JSON.stringify(ojbk)});
