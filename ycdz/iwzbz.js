/*******************************

脚本功能：问真排版八字——解锁VIP
下载地址：https://t.cn/A60rFcfv
软件版本：1.2.2
脚本作者：彭于晏💞
更新时间：2024-10—8
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/bzpp2.iwzbz.com/api/v1.1/user/getvipinfo url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/iwzbz.js

[mitm] 

hostname = bzpp2.iwzbz.com

*******************************/

var objc = JSON.parse($response.body);
    objc = {"code":-1,"data":{"vipTipsType":0,"vipLevel":3,"adtype":0,"expires":"2099-12-31 23:59:59"},"message":"","validateKey":"","isSuccess":true};
$done({body : JSON.stringify(objc)});
