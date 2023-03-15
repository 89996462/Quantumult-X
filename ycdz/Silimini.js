/*******************************

脚本名称: Silimini——解锁VIP
下载地址: https://is.gd/JERxVy
软件版本：1.3.1
脚本作者：彭于晏💞
更新时间：2023-3-15
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************

[rewrite_local]

^http[s]?:\/\/silimini.bigwinepot.com url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/Silimini.js

[mitm] 

hostname = silimini.bigwinepot.com

*******************************/

var body = $response.body.replace(/"member":0/g,'"member":1')
$done({ body });
