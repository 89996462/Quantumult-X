/*******************************

脚本名称: 哆咪星球—无限刷礼物
下载地址：https://is.gd/GuYfjR
脚本作者：彭于晏💞
更新时间：2023年8月13日
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

*******************************
[rewrite_local]

^http[s]?:\/\/voicechat.enlargemagic.com url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/enlargemagic.js

[mitm] 

hostname = voicechat.enlargemagic.com

*******************************/

var body = $response.body.replace(/coin":\d+/g,'coin":999999')
.replace(/score":\d+/g,'score":999999')
.replace(/deci_score":\d+/g,'deci_score":999999')
.replace(/code":\d/g,'code":0')
$done({ body });
