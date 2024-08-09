/*******************************

脚本功能：K米——解锁VIP
下载地址：https://t.cn/A68uGgey
软件版本：5.5.3
脚本作者：彭于晏💞
更新时间：2024-10-11
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/mobile.ktvme.com url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/ktvme.js

[mitm] 

hostname = mobile.ktvme.com

*******************************/

var body = $response.body.replace(/userviptype":"\d"/g,'userviptype":"1"')
.replace(/uservipexpiretime":"\d+"/g,'uservipexpiretime":"8888888888000"')
.replace(/status":"\d"/g,'status":"1"')
.replace(/name":".*?"/g,'name":"TG频道:https://t.me/py996"')
$done({ body });
