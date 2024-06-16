/******************************

脚本功能：边框水印大师——解锁VIP
下载地址：https://t.cn/A6QLHJ20
软件版本：1.6.7
脚本作者：彭于晏💞
更新时间：2024-3-4
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/photoby\.hasmash\.com url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/hasmash.js

[mitm] 

hostname = photoby.hasmash.com


*******************************/

var body = $response.body.replace(/isVip":\d+/g,'isVip":1')
.replace(/is_ios_product":\w+/g,'is_ios_product":true').replace(/memberExpire":\d+/g,'memberExpire":8888888888')
$done({ body });
