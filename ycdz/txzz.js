/******************************

脚本功能：头像制作——解锁VIP
下载地址：https://is.gd/VXQner
软件版本：1.2
脚本作者：彭于晏💞
更新时间：2022-12-1
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

http:\/\/laoniu\.dicallapp\.com url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/txzz.js

[mitm] 

hostname = laoniu.dicallapp.com


*******************************/

var body = $response.body.replace(/UserVipEnd":""/g,'UserVipEnd":"9999-11-28 22:51:24"')
$done({ body });
