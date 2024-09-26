/*******************************

脚本功能：悟饭乐享——解锁VIP
下载地址：https://is.gd/ozsPfY
软件版本：1.1.3
脚本作者：彭于晏💞
更新时间：2024-10—8
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/iosv2.cjapi.wufan88.com/user/ios_store_pay_edition/members_login/get_member_info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/cjapi.js

[mitm] 

hostname = iosv2.cjapi.wufan88.com

*******************************/

var objc = JSON.parse($response.body);
    objc = {"error":0,"data":{"error_msg":"","is_success":true,"user_info":{"is_vip":"9A0684792021D73BE42B71491469ADFA","clean_id":"39E71CC1F4A8F59725C62BE3AAAD424E","play_token":"F0ED6D6872782A1B0A67BBD1C3257C1618919DB32B116CF8F06D8E68815ED4A043AE5F26DE7B7F50872055FD71DD5635B07CC3EB0EEC3395553BE79B824CDCA3","is_expired":0,"expired_time":1800000000},"error_code":"","data_info":[]}}
$done({body : JSON.stringify(objc)});
