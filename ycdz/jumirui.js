/******************************

脚本功能：视频舞蹈秀——解锁VIP
下载地址：https://t.cn/A6TRgNif
软件版本：131.1
脚本作者：彭于晏💞
更新时间：2024-3-20
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/api.jumirui.com\/user\/getVipStatus url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/jumirui.js

[mitm] 

hostname = api.jumirui.com

*******************************/

var body = $response.body.replace(/isVip":\w+/g,'isVip":true')
.replace(/expirationTime":\d+/g,'expirationTime":8888888888')
$done({ body });

