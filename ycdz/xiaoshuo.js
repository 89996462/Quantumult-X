/*******************************

脚本功能：熊猫脑洞小说
下载地址：https://is.gd/m6U4Kk
软件版本：2.14
脚本作者：彭于晏💞
更新时间：2025-8-9
问题反馈：QQ+89996462
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/xiaoshuo.xmxsapp.com/api/v3/user/my-center url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/xiaoshuo.js

[mitm] 

hostname = xiaoshuo.xmxsapp.com

*******************************/

var body = $response.body.replace(/is_vip":"\d"/g,'is_vip":"1"')
.replace(/vip_show_type":"\d"/g,'vip_show_type":"1"')
.replace(/vip_privilege_desc":"\w+"/g,'vip_privilege_desc":"9999-09-09到期"')
$done({ body });
