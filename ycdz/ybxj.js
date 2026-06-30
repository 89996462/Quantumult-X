/*******************************

脚本名称: 隐蔽相机
脚本作者：彭于晏💞
更新时间：2026-5—28
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http:\/\/www.wonzeecam.top:80/zeeapp/account/profile/summary url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/ybxj.js

[mitm] 

hostname = www.wonzeecam.top

*******************************/

var body = $response.body.replace(/membershipExpiresAt":"\d+"/g,'membershipExpiresAt":"9999999999"')
$done({ body });
