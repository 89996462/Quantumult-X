/*******************************

脚本功能：白马剧场——解锁VIP
下载地址：https://is.gd/LSy1UH
软件版本：1.0.1
脚本作者：彭于晏💞
更新时间：2024-10—8
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/theater-api.sylangyue.xyz\/api\/user\/info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/sylangyue.js

[mitm] 

hostname = theater-api.sylangyue.xyz

*******************************/

var body = $response.body.replace(/status":\w+/g,'status":true')
.replace(/expired_date":".*?"/g,'expired_date":"9999-01-01"')
.replace(/username":".*?"/g,'username":"彭于晏Crack"')
.replace(/c":".*?"/g,'c": "彭于晏解锁永久VIP会员"')
$done({ body });
