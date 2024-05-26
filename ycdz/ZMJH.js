/******************************

脚本功能：朝暮计划+解锁VIP
下载地址：https://is.gd/SSyHEn
软件版本：1.7.7
脚本作者：彭于晏💞
更新时间：2023-7-10
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/app.zomoplan.com\/zhaoMuPlan\/user\/info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/ZMJH.js

[mitm] 

hostname = app.zomoplan.com

*******************************/

var body = $response.body.replace(/"vipStatus":\d/g,'"vipStatus":1')
.replace(/"vipType":\d/g,'"vipType":3')
.replace(/"vipExpiresDate":".*?"/g,'"vipExpiresDate":"2099-11-11"')
.replace(/"userVipStatus":\d/g,'"userVipStatus":1')
.replace(/"userVipStatusDesc":"普通用户"/g,'"userVipStatusDesc":"Vip用户"')
$done({ body });

