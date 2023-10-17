/******************************

脚本功能：疯狂背单词+解锁VIP
下载地址：https://is.gd/HMnW3n
软件版本：1.32
脚本作者：彭于晏💞
更新时间：2023-10-11
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/api.fengkuangapp.com\/account\/grant\/detail\/info\/ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/fengkuangapp.js

[mitm] 

hostname = api.fengkuangapp.com

*******************************/

var body = JSON.parse($response.body);

body.data.vip_info = {
      "auto_buy": 1,
      "status": 1,
      "finish_date": "9999-10-18 16:56:11",
      "finish_date_ios": "2023.10.18",
      "pre_date": "2023-10-15 16:56:12",
      "buy_status": 1,
      "vip_type": 2,
      "last_buy_date": "2023-10-15 16:56:12",
      "pre_status": 0,
      "days": 999999
    }
$done({ body: JSON.stringify(body) });

