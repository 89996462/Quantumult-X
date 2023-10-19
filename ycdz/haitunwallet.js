/******************************

脚本功能：海豚记账本——解锁VIP
下载地址：https://is.gd/hsynRQ
软件版本：3.5.1
脚本作者：彭于晏💞
更新时间：2023-10-5
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/book\.haitunwallet\.com\/app\/vip\/status url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/haitunwallet.js

[mitm] 

hostname = book.haitunwallet.com


*******************************/

var objc = JSON.parse($response.body);
    objc = {
 "data": {
  "level": 2,
  "status": 1,
  "openTime": "9999-12-12",
  "startTime": "9999-12-12",
  "endTime": "9999-12-12",
  "shareToken": ""
 },
 "code": 0,
 "msg": "返回成功"
};
$done({body : JSON.stringify(objc)});
