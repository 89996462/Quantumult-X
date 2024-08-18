/*******************************

脚本功能：医课——解锁VIP
下载地址：https://is.gd/JHgQlH
软件版本：1.3.6
脚本作者：彭于晏💞
更新时间：2024-10-11
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/www.doctorsclass.com url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/doctorsclass.js

[mitm] 

hostname = www.doctorsclass.com

*******************************/

var body = $response.body.replace(/vip":null/g,'vip":true')
.replace(/is_free":\d+/g,'is_free":1')
.replace(/fee":"\d+.00"/g,'fee":"0.00"')
.replace(/shelf":\d/g,'shelf":1')
.replace(/showWord":\d/g,'showWord":1')
.replace(/type":\d/g,'type":1')
.replace(/vip":\w+/g,'vip":true')
.replace(/vip_expire":\d+/g,'vip_expire":8888888888000')
.replace(/nick_name":".*?"/g,'nick_name":"彭于晏Crack"')
$done({ body });
