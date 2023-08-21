/******************************

脚本名称: 免耽漫画——解锁VIP
下载地址：https://is.gd/JEuCxl
软件版本：2.8.8
脚本作者：彭于晏💞
更新时间：2023-8-21
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

*******************************

[rewrite_local]

^https:\/\/app\.lalaldc\.cn\/api\/lifan-customer\/customer\/info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/lalaldc.js

[mitm] 

hostname = app.lalaldc.cn




*******************************/

var body = $response.body;
var obj = JSON.parse(body);

obj.data.isvip = 1,
obj.data.vipStatus = 1,     
obj.data.vipEndDate = "9999-01-01", 
obj.data.vipEndDateTime = "9999-01-01 10:19:38"


body = JSON.stringify(obj);
$done({body});

