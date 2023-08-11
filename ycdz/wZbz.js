/******************************

脚本名称: 问真八字——解锁钻石会员权限
下载地址：https://is.gd/Ez7qdW
软件版本：3.0.1
脚本作者：彭于晏💞
更新时间：2023-8-9
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

*******************************


[rewrite_local]

^https:\/\/bzpp2\.iwzbz\.com\/api\/v1\.1\/user\/getvipinfo url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/wZbz.js

[mitm] 

hostname = bzpp2.iwzbz.com


***********************************/


var ojbk={"code":-1,"data":{"vipTipsType":0,"vipLevel":3,"adtype":0,"expires":"2099-12-31 23:59:59"},"message":"","validateKey":"","isSuccess":true};
$done({body:JSON.stringify(ojbk)});
