/*******************************

脚本功能：水印相机——解锁VIP
下载地址：https://is.gd/BCiiia
软件版本：1.0.1
脚本作者：彭于晏💞
更新时间：2024-10—8
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/supercamera.yifanxinmei.com\/api\/visitors\/sign-in url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/1yifanxinmei.js

[mitm] 

hostname = supercamera.yifanxinmei.com

*******************************/

var body = $response.body.replace(/vip":\d/g,'vip":1')
.replace(/vip_expire_time":\d+/g,'vip_expire_time":8888888888000')
.replace(/nickname":".*?"/g,'nickname":"彭于晏Crack"')
$done({ body });
