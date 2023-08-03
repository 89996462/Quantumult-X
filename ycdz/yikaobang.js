/*******************************

脚本功能：医考帮一课程全解锁
下载地址：https://is.gd/M7kLxz
软件版本：3.4.9.2
脚本作者：彭于晏💞
更新时间：2023—8-3
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/api.yikaobang.com.cn\/index.php\/curriculum\/main\/detail url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/yikaobang.js

[mitm] 

hostname = api.yikaobang.com.cn

*******************************/

var body = $response.body.replace(/is_free_watch":"\d+"/g,'is_free_watch":"1"')
$done({ body });
