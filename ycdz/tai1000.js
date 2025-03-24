/******************************

脚本功能：妙看——解锁VIP
下载地址：https://is.gd/hp0QMD
软件版本：1.6.3
脚本作者：彭于晏💞
更新时间：2025-10-16
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]

^http[s]?:\/\/api.tai1000.com url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/tai1000.js

[mitm] 

hostname = api.tai1000.com

*******************************/

var body = $response.body.replace(/isVip": \w+/g,'isVip": true')
.replace(/VipTime": ".*?"/g,'VipTime": "365"')
.replace(/unlockCount": \d+/g,'unlockCount": 999999')
.replace(/preloadAdType": \d+/g,'preloadAdType": 0')
.replace(/showAd": \w+/g,'showAd": false')
$done({ body });
