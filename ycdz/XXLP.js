/******************************

脚本功能：小熊录屏——解锁VIP
特别说明：需要试用一次！！！
下载地址：https://is.gd/V8NNal
软件版本：1.7.6
脚本作者：彭于晏💞
更新时间：2023-2-28
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/donate-api.recorder.duapps.com url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/XXLP.js

[mitm] 

hostname = donate-api.recorder.duapps.com

*******************************/

var body = $response.body.replace(/"expiresDateMs":\d+/g,'"expiresDateMs":3670811527000')
$done({ body });
