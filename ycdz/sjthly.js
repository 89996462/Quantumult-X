/******************************

脚本名称: 手机通话录音机+解锁订阅
特别说明：需要试用一次 每次使用开启
下载地址：https://is.gd/7cAGKk
软件版本：5.12.2
脚本作者：彭于晏💞
更新时间：2023-8-10
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

*******************************

[rewrite_local]

^https:\/\/api\.tapeacall\.com\/v3\/receipt url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/sjthly.js

[mitm] 

hostname = api.tapeacall.com


*******************************/

var objc = JSON.parse($response.body);

    objc = 
{"recordings":{"expiry":"2099-10-10T00:53:59Z","is_active":true},"transcriptions":{"expiry":"2099-10-10T00:53:59Z","is_active":true},"trial_skus":["lite.trec.grpV.7day.trial.yearly.59_99","lite.rec.grpEE.7day.trial.yearly.39_99"],"account_standing":"good_standing"}

$done({body : JSON.stringify(objc)});
