/*******************************

脚本功能：乞丐逆袭当帝王——无限宝石
下载地址：微信小程序
软件版本：9.9.9
脚本作者：彭于晏💞
更新时间：2023-10-5
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/qigai-wx.game.jingyougz.com\/api\/v1\/users\/login url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/yx/jingyougz.js

[mitm] 

hostname = qigai-wx.game.jingyougz.com

*******************************/

var body = $response.body.replace(/coin\\":\d+/g,'coin\\":888888888888')
$done({ body });
