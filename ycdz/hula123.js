/*******************************

脚本功能：呼啦少儿英语——解锁VIP
下载地址：https://is.gd/4yf6BU
软件版本：1.23.0
脚本作者：彭于晏💞
更新时间：2024-10—8
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/apiv2.hula123.com\/api\/v1\/me url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/hula123.js

[mitm] 

hostname = apiv2.hula123.com

*******************************/

var body = $response.body.replace(/is_vip":\w+/g,'is_vip":true')
.replace(/is_free_vip":\w+/g,'is_free_vip":true')
.replace(/nick_name":".*?"/g,'nick_name":"彭于晏Crack"')
.replace(/show_free_vip_dialog":\w+/g,'show_free_vip_dialog":true')
$done({ body });
