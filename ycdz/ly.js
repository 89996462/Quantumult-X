/*******************************

脚本功能：来音智能陪练——解锁VIP
下载地址：https://is.gd/eDF5S7
软件版本：3.4.2
脚本作者：彭于晏💞
更新时间：2023-10-5
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/(partner-ai-api.quthing.com|partner-ai-api.quthing.com)(/ai/vip/state|/student/info/h5) url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/ly.js

[mitm] 

hostname = (partner-ai-api.quthing.com|partner-ai-api.quthing.com)

*******************************/

var body = $response.body;
var url = $request.url;

if (url.indexOf("/ai/vip/state") != -1) {
  body = JSON.stringify({
  "data" : {
    "dayCardBalance" : 0,
    "nextAutoRenewTime" : 0,
    "serverTime" : 1696914284937,
    "goodsId" : 53,
    "seniorVip" : false,
    "showText" : "2114.10.02到期",
    "validVip" : true,
    "expireTime" : 4677560840113,
    "vipCount" : 186391,
    "autoRenew" : false,
    "lastBuySkuName" : "partnertrainingai_one_year_vip"
  }
}
);
}

if (url.indexOf("/student/info/h5") != -1) {
  body = JSON.stringify({"data":{"studentId":"b00tqs","mobile":"18899885566","name":"彭于晏解锁","avatar":"https://cdn.quthing.com/290723a6-9eb8-4926-983f-d5fadb768740","gender":0,"instrumentId":"oj2p1z","instrumentName":"钢琴","learnTimes":"0","complete":true,"frequency":0,"tourist":false,"platformTeacher":false,"kol":false,"canReceiveVipDays":0,"secure":false,"auditor":false,"vipInfo":{"validVip":true,"seniorVip":true,"expireTime":4567891456000,"goodsId":53,"vipCount":186390,"serverTime":1696913719272,"autoRenew":false,"showText":"2114.10.02到期","lastBuySkuName":"partnertrainingai_one_year_vip","nextAutoRenewTime":0,"dayCardBalance":0}}});
}

$done({ body });
