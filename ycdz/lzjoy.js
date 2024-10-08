/*******************************

脚本功能：虫虫吉他——解锁VIP
下载地址：https://is.gd/JquC8w
软件版本：2.3.2
脚本作者：彭于晏💞
更新时间：2024-10—8
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/cc.lzjoy.com url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/lzjoy.js

[mitm] 

hostname = cc.lzjoy.com

*******************************/

var body = $response.body.replace(/vip":"0"/g,'vip": "1"')
.replace(/expire_date":""/g,'expire_date": "2030-11-11"')
.replace(/buy":"0"/g,'buy": "1"')
.replace(/nickname":".*?"/g,'nickname":"彭于晏Crack"')
$done({ body });
