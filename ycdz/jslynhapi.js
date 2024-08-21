/*******************************

脚本功能：水印相机——解锁VIP
下载地址：https://is.gd/jHpDXP
软件版本：1.3
脚本作者：彭于晏💞
更新时间：2024-6-8
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/water-fv.jslynhapi.com\/api\/visitors\/sign-in url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/jslynhapi.js

[mitm] 

hostname = water-fv.jslynhapi.com

*******************************/

var body = $response.body.replace(/nickname":".*?"/g,'nickname":"彭于晏Crack"')
.replace(/vip":\d/g,'vip":1')
.replace(/vip_expire_time":\d+/g,'vip_expire_time":8888888888')
$done({ body });
