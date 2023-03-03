/*******************************

脚本名称: 分贝仪+解锁订阅
下载地址：https://is.gd/QvCqzb
软件版本：5.0.9
脚本作者：彭于晏💞
更新时间：2023-3-3
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************
[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/fenbeiyi.js

[mitm] 

hostname = api.revenuecat.com

*******************************/

var objc = JSON.parse($response.body);
    objc = {"request_date":"2023-03-03T03:54:44Z","request_date_ms":1677815684024,"subscriber":{"entitlements":{"VIP":{"expires_date":"2099-03-06T03:52:25Z","grace_period_expires_date":null,"product_identifier":"com.gaapp.db.monthly101","purchase_date":"2023-03-03T03:52:25Z"}},"first_seen":"2023-03-02T18:06:15Z","last_seen":"2023-03-02T18:06:15Z","management_url":"https://apps.apple.com/account/subscriptions","non_subscriptions":{},"original_app_user_id":"$RCAnonymousID:865cea2c0d274d2f96764700f7ff5e7c","original_application_version":"5093","original_purchase_date":"2023-03-02T18:05:57Z","other_purchases":{},"subscriptions":{"com.gaapp.db.monthly101":{"auto_resume_date":null,"billing_issues_detected_at":null,"expires_date":"2099-03-06T03:52:25Z","grace_period_expires_date":null,"is_sandbox":false,"original_purchase_date":"2023-03-03T03:52:26Z","ownership_type":"PURCHASED","period_type":"trial","purchase_date":"2023-03-03T03:52:25Z","refunded_at":null,"store":"app_store","unsubscribe_detected_at":null}}}}

$done({body : JSON.stringify(objc)});
