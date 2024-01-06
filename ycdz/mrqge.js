/******************************

脚本功能：每日凯格尔——解锁VIP
下载地址：https://t.cn/A6lkb8iz
软件版本：10.0.3
脚本作者：彭于晏💞
更新时间：2023-12-30
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

https:\/\/kegelapi\.dailystretch\.app\/api\/v1 url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/mrqge.js

[mitm] 

hostname = kegelapi.dailystretch.app


*******************************/


var obj = JSON.parse(
  $response.body
    .replace(/\"isSubscriber\":\w+/g, '"isSubscriber":true')
    .replace(/\"lock\":\w+/g, '"lock":false')
);

$done({ body: JSON.stringify(obj) });
