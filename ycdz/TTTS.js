/******************************

脚本功能：天天跳绳——解锁VIP
下载地址：https://is.gd/ofEsXN
软件版本：3.0.22
脚本作者：彭于晏💞
更新时间：2023-9-26
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/api\.tiantiantiaosheng\.com\/api2\/s_plus_member\/info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/TTTS.js

[mitm] 

hostname = api.tiantiantiaosheng.com



*******************************/


var objc = JSON.parse($response.body);

    objc = 
{"code":0,"msg":"success","data":{"is_member":true,"member_name":"彭于晏破解）","member_expiration_time":"9999-10-02 19:58:21","medal_id":1200,"medal_picture":"https://cdn.tiantiantiaosheng.com/dataupload/uploadImg/2023-03-29/5ba753d8-022d-41db-812a-e69a6fa397c0/3cf6c566-940b-4853-b2f8-081d30c45374.png","today_ttb":false,"medal_name":"彭于晏破解","renew_status":true,"mileage":{"current_value":0,"next_value":5,"next_medal_id":1239,"next_medal_picture":"https://cdn.tiantiantiaosheng.com/dataupload/uploadImg/2023-06-09/87739a24-55d3-4ea3-afd5-f136b5ba43ce/9d4f98cc-f38b-4f3f-b77e-aa3842439b32.png","category":"milestone","honor_type":"s_vip","unit":"s_vip_day","title":"彭于晏破解"}}}

$done({body : JSON.stringify(objc)});
