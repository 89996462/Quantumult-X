/*************************************

项目名称：时光手帐——解锁VIP
下载地址：https://is.gd/igxBsZ
软件版本：6.1.5
脚本作者：彭于晏💞
更新时间：2023-8-14
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

**************************************

[rewrite_local]
^https:\/\/api\.shouzhang\.com\/memcenterlk\/member\/firstpage\.do url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/sgsz.js

[mitm]
hostname = api.shouzhang.com

*************************************/


var body = JSON.parse($response.body);

body.data.vip = true;
body.data.grade.gradeName = "时光守护者";
body.data.grade.img = "http://npic.shouzhang.com/grade_sign_9.png";
body.data.grade.userNum = 1;

$done({ body: JSON.stringify(body) });
