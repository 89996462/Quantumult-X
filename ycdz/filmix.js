/******************************

脚本功能：FilmiX——解锁VIP
下载地址：https://t.cn/A6HIq53T
软件版本：1.1.1
脚本作者：彭于晏💞
更新时间：2024-3-20
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/appv2.filmix.com.cn url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/filmix.js

[mitm] 

hostname = appv2.filmix.com.cn

*******************************/

var body = $response.body.replace(/is_vip":\w+/g,'is_vip":true')
.replace(/vip_end_time":\w+/g,'vip_end_time":"2099-05-24T11:00:00+08:00"')
$done({ body });
