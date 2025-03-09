/******************************

脚本功能：吉真紫薇斗数——解锁VIP
下载地址：https://t.cn/A6BAvgRx
软件版本：1.4.8
脚本作者：彭于晏💞
更新时间：2025-3-9
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/zwpp.wzbz123.com\/api\/v1.1\/user\/getzwvipinfo url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/wzbz123.js

[mitm] 
hostname = zwpp.wzbz123.com

*******************************/

var body = $response.body.replace(/expires": ".*?"/g,'expires": "9999-01-01 00:00:00"')
.replace(/vipLevel": \d/g,'vipLevel": 1')
$done({ body });
