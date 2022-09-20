/******************************

脚本功能：documents+解锁订阅
下载地址：http://mtw.so/6rPSoI
软件版本：8.2.1
脚本作者：彭于晏
更新时间：2022-9-20
问题反馈：QQ+89996462
QQ会员群：779392027
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/documents.js

[mitm] 

hostname = api.revenuecat.com

*******************************/


var objc = JSON.parse($response.body);

    objc = 
{
  "originalTransactionId": 20001113828089,
  "inAppStates": [
    {
      "originalTransactionId": 20001113828089,
      "productId": "com.readdle.ReaddleDocsIPad.subscription.month10_allusers",
      "subscriptionState": "trial",
      "productName": "subscription",
      "subscriptionExpirationDate": "08:52 27\/09\/9999",
      "isEligibleForIntroPeriod": false,
      "subscriptionAutoRenewStatus": "autoRenewOff",
      "type": "subscription",
      "isInGracePeriod": false,
      "isInBillingRetryPeriod": false,
      "entitlements": [
      ]
    },
    {
      "originalTransactionId": "0000",
      "entitlements": [
      ],
      "type": "custom purchase",
      "productId": "documents6-user"
    }
  ],
  "chargingPlatform": "iOS AppStore",
  "receiptStatus": "ok",
  "bundleId": "com.readdle.ReaddleDocsIPad",
  "receiptId": 1495937666000,
  "statisticsInfo": {
    "events": [
    ]
  }
}



$done({body : JSON.stringify(objc)});
