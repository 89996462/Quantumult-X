/*******************************

脚本名称: 中华日历——解锁VIP
脚本作者：彭于晏💞
下载地址：https://is.gd/ezlEtB
软件版本：3.6.5
更新时间：2023年2月26日 下午5:48
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

******************************* 

[rewrite_local]

^http[s]?:\/\/wnl28.jiemengjia.com\/api\/get_member_info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/zhrl.js

[mitm] 

hostname = wnl28.jiemengjia.com

*******************************/

var body = $response.body.replace(/.+/g,'{"code":"E00000000","msg":"success","data":{"is_vip":1,"end_time":"2099-12-24 01:15:45","member_type":5}}')
$done({ body });
