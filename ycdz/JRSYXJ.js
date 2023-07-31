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

^http[s]?:\/\/.+\/next\/app\/vip\/info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/JRSYXJ.js

[mitm] 

hostname = 47.112.75.234,today.xhey.top



*******************************/

var objc = JSON.parse($response.body);

    objc = 
{
  "result": "bncdzrxa+Dq49i7NxArtSeZtLpZ7cxsOynuCD5Co47mgXj5V8wuwHKrBZk6XMBm14RbGudMdnG9/bN5HYEawsYzr4IJtgtQeWEXeLX+5qSlN9uDunZC4Il0PpaxdeEaYm4TemFHyNAcFl6A+0LgQv/jmaZGldDdypZEYBC8Xm45u8HSvDEPsIoPk8CXEWpXBLJvSfsZ+3ryV87nwgLjZGjR301rTrcvAmuC8gr3p3tU2KOawe5xnH9sNYfeg2Vk1wwtltF6LObXU+CNxqqDTj4EKvbOxGrqB4R/ZZ8wNs/94joVG1o3cf5hydFNgulEN"
}


$done({body : JSON.stringify(objc)});
