/*******************************

脚本功能：有诗——解锁VIP
下载地址：https://is.gd/iEflZn
软件版本：1.01
脚本作者：彭于晏💞
更新时间：2023-10-13
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/youshiapp.com\/api\/v1\/users\/me url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/youshiapp.js

[mitm] 

hostname = youshiapp.com

*******************************/

var body = $response.body.replace(/member_expired_at":\w+/g,'member_expired_at":8888888888')
.replace(/last_profile_change_at":\d+/g,'last_profile_change_at":8888888888')
.replace(/is_lifetime_member":\w+/g,'is_lifetime_member":true')
.replace(/last_avatar_change_at":\d+/g,'last_avatar_change_at":8888888888')
.replace(/is_member":\w+/g,'is_member":true')
$done({ body });
