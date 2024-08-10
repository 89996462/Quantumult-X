/*******************************

脚本功能：新知卫星地图——解锁VIP
下载地址：https://t.cn/A68373cK
软件版本：4.3.1
脚本作者：彭于晏💞
更新时间：2024-10-11
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/a\.xinzhi\.space\/api\/User\/getUserByToken url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/xinzhi1.js

[mitm] 

hostname = a.xinzhi.space
*******************************/

var py996 = $response.body;
var obj =  JSON.parse(py996);

var vipInfo = {
  "vip_type":"永久会员",
  "vip_expire": "2999-01-01 00:00:00",
  "is_vip": 1,
  "vip_day": 99999
}

for (let key in obj.data) {
  if (vipInfo.hasOwnProperty(key)) {
     obj.data[key] = vipInfo[key]
  }
}


py996 = JSON.stringify(obj);
$done(py996);
