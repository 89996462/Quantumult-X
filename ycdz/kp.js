/******************************

脚本功能：可拍 - Al换脸变装视频—解锁VIP
下载地址：https://is.gd/sAdANg
软件版本：2.4.5
脚本作者：彭于晏💞
更新时间：2022-11-17
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

http:\/\/fxshot-api\.afunapp\.com\/order_api\/apple_query url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/kp.js

[mitm] 

hostname = fxshot-api.afunapp.com

*******************************/

body = $response.body.replace(/\"vip_remain_time":\d+/g, '\"vip_remain_time":4098497565')

$done({body});
