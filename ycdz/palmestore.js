/******************************

脚本功能：追读小说——解锁会员
下载地址：https://is.gd/uJUeO4
软件版本：8.0.7
脚本作者：彭于晏💞
更新时间：2025-10-5
问题反馈：QQ+89996462
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]

^http[s]?:\/\/dj.palmestore.com\/zyuc\/api\/user\/accountInfo url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/palmestore.js

[mitm] 

hostname = dj.palmestore.com

*******************************/

var body = $response.body.replace(/vipType":\d/g,'vipType":1')
.replace(/vipExpire":\d+/g,'vipExpire":32472115200')
.replace(/expireDate":".*?"/g,'expireDate":"2999-09-09"')
$done({ body });
