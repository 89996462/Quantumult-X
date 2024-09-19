/*******************************

脚本功能：周易起名大师——解锁VIP
下载地址：https://is.gd/OV7EUB
软件版本：2.2.6
脚本作者：彭于晏💞
更新时间：2024-10—8
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/www.zhouyilive.com\/qm-api\/nm_user.php url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/zhouyilive.js

[mitm] 

hostname = www.zhouyilive.com

*******************************/

var body = $response.body.replace(/"vip":"0"/g,'"vip":"1"')
$done({ body });
