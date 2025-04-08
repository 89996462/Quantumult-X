/******************************

脚本功能：糖果追剧——解锁VIP
下载地址：https://is.gd/IahsHq
软件版本：1.0.3
脚本作者：彭于晏💞
更新时间：2025-4-22
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/candydjapi.winner1319.top\/tg\/v8\/account\/command\/userInfo url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/winner1319.js

[mitm] 

hostname = candydjapi.winner1319.top

*******************************/

var body = $response.body.replace(/buyVipState":\d/g,'buyVipState":1')
.replace(/loginType":\d/g,'loginType":1')
.replace(/vipEnabled":\w+/g,'vipEnabled":true')
$done({ body });
