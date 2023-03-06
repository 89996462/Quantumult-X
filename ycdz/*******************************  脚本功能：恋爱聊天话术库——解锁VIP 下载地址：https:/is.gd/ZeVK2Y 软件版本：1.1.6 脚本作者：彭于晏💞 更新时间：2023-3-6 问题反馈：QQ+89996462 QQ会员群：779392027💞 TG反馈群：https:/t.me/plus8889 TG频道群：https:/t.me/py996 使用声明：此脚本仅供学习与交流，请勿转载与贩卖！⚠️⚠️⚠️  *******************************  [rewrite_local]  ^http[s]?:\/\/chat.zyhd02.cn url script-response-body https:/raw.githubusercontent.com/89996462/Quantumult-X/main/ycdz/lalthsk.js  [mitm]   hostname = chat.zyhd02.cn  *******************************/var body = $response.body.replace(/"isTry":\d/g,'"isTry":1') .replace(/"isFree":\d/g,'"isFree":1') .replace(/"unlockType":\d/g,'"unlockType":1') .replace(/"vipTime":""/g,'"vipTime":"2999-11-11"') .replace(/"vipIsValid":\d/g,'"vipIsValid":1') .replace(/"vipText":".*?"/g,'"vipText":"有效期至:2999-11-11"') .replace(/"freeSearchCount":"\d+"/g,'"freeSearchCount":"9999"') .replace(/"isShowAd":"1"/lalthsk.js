/*******************************

脚本功能：恋爱聊天话术库——解锁VIP
下载地址：https://is.gd/ZeVK2Y
软件版本：1.1.6
脚本作者：彭于晏💞
更新时间：2023-3-6
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/chat.zyhd02.cn url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/lalthsk.js

[mitm] 

hostname = chat.zyhd02.cn

*******************************/

var body = $response.body.replace(/"isTry":\d/g,'"isTry":1')
.replace(/"isFree":\d/g,'"isFree":1')
.replace(/"unlockType":\d/g,'"unlockType":1')
.replace(/"vipTime":""/g,'"vipTime":"2999-11-11"')
.replace(/"vipIsValid":\d/g,'"vipIsValid":1')
.replace(/"vipText":".*?"/g,'"vipText":"有效期至:2999-11-11"')
.replace(/"freeSearchCount":"\d+"/g,'"freeSearchCount":"9999"')
.replace(/"isShowAd":"1"/g,'"isShowAd":"0"')
$done({ body });
