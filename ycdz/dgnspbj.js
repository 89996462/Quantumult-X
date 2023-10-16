/******************************

脚本功能：视频剪辑神器+解锁订阅
下载地址：https://is.gd/B0nFp7
软件版本：2.9.19
脚本作者：彭于晏💞
更新时间：2023-10-11
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/buy\.videoshowiosglobalserver\.com\/zone\/1\.0\.1\/iosPayClient\/payVerify\.htm url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/dgnspbj.js

[mitm] 

hostname = buy.videoshowiosglobalserver.com


*******************************/

var objc = JSON.parse($response.body);

    objc = 
{"msg":"验证成功","isRepeatBind":"0","original_transaction_id":"430001586362022","is_in_intro_offer_period":"true","isReportPrice":"0","webOrderLineItemId":"430000759298137","is_trial_period":"true","retCode":"1","transactionReason":"PURCHASE","grace_period_expires_date":"","subscrib_type":"1","offerType":"1","isUsedPromocode":"0","product_id":"vip_monthly_3","offerIdentifier":"","recallLabelType":"0","transaction_id":"430001586362022","isBlacklist":"0","quantity":"1","expires_date":"9999-10-19 08:43:24","promotional_offer_id":"","retMsg":"success","cancellation_date":"","subscriptionGroupIdentifier":"20520759","current_date":"2023-10-16 08:44:05","appAccountToken":"","purchase_date":"2023-10-16 08:43:24","storefront":"CHN","status":"0"}


$done({body : JSON.stringify(objc)});
