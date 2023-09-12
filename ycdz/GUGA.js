/*******************************

脚本功能：GUGA一超级白板——解锁VIP
特别说明: iPad版本——手机不可下载
下载地址：https://is.gd/bVq3oN
软件版本：1.0.9
脚本作者：彭于晏💞
更新时间：2023-9-12
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/www\.guga\.co\/api-base\/v2\/(state|preferential-product) url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/GUGA.js



[mitm]

hostname = www.guga.co

*******************************/
var body = $response.body;
var data = JSON.parse(body); 
data.data.level = 1;  
data.data.expire = 1; 
body = JSON.stringify(data);
$done(body);
