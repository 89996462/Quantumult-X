/******************************

脚本功能：幕布-大纲笔记+解锁VIP
下载地址：https://is.gd/cYAsgT
软件版本：2.28.5
脚本作者：彭于晏💞
更新时间：2023-8-14
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

*******************************

[rewrite_local]

^https:\/\/api2\.mubu\.com\/v3\/api\/user\/current_user url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/mubu.js

[mitm] 

hostname = api2.mubu.com


*******************************/


var body = $response.body.replace(/vipEndDate":""/g,'vipEndDate":"99999999"')
.replace(/level":\d+/g,'level":1')
$done({ body });
