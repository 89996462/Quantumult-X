/******************************

脚本功能：FoMz——解锁VIP
下载地址：https://is.gd/faRUN2
软件版本：1.0.9
脚本作者：彭于晏💞
更新时间：2022-12-15
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/fz68resapi\.imendon\.com\/v2\/purchase\/vip\/verification url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/FoMz.js

[mitm] 

hostname = fz68resapi.imendon.com



*******************************/

body = $response.body.replace(/\"isValid":\d+/g, '\"isValid":1')

$done({body});
