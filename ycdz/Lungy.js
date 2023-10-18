/******************************

脚本功能：Lungy:呼吸练习——解锁订阅
下载地址：https://is.gd/FqeBxj
软件版本：1.2.5
脚本作者：彭于晏💞
更新时间：2023-10-20
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************

[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/Lungy.js

[MITM]

hostname = api.revenuecat.com

********************************/

var py996 = JSON.parse($response.body);
py996.subscriber.entitlements = {
  "Deluxe": {
    "expires_date": "9999-09-09T09:09:09Z",
    "product_identifier": "lungy_1999_lifetime",
    "purchase_date": "2023-02-23T02:33:33Z"
  }
};
py996.subscriber.original_purchase_date = "2023-02-23T03:33:33Z";
py996.subscriber.subscriptions = {
  "lungy_1999_lifetime": {
    "expires_date": "9999-09-09T09:09:09Z",
    "original_purchase_date": "2023-02-23T02:33:33Z",
    "purchase_date": "2023-02-23T02:33:33Z",
    "ownership_type" : "PURCHASED",
    "store" : "app_store"
  }
};
$done({ body: JSON.stringify(py996) });
