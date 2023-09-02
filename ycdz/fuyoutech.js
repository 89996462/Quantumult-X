/*******************************

脚本名称: 杂志天下——解锁VIP
下载地址：https://is.gd/q4ftAU
软件版本：1.2.0
脚本作者：彭于晏💞
更新时间：2023-9-3
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

*******************************

[rewrite_local]

^http[s]?:\/\/www.fuyoutech.club\/magworld\/member\/status url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/fuyoutech.js

[mitm] 

hostname = www.fuyoutech.club

*******************************/

var body = $response.body.replace(/"memberStatus":\d/g,'"memberStatus":2')
.replace(/"finishTime":null/g,'"finishTime":"2099-11-11 00:00:00"')
.replace(/"startTime":null/g,'"startTime":"2023-09-01 00:00:00"')
$done({ body });
