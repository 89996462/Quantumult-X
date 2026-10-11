/*******************************
脚本名称: 天乙八字排版
脚本作者：彭于晏💞
更新时间：2026-10—28
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]

^https:\/\/app.itypan.com/app/user/selfinfo url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/tybzpb.js

[mitm] 

hostname = app.itypan.com

*******************************/

var body = $response.body.replace(/"member":(true|false)/g,'"member":true')
.replace(/"memberLevel":(\d+|null)/g,'"memberLevel":999')
.replace(/"memberLevelName":"[^"]*"|"memberLevelName":null/g,'"memberLevelName":"至尊VIP"')
.replace(/"expireTime":"[^"]*"|"expireTime":null/g,'"expireTime":"9999-12-31T23:59:59.000+08:00"')
.replace(/"appleExpireTime":"[^"]*"|"appleExpireTime":null/g,'"appleExpireTime":"9999-12-31T23:59:59.000+08:00"')
$done({ body });
