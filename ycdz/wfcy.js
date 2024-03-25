/******************************

脚本功能：悟饭触悦——解锁订阅
下载地址：https://is.gd/ZkK73d
软件版本：1.0.4
脚本作者：彭于晏💞
更新时间：2023-8-15
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

http:\/\/iosv2\.cjapi\.5fun\.com\/user\/ios_store_pay_edition\/members_login\/get_member_info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/wfcy.js

[mitm] 

hostname = iosv2.cjapi.5fun.com


*******************************/


var objc = JSON.parse($response.body);

    objc = {
  "error" : 0,
  "data" : {
    "user_info" : {
      "reg_time" : "1666761382",
      "expired_time" : 0,
      "member_state" : 0,
      "is_vip" : "9A0684792021D73BE42B71491469ADFA"
    },
    "error_code" : "",
    "data_info" : [

    ],
    "is_success" : true,
    "error_msg" : ""
  }
}

$done({body : JSON.stringify(objc)});
