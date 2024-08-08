

/******************************

脚本功能：读不舍手——解锁订阅
下载地址：https://is.gd/ngDZcJ
软件版本：2.2.3
脚本作者：彭于晏💞
更新时间：2024-10-16
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/DBSS.js

[mitm] 

hostname = api.revenuecat.com

*******************************/


var objc = JSON.parse($response.body);

    objc = 
{   "request_date" : "2024-06-19T00:59:16Z",   "subscriber" : {     "non_subscriptions" : {       "com.valo.reader.vip1.forever" : [         {           "id" : "759cb6d043",           "is_sandbox" : true,           "purchase_date" : "2024-06-18T12:56:47Z",           "original_purchase_date" : "2024-06-18T12:56:47Z",           "store" : "app_store",           "store_transaction_id" : "2000000631701733"         }       ]     },     "first_seen" : "2024-06-18T12:50:41Z",     "original_application_version" : "22",     "other_purchases" : {       "com.valo.reader.vip1.forever" : {         "purchase_date" : "2024-06-18T12:56:47Z"       }     },     "management_url" : "https:\/\/apps.apple.com\/account\/subscriptions",     "subscriptions" : {       "com.valo.reader.vip2.year" : {         "original_purchase_date" : "2024-06-19T00:58:36Z",         "expires_date" : "9999-06-19T01:58:35Z",         "is_sandbox" : true,         "refunded_at" : null,         "store_transaction_id" : "2000000632175257",         "unsubscribe_detected_at" : null,         "grace_period_expires_date" : null,         "period_type" : "normal",         "purchase_date" : "2024-06-19T00:58:35Z",         "billing_issues_detected_at" : null,         "ownership_type" : "PURCHASED",         "store" : "app_store",         "auto_resume_date" : null       }     },     "entitlements" : {       "com.valo.reader.vip1.forever" : {         "grace_period_expires_date" : null,         "purchase_date" : "2024-06-18T12:56:47Z",         "product_identifier" : "com.valo.reader.vip1.forever",         "expires_date" : null       },       "com.valo.reader.vip2.year" : {         "grace_period_expires_date" : null,         "purchase_date" : "2024-06-19T00:58:35Z",         "product_identifier" : "com.valo.reader.vip2.year",         "expires_date" : "9999-06-19T01:58:35Z"       }     },     "original_purchase_date" : "2023-07-15T01:54:59Z",     "original_app_user_id" : "$RCAnonymousID:89794ec53aab4acc97794063f592e251",     "last_seen" : "2024-06-18T12:50:41Z"   },   "request_date_ms" : 1718758756026 }

$done({body : JSON.stringify(objc)});
