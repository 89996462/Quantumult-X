/******************************

脚本功能：魔法消除鸭+解锁订阅
下载地址：https://is.gd/EqtxP0
软件版本：1.1.4
脚本作者：彭于晏💞
更新时间：2024-10-11
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************

[rewrite_local]

^https:\/\/clean\.tzdoc\.com\/api\/GetUser url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/clean.js

[mitm] 

hostname = clean.tzdoc.com


*******************************/


var objc = JSON.parse($response.body);

    objc = 
{
  "userID" : 10205990,
  "openWx" : true,
  "userName" : null,
  "state" : true,
  "vipDate" : "2099-09-18T00:00:00",
  "photo" : "https://thirdwx.qlogo.cn/mmopen/vi_32/kb23QfuvB6z1nZWCTUEMvdek6iaqAR3vjeRtgHUgl7QPgdHfPmuQSiabJseyfFUA0MGjG9wXWU6d7pxLViaIeNefg/132",
  "nowDate" : "2024-09-18T00:00:00",
  "nickName" : "彭于晏Crack",
  "freeNum" : 3
}     

$done({body : JSON.stringify(objc)});
