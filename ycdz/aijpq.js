/*******************************

脚本名称: 扑克记牌器
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************
[rewrite_local]

^http[s]?:\/\/api.aijpq.com\/api\/v1\/vip\/subscription url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/aijpq.js

[mitm] 

hostname = api.aijpq.com

*******************************/

var body = $response.body.replace(/has_active":\w+/g,'has_active":true')
.replace(/status":"[a-z]+"/g,'status":"active"')
.replace(/type":"[a-z]+"/g,'type":"svip"')
.replace(/expire_time":"[0-9TZ:\-]+"/g,'expire_time":"9999-08-08T12:57:36Z"')
$done({ body });
