/******************************

脚本功能：一波超人——无限货币—无限钻石—无限体力—无限抽奖
下载地址：微信小程序
软件版本：9.9.9
脚本作者：彭于晏💞
更新时间：2026-6-26
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/api.xgamevip.com\/api\/v1\/getUserData url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/yx/ybcr.js

[mitm]

hostname = api.xgamevip.com

*******************************/

let body = $response.body;
body = body.replace(/\\"coin\\":\d+/g, '\\"coin\\":99999999');
body = body.replace(/\\"diamond\\":\d+/g, '\\"diamond\\":99999999');
body = body.replace(/\\"powerNum\\":\d+/g, '\\"powerNum\\":999');
body = body.replace(/\\"drawNum\\":\d+/g, '\\"drawNum\\":99999');
$done({ body });
