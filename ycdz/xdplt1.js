/*******************************

脚本功能：玛卡写真馆——解锁VIP
下载地址：https://is.gd/e95UU5
软件版本：2.1.2
脚本作者：彭于晏💞
更新时间：2024-10—8
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/mv-ps.xdplt.com\/api\/v1\/user\/info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/xdplt1.js

[mitm] 

hostname = mv-ps.xdplt.com

*******************************/

var body = $response.body.replace(/isVip":\d/g,'isVip":1')
.replace(/vipExpireTime":\w+/g,'vipExpireTime":8887064968000')
.replace(/isForeverVip":\d/g,'isForeverVip":1')
.replace(/diamond":\d+/g,'diamond":888888')
$done({ body });
