/*******************************

脚本名称: 小鹦看看+解锁播放权限
下载地址：https://is.gd/nd9ygd
软件版本：2.24
脚本作者：彭于晏💞
更新时间：2023-9-17
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/api.pollykann.com\/media url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/pollykann.js

[mitm] 

hostname = api.pollykann.com

*******************************/

var body = $response.body.replace(/"isPurchased":false/g,'"isPurchased":true')
$done({ body });
