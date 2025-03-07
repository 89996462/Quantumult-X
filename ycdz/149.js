/******************************

脚本功能：香蕉短剧——解锁VIP
下载地址：https://is.gd/d6d5H9
软件版本：1.1.5.6
脚本作者：彭于晏💞
更新时间：2025-3-7
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/8.149.129.124/api/account/v1 url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/149.js

[mitm] 

hostname = 8.149.129.124

*******************************/

var objc = JSON.parse($response.body);
    objc = {
  "phoneNumber" : "",
  "testerExpiresAt" : "2000-01-01T00:00:00Z",
  "id" : "https://t.me/py997",
  "email" : "",
  "createdAt" : "2025-03-04T14:43:05.591981Z",
  "balance" : 9999,
  "vipExpiresAt" : "9999-09-09T00:00:00Z"
}
$done({body : JSON.stringify(objc)});
