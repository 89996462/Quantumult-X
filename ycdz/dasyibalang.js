/*******************************

脚本功能：指尖时光+解锁VIP
下载地址：https://is.gd/L1FnmW
软件版本：6.3.70
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

^http[s]?:\/\/.*.dasyibalang.com\/v2\/User url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/dasyibalang.js

[mitm] 

hostname = .*.dasyibalang.com

*******************************/

var body = $response.body.replace(/"VIP":\d/g,'"VIP":1')
.replace(/"NickName":".*?"/g,'"NickName":"彭于晏破解"')
.replace(/"Photo":".*?"/g,'"Photo":"https://i.imgtg.com/2022/10/31/Rhzig.jpg"')
$done({ body });
