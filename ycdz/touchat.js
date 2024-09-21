/*******************************

脚本功能：可奈相机——解锁VIP
下载地址：https://is.gd/4AQgj5
软件版本：2.4.2
脚本作者：彭于晏💞
更新时间：2024-10—8
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/motu.touchat.online\/app\/user\/get url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/touchat.js

[mitm] 

hostname = motu.touchat.online

*******************************/

var body = $response.body.replace(/vipLevel":\d/g,'vipLevel":3')
$done({ body });
