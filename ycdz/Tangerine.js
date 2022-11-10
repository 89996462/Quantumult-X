/******************************

脚本功能：Tangerine——解锁订阅
下载地址：https://is.gd/VRQNnz
软件版本：3.12.0
脚本作者：彭于晏💞
更新时间：2022-11-10
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

https://api.revenuecat.com/v1/(receipts|subscribers)/* url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/Tangerine.js

[mitm] 

hostname = api.revenuecat.com

*******************************/


var body = $response.body;
var obj = JSON.parse(body);

obj.subscriber.entitlements = {
      "Premium":{
              "expires_date":"9999-05-26T05:05:04Z",
              "product_identifier":"PremiumMonthly",
              "purchase_date":"2022-04-09T05:05:04Z"
      }
  },
  
obj.subscriber.subscriptions ={
      "PremiumMonthly":{
              "billing_issues_detected_at":null,
              "expires_date":"9999-05-26T05:05:04Z",
              "is_sandbox":false,
              "original_purchase_date":"2022-04-09T05:05:04Z",
              "period_type":"normal",
              "purchase_date":"2023-04-09T05:05:04Z",
              "store":"app_store",
              "unsubscribe_detected_at":null
      }
  }

body = JSON.stringify(obj);
$done({body});

