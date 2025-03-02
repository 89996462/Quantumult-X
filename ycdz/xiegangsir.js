/******************************

脚本功能：塔奇剧场——解锁VIP
下载地址：https://is.gd/RJnfCZ
软件版本：10.0.4
脚本作者：彭于晏💞
更新时间：2025-3-1
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/quickapi.xiegangsir.com\/api\/app\/1.0\/user\/viptime\/73 url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/xiegangsir.js

[mitm] 

hostname = quickapi.xiegangsir.com


*******************************/


var body = $response.body.replace(/vip_time":\d+/g,'vip_time":8888888888')
$done({ body });
