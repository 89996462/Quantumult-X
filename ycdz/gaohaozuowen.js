/******************************

脚本功能：稿好作文——解锁VIP
下载地址：https://is.gd/uqAiCK
软件版本：2.4.0
脚本作者：彭于晏💞
更新时间：2023-10-5
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/app\.gaohaozuowen\.com url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/gaohaozuowen.js

[mitm] 

hostname = app.gaohaozuowen.com

*******************************/


var ojbk = JSON.parse($response.body);

ojbk.data.is_vip = 1;
ojbk.data.cur_page_num = 999;
ojbk.data.other_remain_day = 999;
ojbk.data.remain_day = 999;
ojbk.data.other_is_vip = 1;

$done({body : JSON.stringify(ojbk)});
