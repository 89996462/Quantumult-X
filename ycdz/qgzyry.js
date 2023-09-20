/******************************

脚本名称: 梦剧场——解锁VIP
下载地址：https://is.gd/22kzpE
软件版本：2.0.1
脚本作者：彭于晏💞
更新时间：2023-9-22
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/tool\.qgzyry-gov\.com\/tool-flow-service\/api\/payMember\/getPayMemberInfo url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/qgzyry.js

[mitm] 

hostname = tool.qgzyry-gov.com


*******************************/

var objc = JSON.parse($response.body);

    objc = {"msg":"成功","code":0,"data":{"member":true,"permanentMember":false,"memberDeadline":"2099-09-23","memberLevelType":1,"memberLevelName":null,"buyCountList":[],"extraData":null},"success":true}


$done({body : JSON.stringify(objc)});

