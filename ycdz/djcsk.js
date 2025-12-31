/******************************

脚本功能：DJ串烧库
软件版本：v2.0
脚本作者：彭于晏💞
更新时间：2025-12-31

TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996

使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************

[rewrite_local]

^http:\/\/djcsk-api.y2-3.com:80/api/User/Info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/djcsk.js

[mitm] 

hostname = djcsk-api.y2-3.com

*******************************/


var body = $response.body.replace(/isvip":\w+/g,'isvip":true')
.replace(/expiretime":\d+/g,'expiretime":8888888888')
.replace(/viptype":\d/g,'viptype":1')
.replace(/hasvipcode":\w+/g,'hasvipcode":true')
$done({ body })
