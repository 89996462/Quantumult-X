/*******************************

脚本名称: 情侣飞行棋——解锁pro
下载地址：https://is.gd/5dTUol
软件版本：1.5.0
脚本作者：彭于晏💞
更新时间：2023-8-22
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

*******************************

[rewrite_local]

^http[s]?:\/\/api.chatmoon.cn url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/chatmoon.js

[mitm] 

hostname = api.chatmoon.cn

*******************************/

var body = $response.body.replace(/"pro_expire_time":".*?"/g,'"pro_expire_time":"2099-11-11"')
.replace(/"pro":\d/g,'"pro":1')
.replace(/"show_by_pro":1/g,'"show_by_pro":0')
.replace(/"use_by_pro":1/g,'"use_by_pro":0')
.replace(/"need_subscribe":\d/g,'"need_subscribe":0')
$done({ body });
