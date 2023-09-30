/******************************

脚本功能：13个APP解锁全家桶
下载地址：https://t.cn/A6Ouq9uD
软件版本：9.9.9
脚本作者：彭于晏💞
更新时间：2023-10-1
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/(appss|standard)\.(rhinox.*|linhongshi)\.com\/.+\/account\/getAccountInfo url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/13app.js

[mitm]

hostname = *.rhinox*.com, appss.linhongshi.com

*************************************/


var py996 = JSON.parse($response.body);
const ua = $request.headers['User-Agent'] || $request.headers['user-agent'];

if (ua.indexOf('bnchangtu') != -1) {
  py996.result["type"] = "FOREVER";
} else { py996.result["type"] = "VIP"; }
py996.result["vipGroupInfos"] = [      {        "groupType" : "TYPE_ONE",        "vipType" : "VIP",        "autoPay" : "YES"      }    ];
py996.result["vipExpireTime"] = "2099-09-09 09:09:09";
py996.result["vipExpireDays"] = 999999;

$done({body : JSON.stringify(py996)});
