/*******************************

脚本名称: 慧考智学+解锁题库
下载地址：https://is.gd/WPaeFb
软件版本：1.4.2
脚本作者：彭于晏💞
更新时间：2023-8-23
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

*******************************

[rewrite_local]

^http[s]?:\/\/proxyweb.huikao8.com url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/huikao8.js

[mitm] 

hostname = proxyweb.huikao8.com

*******************************/

var body = $response.body.replace(/"tryBuy":\d/g,'"tryBuy":2')
$done({ body });
