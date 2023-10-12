/******************************

脚本功能：喔知wozi背单词+解锁订阅
下载地址：https://is.gd/60N2qO
软件版本：1.38.0
脚本作者：彭于晏💞
更新时间：2023-10-11
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/wozi.js

[mitm] 

hostname = api.revenuecat.com

*******************************/

var objc = JSON.parse($response.body);

    objc = 
{
  "request_date_ms" : 1658069658928,
  "request_date" : "2023-09-30T10:27:38Z",
  "subscriber" : {
    "last_seen" : "2023-09-30T10:27:38Z",
    "first_seen" : "2023-09-30T10:27:38Z",
    "original_application_version" : null,
    "other_purchases" : {

    },
    "management_url" : null,
    "subscriptions" : {
      "wozi_pro_2023" : {
        "Author" : "三岁",
        "ownership_type" : "PURCHASED",
        "product_identifier" : "com.happy.money.forever",
        "warning" : "三岁 ",
        "original_purchase_date" : "2023-09-09T09:09:09Z",
        "purchase_date" : "2023-09-09T09:09:09Z",
        "store" : "app_store"
      }
    },
    "entitlements" : {
      "wozi_pro_2023" : {
        "product_identifier" : "wozi_pro_2023",
        "purchase_date" : "2023-09-30T09:09:09Z"
      }
    },
    "original_purchase_date" : null,
    "original_app_user_id" : "$RCAnonymousID:5cac98e123034328a0dabdd62cb4a64a",
    "non_subscriptions" : {

    }
  }
}

$done({body : JSON.stringify(objc)});
