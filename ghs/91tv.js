/******************************

脚本功能：91视频(TF版)+解锁VIP
软件下载：https://app.glvr.xyz/i-WG4S5YY
软件版本：v666
脚本作者：彭于晏💞
更新时间：2022-10-9
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️

*******************************

[rewrite_local]

^https://(app|api).*.com/m_user/info url script-request-header https://raw.githubusercontent.com/89996462/Quantumult-X/main/ghs/91tv.js

[mitm] 

hostname = appapi.*.com,api.*.com


*******************************/



var modifiedHeaders = $request.headers;

modifiedHeaders['X-AUTH-TOKEN'] = 'eyJhbGciOiJIUzUxMiIsImlhdCI6MTY2NTMzODQwMywiZXhwIjoxNjgwODkwNDAzfQ.eyJpZCI6ODY0NDExNzl9.ccqW6kKRAtEP5ylxG-pL53bCZfOeKQpaRnypZ8Ez2rkfaTj_2ZKCbQwH8WTDJYYVvGZrTXfr_pW6JwCooj6yMg';

$done({headers : modifiedHeaders});
