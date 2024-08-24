/*******************************

脚本功能：画涯——解锁VIP
下载地址：https://is.gd/jVevT1
软件版本：1.5.2
脚本作者：彭于晏💞
更新时间：2024-10—8
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/api.huaya.cc\/Handler\/Users_Head.ashx url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/huaya.js

[mitm] 

hostname = api.huaya.cc

*******************************/

var body = $response.body.replace(/issubscribe":\w+/g,'issubscribe":true')
.replace(/promotionnumber":\d/g,'promotionnumber":1')
.replace(/prohibitstate":\d/g,'prohibitstate":1')
.replace(/vipday":\d/g,'vipday":1')
.replace(/nickname":".*?"/g,'nickname":"彭于晏Crack"')
$done({ body });
