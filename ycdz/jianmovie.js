/*******************************

脚本名称:  简影——(解锁会员)v6.9.0
下载地址:https://mxnzp.com/sl/kkL7
脚本作者：彭于晏💞
更新时间：2023年3月7日 下午11:36
问题反馈：QQ+89996462
QQ会员群：779392027
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/api.jianmovie.com url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/jianmovie.js

[mitm] 

hostname = api.jianmovie.com

*******************************/

var body = $response.body.replace(/"vip_type":\d/g,'"vip_type":1')
.replace(/"is_vip":\d/g,'"is_vip":1')
.replace(/"vip_expire_time":\d+/g,'"vip_expire_time":4567891235')
.replace(/"balance":\d+/g,'"balance":99999')
.replace(/"success":\d/g,'"success":1')
$done({ body });
