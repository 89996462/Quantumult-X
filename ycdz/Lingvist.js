/******************************

脚本功能：Lingvist——解锁订阅
下载地址：https://is.gd/5HuTeD
软件版本：2.59.1
脚本作者：彭于晏💞
更新时间：2023-9-27
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/payment-api\.lingvist\.com\/1\.4\/user\/services url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/Lingvist.js

[mitm] 

hostname = payment-api.lingvist.com


*******************************/

var objc = JSON.parse($response.body);

    objc = {
  "has_historical_services" : false,
  "latest_historical_service_paid" : false,
  "services" : [
    {
      "service" : "unlimited",
      "is_infinite" : false,
      "active_since_ts" : "2023-09-26T05:56:06.980051Z",
      "subscription" : {
        "uuid" : "彭于晏破解",
        "period" : "P1Y",
        "next_billing_ts" : null,
        "is_recurring" : true,
        "group_name" : "unlimited",
        "free_trial_duration" : "P14D",
        "is_on_one_time_discount" : false,
        "one_time_discount_duration" : null,
        "expiration_ts" : "9999-10-10T05:56:01Z",
        "price" : {
          "amount" : "348.000000",
          "currency" : "CNY",
          "schedule" : [
            {
              "amount" : 0,
              "discount_percentage" : 100,
              "periods" : 1,
              "name" : "free-trial",
              "starting_from_ts" : null,
              "duration" : "P14D"
            }
          ]
        },
        "is_on_permanent_discount" : false,
        "is_on_free_trial" : true,
        "permanent_discount_percentage" : null,
        "status" : "cancelled",
        "one_time_discount_percentage" : null
      },
      "title" : "Lingvist Unlimited. 1-year subscription",
      "unlimited_bundle" : {

      },
      "duration" : "P1Y",
      "payment_provider" : "apple-in-app",
      "active_until_ts" : "9999-10-10T05:56:06.980051Z",
      "is_active" : true,
      "product_name" : "unlimited-12-months"
    }
  ]
}


$done({body : JSON.stringify(objc)});

