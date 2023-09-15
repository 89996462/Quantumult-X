/*******************************

脚本名称: 中华诗词库——解锁VIP
下载地址：https://is.gd/9mxCMB
软件版本：1.7
脚本作者：彭于晏💞
更新时间：2023-9-15
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************
[rewrite_local]

^http[s]?:\/\/api.chuangqi.store\/ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/chuangqi.js

[mitm] 

hostname = api.chuangqi.store

*******************************/

var body = $response.body.replace(/vip_end_time":null/g,'vip_end_time":4099040228000')
.replace(/is_ad_vip":\d/g,'is_ad_vip":1')
.replace(/isvip":\d/g,'isvip":1')
$done({ body });
