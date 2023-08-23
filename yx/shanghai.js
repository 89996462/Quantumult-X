/*******************************

脚本名称: 山海经消消乐——观看视频无限奖励
下载地址：微信小程序
软件版本：9.9.9
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

^http[s]?:\/\/qy-mystalk.oss-cn-shanghai.aliyuncs.com url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/yx/shanghai.js

[mitm] 

hostname = qy-mystalk.oss-cn-shanghai.aliyuncs.com

*******************************/

var body = $response.body.replace(/purchaseTime":\d+/g,'purchaseTime":99999')
.replace(/count":\d+/g,'count":88888')
$done({ body });
