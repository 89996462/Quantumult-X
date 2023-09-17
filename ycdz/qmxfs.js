/*******************************

脚本名称: 全民幸福社一解锁播放权限
下载地址：https://is.gd/uqxzXb
软件版本：5.4.1
脚本作者：彭于晏💞
更新时间：2023-9-17
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/api.qmxfs.com url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/qmxfs.js

[mitm] 

hostname = api.qmxfs.com

*******************************/

var body = $response.body.replace(/isDowload":\d/g,'isDowload":1')
.replace(/isWatchable":\d+/g,'isWatchable":1')
.replace(/isBuy":\d/g,'isBuy":1')
$done({ body });
