/******************************

脚本功能：草莓短剧——解锁VIP
下载地址：https://is.gd/mfAYpO
软件版本：1.0
脚本作者：彭于晏💞
更新时间：2025-3-4
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/strawberrydjapi.zxktkj.top\/bm\/v9\/account\/command\/bmUserDetails url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/zxktkj.js

[mitm] 

hostname = strawberrydjapi.zxktkj.top

*******************************/

var body = $response.body.replace(/buyVipState":\d/g,'buyVipState":1')
.replace(/vipEnabled":\w+/g,'vipEnabled":true')
.replace(/nickName":".*?"/g,'nickName":"彭于晏解锁永久会员"')
.replace(/id":".*?"/g,'id":"TG频道:https://t.me/py996"')
$done({ body });
