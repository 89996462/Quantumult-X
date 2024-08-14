/*******************************

脚本功能：咔皮相机——解锁VIP
下载地址：https://is.gd/mpN36M
软件版本：3.2.3
脚本作者：彭于晏💞
更新时间：2024-10-11
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/kapi-action.shyuhuankj.com\/user url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/shyuhuankj.js

[mitm] 

hostname = kapi-action.shyuhuankj.com

*******************************/

var body = $response.body.replace(/level":\d/g,'level":1')
.replace(/expireTime":\w+/g,'expireTime":8888888888000')
.replace(/expireTimestamp":\d+/g,'expireTimestamp":8888888888000')
$done({ body });
