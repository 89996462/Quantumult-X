/*******************************

脚本功能：五年日记本——解锁VIP
下载地址：https://is.gd/4pEVhV
软件版本：3.17.25
脚本作者：彭于晏💞
更新时间：2023-8-15
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

*******************************
[rewrite_local]

^http[s]?:\/\/shared.lc-cn-n1-shared.com url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/shared.js

[mitm] 

hostname = shared.lc-cn-n1-shared.com

*******************************/

var body = $response.body.replace(/"vipTime":\d+/g,'"vipTime":4567891456')
.replace(/"isPro":false/g,'"isPro":true')
.replace(/"isVip":false/g,'"isVip":true')
$done({ body });
