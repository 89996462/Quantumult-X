/******************************

脚本功能：91视频(TF版)+解锁VIP
软件下载：https://app.wenfr.xyz/i-3YRR79
软件版本：v666
脚本作者：彭于晏
更新时间：2022-9-19
问题反馈：QQ+89996462
QQ会员群：779392027
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************

[rewrite_local]

^https:\/\/api\.jtshuzhiwa\.com\/m_user\/info url script-request-header https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/91tv.js

[mitm] 

hostname = api.jtshuzhiwa.com


*******************************/

var modifiedHeaders = $request.headers;

modifiedHeaders['X-AUTH-TOKEN'] = 'eyJhbGciOiJIUzUxMiIsImlhdCI6MTY2MzMzOTQ5OSwiZXhwIjoxNjc4ODkxNDk5fQ.eyJpZCI6OTQ5Mjk4NDV9.lCJAAK2ja6tw0mX6F9Tcxg1AyA4fC7y1QX0QNANWiqvhe89VEM68jeVrIwaqcx-ApjWJZ9ncxH3Gkyn090t_ww';

$done({headers : modifiedHeaders});
