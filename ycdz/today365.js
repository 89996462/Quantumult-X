/*******************************

脚本名称: 瑞网微视——解锁VIP
下载地址：https://is.gd/k1jRM5
软件版本：1.0.4
脚本作者：彭于晏💞
更新时间：2023-9-22
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/wsapi.today365.com.cn\/api\/v1\/my url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/today365.js

[mitm] 

hostname = wsapi.today365.com.cn

*******************************/

var body = $response.body.replace(/expiredAt":".*?"/g,'expiredAt":"2099-09-21T11:55:01.939+08:00"')
.replace(/coins":\d+/g,'coins":99999')
.replace(/coins30":\d+/g,'coins30":99999')
.replace(/level":\d+/g,'level":99')
$done({ body });
