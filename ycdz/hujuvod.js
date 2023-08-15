/*******************************

脚本功能：人人视频——解锁VIP
下载地址：https://is.gd/ePbYVX
软件版本：1.7
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

^http[s]?:\/\/api.hujuvod.com\/user\/personal\/information url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/hujuvod.js

[mitm] 

hostname = api.hujuvod.com

*******************************/

var body = $response.body.replace(/level":"\d+"/g,'level":"1"')
.replace(/expiredTime":\d+/g,'expiredTime":4090470693000')
.replace(/valid":\w+/g,'valid":true')
$done({ body });
