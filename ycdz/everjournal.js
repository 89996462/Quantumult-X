/*******************************

脚本功能：一万年日记——解锁VIP
下载地址：https://is.gd/NOLMeb
软件版本：1.6.0
脚本作者：彭于晏💞
更新时间：2023-8-15
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

*******************************
[rewrite_local]

^http[s]?:\/\/api.everjournal.life url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/everjournal.js

[mitm] 

hostname = api.everjournal.life

*******************************/

var body = $response.body.replace(/pro":\d/g,'pro":1')
.replace(/appUpdateType":\d/g,'appUpdateType":1')
.replace(/membershipType":\d/g,'membershipType":1')
$done({ body });
