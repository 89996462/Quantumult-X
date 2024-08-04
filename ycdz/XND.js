/******************************

脚本功能：小南斗——解锁VIP
下载地址：https://t.cn/A68l7HdY
软件版本：1.23.4
脚本作者：彭于晏💞
更新时间：2023-10-5
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

^https?:\/\/papi.xiaonandou.com.cn url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/XND.js


^https?://papi\.xiaonandou\.com.cn/moria/assist/assistVipCheck url reject-dict

[mitm] 
hostname = papi.xiaonandou.com.cn


*******************************/

var objc = JSON.parse($response.body);
    objc = {
  "status" : 0,
  "message" : "success",
  "content" : {
    "isVip" : 1,
    "vipDeadline" : "9999/09/09",
    "isShow" : 1
  },
  "isTest" : 0
}

$done({body : JSON.stringify(objc)});
