/*******************************

脚本功能：拿捏驾考——解锁VIP
下载地址：https://is.gd/XTChEl
软件版本：1.1.7
脚本作者：彭于晏💞
更新时间：2024-10-11
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/nanie.flyingeffect.com\/api\/me\/info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/flyingeffect.js

[mitm] 

hostname = nanie.flyingeffect.com

*******************************/

var body = $response.body.replace(/vip_end_time":".*?"/g,'vip_end_time":"2099-08-16 09:13:47"')
.replace(/is_permanent_vip":\d/g,'is_permanent_vip":1')
.replace(/vip_type":\d/g,'vip_type":1')
.replace(/is_vip":\w+/g,'is_vip":true')
.replace(/is_experience_vip":\w+/g,'is_experience_vip":true')
$done({ body });
