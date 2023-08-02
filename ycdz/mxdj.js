/******************************

脚本功能：梦想短剧——解锁视频播放
下载地址：下架了
特别说明：点击直接观看即可
软件版本：14.0.2
脚本作者：彭于晏💞
更新时间：2023-8-2
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************

[rewrite_local]

^http[s]?:\/\/app.whjxjz.cn\/v1\/theater_parent\/detail url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/mxdj.js

[mitm] 

hostname = app.whjxjz.cn

*******************************/

var body = $response.body.replace(/checkpoint":\d+/g,'checkpoint":99999')
$done({ body });

