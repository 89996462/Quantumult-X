/*******************************

脚本名称: 光卷
脚本作者：彭于晏💞
更新时间：2026-5—28
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/lume96resapi.imendon.com/v2/purchase/vip/verification url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/gj.js

[mitm] 

hostname = lume96resapi.imendon.com

*******************************/

var body = $response.body.replace(/"isValid":\d+/g,'"isValid":1')
.replace(/"expiredTs":\d+/g,'"expiredTs":9999999999999')
.replace(/"vipType":\d+/g,'"vipType":2')
$done({ body });
