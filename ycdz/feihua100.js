/*******************************

脚本功能：毛豆爱成语爱古诗爱阅读启蒙四合一
特别说明：全部解锁APP
软件版本：9999
脚本作者：彭于晏💞
更新时间：2023—8-5
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************
[rewrite_local]

^http[s]?:\/\/*.feihua100.com url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/feihua100.js

[mitm] 

hostname = *.feihua100.com

*******************************/

var body = $response.body.replace(/isBuy":0/g,'isBuy":1')
.replace(/isVip":0/g,'isVip":2')
.replace(/isRights":false/g,'isRights":true')
.replace(/isHasVip":false/g,'isHasVip":true')
.replace(/isOpen":\d/g,'isOpen":1')
.replace(/isAudition":\d/g,'isAudition":1')
.replace(/is_exp_class":0/g,'is_exp_class":1')
.replace(/isEnable":2/g,'isEnable":1')
.replace(/isExperiential":2/g,'isExperiential":1')
.replace(/isRight":false/g,'isRight":true')
$done({ body });
