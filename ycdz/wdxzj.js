/*******************************

脚本功能：in widget超级小组件——解锁VIP
下载地址：https://is.gd/mpN36M
软件版本：2.4.3
脚本作者：彭于晏💞
更新时间：2024-10-11
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/api-webclip.wdxzj.com url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/wdxzj.js

[mitm] 

hostname = api-webclip.wdxzj.com

*******************************/

var body = $response.body.replace(/vipType":".*?"/g,'vipType":"永久会员"')
.replace(/vipVaildTime":"\d+"/g,'vipVaildTime":"32493834549000"')
.replace(/paySigned":\d/g,'paySigned":1')
$done({ body });
