/*******************************

脚本名称: 柚子轻断食——解锁VIP
下载地址：https://is.gd/6ra6p9
软件版本：2.6.5
脚本作者：彭于晏💞
更新时间：2023-9-27
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/xy.jingcle.com\/api\/user\/info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/jingcle.js

[mitm] 

hostname = xy.jingcle.com

*******************************/

var body = $response.body.replace(/is_vip":\w+/g,'is_vip":true')
.replace(/vip_type":".*?"/g,'vip_type":"终身会员"')
.replace(/nickname":".*?"/g,'nickname":"彭于晏解锁"')
$done({ body });
