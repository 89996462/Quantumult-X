/*******************************

脚本名称: 记牌精灵
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/www.ljw.sc.cn\/api\/Member\/GetUser url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/jpjl.js

[mitm] 

hostname = www.ljw.sc.cn

*******************************/

var body = $response.body.replace(/MembershipExpiry":"[0-9\-: ]+"/g,'MembershipExpiry":"9999-08-08 20:42:13"')
.replace(/VipExpiry":"[0-9\-: ]+"/g,'VipExpiry":"9999-08-08 20:42:13"')
.replace(/Today":"[0-9\-: ]+"/g,'Today":"9999-08-06 20:42:14"')
.replace(/AddedDays":\d+/g,'AddedDays":2')
.replace(/VipDays":\d+/g,'VipDays":3')
.replace(/IsSucceed":\w+/g,'IsSucceed":true')
$done({ body });
