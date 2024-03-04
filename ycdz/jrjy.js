/******************************

脚本功能：今日解忧——解锁VIP
下载地址：https://is.gd/8QlnOd
软件版本：1.2
脚本作者：彭于晏💞
更新时间：2023-3-4
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

https:\/\/api\.iappdaily\.com url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/jrjy.js

[mitm]

hostname = api.iappdaily.com

*******************************/


var obj = JSON.parse(
  $response.body
    .replace(/\"is_vip\":0/g, '"is_vip":1')
    .replace(/\"is_paid\":0/g, '"is_paid":1')
    .replace(/\"vip_expired\":0/g, '"vip_expired":1726411565000')
);

$done({ body: JSON.stringify(obj) });
