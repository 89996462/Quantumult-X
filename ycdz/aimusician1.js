/******************************

脚本功能：旅行订单生成专家——解锁VIP
下载地址：https://is.gd/BMDqyb
软件版本：1.1
脚本作者：彭于晏💞
更新时间：2024-5-8
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/ticket-api.aimusician.com.cn\/user\/info\/getMyMaterial url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/aimusician1.js

[mitm] 

hostname = ticket-api.aimusician.com.cn

*******************************/


var objc = JSON.parse($response.body);

    objc = {"traceId":"TSN20240519179209092100572364880640","errorCode":200,"errorMessage":"操作成功","timeStamp":1716102745665,"data":{"userCode":30002416,"avatar":"https://ticket-file.aimusician.com.cn/user/avatar/10000000/10000000/avatarDefault@3x.png","nickname":"细水长流","userVipInfo":{
      "level" : 3,
      "title" : "航行无忧",
      "expireTime" : 8888888888000
    },}}



$done({body : JSON.stringify(objc)});
