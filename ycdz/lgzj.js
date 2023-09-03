/******************************

脚本功能：灵敢足迹——解锁高级会员
下载地址：https://is.gd/cHrCCs
软件版本：3.0.0
脚本作者：彭于晏💞
更新时间：2023-9-3
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/footprint-api\.quthing\.com\/vip\/state url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/lgzj.js

[mitm]

hostname = footprint-api.quthing.com

*************************************/


var body = JSON.parse($response.body);

body.data.trialPeriod = false,
body.data.vipType = 7,
body.data.validVip = true,
body.data.expireTime = 4102372800000,
body.data.vipCount = 999999999,

$done({ body: JSON.stringify(body) });
