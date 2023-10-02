/******************************

脚本功能：imagex- Ai绘画 Ai绘图——解锁VIP
下载地址：https://is.gd/fSgPTY
软件版本：1.5.3
脚本作者：彭于晏💞
更新时间：2023-10-1
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/api\.chatgdp4\.com\/api\/v2\/user\/user-info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/chatgdp4.js

[mitm] 

hostname = api.chatgdp4.com


*******************************/

var objc = JSON.parse($response.body);

    objc = 
{
  "success" : true,
  "statusCode" : 200,
  "message" : "success",
  "data" : {
    "vipInfo" : {
      "isVip" : true,
      "isPermanentVip" : true,
      "vipExpiryTime" : 8888888888
    },
    "logined" : false
  }
}

$done({body : JSON.stringify(objc)});
