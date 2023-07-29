/*******************************

脚本功能：蓝基因——解锁视频
下载地址：https://is.gd/7z7aBt
软件版本：1.0.16
脚本作者：彭于晏💞
更新时间：2023-7-28
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/.*\.lanjiyin\.com\.cn url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/lanjiyin.js


[mitm]
hostname = *.lanjiyin.com.cn

*******************************/

var body = $response.body.replace(/is_unlock":"0"/g,'is_unlock":"1"')
.replace(/is_free":"\d"/g,'is_free":"1"')
.replace(/is_show":"\d"/g,'is_show":"1"')
.replace(/is_see":"\d+"/g,'is_see":"1"')
$done({ body });
