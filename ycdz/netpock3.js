/*******************************

脚本功能：百转格——解锁VIP
下载地址：https://is.gd/ZHgbLg
软件版本：2.1.2
脚本作者：彭于晏💞
更新时间：2024-10-11
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/idp2api\.netpock\.com\/api\/user_info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/netpock3.js

[mitm] 

hostname = idp2api.netpock.com

*******************************/

var body = $response.body.replace(/is_vip":\w+/g,'is_vip":true')
.replace(/vip_expiration_time":\d+/g,'vip_expiration_time":8888888888000')
.replace(/user_name":".*?"/g,'user_name": "TG频道:https://t.me/py996"')
$done({ body });
