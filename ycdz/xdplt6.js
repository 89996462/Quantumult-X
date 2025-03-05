/******************************

脚本功能：抖看到小短剧——解锁VIP
下载地址：https://is.gd/VfDIXy
软件版本：2.6.0
脚本作者：彭于晏💞
更新时间：2025-3-4
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/mv-ps\.xdplt\.com\/api\/v1\/payment\/apple\/pay\/verify\/info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/xdplt6.js

[mitm] 

hostname = mv-ps.xdplt.com


*******************************/

var objc = JSON.parse($response.body);
    objc = {
  "message" : {
    "code" : 200,
    "serverTime" : 1733924690381,
    "messageInfo" : "H20000"
  },
  "result" : {
    "unsign" : 1,
    "agreementNo" : "000001899416154",
    "isTrialPeriod" : false,
    "eventToken" : null,
    "expiresDate" : 8888888888000,
    "isVip" : 1,
    "skuType" : null
  }
}

$done({body : JSON.stringify(objc)});
