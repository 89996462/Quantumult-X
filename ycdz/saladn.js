/*******************************

脚本名称: 变美相机——解锁VIP
下载地址：https://is.gd/epvxyB
软件版本：1.0.2
脚本作者：彭于晏💞
更新时间：2023-9-28
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/writer.saladn.xyz\/dawn url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/saladn.js

[mitm] 

hostname = writer.saladn.xyz

*******************************/

var objc = JSON.parse($response.body);
    objc = {
  "status" : 1,
  "expires_date" : "9999-09-24 15:54:56"
}
$done({body : JSON.stringify(objc)});
