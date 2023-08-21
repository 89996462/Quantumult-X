/*******************************

脚本名称: OneTodo - Personal——解锁订阅
下载地址：https://is.gd/R43DLC
软件版本：1.3.4
脚本作者：彭于晏💞
更新时间：2023-8-22
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】


*******************************

[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/OneTodo.js

[mitm]

hostname = api.revenuecat.com

*************************************/


const pyy = {};
const pyy2 = JSON.parse(typeof $response != "undefined" && $response.body || null);
const name = "pro";
const appid = "pyy_lifetime";

if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  pyy.headers = $request.headers;
} else if (pyy2 && pyy2.subscriber) {
  data = {
 "Author": "彭于晏",
 "Telegram" : "https://t.me/plus8889",
 "warning": "仅供学习，禁止转载或售卖",
 "original_purchase_date": "2022-11-11T00:00:00Z",
 "purchase_date": "2022-11-11T00:00:00Z",
 "store" : "app_store",
 "ownership_type": "PURCHASED"
 };
  pyy2.subscriber.subscriptions[(appid)] = data
  pyy2.subscriber.entitlements[(name)] = JSON.parse(JSON.stringify(data));
  pyy2.subscriber.entitlements[(name)].product_identifier = (appid);
  pyy.body = JSON.stringify(pyy2);
}

$done(pyy);
