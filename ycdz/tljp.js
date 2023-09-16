/******************************

脚本功能：套路键盘——解锁VIP
下载地址：https://is.gd/bMYMMg
软件版本：3.2.5
脚本作者：彭于晏💞
更新时间：2023-9-16
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/api.taolujianpan.com url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/tljp.js

[mitm] 

hostname = api.taolujianpan.com

*************************************/


var body = JSON.parse($response.body);

body.data.vipInfo = {
      "deadLine": "9999-08-30",
      "imgLogo": "http://taolu.zuogetu.com/tlimg/ban_leitai_20190722.png",
      "name": "VIP尊贵会员",
      "remainDays": "99999",
      "status": "1",
      "type": "vip",
      "vipUrl": "https://support.qq.com/product/67639"
    };

$done({ body: JSON.stringify(body) });
