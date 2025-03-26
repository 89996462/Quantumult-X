/******************************

脚本功能：剧推推——解锁VIP
下载地址：https://is.gd/o23LCd
软件版本：1.2.3
脚本作者：彭于晏💞
更新时间：2025-10-22
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]

^http[s]?:\/\/shortplay.shashadonghua1314.com\/user\/mine url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/shashadonghua1314.js

[mitm] 

hostname = shortplay.shashadonghua1314.com

*******************************/

var body = $response.body.replace(/status":\d/g,'status":1')
.replace(/level":\d/g,'level":2')
.replace(/end":".*?"/g,'end":"9999-01-01 00:00:00"')
.replace(/begin":".*?"/g,'begin":"9999-01-01 00:00:00"')
.replace(/name":".*?"/g,'name":"彭于晏解锁永久VIP"')
$done({ body });

