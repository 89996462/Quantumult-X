/******************************

脚本功能：听书助手——解锁VIP
下载地址：https://t.cn/A6Ti8w1o
软件版本：1.6.7
脚本作者：彭于晏💞
更新时间：2023-8-15
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/www\.huojiwangluo\.cn\/ting\/user\/get? url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/huojiwangluo.js

[mitm] 

hostname = www.huojiwangluo.cn

*******************************/


var body = $response.body.replace(/vip_state":\d+/g,'vip_state":1')
.replace(/vip_expire":\d+/g,'vip_expire":8888888888')
$done({ body });
