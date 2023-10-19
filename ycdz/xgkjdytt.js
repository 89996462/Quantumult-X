/*******************************

脚本功能：笔趣阁——解锁VIP
下载地址：https://is.gd/6KbLTr
软件版本：1.0.3
脚本作者：彭于晏💞
更新时间：2023-10-5
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/api.xgkjdytt.cn\/xly\/webcloud\/user\/login url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/xgkjdytt.js

[mitm] 

hostname = api.xgkjdytt.cn

*******************************/

var body = $response.body.replace(/"ischarge":"false"/g,'"ischarge":"true"')
.replace(/"free_minutes":"\d+"/g,'"free_minutes":"99999"')
$done({ body });

