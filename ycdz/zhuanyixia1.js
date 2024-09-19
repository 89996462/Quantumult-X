/*******************************

脚本功能：转易侠PDF转换器——解锁VIP
下载地址：https://is.gd/50keuW
软件版本：1.0.8
脚本作者：彭于晏💞
更新时间：2024-10—8
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/vip.zhuanyixia.cn\/v1.0\/online\/app\/login.php url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/zhuanyixia1.js

[mitm]  

hostname = vip.zhuanyixia.cn

*******************************/

var body = $response.body.replace(/isvip":\d+/g,'isvip":1')
.replace(/isSuperVip":\d/g,'isSuperVip":1')
.replace(/superVipBeginTime":\d+/g,'superVipBeginTime":8888888888')
.replace(/superVipEndTime":\d+/g,'superVipEndTime":8888888888')
.replace(/FreeMaxNum":\d+/g,'FreeMaxNum":8888')
.replace(/limitCount":\d+/g,'limitCount":89996462')
$done({ body });
