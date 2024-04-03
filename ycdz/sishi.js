/******************************

脚本功能：小组件——解锁VIP
下载地址：https://t.cn/A6Txhctk
软件版本：
脚本作者：彭于晏💞
更新时间：2023-8-15
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/www\.40sishi\.com\/(artwidget|tarot|memo|seaplayer|voice|tarot)\/user\/profile url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/sishi.js

[mitm] 

hostname = www.40sishi.com

*******************************/


var body = $response.body.replace(/state":\d+/g,'state":1')
.replace(/forever":\w+/g,'forever":true')
$done({ body });
