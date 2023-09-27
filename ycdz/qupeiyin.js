/*******************************

脚本名称: 日语趣配音——解锁VIP
下载地址：https://is.gd/7thING
软件版本：1.7.1
脚本作者：彭于晏💞
更新时间：2023-9-27
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/japaneselar.qupeiyin.com url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/qupeiyin.js

[mitm] 

hostname = japaneselar.qupeiyin.com

*******************************/

var body = $response.body.replace(/is_svip":"\d/g,'is_svip":"1')
.replace(/is_vip":"\d/g,'is_vip":"1')
.replace(/user_type":"\d+"/g,'user_type":"1"')
.replace(/is_evaluate":\d+/g,'is_evaluate":1')
.replace(/endtime":"0"/g,'endtime":"9999999999"')
.replace(/is_unlock":"1"/g,'is_unlock":"0"')
.replace(/new_user":1/g,'new_user":0')
.replace(/identity":"\d"/g,'identity":"1"')
.replace(/school_identity":"\d"/g,'school_identity":"1"')
.replace(/vip":"\d"/g,'vip":"1"')
.replace(/level":"\d"/g,'level":"1"')
.replace(/endtime":""/g,'endtime":"9999999999"')
.replace(/is_vip_avatar":\d/g,'is_vip_avatar":1')
.replace(/is_vip_month":"\d"/g,'is_vip_month":"1"')
.replace(/app_type":"\d"/g,'app_type":"2"')
.replace(/type":"\d"/g,'type":"2"')
.replace(/vip_text":".*?"/g,'vip_text":"SVIP会员已开通"')
.replace(/vip_button_text":".*?"/g,'vip_button_text":"已永久"')
$done({ body });
