/*******************************

脚本名称: 微商截图秀——解锁会员
下载地址：https://is.gd/mtBOHh
软件版本：3.8.9
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

^http[s]?:\/\/weimage.keephu.com\/user\/info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/keephu.js

[mitm] 

hostname = weimage.keephu.com

*******************************/

var body = $response.body.replace(/vip":\d/g,'vip":1')
.replace(/show_vip":\d/g,'show_vip":0')
.replace(/expire":".*?"/g,'expire":"9999-01-01 08:00:00"')
$done({ body });
