/******************************

脚本名称: 车票票——解锁订阅
下载地址：https://is.gd/nENrwn
脚本作者：彭于晏💞
更新时间：2023年8月11日
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

*******************************

[rewrite_local]

https://api.revenuecat.com/v1/(receipts|subscribers)/* url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/cpp.js

[mitm] 

hostname = api.revenuecat.com

*******************************/

var objc = JSON.parse($response.body);

    objc = {
  "request_date_ms" : 1691745938403,
  "request_date" : "2023-08-11T09:25:38Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2023-08-11T09:15:51Z",
    "original_application_version" : "2",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "eticket_9.9_1y_7d0" : {
        "original_purchase_date" : "2023-08-11T09:18:00Z",
        "expires_date" : "9999-08-18T09:18:00Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "store_transaction_id" : "430001519739141",
        "unsubscribe_detected_at" : null,
        "grace_period_expires_date" : null,
        "period_type" : "trial",
        "purchase_date" : "2023-08-11T09:18:00Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "vip" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2023-08-11T09:18:00Z",
        "product_identifier" : "eticket_9.9_1y_7d0",
        "expires_date" : "9999-08-18T09:18:00Z"
      }
    },
    "original_purchase_date" : "2023-08-11T09:14:59Z",
    "original_app_user_id" : "$RCAnonymousID:13a81f8ed4e7439d9b826ac61dafba31",
    "last_seen" : "2023-08-11T09:15:51Z"
  }
}


$done({body : JSON.stringify(objc)});

