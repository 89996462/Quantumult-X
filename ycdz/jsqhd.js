/*******************************

脚本名称: 计算器HD- 专业计算机+解锁VIP
下载地址: https://is.gd/eo82sY
软件版本：1.9.6
脚本作者：彭于晏💞
更新时间：2023-3-15
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/www\.40sishi\.com\/calculator\/user\/profile url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/jsqhd.js

[mitm] 

hostname = www.40sishi.com


*******************************/

var objc = JSON.parse($response.body);
    objc = {"data":{"userId":"olccz0","name":null,"gender":0,"avatar":null,"birthday":null,"mobile":null,"vipState":{"state":1,"forever":false,"startTime": 4094878055000,"expireTime": 4094878055000}},"code":1}
$done({body : JSON.stringify(objc)});
