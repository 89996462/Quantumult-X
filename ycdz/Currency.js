/******************************

脚本名称: Currency——解锁订阅
下载地址：https://is.gd/FIxQSv
脚本作者：彭于晏💞
更新时间：2023年8月11日 下午12:13
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

*******************************

[rewrite_local]

https://api.revenuecat.com/v1/(receipts|subscribers)/* url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/Currency.js

[mitm] 

hostname = api.revenuecat.com

*******************************/

var objc = JSON.parse($response.body);

    objc = {
  "request_date_ms" : 1691727159507,
  "request_date" : "2023-08-11T04:12:39Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2023-08-11T04:11:55Z",
    "original_application_version" : "96",
    "entitlement" : {

    },
    "other_purchases" : {

    },
    "management_url" : null,
    "subscriptions" : {
      "com.jeffreygrossman.currencyapp.iap.plus" : {
        "store" : "app_store",
        "purchase_date" : "2023-02-23T02:33:33Z",
        "ownership_type" : "PURCHASED",
        "original_purchase_date" : "2023-02-23T02:33:33Z",
        "expires_date" : "9999-06-06T06:06:06Z"
      }
    },
    "entitlements" : {
      "plus" : {
        "store" : "app_store",
        "purchase_date" : "2023-02-23T02:33:33Z",
        "ownership_type" : "PURCHASED",
        "original_purchase_date" : "2023-02-23T02:33:33Z",
        "product_identifier" : "com.jeffreygrossman.currencyapp.iap.plus",
        "expires_date" : "9999-06-06T06:06:06Z"
      }
    },
    "original_purchase_date" : "2023-08-11T04:11:28Z",
    "original_app_user_id" : "$RCAnonymousID:2156fe6dd7584c4788b27093c2b104a5",
    "last_seen" : "2023-08-11T04:11:55Z"
  }
}


$done({body : JSON.stringify(objc)});

