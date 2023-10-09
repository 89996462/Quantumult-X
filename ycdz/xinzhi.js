/*******************************

脚本功能：软眠眠——解锁VIP
下载地址：https://is.gd/VEZebR
软件版本：1.5.3
脚本作者：彭于晏💞
更新时间：2023-10-5
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/ruanmianmian.xinzhi.space\/api\/v1\/* url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/xinzhi.js

[mitm] 

hostname = ruanmianmian.xinzhi.space

*******************************/

var body = $response.body.replace(/is_vip":\d+/g,'is_vip":1')
.replace(/vip_type":""/g,'vip_type":"vip"')
.replace(/vip_day":\d+/g,'vip_day":99999')
.replace(/vip_expire":""/g,'vip_expire":"您当前为终身VIP，会员永不"')
.replace(/vip_expire":null/g,'vip_expire":"您当前为终身VIP，会员永不"')
.replace(/nickname":".*?"/g,'nickname":"彭于晏解锁"')
$done({ body });
