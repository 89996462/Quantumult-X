

/******************************

脚本功能：傲软抠图-专业图片+解锁VIP
下载地址：http://mtw.so/6bOXrj
软件版本：1.6.0
脚本作者：彭于晏
更新时间：2022-9-10
问题反馈：QQ+89996462
TG反馈群：https://t.me/plus8889
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************

[rewrite_local]

^https:\/\/awvp\.aoscdn\.com\/base\/vip\/client\/authorizations url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/arqt.js

[mitm] 

hostname = awvp.aoscdn.com


*******************************/

var body = $response.body;
var objk = JSON.parse(body);

objk = {"status":200,"message":"success","data":{"license_type":"free","period_type":"trial","is_activated":1,"remain_days":0,"will_expire":1,"allowed_device_count":1,"begin_activated_time":1662783235,"durations":0,"vip_special":0,"has_buy_extend":0,"has_present":0,"product_id":369,"is_lifetime":0,"expired_at":0,"expire_time":"9999-01-01 00:00:00","candy":0,"candy_expired_at":0,"device_id":2700581012,"exist_trial":0}}
body = JSON.stringify(objk);

$done({body});
