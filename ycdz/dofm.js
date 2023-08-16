/*******************************

脚本名称: Dofm——解锁会员
下载地址：https://is.gd/1Intbl
软件版本：2.5.0
脚本作者：彭于晏💞
更新时间：2023-8-16
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

*******************************

[rewrite_local]

^http[s]?:\/\/api.cikelink.com\/fm\/v2\/fm\/info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/dofm.js

[mitm] 

hostname = api.cikelink.com

*******************************/

var body = $response.body.replace(/status":\d/g,'status":1')
.replace(/expireTime":\d+/g,'expireTime":4567891456')
.replace(/expireUnixTime":\d+/g,'expireUnixTime":4567891456')
.replace(/canPlay":\w+/g,'canPlay":true')
$done({ body });
