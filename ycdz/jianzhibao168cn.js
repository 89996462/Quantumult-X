/*******************************

脚本功能：文案提取大师——解锁VIP
下载地址：https://t.cn/A6RLL9hR
软件版本：1.1.1
脚本作者：彭于晏💞
更新时间：2024-6-8
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/jianzhibao1688.cn url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/jianzhibao168cn.js

[mitm] 

hostname = jianzhibao1688.cn

*******************************/

var body = $response.body.replace(/vipTime":\w+/g,'vipTime":8888888888000')
.replace(/vipState":\d/g,'vipState":1')
.replace(/gender":\d/g,'gender":1')
.replace(/vipDay":\w+/g,'vipDay":9999')
$done({ body });
