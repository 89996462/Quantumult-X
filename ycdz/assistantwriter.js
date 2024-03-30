/******************************

脚本功能：文案生成器——解锁VIP
下载地址：https://is.gd/ecZ36g
软件版本：1.3.9
脚本作者：彭于晏💞
更新时间：2024-3-20
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/api.assistantwriter.top\/user\/login url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/assistantwriter.js

[mitm] 

hostname = api.assistantwriter.top

*******************************/

var body = $response.body.replace(/vip_end_time":\d+/g,'vip_end_time":8888888888')
.replace(/is_vip":\d/g,'is_vip":1')
.replace(/vip_type":\d/g,'vip_type":1')
$done({ body });
