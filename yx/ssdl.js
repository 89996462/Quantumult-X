/******************************

脚本功能：射手大陆—9999装备等级
下载地址：https://is.gd/fOOBsc
软件版本：1.0.21
脚本作者：彭于晏💞
更新时间：2022-11-16
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/bowland\.bytedance\.com\/ohayoo\/lightboat\/bowland\/Equip\/GetAllEquips*? url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/yx/ssdl.js


[mitm]

hostname = bowland.bytedance.com

*******************************/

var body=$response.body;
body = body.replace(/"level\":\d+/g,'"level":9999');
$done(body);
