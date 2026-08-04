/*******************************

脚本功能：支付宝模拟器——解锁订阅
脚本作者：彭于晏💞
更新时间：2026-8-3
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************
[rewrite_local]

^https:\/\/xckj.xingcenkj.com/v1/auth/user url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/zfb.js


[mitm] 

hostname = xckj.xingcenkj.com

*******************************/

var body = $response.body.replace(/isVip":\d+/g,'isVip":1')
.replace(/vipeExpireTime":".*?"/g,'vipeExpireTime":"9999"')
.replace(/username":".*?"/g,'username":"彭于晏Crack"')
$done({ body });
