/*******************************

脚本名称: 易截图2——解锁会员
下载地址：https://is.gd/TlHFQJ
软件版本：1.2.2
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

^http[s]?:\/\/1jietu.com\/apiv2\/user url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/comyjt.js

[mitm] 

hostname = 1jietu.com

*******************************/

var body = $response.body.replace(/vip":"\d"/g,'vip":"1"')
.replace(/group_id":"\d"/g,'group_id":"3"')
.replace(/group":".*?"/g,'group":"彭于晏已破解"')
$done({ body });
