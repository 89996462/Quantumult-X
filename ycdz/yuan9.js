/******************************

脚本功能：多彩相册——解锁VIP
下载地址：https://is.gd/EkJnlu
软件版本：1.1.0
脚本作者：彭于晏💞
更新时间：2023-10-5
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/photo.yuan9.cn\/api\/Auth\/info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/yuan9.js

[mitm] 

hostname = photo.yuan9.cn

*******************************/

var body = $response.body.replace(/expiration_time":".*?"/g,'expiration_time":"9999-10-30 10:50:56"')
.replace(/vip_type":\w+/g,'vip_type":2')
.replace(/free_trial":\d/g,'free_trial":1')
.replace(/is_vip":\d/g,'is_vip":1')
$done({ body });

