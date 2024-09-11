/******************************

脚本功能：ReelMaker——解锁VIP
下载地址：https://is.gd/d6u0fm
软件版本：3.1
脚本作者：彭于晏💞
更新时间：2024-3-4
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/us-central1-imin-aa206\.cloudfunctions\.net\/checkIfUserVip url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/ReelMaker.js

[mitm] 

hostname = us-central1-imin-aa206.cloudfunctions.net



*******************************/

var body = $response.body.replace(/isVip":\d+/g,'isVip":1')
.replace(/is_vip":\w+/g,'is_vip":true')
$done({ body });
