/*******************************

脚本功能：AI绘画——解锁VIP
下载地址：https://is.gd/jdj9a8
软件版本：1.42
脚本作者：彭于晏💞
更新时间：2023-10-5
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/aihh.shujiaxia.com\/api\/user\/my url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/shujiaxia.js

[mitm] 

hostname = aihh.shujiaxia.com

*******************************/

var body = $response.body.replace(/finish_time":".*?"/g,'finish_time":"永久会员"')
.replace(/free_num":\d/g,'free_num":1')
.replace(/type":\d/g,'type":2')
$done({ body });
