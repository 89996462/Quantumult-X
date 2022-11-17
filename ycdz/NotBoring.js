/******************************

脚本功能：Not Boring +解锁订阅
特别通知：可以解锁全家桶！四件套💓
下载地址：https://is.gd/LGpKsj
软件版本：2.12
脚本作者：彭于晏💞
更新时间：2022-11-17
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]

https://api.revenuecat.com/v1/(receipts|subscribers)/* url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/NotBoring.js

[mitm] 

hostname = api.revenuecat.com

*******************************/

var objc = JSON.parse($response.body);

    objc = 
{
  "request_date_ms" : 1668658838144,
  "request_date" : "2022-11-17T04:20:38Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2022-11-17T04:18:00Z",
    "original_application_version" : "0",
    "other_purchases" : {

    },
    "management_url" : "https://apps.apple.com/account/subscriptions",
    "subscriptions" : {
      "com.andyworks.weather.yearlyPatron" : {
        "original_purchase_date" : "2022-11-17T04:20:11Z",
        "expires_date" : "9999-11-24T04:20:10Z",
        "is_sandbox" : false,
        "refunded_at" : null,
        "unsubscribe_detected_at" : null,
        "grace_period_expires_date" : null,
        "period_type" : "trial",
        "purchase_date" : "2022-11-17T04:20:10Z",
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "patron" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2022-11-17T04:20:10Z",
        "product_identifier" : "com.andyworks.weather.yearlyPatron",
        "expires_date" : "9999-11-24T04:20:10Z"
      },
      "skinAndy" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2022-11-17T04:20:10Z",
        "product_identifier" : "com.andyworks.weather.yearlyPatron",
        "expires_date" : "9999-11-24T04:20:10Z"
      },
      "skinMonster" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2022-11-17T04:20:10Z",
        "product_identifier" : "com.andyworks.weather.yearlyPatron",
        "expires_date" : "9999-11-24T04:20:10Z"
      },
      "skinCedar" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2022-11-17T04:20:10Z",
        "product_identifier" : "com.andyworks.weather.yearlyPatron",
        "expires_date" : "9999-11-24T04:20:10Z"
      },
      "skinKarat" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2022-11-17T04:20:10Z",
        "product_identifier" : "com.andyworks.weather.yearlyPatron",
        "expires_date" : "9999-11-24T04:20:10Z"
      },
      "skinOpal" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2022-11-17T04:20:10Z",
        "product_identifier" : "com.andyworks.weather.yearlyPatron",
        "expires_date" : "9999-11-24T04:20:10Z"
      },
      "skinPresstube" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2022-11-17T04:20:10Z",
        "product_identifier" : "com.andyworks.weather.yearlyPatron",
        "expires_date" : "2022-11-24T04:20:10Z"
      },
      "skinChroma" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2022-11-17T04:20:10Z",
        "product_identifier" : "com.andyworks.weather.yearlyPatron",
        "expires_date" : "9999-11-24T04:20:10Z"
      }
    },
    "original_purchase_date" : "2022-09-28T06:34:53Z",
    "original_app_user_id" : "3D04B7A9-A5AF-44B9-9E0D-BCFF427C36A5",
    "last_seen" : "2022-11-17T04:18:00Z"
  }
}

$done({body : JSON.stringify(objc)});
