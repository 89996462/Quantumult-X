/*******************************

脚本名称: 阅读记录——终身会员
脚本作者：彭于晏💞
下载地址：https://is.gd/vsJ5zH
软件版本：4.0.2
更新时间：2023年2月27日 下午5:57
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/app.yidiansz.com url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/ydjl.js

[mitm] 

hostname = app.yidiansz.com

*******************************/

var body = $response.body.replace(/member_type":\d/g,'member_type":4')
.replace(/end_date":".*?"/g,'end_date":"9999-01-04 13:02:15"')
.replace(/has_perpetual_vip":\d/g,'has_perpetual_vip":1')
.replace(/member_status":\d/g,'member_status":4')
.replace(/auto_renew_status":\d+/g,'auto_renew_status":2')
.replace(/is_publish":\d/g,'is_publish":1')
$done({ body });
