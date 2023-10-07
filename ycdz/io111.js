/*******************************

脚本功能：mg中文版——解锁VIP
下载地址：https://is.gd/ec7J53
软件版本：1.3.1
脚本作者：彭于晏💞
更新时间：2023-10-5
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/api.io111.com\/api\/system_setting\/getSystemSetting url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/io111.js

[mitm] 

hostname = api.io111.com

*******************************/

var body = $response.body.replace(/msg_count_limit":\d+/g,'msg_count_limit":1')
.replace(/task_num":\d+/g,'task_num":888888888')
.replace(/timestamp":\d+/g,'timestamp":2999999999')
.replace(/use_num":\d/g,'use_num":99999999999')
$done({ body });
