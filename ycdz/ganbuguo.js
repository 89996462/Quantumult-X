/******************************

脚本功能：闹钟+解锁VIP
下载地址：https://is.gd/YxJcp8
软件版本：2.0.0
脚本作者：彭于晏💞
更新时间：2023-10-11
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/nao.ganbuguo.com\/user\/userinfo url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/ganbuguo.js

[mitm] 

hostname = nao.ganbuguo.com

*******************************/

var body = $response.body.replace(/uvip":"\d"/g,'uvip":"1"')
.replace(/islong":"\d"/g,'islong":"1"')
.replace(/advert":"\d"/g,'advert":"1"')
$done({ body });

