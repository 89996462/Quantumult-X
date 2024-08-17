/*******************************

脚本功能：视频转文字——解锁VIP
下载地址：https://is.gd/DLFIy0
软件版本：2.5.9
脚本作者：彭于晏💞
更新时间：2024-10-11
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/paperwork.szshht.cn\/api\/User\/getVipInfo url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/szshht.js

[mitm] 

hostname = paperwork.szshht.cn

*******************************/

var body = $response.body.replace(/is_vip":\d/g,'is_vip":1')
.replace(/enddate":".*?"/g,'enddate":"9999-01-01"')
$done({ body });
