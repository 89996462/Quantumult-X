/******************************

脚本功能：超神小队——解锁金币
下载地址：#微信小程序://超神小队
软件版本：6666
脚本作者：彭于晏💞
更新时间：2022-11-16
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/gjyklslb\.mantianfei\.net url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/yx/csxd.js

[mitm]

hostname = gjyklslb.mantianfei.net

****************************************/


body = $response.body.replace(/\"num":\d+/g, '\"num" :9999999')

$done({body});
