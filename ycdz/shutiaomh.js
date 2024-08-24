/*******************************

脚本功能：画耽漫画——解锁VIP
下载地址：https://is.gd/lafi0d
软件版本：1.1.2
脚本作者：彭于晏💞
更新时间：2024-10—8
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/www.shutiaomh.com\/api\/\/getSysUserInfo url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/shutiaomh.js

[mitm] 

hostname = www.shutiaomh.com

*******************************/

var body = $response.body.replace(/vipDays":\d/g,'vipDays":1')
.replace(/nickname":".*?"/g,'nickname":"彭于晏Crack"')
.replace(/inviteCode":".*?"/g,'inviteCode":"89996462"')
.replace(/expireDays":\w+/g,'expireDays":9999')
$done({ body });
