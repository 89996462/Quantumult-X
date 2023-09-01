

/******************************

脚本功能：傲软抠图-专业图片+解锁VIP
下载地址：http://mtw.so/6bOXrj
软件版本：1.6.0
脚本作者：彭于晏
更新时间：2022-9-10
问题反馈：QQ+89996462
TG反馈群：https://t.me/plus8889
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************

[rewrite_local]

^https?:\/\/.*\.(aoscdn\.com|apsapp\.cn) url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/arqt.js

[mitm] 

hostname = *.aoscdn.com, *.apsapp.cn

*************************************/


var ojbk = JSON.parse($response.body);
const vipa = '/base/vip/client/authorizations';
const vipb = '/vips';


if ($request.url.indexOf(vipa) != -1){
  ojbk.data.is_activated = 1;
  ojbk.data.remain_days = 999999999;
  ojbk.data.expire_time = "2099-09-09 09:09:09";
  ojbk.data.expired_at = 4092600296;
  ojbk.data.license_type = "premium";
  ojbk.data.durations = 999999999;
  ojbk.data.vip_special = 1;
}

if ($request.url.indexOf(vipb) != -1){
  ojbk.data = {
    "group_expired_at" : 0,
    "is_tried" : 0,
    "max_devices" : 1,
    "period_type" : "active",
    "candy_expired_at" : 0,
    "pending" : 0,
    "remained_seconds" : 0,
    "limit" : 0,
    "expired_at" : 4092600296,
    "candy" : 0,
    "license_type" : "premium",
    "quota" : 999999999,
    "status" : 1,
    "vip_special" : 1,
    "coin" : 100
  };
}

$done({body : JSON.stringify(ojbk)});
