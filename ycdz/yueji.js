/******************************

脚本功能：阅己——解锁VIP
下载地址：https://is.gd/eA6Wtn
软件版本：1.0.4
脚本作者：彭于晏💞
更新时间：2024-3-20
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

https://great.starsdsea.com:12502/zx/home/user/info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/yueji.js

[mitm] 

hostname = great.starsdsea.com:12502

*******************************/

let obj = JSON.parse($response.body);
obj.data.isVip = true;
obj.data.userEndTime = 4092595200001;
obj.data.userPoints = 9999;
$done({
    body: JSON.stringify(obj)
});
