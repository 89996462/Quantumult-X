/******************************

脚本功能：Fun Widgets小组件——解锁VIP
下载地址：https://is.gd/OUpXoz
软件版本：2.25.1
脚本作者：彭于晏💞
更新时间：2025-10-22
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]

^http[s]?:\/\/widget.haoqimiao.net\/api\/user\/info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/haoqimiao.js

[mitm] 

hostname = widget.haoqimiao.net

*******************************/

var body = $response.body.replace(/vipExpiresTime":\d+/g,'vipExpiresTime":8888888888000')
.replace(/vip":\w+/g,'vip":true')
.replace(/vipType":\d/g,'vipType":4')
$done({ body });
