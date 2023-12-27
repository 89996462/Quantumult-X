/******************************

脚本功能：薄荷壁纸——解锁VIP
下载地址：https://is.gd/aPzmeH
软件版本：1.17.11
脚本作者：彭于晏💞
更新时间：2023-3-8
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/mars-prod\.whalean\.com\/hestia-service\/api\/wpUser\/getUserInfo url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/whalean.js

[mitm] 

hostname = mars-prod.whalean.com


*******************************/


var objc = JSON.parse($response.body);

    objc = 
{
  "data" : {
    "id" : 1040493,
    "deviceUnique" : "",
    "accountStatus" : 0,
    "memberEndTime" : 4092599349000,
    "memberType" : 1,
    "userName" : "彭于晏破解",
    "ctime" : "2023-11-18 21:09:03",
    "mobilePhone" : "",
    "isMember" : 0,
    "lastLoginTime" : 1700312944000,
    "userAccount" : {
      "renewalMethod" : 1,
      "memberEndTime" : "9999-09-09 09:09:09",
      "memberFirstTime" : "2023-12-21 16:15:02"
    },
    "loginPlatform" : 5,
    "headImg" : ""
  },
  "code" : 200,
  "extra" : null,
  "message" : "ok",
  "success" : true,
  "path" : null,
  "timestamp" : 1703608020624,
  "error" : false
}


$done({body : JSON.stringify(objc)});
