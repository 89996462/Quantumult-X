/*******************************

脚本功能：魔法消除笔——解锁VIP
下载地址：https://is.gd/oYA6PK
软件版本：1.4
脚本作者：彭于晏💞
更新时间：2024-10—8
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/iosqsy.lmzjz.sanwubeixin.cn\/ct\/user\/info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/iosqsy.js

[mitm] 

hostname = iosqsy.lmzjz.sanwubeixin.cn

*******************************/

var body = $response.body.replace(/isVip":\w+/g,'isVip":true')
.replace(/vip_time":\d+/g,'vip_time":8888888888')
.replace(/vip_type":\d+/g,'vip_type":1')
.replace(/username":".*?"/g,'username":"彭于晏Crack"')
$done({ body });
