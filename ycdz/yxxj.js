/*******************************

脚本功能：隐形相机
下载地址：https://reurl.cc/bdjzV3
脚本作者：彭于晏💞
更新时间：2026-5—28
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************/

[rewrite_local]

^https://www.ohaiyocam.com/sumcam/me/profile url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/yxxj.js

[mitm] 

hostname = www.ohaiyocam.com

*******************************/

var body = $response.body.replace(/vipexpirationtime":"\d+"/g,'vipexpirationtime":"253383394679"')
$done({ body });
