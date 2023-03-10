/*******************************

脚本功能：社恐快跑——解锁会员
下载地址：https://mxnzp.com/sl/NE8s
软件版本：1.2.3
脚本作者：彭于晏💞
更新时间：2023-3-10
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/ig.api.pangbaoapp.com\/ig-social-phobia-api\/api\/user\/getUserInfo.do url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/klkp.js

[mitm] 

hostname = ig.api.pangbaoapp.com

*******************************/

var body = $response.body.replace(/"nickName":".*?"/g,'"nickName":"彭于晏crack"')
.replace(/"memberFlag":false/g,'"memberFlag":true')
.replace(/"memberExpireDay":null/g,'"memberExpireDay":"2099-11-11"')
$done({ body });
