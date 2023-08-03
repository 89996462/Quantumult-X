/*******************************

脚本功能：灵敢提词器一解锁VIP
下载地址：https://is.gd/Pl4Fbm
软件版本：3.0.1
脚本作者：彭于晏💞
更新时间：2023-8-3
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/teleprompter-api.quthing.com url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/quthing.js

[mitm] 

hostname = teleprompter-api.quthing.com

*******************************/

var body = $response.body.replace(/validVip":\w+/g,'validVip":true')
.replace(/expireTime":\d+/g,'expireTime":253392455349000')
.replace(/vipType":\d+/g,'vipType":3')
.replace(/trialVip":\w+/g,'trialVip":true')
$done({ body });
