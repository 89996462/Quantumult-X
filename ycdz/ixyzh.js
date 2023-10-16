/*******************************

脚本名称: 小包搜题——解锁VIP
下载地址：https://is.gd/zVg0ZD
软件版本：1.8.3
脚本作者：彭于晏💞
更新时间：2023-10-27
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/soti.ixyzh.com\/ios\/isvip url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/ixyzh.js

[mitm] 

hostname = soti.ixyzh.com

*******************************/

var body = $response.body.replace(/isVip":"\d"/g,'isVip":"1"')
$done({ body });
