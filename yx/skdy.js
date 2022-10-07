/******************************

脚本功能：实况钓鱼+无限金币
下载地址：微信小程序💞
软件版本：1.1.1
脚本作者：彭于晏💞
更新时间：2022-10-7
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************

[rewrite_local]

^https:\/\/dev\.fish\.17fish\.cool:6008\/api\/livefishing\/v10\/getProgress url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/yx/skdy.js

[mitm] 

hostname = dev.fish.17fish.cool

*******************************/

body = $response.body.replace(/\"gold":\d+/g, '\"gold":9999999999')


$done({body});

