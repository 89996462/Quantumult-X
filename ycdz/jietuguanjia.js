/******************************

脚本功能：小歪微商——解锁VIP
下载地址：https://is.gd/dO0nGA
软件版本：1.0.9
脚本作者：彭于晏💞
更新时间：2023-3-4
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/xw.jietuguanjia.com\/api\/app\/userInfo url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/jietuguanjia.js

[mitm] 

hostname = xw.jietuguanjia.com

*******************************/

var body = $response.body.replace(/isVip":\w+/g,'isVip":true')
.replace(/vipSignTime":".*?"/g,'vipSignTime":"9999-03-22 16:18:58"')
$done({ body });
