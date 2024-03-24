/******************************

脚本功能：昭昭医考——解锁付费视频
下载地址：https://t.cn/A6Ty68qi
软件版本：8.0.6
脚本作者：彭于晏💞
更新时间：2024-3-20
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/api.yikao88.com\/api-shop\/course\/app\/v5\/selectDetail url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/yikao88.js

[mitm] 

hostname = api.yikao88.com

*******************************/

var body = $response.body.replace(/buy":\w+/g,'buy":true')
.replace(/freeTrial":\d/g,'freeTrial":1')
$done({ body });
