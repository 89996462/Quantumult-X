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

^https:\/\/license\.pdfexpert\.com\/api\/2\.0\/documents\/subscription\/refresh url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/documents.js

[mitm] 

hostname = license.pdfexpert.com

*******************************/


var objc = JSON.parse($response.body);

    objc = 
{"bundleId":"com.readdle.ReaddleDocsIPad","chargingPlatform":"iOS AppStore","receiptId":1505921661000,"originalTransactionId":430001223657482,"inAppStates":[{"type":"subscription","productId":"com.readdle.ReaddleDocsIPad.subscription.month10_allusers","originalTransactionId":430001223657482,"productName":"subscription","isEligibleForIntroPeriod":false,"subscriptionExpirationDate":"01:26 24/09/9999","subscriptionState":"trial","subscriptionAutoRenewStatus":"autoRenewOff","isInGracePeriod":false,"isInBillingRetryPeriod":false,"entitlements":[]},{"type":"custom purchase","productId":"documents6-user","originalTransactionId":"0000","entitlements":[]}],"receiptStatus":"ok","statisticsInfo":{"events":[]}}


$done({body : JSON.stringify(objc)});
