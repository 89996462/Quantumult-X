/*******************************

脚本功能：中医方剂——解锁VIP
下载地址：https://is.gd/gbWDWy
软件版本：2.3
脚本作者：彭于晏💞
更新时间：2024-10-11
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/medicine-books.meappstore.top\/medicineModule\/api\/users\/iosUserLogin url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/meappstore.js

[mitm] 

hostname = medicine-books.meappstore.top

*******************************/

var body = $response.body.replace(/vipState":\d/g,'vipState":1')
.replace(/vipEndTime":\w+/g,'vipEndTime":"2999-09-09"')
.replace(/vipEndDateTime":\w+/g,'vipEndDateTime":32493834549000')
$done({ body });

