/*************************************

项目名称：时光序——解锁VIP
下载地址：https://is.gd/zEOx0m
软件版本：4.9.5
脚本作者：彭于晏💞
更新时间：2023-8-14
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

**************************************

[rewrite_local]

^https:\/\/api\.weilaizhushou\.com\/base\/user\/vip\/getUserVip url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/shiguangxu.js

[mitm]

hostname = api.weilaizhushou.com

*************************************/


var body = JSON.parse($response.body);

body.data.isVip = true;
body.data.vipState = true;
body.data.allLifeVip = true;
body.data.everVip = true;

$done({ body: JSON.stringify(body) });
