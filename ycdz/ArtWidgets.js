/*******************************
脚本名称:  解锁:ArtWidgets+memo+万能播放器+万能变音器(wenfei li的app全解锁

下载地址：https://is.gd/qOSH3r
软件版本：1.2.8
脚本作者：彭于晏
更新时间：2023-2-4
问题反馈：QQ+89996462
QQ会员群：779392027
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/www.40sishi.com url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/ArtWidgets.js

[mitm] 

hostname = www.40sishi.com

*******************************/

var body = $response.body.replace(/"startTime":null/g,'"startTime":1677686872')
.replace(/"state":\d/g,'"state":1')
.replace(/"forever":false/g,'"forever":true')
.replace(/"expireTime":null/g,'"expireTime":4567891235')
$done({ body });
