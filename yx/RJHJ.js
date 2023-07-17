/******************************

脚本功能：人间绘卷——无限兑换
下载地址：https://is.gd/SWMWfW
软件版本：9.9.9
脚本作者：彭于晏💞
更新时间：2023-7-17
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/120.79.99.225\/bzprouter\/getCodeAward url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/yx/RJHJ.js

[mitm] 

hostname = 120.79.99.225

*******************************/

var body = $response.body.replace(/.+/g,'{"status":200,"recordset":{"award":"1|0|1000|100|4|0|10|100"}}')
$done({ body });
