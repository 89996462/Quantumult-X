/******************************

脚本功能：重生少年——无限抽奖金钱
下载地址：微信小程序
软件版本：9.9.9
脚本作者：彭于晏💞
更新时间：2023-10-1
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/oss\.renyouwangluo\.cn\/cssn_wx\/json\/LotteryConfig\.json url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/yx/renyouwangluo.js

[mitm] 

hostname = oss.renyouwangluo.cn
LotteryConfig.json



*******************************/

var objc = JSON.parse($response.body);

    objc = 
[
  {"id":1,"money": 99999999999,"pro":1},
  {"id":2,"money": 99999999999,"pro":15},
  {"id":3,"money": 99999999999,"pro":9},
  {"id":4,"money": 99999999999,"pro":50},
  {"id":5,"money": 99999999999,"pro":20},
  {"id":6,"money": 99999999999,"pro":3},
  {"id":7,"money": 99999999999,"pro":13},
  {"id":8,"money": 99999999999,"pro":40},
  {"id":9,"money": 99999999999,"pro":8},
  {"id":10,"money": 99999999999,"pro":50},
  {"id":11,"money": 99999999999,"pro":30},
  {"id":12,"money": 99999999999,"pro":10}
]

$done({body : JSON.stringify(objc)});
