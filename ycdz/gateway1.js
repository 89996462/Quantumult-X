/******************************

脚本功能：团团记账——解锁VIP
下载地址：https://is.gd/t8GfJz
软件版本：2.3.8
脚本作者：彭于晏💞
更新时间：2025-3-15
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/gs.gateway.gameley.cn\/np-book-user\/user\/refresh\/token url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/gateway1.js

[mitm] 

hostname = gs.gateway.gameley.cn

*******************************/

var body = $response.body.replace(/normalVipBoolean":\w+/g,'normalVipBoolean":true')
.replace(/adVipBoolean":\w+/g,'adVipBoolean":true')
.replace(/adVipForever":\w+/g,'adVipForever":true')
.replace(/visitVipForever":\w+/g,'visitVipForever":true')
.replace(/visitVipBoolean":\w+/g,'visitVipBoolean":true')
.replace(/normalVipDt":\d+/g,'normalVipDt":8883007999999')
.replace(/adVipDt":\d+/g,'adVipDt":8884543999999')
.replace(/newPersonTaskFlag":\w+/g,'newPersonTaskFlag":true')
$done({ body });

