/******************************

脚本功能：谜底时钟 +解锁全家桶订阅
下载地址：https://is.gd/uwPUdm
软件版本：2.30
脚本作者：彭于晏💞
更新时间：2023-10-11
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/mdsz.js


[MITM]

hostname = api.revenuecat.com

********************************/

var py996 = JSON.parse($response.body);
py996.subscriber.entitlements = {
  "Entitlement.Pro": {
    "expires_date": "9999-09-09T09:09:09Z",
    "product_identifier": "tech.miidii.MDClock.subscription.year.v1",
    "purchase_date": "9999-09-09T09:09:09Z"
  }
};
py996.subscriber.original_purchase_date = "2023-02-23T03:33:33Z";
py996.subscriber.subscriptions = {
  "tech.miidii.MDClock.subscription.year.v1": {
    "expires_date": "9999-09-09T09:09:09Z",
    "original_purchase_date": "2023-02-23T02:33:33Z",
    "purchase_date": "9999-09-09T09:09:09Z",
    "ownership_type" : "PURCHASED",
    "store" : "app_store"
  }
};
$done({ body: JSON.stringify(py996) });
