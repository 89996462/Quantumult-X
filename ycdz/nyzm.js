/******************************

脚本名称: 奶油桌面——解锁VIP
下载地址：https://is.gd/ydnq4w
软件版本：3.3.1
脚本作者：彭于晏💞
更新时间：2023-8-21
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

*******************************

[rewrite_local]

https://nz-api.duitang.com/account/me url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/nyzm.js

[mitm] 

hostname = nz-api.duitang.com



*******************************/

var body = $response.body; 
var obj = JSON.parse(body); 

obj.data.vip = true

body = JSON.stringify(obj);
$done({body});

