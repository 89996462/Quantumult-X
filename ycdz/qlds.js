/*******************************

脚本功能：微信小游戏——桥梁大亨
脚本作者：彭于晏💞
更新时间：2026-3-21

TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996

使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************
[rewrite_local]

^https:\/\/azory.lumosfun.com:8525/MiniGameServer/minigame/getData.do url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/qlds.js

[mitm] 

hostname = azory.lumosfun.com

*******************************/

var body = $response.body.replace(/gold\\":\d+/g,'gold\\":9999999')
.replace(/diamond\\":\d+/g,'diamond\\":888888')
$done({ body });
