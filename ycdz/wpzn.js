/******************************

脚本功能：物品指南——解锁订阅
下载地址：https://is.gd/j1eFZU
软件版本：1.2.6
脚本作者：彭于晏💞
更新时间：2023-10-1
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

https://api.revenuecat.com/v1/(receipts|subscribers)/* url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/wpzn.js

[mitm] 

hostname = api.revenuecat.com

*******************************/

var objc = JSON.parse($response.body);

    objc = 

{
  "request_date_ms" : 1695823444784,
  "request_date" : "2023-09-27T14:04:04Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2023-09-27T13:53:14Z",
    "original_application_version" : "187",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "xyz.jiaolong.MyThings.pro.infinity" : {
        "unsubscribe_detected_at" : null,
        "expires_date" : "2099-10-27T14:03:52Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "auto_resume_date" : null,
        "original_purchase_date" : "2023-09-27T14:03:55Z",
        "grace_period_expires_date" : null,
        "period_type" : "normal",
        "purchase_date" : "2023-09-27T14:03:52Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "store_transaction_id" : "190001736542492"
      }
    },
    "entitlements" : {
      "pro" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2023-09-27T14:03:52Z",
        "product_identifier" : "xyz.jiaolong.MyThings.pro.infinity",
        "expires_date" : "2099-10-27T14:03:52Z"
      }
    },
    "original_purchase_date" : "2023-09-27T13:52:21Z",
    "original_app_user_id" : "$RCAnonymousID:a022bfbc35ab484f964ef60126fede82",
    "last_seen" : "2023-09-27T13:53:14Z"
  }
}



$done({body : JSON.stringify(objc)});
