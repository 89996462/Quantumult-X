/******************************

脚本功能：大神水印——解锁VIP
下载地址：https://is.gd/CzynmP
软件版本：2.7.4
脚本作者：彭于晏💞
更新时间：2025-8-9
问题反馈：QQ+89996462
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/mars\.inout\.top\/user\/get_user_info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/dsXy.js

[mitm] 

hostname = mars.inout.top


*******************************/

var body = $response.body.replace(/vip_expire_time": \w+/g,'vip_expire_time": 4076744128000')
.replace(/is_lifetime_membership": \w+/g,'is_lifetime_membership": true')
$done({ body });
