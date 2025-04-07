/******************************

脚本功能：星晴壁纸——解锁VIP
下载地址：https://is.gd/v1O843
软件版本：2.3.2
脚本作者：彭于晏💞
更新时间：2025-3-22
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/huyitool.jidiandian.cn\/tool-flow-service\/api\/payMember\/getPayMemberInfo url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/jidiandian.js

[mitm] 

hostname = huyitool.jidiandian.cn

*******************************/

var body = $response.body.replace(/member":\w+/g,'member":true')
.replace(/permanentMember":\w+/g,'permanentMember":true')
.replace(/memberDeadline":\w+/g,'memberDeadline":"2999-01-01"')
$done({ body });
