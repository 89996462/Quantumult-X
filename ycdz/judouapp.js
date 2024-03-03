/******************************

脚本功能：句读+解锁VIP
下载地址：https://is.gd/CaJ31M
软件版本：4.3.0
脚本作者：彭于晏💞
更新时间：2024-3-3
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/judouapp.com\/api\/v2\/mine\/profile url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/judouapp.js

[mitm] 

hostname = judouapp.com

*******************************/

var body = $response.body.replace(/is_member":\w+/g,'is_member":true')
.replace(/is_admin":\w+/g,'is_admin":true')
.replace(/is_year_member":\w+/g,'is_year_member":true')
.replace(/member_expired_at":\w+/g,'member_expired_at":32493834549')
.replace(/is_bind_phone":\w+/g,'is_bind_phone":true')
$done({ body });
