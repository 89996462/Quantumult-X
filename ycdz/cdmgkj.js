/*******************************

脚本功能：工地记工——解锁VIP
下载地址：https://is.gd/89ZW9z
软件版本：4.9.8
脚本作者：彭于晏💞
更新时间：2023-9-23
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/app.cdmgkj.cn\/api\/v3\/vip\/status url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/cdmgkj.js

[mitm] 

hostname = app.cdmgkj.cn

*******************************/

var body = $response.body.replace(/status":\d/g,'status":1')
.replace(/expire_time":".*?"/g,'expire_time":"2099-09-09"')
$done({ body });
