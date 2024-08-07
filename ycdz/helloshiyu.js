/*******************************

脚本功能：少女壁纸——解锁VIP
下载地址：https://is.gd/4pKR7s
软件版本：2.0
脚本作者：彭于晏💞
更新时间：2024-10-11
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/www.helloshiyu.com\/mood\/superadmin\/user\/profile url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/helloshiyu.js

[mitm] 

hostname = www.helloshiyu.com

*******************************/

var body = $response.body.replace(/state":\d/g,'state":1')
.replace(/forever":\w+/g,'forever":true')
.replace(/startTime":\w+/g,'startTime":"2999-01-01"')
.replace(/expireTime":\w+/g,'expireTime":"2999-01-01"')
$done({ body });
