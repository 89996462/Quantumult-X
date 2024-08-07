/*******************************

脚本功能：电子合同易签约——解锁VIP
下载地址：https://t.cn/A68QnWNj
软件版本：1.1
脚本作者：彭于晏💞
更新时间：2024-10-11
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/iosdzhtyqy.sanwubeixin.cn\/ct\/user\/info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/sanwubeixin11.js

[mitm] 

hostname = iosdzhtyqy.sanwubeixin.cn

*******************************/

var body = $response.body.replace(/isVip":\w+/g,'isVip":true')
.replace(/vip_time":\d+/g,'vip_time":4092599349')
.replace(/vip_type":\d/g,'vip_type":1')
.replace(/vip_money":\d+/g,'vip_money":8888')
.replace(/money":\d+/g,'money":8888')
$done({ body });
