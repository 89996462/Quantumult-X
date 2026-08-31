/******************************

脚本功能：过期啦——解锁VIP
下载地址：https://is.gd/bawLoF
软件版本：3.1.0
脚本作者：彭于晏💞
更新时间：2023-01-10
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/api\.guoqi365\.com\/1\.1\/functions\/getUserInfo url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/gql.js

[mitm] 

hostname = api.guoqi365.com

*******************************/

body = $response.body.replace(/\"user_is_pro":\w+/g, '\"user_is_pro":true').replace(/\"group_is_pro":\w+/g, '\"group_is_pro":true')

$done({body});
