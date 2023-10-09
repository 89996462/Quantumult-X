/*******************************

脚本功能：指南针GPS——解锁VIP
下载地址：https://is.gd/gD4EkG
软件版本：1.1.5
脚本作者：彭于晏💞
更新时间：2023-10-5
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/compass.xinzhi.space\/api\/v1\/isVip url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/compass.js

[mitm] 

hostname = compass.xinzhi.space

*******************************/

var body = $response.body.replace(/is_vip":\d/g,'is_vip":1')
$done({ body });
