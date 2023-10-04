/******************************

脚本功能：Al设计师——解锁VIP
下载地址：https://is.gd/pIIY1O
软件版本：1.0.1
脚本作者：彭于晏💞
更新时间：2023-10-5
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/painting-api.aimusician.cc\/user\/info\/getMyMaterial url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/aimusician.js

[mitm] 

hostname = painting-api.aimusician.cc


*******************************/



var ojbk = JSON.parse($response.body);


  ojbk.data.nickname = "彭于晏解锁";
  ojbk.data.userVipInfo = {
      "level": 1,
      "title": "匠心大师",
      "expireTime": 8888888888000
    };

$done({body : JSON.stringify(ojbk)});
