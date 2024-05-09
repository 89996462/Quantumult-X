/******************************

脚本功能：一木清单——解锁VIP
下载地址：https://is.gd/eA8lRx
软件版本：1.1.3
脚本作者：彭于晏💞
更新时间：2024-3-20
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/yimutodo.com\/api\/v\/mtop\/user\/info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/yimutodo.js

[mitm] 

hostname = yimutodo.com

*******************************/

var body = $response.body.replace(/memberType":"\w+"/g,'memberType":"YEAR"')
.replace(/memberExpiredTime":\w+/g,'memberExpiredTime":4092599349000')
.replace(/class":".*?"/g,'class":"com.tian.OneWoodList.year.48"')
$done({ body });

