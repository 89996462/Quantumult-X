/*******************************

脚本功能：漫画相机——解锁VIP
下载地址：https://is.gd/BOEyg1
软件版本：1.5.1
脚本作者：彭于晏💞
更新时间：2024-10-11
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/api.haokanke.com\/api\/v1\/my url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/haokanke.js

[mitm] 

hostname = api.haokanke.com

*******************************/

var body = $response.body.replace(/vip_days":\d+/g,'vip_days":9999999999')
$done({ body });
