/*******************************

脚本功能：Pajicam至尊VIP解锁
脚本作者：彭于晏💞
更新时间：2026-10—28
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/uc.pajicam.com/api/other/userinfo url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/Pajicam.js


[mitm] 

hostname = uc.pajicam.com

*******************************/

var body = $response.body.replace(/"vip_expire_time":\d+/g,'"vip_expire_time":9999999999999')
.replace(/"vip_show_expire_time":\d+/g,'"vip_show_expire_time":9999999999999')
.replace(/"classic_vip_expire_time":\d+/g,'"classic_vip_expire_time":9999999999999')
.replace(/"classic_vip_show_expire_time":\d+/g,'"classic_vip_show_expire_time":9999999999999')
.replace(/"svip_expire_time":\d+/g,'"svip_expire_time":9999999999999')
.replace(/"svip_show_expire_time":\d+/g,'"svip_show_expire_time":9999999999999')
.replace(/"vip_current_type":\d+/g,'"vip_current_type":2')
.replace(/"vip_current_is_trial":(true|false)/g,'"vip_current_is_trial":false')
.replace(/"vip_trial_start_time":\d+/g,'"vip_trial_start_time":1792147945465')
.replace(/"vip_trial_day":\d+/g,'"vip_trial_day":999999')
.replace(/"vip_subscribing":(true|false)/g,'"vip_subscribing":true')
.replace(/"svip_subscribing":(true|false)/g,'"svip_subscribing":true')
$done({ body });
