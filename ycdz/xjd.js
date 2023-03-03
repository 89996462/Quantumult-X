

/******************************

脚本功能：小决定——解锁订阅
下载地址：https://is.gd/N8u2W0
软件版本：2.18
脚本作者：彭于晏💞
更新时间：2023-3-3
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/xjd.js

[mitm] 

hostname = api.revenuecat.com

*******************************/


var objc = JSON.parse($response.body);

    objc = 
{
  "request_date_ms" : 1677844542971,
  "request_date" : "2023-03-03T11:55:42Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2023-03-03T11:51:30Z",
    "original_application_version" : "171",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "com.nixwang.decision.pro.annual" : {
        "original_purchase_date" : "2023-03-03T11:54:36Z",
        "expires_date" : "2099-03-06T11:54:35Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "unsubscribe_detected_at" : "2023-03-03T11:55:42Z",
        "grace_period_expires_date" : null,
        "period_type" : "trial",
        "purchase_date" : "2023-03-03T11:54:35Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "com.nixwang.decision.entitlements.pro" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2023-03-03T11:54:35Z",
        "product_identifier" : "com.nixwang.decision.pro.annual",
        "expires_date" : "2099-03-06T11:54:35Z"
      }
    },
    "original_purchase_date" : "2023-03-03T11:49:58Z",
    "original_app_user_id" : "$RCAnonymousID:6b1c9cd486a1464e81eaccb3ec45527a",
    "last_seen" : "2023-03-03T11:51:30Z"
  }
}



$done({body : JSON.stringify(objc)});
