/******************************

脚本功能：作业改改——解锁VIP
下载地址：https://is.gd/4DcafV
软件版本：1.3
脚本作者：彭于晏💞
更新时间：2023-3-4
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

http:\/\/operationshomework\.wengdehen\.top\/operationsHomework\/verbalRecognition url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/wengdehen.js

[mitm] 

hostname = operationshomework.wengdehen.top


*******************************/

var body = $response.body.replace(/userIsOperationsHomeworkVip":\d+/g,'userIsOperationsHomeworkVip":1')
.replace(/promotionStatus":\d+/g,'promotionStatus":1')
$done({ body });
