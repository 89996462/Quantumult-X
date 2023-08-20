/*******************************

脚本功能：网易蜗牛读书+解锁VIP
下载地址：https://is.gd/OWWJ7o
软件版本：1.9.69
脚本作者：彭于晏💞
更新时间：2023-8-21
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

*******************************

[rewrite_local]

^https?:\/\/p\.du\.163\.com\/gain\/readtime\/info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/yywnds.js

[mitm]

hostname = p.du.163.com

*******************************/

var body=$response.body;

ojbk = body.replace(/tradeEndTime\":\d+/g,'tradeEndTime":4092599349000');

$done(ojbk);
