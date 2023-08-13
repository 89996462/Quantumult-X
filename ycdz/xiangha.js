/*******************************

脚本功能：烘焙小屋——解锁VIP
下载地址：https://is.gd/zIxrqr
软件版本：3.9.5
脚本作者：彭于晏💞
更新时间：2023-8-14
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

*******************************

[rewrite_local]

^http[s]?:\/\/apiios_dq.xiangha.com url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/xiangha.js

[mitm] 

hostname = apiios_dq.xiangha.com

*******************************/

var body = $response.body.replace(/"is_vip":1/g,'"is_vip":2')
.replace(/"is_open_vip":0/g,'"is_open_vip":1')
.replace(/"isShow":"1"/g,'"isShow":"2"')
$done({ body });
