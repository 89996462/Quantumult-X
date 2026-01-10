/******************************

脚本功能：一卟抠图
软件版本：v1.6.0
脚本作者：彭于晏💞
更新时间：2026-1-6

TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996

使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************

[rewrite_local]

^https?:\/\/ff\.mofangzhice\.com\/api\/client\/info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/mofangzhice.js

[mitm] 

hostname = ff.mofangzhice.com

*******************************/

let body = $response.body;
body = body.replace(/"vip":[^,}]*/g, `"vip":{
  "forever": 1,
  "plan_id": 9999,
  "func_quota": 999999,
  "actived_at": "2026-01-06 00:00:00",
  "latest_ip": "192.168.1.1",
  "func_times": 999999,
  "trial_info": "",
  "isExpired": 0,
  "start_time": "2026-01-06 00:00:00",
  "viptype": 4,
  "is_vip_plan": 1,
  "ios_product_id": "com.mofang.permanent",
  "vipname": "永久会员",
  "expired_at": "2999-12-31 23:59:59",
  "now_date": "2026-01-06 00:00:00",
  "is_trial": 0,
  "status": 1
}`);

$done({body});
