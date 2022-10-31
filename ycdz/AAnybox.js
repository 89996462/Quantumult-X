/******************************

脚本功能：AAnybox -跨平台书签管理+解锁订阅
下载地址：https://is.gd/DylUak
软件版本：1.11.1
脚本作者：彭于晏💞
更新时间：2022-10-15
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************/

[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/AAnybox.js

[mitm] 

hostname = api.revenuecat.com

*******************************/


var objc = JSON.parse($response.body);

    objc = 
{
  "request_date_ms" : 1665733801390,
  "request_date" : "2022-10-14T07:50:01Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2022-10-14T07:45:36Z",
    "original_application_version" : "47",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "cc.anybox.Anybox.annual" : {
        "is_sandbox" : false,
        "ownership_type" : "PURCHASED",
        "billing_issues_detected_at" : null,
        "period_type" : "annual",
        "expires_date" : "2029-10-14T07:49:44Z",
        "grace_period_expires_date" : null,
        "unsubscribe_detected_at" : null,
        "original_purchase_date" : "2022-10-14T07:49:45Z",
        "purchase_date" : "2022-10-14T07:49:44Z",
        "store" : "app_store"
      }
    },
    "entitlements" : {
      "pro" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2022-10-14T07:49:44Z",
        "product_identifier" : "cc.anybox.Anybox.annual",
        "expires_date" : "2029-10-14T07:49:44Z"
      }
    },
    "original_purchase_date" : "2022-10-14T07:26:13Z",
    "original_app_user_id" : "$RCAnonymousID:Eric",
    "last_seen" : "2022-10-14T07:45:36Z"
  }
}

$done({body : JSON.stringify(objc)});
