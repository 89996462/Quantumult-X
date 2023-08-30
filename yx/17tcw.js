/*******************************

脚本名称: 全能机甲——无限资源
下载地址：微信小程序
软件版本：9.99.9
脚本作者：彭于晏💞
更新时间：2023-8-23
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

*******************************

[rewrite_local]

^http[s]?:\/\/game.17tcw.com\/default\/login\/reqLogin url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/yx/17tcw.js

[mitm] 

hostname = game.17tcw.com

*******************************/

var body = $response.body.replace(/money\\":\d+/g,'money\\":888888')
.replace(/diamond\\":\d+/g,'diamond\\":999999')
.replace(/piece\\":\d+/g,'piece\\":888888')
$done({ body });
