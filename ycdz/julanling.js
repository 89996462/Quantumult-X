/*******************************

脚本功能：安心记加班——解锁VIP
下载地址：https://is.gd/oGZFix
软件版本：5.1.00
脚本作者：彭于晏💞
更新时间：2024-10—8
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/market-gateway.julanling.com/member/api2/vip/getFunctionVipStatus url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/julanling.js


[mitm] 

hostname = market-gateway.julanling.com

*******************************/

var objc = JSON.parse($response.body);
    objc = {
  "errorCode" : 0,
  "results" : {
    "functionVipStatusMap" : {
      "VIP" : {
        "vipStatus" : "VIP",
        "willExpireDays" : 99999,
        "axUid" : 187654321,
        "expireTimestamp" : 4092599349,
        "hasExpiredDays" : 0,
        "expireTime" : "2099-09-09 09:09:09"
      },
      "ADVERT_VIP" : {
        "vipStatus" : "VIP",
        "willExpireDays" : 99999,
        "axUid" : 187654321,
        "expireTimestamp" : 4092599349,
        "hasExpiredDays" : 0,
        "expireTime" : "2099-09-09 09:09:09"
      }
    }
  },
  "errorStr" : null,
  "token" : null
}

$done({body : JSON.stringify(objc)});
