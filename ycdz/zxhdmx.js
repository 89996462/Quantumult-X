/*************************************

项目名称：真心话大冒险——解锁订阅
下载地址：https://is.gd/VRhPkZ
软件版本：1.7
脚本作者：彭于晏💞
更新时间：2023-9-3
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

**************************************

[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/zxhdmx.js

[mitm] 

hostname = api.revenuecat.com

************************************/


const anni = {};
const anni1 = JSON.parse(typeof $response != "undefined" && $response.body || null);

if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  anni.headers = $request.headers;
} else if (anni1 && anni1.subscriber) {
  anni1.subscriber.subscriptions = anni1.subscriber.subscriptions || {};
  anni1.subscriber.entitlements = anni1.subscriber.entitlements || {};

  const data = {
    "expires_date": "2099-12-31T12:00:00Z",
    "original_purchase_date": "2022-11-18T03:57:16Z",
    "purchase_date": "2022-06-15T12:00:00Z",
    "ownership_type": "PURCHASED",
    "store": "app_store"
  };

  anni1.subscriber.subscriptions["truth_or_dare_premium_monthly"] = data;
  anni1.subscriber.entitlements["premium"] = JSON.parse(JSON.stringify(data));
  anni1.subscriber.entitlements["premium"].product_identifier = "truth_or_dare_premium_monthly";

  anni.body = JSON.stringify(anni1);
}

$done(anni);
