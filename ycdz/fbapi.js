/*******************************

脚本功能：完美身材——解锁VIP
下载地址：https://is.gd/WdOUyO
软件版本：1.0.1
脚本作者：彭于晏💞
更新时间：2024-10—8
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/fbapi.meetboxs.com\/api\/v1\/user\/account\/info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/fbapi.js

[mitm] 

hostname = fbapi.meetboxs.com

*******************************/

var body = $response.body.replace(/vipEnabled":\w+/g,'vipEnabled":true')
.replace(/nickName":".*?"/g,'nickName":"彭于晏Crack"')
$done({ body });
