/******************************

脚本功能：三维地图探索
软件版本：v1.2.7
脚本作者：彭于晏💞
更新时间：2026-4-16

TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996

使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************

[rewrite_local]

^https:\/\/map.kky888.cn/user/info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/kky888.js

[mitm] 

hostname = map.kky888.cn

*******************************/

var body = $response.body.replace(/is_vip":\w+/g,'is_vip":true')
.replace(/vipFlag":"\d+"/g,'vipFlag":"1"')
.replace(/vipTime":".*?"/g,'vipTime":"2099-09-09 09:09:09"')
.replace(/accountName":".*?"/g,'accountName":"彭于晏Crack"')
.replace(/id":".*?"/g,'id":"TG：https:\/\/t.me\/py996"')
$done({ body });
