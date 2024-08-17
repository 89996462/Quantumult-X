/*******************************

脚本功能：布丁锁屏-DIY锁屏组件+解锁订阅
下载地址：https://is.gd/y0cmbV
软件版本：2.5.9
脚本作者：彭于晏💞
更新时间：2024-10-11
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/screen-lock.sm-check.com\/userApi\/saveUser url script-response-body raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/budingsuoping.js

[mitm] 

hostname = screen-lock.sm-check.com、lxy.51wnl-cq.com

*******************************/

var body = $response.body.replace(/vipStatus":\d/g,'vipStatus":1')
.replace(/endTime":\w+/g,'endTime":2099')
.replace(/newVipStatus":\d/g,'newVipStatus":1')
.replace(/expireDate":\w+/g,'expireDate":2099')
.replace(/freeFlag":\d/g,'freeFlag":1')
.replace(/vipStartTime":\w+/g,'vipStartTime":8888888888000')
.replace(/vipEndTime":\w+/g,'vipEndTime":8888888888000')
.replace(/musicFlag":\d/g,'musicFlag":1')
.replace(/vipNickName":\w+/g,'vipNickName":2099')
$done({ body });

