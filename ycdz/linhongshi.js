/******************************

脚本功能：P图大神——解锁VIP
下载地址：https://t.cn/A6HsZlkP
软件版本：2.0.7
脚本作者：彭于晏💞
更新时间：2024-6-8
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/appss\.linhongshi\.com\/app\/account\/getAccountInfo url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/linhongshi.js

[mitm] 

hostname = appss.linhongshi.com


*******************************/


var objc = JSON.parse($response.body);

    objc = {
  "success" : true,
  "result" : {
    "vipExpireTime" : "2999-09-09 09:09:09",
    "dataId" : "10171807697013995683",
    "vipGroupInfos" : [
      {
        "groupType" : "TYPE_ONE",
        "vipType" : "VIP",
        "autoPay" : "NO"
      }
    ],
    "nickname" : "https://t.me/py996",
    "type" : "VIP"
  },
  "returnCode" : "200",
  "timeOut" : false
}

$done({body : JSON.stringify(objc)});
