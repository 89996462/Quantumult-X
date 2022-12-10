/******************************

脚本功能：可可修图——解锁VIP
下载地址：https://is.gd/viNNwD
软件版本：1.1.1
脚本作者：彭于晏💞
更新时间：2022-11-11
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/cocamapi.imendon.com\/v2\/purchase\/vip\/verification url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/kkxt.js

[mitm] 

hostname = cocamapi.imendon.com

*******************************/

var body = $response.body.replace(/isValid":\d/g,'isValid":1')
$done({ body });
