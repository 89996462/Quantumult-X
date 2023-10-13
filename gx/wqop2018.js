/*******************************

脚本功能：疯狂逆袭记——无限货币
下载地址：微信小程序
软件版本：9.9.9
脚本作者：彭于晏💞
更新时间：2023-10-5
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/res.wqop2018.com\/mp\/projects\/ffddds\/config\/1.0.0\/20230928110409_ConfigTalk.json url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/yx/wqop2018.js

[mitm] 

hostname = res.wqop2018.com

*******************************/

var body = $response.body.replace(/money":".*?"/g,'money":"9999999999999"')
$done({ body });
