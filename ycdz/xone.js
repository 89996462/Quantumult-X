/******************************

脚本功能：XONE——解锁订阅
下载地址：https://is.gd/ZDmmCY
软件版本：1.0.6
脚本作者：彭于晏💞
更新时间：2025-5-9
问题反馈：QQ+89996462
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************
[rewrite_local]

https:\/\/api\.(revenuecat|rc-backup)\.com\/v1\/(subscribers|receipts) url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/xone.js

https:\/\/api\.(revenuecat|rc-backup)\.com\/v1\/(subscribers|receipts) url script-response-header https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/xone.js

[mitm] 

hostname = api.revenuecat.com,api.rc-backup.com

*******************************/


const py996 = {};
const py997 = JSON.parse(typeof $response != "undefined" && $response.body || null);

const name = "Pro";
const appid = "Lifetime_Origin";

  
if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];

  py996.headers = $request.headers;
} else if (py997 && py997.subscriber) {
  data = {
    "expires_date": "9999-09-09T09:09:09Z",
    "original_purchase_date": "2023-02-23T02:33:33Z",
    "purchase_date": "2023-02-23T02:33:33Z",
    "ownership_type": "PURCHASED",
    "store": "app_store"
  };

  py997.subscriber.subscriptions[(appid)] = data
  py997.subscriber.entitlements[(name)] = JSON.parse(JSON.stringify(data));
  py997.subscriber.entitlements[(name)].product_identifier = (appid);
  py996.body = JSON.stringify(py997);
}

$done(py996);
