/******************************

脚本功能：番薯小说——解锁VIP
下载地址：https://t.cn/A6CX524j
软件版本：2.2.13
脚本作者：彭于晏💞
更新时间：2023-3-5
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/ggs\.manmeng168\.com url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/fanshuxiaoshuo.js

[mitm]

hostname = ggs.manmeng168.com

*************************************/


body = $response.body.replace(/\"vip":\w+/g, '\"vip":true').replace(/\"vip_end_time":\d+/g, '\"vip_end_time":4092599349000');

$done({body});
