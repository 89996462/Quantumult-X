/******************************

脚本功能：宇宙星图
软件版本：v2.4.5
脚本作者：彭于晏💞
更新时间：2026-4-18

TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996

使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************

[rewrite_local]

^https:\/\/api.starsage.cn/staratlas/index url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/starsage.js

[mitm] 

hostname = api.starsage.cn

*******************************/

var body = $response.body.replace(/vip":\d/g,'vip":1')
.replace(/vip_expire_time":\d+/g,'vip_expire_time":8888888888')
$done({ body });
