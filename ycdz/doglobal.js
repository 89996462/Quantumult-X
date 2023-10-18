/******************************

脚本功能：魔图——解锁VIP
下载地址：https://is.gd/h3TjVy
软件版本：4.0.2
脚本作者：彭于晏💞
更新时间：2023-10-5
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/pay-motu.doglobal.net/pay/apple/check url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/doglobal.js

[mitm] 

hostname = pay-motu.doglobal.net

*******************************/

var objc = JSON.parse($response.body);
    objc = {"result":{"id":8120123,"appId":21,"itemId":"PhotoWonderPro_Subscription_1month","price":29.37,"currencyCode":"CNY","countryCode":"CN","quantity":1,"transactionId":"430001588139187","originalTransId":"430001588139187","purchaseTime": 4095982975000,"original_purchase_date_ms":1697605185000,"cancellationDateMs":0,"expireTime": 4095982975000,"isTrialPeriod":true,"webOrderLineItemId":"430000760207097"},"message":{"code":200,"messageInfo":"ok","serverTime":1697605304371}}
$done({body : JSON.stringify(objc)});
