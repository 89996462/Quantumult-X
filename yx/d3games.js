/*******************************

脚本名称: 合成契约——无限资源
下载地址：微信小程序搜索
软件版本：9.9.9
脚本作者：彭于晏💞
更新时间：2023-8-19
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

*******************************

[rewrite_local]

^http[s]?:\/\/wxsdk-data.d3games.com\/hhh\/member\/get url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/yx/d3games.js

[mitm] 

hostname = wxsdk-data.d3games.com

*******************************/

var body = $response.body.replace(/goldValue\\":\d+/g,'goldValue\\":888888')
.replace(/diamondValue\\":\d+/g,'diamondValue\\":999999')
.replace(/workerValueMax\\":\d+/g,'workerValueMax\\":999')
.replace(/workerValue\\":\d+/g,'workerValue\\":999')
.replace(/magicValue\\":\d+/g,'magicValue\\":8888')
$done({ body });
