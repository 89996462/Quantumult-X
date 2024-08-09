/*******************************

脚本功能：MIX2人像大师——解锁VIP
下载地址：https://t.cn/A68uoX83
软件版本：3.2.8
脚本作者：彭于晏💞
更新时间：2024-10-11
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/bmall.camera360.com/api/iap/check-receipt url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/camera360.js

[mitm] 

hostname = bmall.camera360.com

*******************************/

var objc = JSON.parse($response.body);
    objc = {"data":{"errorCode":0,"sandbox":0,"isTrialPeriod":1,"purchaseTime":1665983392,"expireTime": 4095897200,"appleExpireTime":1666242592,"originalTransactionId":"430001248113294","productId":"VIP_yearly_29.99","appleVip":1,"operationVip":0,"giftVip":0},"status":200,"message":"ok","serverTime":1665984162.3778,"exetime":"1665984161238-1665984162377"}
$done({body : JSON.stringify(objc)});
