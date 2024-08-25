/*******************************

脚本功能：抠图软件——解锁VIP
下载地址：https://is.gd/1vKgMA
软件版本：2.0.2
脚本作者：彭于晏💞
更新时间：2024-10—8
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/kt.jiaofei8.cn\/api\/user\/my url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/jiaofei8.js

[mitm] 

hostname = kt.jiaofei8.cn

*******************************/

var body = $response.body.replace(/finish_time":".*?"/g,'finish_time":"9999-01-01 08:00:00到期"')
.replace(/free_num":\d+/g,'free_num":8888')
.replace(/score":\d/g,'score":1')
.replace(/type":\d/g,'type":2')
.replace(/mobile":".*?"/g,'mobile":"彭于晏Crack"')
$done({ body });
