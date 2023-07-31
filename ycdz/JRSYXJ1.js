/******************************

脚本功能：今日水印相机——解锁会员
下载地址：https://is.gd/0ueVsQ
软件版本：3.0.35
脚本作者：彭于晏💞
更新时间：2023—7-31
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/.+\/next/app/remove/watermark/counts url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/JRSYXJ1.js

[mitm] 

hostname = 47.112.75.234,today.xhey.top



*******************************/

var objc = JSON.parse($response.body);

    objc = 
{"result":"bncdzrxa+Dq49i7NxArtSeZtLpZ7cxsOynuCD5Co47mgXj5V8wuwHKrBZk6XMBm14RbGudMdnG9/bN5HYEawsXsCvH1uPZ0Jc36U0ZeSQ7s="}


$done({body : JSON.stringify(objc)});
