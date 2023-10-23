/******************************

脚本功能：开练——解锁VIP
下载地址：https://is.gd/L1r08s
软件版本：3.3.94
脚本作者：彭于晏💞
更新时间：2023-10-5
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/fitness-notes.nanxiani.cn\/api\/user_info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/nanxiani.js

[mitm] 

hostname = fitness-notes.nanxiani.cn

*******************************/

var body = $response.body.replace(/vip_type":\d/g,'vip_type":6')
.replace(/vip_expire":".*?"/g,'vip_expire":"9999-10-20"')
$done({ body });
