/*******************************

脚本功能：故事飞船——不显示VIP——解锁视频
下载地址：https://is.gd/I7HIvT
软件版本：3.1.8
脚本作者：彭于晏💞
更新时间：2023-8-15
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

*******************************

[rewrite_local]

^http[s]?:\/\/storybook.ifenghui.com url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/ifenghui.js

[mitm] 

hostname = storybook.ifenghui.com

*******************************/

var body = $response.body.replace(/"isFree":0/g,'"isFree":1')
.replace(/"isLock":1/g,'"isLock":0')
$done({ body });
