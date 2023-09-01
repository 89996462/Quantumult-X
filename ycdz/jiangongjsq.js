/******************************

脚本名称: 建工计算器——解锁VIP
下载地址：https://is.gd/luD7ph
软件版本：3.8.5
脚本作者：彭于晏💞
更新时间：2023-9-2
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

*******************************

[rewrite_local]

^https:\/\/calc\.kuaicad\.com\/authority\/verify_vip\? url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/jiangongjsq.js

[mitm]

hostname = calc.kuaicad.com

********************************/

var originalResponse = $response.body;

var lovebaby = JSON.parse(originalResponse);
lovebaby.data.type = 3;
lovebaby.data.expiresTime = "2099-08-03 16:11:22";
lovebaby.data.isExpires = false;
var modifiedResponseString = JSON.stringify(lovebaby);
$done({
  body: modifiedResponseString
});
