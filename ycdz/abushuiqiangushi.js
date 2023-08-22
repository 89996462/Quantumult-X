/*******************************

脚本名称: 阿布睡前故事+解锁会员
下载地址：https://is.gd/6Q6lRw
软件版本：1.2.9
脚本作者：彭于晏💞
更新时间：2023-8-23
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

*******************************

[rewrite_local]

^http[s]?:\/\/tutugushiapi.tutuerge.com\/default.aspx url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/abushuiqiangushi.js

[mitm] 

hostname = tutugushiapi.tutuerge.com

*******************************/

var body = $response.body.replace(/"isvip":"false"/g,'"isvip":"true"')
.replace(/"PayVip":\d/g,'"PayVip":1')
.replace(/"PayVipExpDate":".*?"/g,'"PayVipExpDate":"2032/9/30"')
.replace(/"PayVipResidueSeconds":\d+/g,'"PayVipResidueSeconds":9999999999')
.replace(/"ExpirationTimestamp":\d+/g,'"ExpirationTimestamp":1964683735')
.replace(/"ExpirationTimestamp1":\d+/g,'"ExpirationTimestamp1":1961918431')
$done({ body });
