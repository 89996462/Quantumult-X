/******************************

脚本功能：海报制作大师——解锁VIP
下载地址：https://t.cn/A6TIeTQ5
软件版本：3.3.0
脚本作者：彭于晏💞
更新时间：2024-3-20
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/poster.leminet.cn\/v01\/profile url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/leminet.js

[mitm] 

hostname = poster.leminet.cn

*******************************/

var body = $response.body.replace(/vip":\w+/g,'vip":true')
.replace(/vip_expire":\d+/g,'vip_expire":32480034939')
$done({ body });
