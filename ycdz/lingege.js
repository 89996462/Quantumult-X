/******************************

脚本功能：高定素材大师——解锁VIP
下载地址：https://is.gd/wrWSts
软件版本：1.1.1
脚本作者：彭于晏💞
更新时间：2024-3-20
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/apps-api.lingege.cn\/user\/getUserInfo url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/lingege.js

[mitm] 

hostname = apps-api.lingege.cn

*******************************/

var body = $response.body.replace(/isForeverVip":\w+/g,'isForeverVip":true')
.replace(/status":\d/g,'status":1')
.replace(/vipLevel":\d/g,'vipLevel":8')
.replace(/memberStatus":\d/g,'memberStatus":1')
$done({ body });
