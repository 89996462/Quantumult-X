/******************************

脚本功能：大鱼短剧会员解锁
脚本作者：彭于晏💞
更新时间：2026-9-9
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/xkld.kunpengtn.com url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/dydj.js

[mitm] 

hostname = xkld.kunpengtn.com

*******************************/


var body = $response.body.replace(/membershipStatus":\d+/g,'membershipStatus":1')
.replace(/membershipExpiryTime":"[0-9\-: ]+"/g,'membershipExpiryTime":"9999-12-31 23:59:59"')
.replace(/membershipForeverStatus":\d+/g,'membershipForeverStatus":1')
.replace(/goldCoinBalance":\d+/g,'goldCoinBalance":999999')
.replace(/hasPurchasedMembership":\d+/g,'hasPurchasedMembership":1')
.replace(/accountStatus":\d+/g,'accountStatus":1')
$done({ body });
