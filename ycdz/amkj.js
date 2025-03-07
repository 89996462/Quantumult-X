/******************************

脚本功能：蜜糖小剧场——解锁VIP
下载地址：https://is.gd/CcIKJF
软件版本：1.0
脚本作者：彭于晏💞
更新时间：2025-3-7
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/honeydjapi.amkj.shop\/mit\/v6\/account\/module\/user-info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/amkj.js


[mitm] 

hostname = honeydjapi.amkj.shop

*******************************/

var body = $response.body.replace(/buyVipState":\d/g,'buyVipState":1')
.replace(/vipEnabled":\w+/g,'vipEnabled":true')
.replace(/nickName":".*?"/g,'nickName":"彭于晏解锁永久会员"')
.replace(/id":".*?"/g,'id":"彭于晏解锁"')
$done({ body });
