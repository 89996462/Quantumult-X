/******************************

脚本功能：快手小程序+易知课堂+解锁观看
下载地址：http://mtw.so/5HWF07
软件版本：v2.3.0
脚本作者：彭于晏
更新时间：2022-9-19
问题反馈：QQ+89996462
QQ会员群：779392027
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************
[rewrite_local]

^https:\/\/curriculum-api\.yizhiweixin\.com\/curriculum\/newDetail url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/ksyzkt.js

[mitm] 

hostname = curriculum-api.yizhiweixin.com

*******************************/

body = $response.body.replace(/\"is_free":\d/g, '\"is_free":1').replace(/\"unlock":\d/g, '\"unlock":1')
$done({body});

