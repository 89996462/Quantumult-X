/*******************************

脚本名称: 海豚🐬儿童英语(解锁内容)
下载地址：https://is.gd/kXdtBJ
软件版本：3.9.9
脚本作者：彭于晏💞
更新时间：2023-9-19
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/english.dolphinmedia.cn url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/dolphinmedia.js

[mitm] 

hostname = english.dolphinmedia.cn

*******************************/

var body = $response.body.replace(/"canStudy":\d/g,'"canStudy":1')
.replace(/"freeEndTime":\d+/g,'"freeEndTime":4094421947000')
.replace(/"freed":\d/g,'"freed":1')
.replace(/"locked":\d/g,'"locked":0')
.replace(/"freeEndTime":".*?"/g,'"freeEndTime":"2025-04-27 08:01:01"')
$done({ body });
