/******************************

脚本名称: 牛津高阶词典第十版——解锁VIP
下载地址：https://is.gd/FfzLnu
脚本作者：彭于晏💞
更新时间：2023年8月13日
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

*******************************

[rewrite_local]

^https:\/\/oxfordx\.cp\.com\.cn\/api\/pay\/apple_notify url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/ljgjcd.js


^https:\/\/oxadmin\.cp\.com\.cn\/api\/hot\/index url reject-dict



^https:\/\/oxadmin\.cp\.com\.cn\/api\/advertise\/banner url reject-dict


[mitm]

hostname = oxfordx.cp.com.cn

*******************************/


var body = JSON.parse($response.body);

body.data.user.is_vip = 1;
body.data.user.expire_date = "9999-12-31 04:01:05";

$done({ body: JSON.stringify(body) });
