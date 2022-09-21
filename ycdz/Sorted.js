/******************************

脚本功能：fileball+解锁订阅
下载地址：美区
软件版本：1.2.5
脚本作者：彭于晏
更新时间：2022-9-19
问题反馈：QQ+89996462
QQ会员群：779392027
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/api\.sortedapp\.com\/receipts\/verify url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/Sorted.js

[mitm] 

hostname = api.sortedapp.com


*******************************/


var objc = JSON.parse($response.body);

    objc = 
{"receipt":{"receipt_type":"Production","adam_id":1306893526,"app_item_id":1306893526,"bundle_id":"com.staysorted.Sorted","application_version":"358","download_id":83070431858296,"version_external_identifier":852189251,"receipt_creation_date":"2022-09-21 11:40:33 Etc/GMT","receipt_creation_date_ms":"1663760433000","receipt_creation_date_pst":"2022-09-21 04:40:33 America/Los_Angeles","request_date":"2022-09-21 11:40:35 Etc/GMT","request_date_ms":"1663760435501","request_date_pst":"2022-09-21 04:40:35 America/Los_Angeles","original_purchase_date":"2020-08-12 00:06:22 Etc/GMT","original_purchase_date_ms":"1597190782000","original_purchase_date_pst":"2020-08-11 17:06:22 America/Los_Angeles","original_application_version":"185","in_app":[]},"environment":"Production","status":0,"isCustomer":false,"isPro":true,"flagged":false,"isBundleEnabled":true}



$done({body : JSON.stringify(objc)});
