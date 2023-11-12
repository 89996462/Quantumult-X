/*******************************

脚本功能：闪萌表情-解锁VIP
下载地址：https://is.gd/wRo0C3
软件版本：2.0.12
脚本作者：彭于晏
更新时间：2022-11-12
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

https://hi-api.weshineapp.com/v3.0/account/profile? url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/smbq.js


[mitm]

hostname = hi-api.weshineapp.com

*******************************/

var Q = JSON.parse($response.body);
Q.data.is_vip = 1;
Q.data.vip_expiration_time = "2099-09-09";
Q.data.gender = 1;
$done({body : JSON.stringify(Q)});
