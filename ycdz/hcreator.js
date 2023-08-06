/*******************************

脚本功能：普通话测试——解锁会员&解锁视频内容
特别说明：https://is.gd/ZFbMYA
软件版本：5.9.20
脚本作者：彭于晏💞
更新时间：2023—8-8
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/api.hcreator.cn url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/hcreator.js

[mitm] 

hostname = api.hcreator.cn

*******************************/

var body = $response.body.replace(/"vipType":0/g,'"vipType":1')
.replace(/"expireTime1":null/g,'"expireTime1":1963926472000')
.replace(/"startTime1":null/g,'"startTime1":1663926472000')
.replace(/"vip":false/g,'"vip":true')
.replace(/"vipName":"非会员"/g,'"vipName":"会员"')
.replace(/"day":0/g,'"day":3472')
.replace(/"vipRank":\d/g,'"vipRank":3')
.replace(/"joinType":\w+/g,'"joinType":true')
$done({ body });
