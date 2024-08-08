/*******************************

脚本功能：爱剪辑——解锁VIP
下载地址：https://t.cn/A6KKPMgP
软件版本：2.8.0
脚本作者：彭于晏💞
更新时间：2024-10-11
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/api.open.loveclip.site url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/loveclip.js

[mitm] 

hostname = api.open.loveclip.site

*******************************/

var body = $response.body.replace(/IsVip":\w+/g,'IsVip":true')
.replace(/VipLevel":\d+/g,'VipLevel":1')
.replace(/IsFree":\w+/g,'IsFree":true')
.replace(/VipExpire":".*?"/g,'VipExpire":"9999-09-09 00:00:00"')
.replace(/LastActivityTime":".*?"/g,'LastActivityTime":"9999-09-09 00:00:00"')
.replace(/Nickname":".*?"/g,'Nickname":"TG频道https://t.me/py996"')
$done({ body });
