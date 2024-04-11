/******************************

脚本功能：今日水印拍照相机——解锁VIP
下载地址：https://t.cn/A6TCyiNC
软件版本：1.7
脚本作者：彭于晏💞
更新时间：2024-8-15
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/water-fst.yifanxinmei.com\/api\/guests\/login url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/yifanxinmei.js

[mitm] 

hostname = water-fst.yifanxinmei.com

*******************************/

var body = $response.body.replace(/vip_expire_date":\d+/g,'vip_expire_date":8888888888000')
.replace(/vip":\d/g,'vip":1')
$done({ body });
