/******************************

脚本功能：相机罗盘——解锁VIP
下载地址：https://is.gd/XCHxIK
软件版本：1.1.0
脚本作者：彭于晏💞
更新时间：2025-4-22
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/zhenxiang\.net\.cn\/api\/compass\/getuserinfo url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/zhenxiang.js

[mitm] 

hostname = zhenxiang.net.cn



*******************************/

var body = $response.body.replace(/rvi":\d+/g,'rvi":1').replace(/vi":\d+/g,'vi":1')
$done({ body });
