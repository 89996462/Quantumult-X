/******************************

脚本功能：证件照相馆-美颜证件照——解锁VIP
下载地址：https://is.gd/QCct8l
软件版本：1.2.1
脚本作者：彭于晏💞
更新时间：2023-3-10
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/standard\.rhinoxlab\.com\/standard\/account\/getAccountInfo url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/zjzXg.js

[mitm] 

hostname = standard.rhinoxlab.com


*******************************/


var objc = JSON.parse($response.body);

    objc = 
{
  "success" : true,
  "result" : {
    "mobile" : "15988888888",
    "registerTime" : "2023-03-09 21:03:59",
    "vipExpireDays" : 7,
    "nickname" : "U2303784141",
    "dataId" : "10167836703880764475",
    "vipGroupInfos" : [
      {
        "groupType" : "TYPE_ONE",
        "vipType" : "VIP",
        "autoPay" : "YES"
      }
    ],
    "headImg" : "https://boniuapp.rhinox.cn/common/head/1599546812784.png",
    "type" : "VIP",
    "inviteCode" : "dVWdrPKt",
    "vipExpireTime" : "2028-03-17 10:59:59"
  },
  "returnCode" : "200",
  "timeOut" : false
}



$done({body : JSON.stringify(objc)});
