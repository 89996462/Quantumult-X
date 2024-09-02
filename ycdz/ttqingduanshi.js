/*******************************

脚本功能：天天轻断食——解锁VIP
下载地址：https://is.gd/LSy1UH
软件版本：1.1.1
脚本作者：彭于晏💞
更新时间：2024-10—8
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

http:\/\/www\.ttqingduanshi\.com\/user\/info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/ttqingduanshi.js

[mitm] 

hostname = www.ttqingduanshi.com

*******************************/

var body = $response.body.replace(/vip":\d+/g,'vip":1')
.replace(/vipHours":\d+/g,'vipHours":32472115200')
.replace(/vipExpiryDate":\w+/g,'vipExpiryDate":"2999-01-01 00:00:00"')
.replace(/phone":".*?"/g,'phone":"彭于晏Crack"')
.replace(/birthday":".*?"/g,'birthday":"2999-01-01 00:00:00"')
.replace(/vipExpire":\w+/g,'vipExpire":"2999-01-01 00:00:00"')

.replace(/name":".*?"/g,'name":"彭于晏Crack"')

$done({ body });
