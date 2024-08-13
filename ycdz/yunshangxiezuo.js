/*******************************

脚本功能：云上写作——解锁VIP
下载地址：https://is.gd/P2Rrvd
软件版本：6.5.2
脚本作者：彭于晏💞
更新时间：2024-10-11
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/www.yunshangxiezuo.com url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/yunshangxiezuo.js

[mitm] 

hostname = www.yunshangxiezuo.com

*******************************/

var body = $response.body.replace(/vip":\d/g,'vip":1')
.replace(/vip_forever":\d/g,'vip_forever":1')
.replace(/vip_last":".*?"/g,'vip_last":"2099-08-13 11:40:18"')
.replace(/last_login":".*?"/g,'last_login":"2099-08-13 11:30:41"')
.replace(/updated_at":".*?"/g,'updated_at":"2099-08-13 11:37:33"')
$done({ body });
