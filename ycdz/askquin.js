/******************************

脚本功能：Quin——解锁VIP
下载地址：https://is.gd/GILWdw
软件版本：103.2.1
脚本作者：彭于晏💞
更新时间：2025-3-22
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/askquin\.cn\/api\/aigc\/quota-usage url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/askquin.js

[mitm] 

hostname = askquin.cn


*******************************/

var objc = JSON.parse($response.body);
    objc = {
  "login": false,
  "success": true,
  "error": false,
  "errorCode": 0,
  "errorMessage": "",
  "data": {
    "subscription": {
      "subscriptionType": "one-month-max",
      "nextBillingAt": "9999-09-09T14:39:15.000Z",
      "paymentType": "apple-app-store",
      "plan": "max",
      "period": {
        "count": 9999,
        "unit": "year"
      },
      "expiredAt": "9999-09-09T14:39:15.000Z",
      "renewAt": "9999-09-09T14:39:15.000Z"
    },
    "token": {
      "hasToken": true,
      "outputUsedTokens": 0,
      "remainingTokens": 40000
    },
    "count": {
      "dailyReadCount": 0,
      "rewardReadCount": 0,
      "remainingReadCount": 0,
      "totalRewardReadCount": 0,
      "dailyFreeReadCount": 0,
      "remainingFreeReadCount": 20,
      "totalFreeReadCount": 20,
      "singleFreeReadCount": 0,
      "imageGenerationTotalCount": 0,
      "imageGenerationUsedCount": 0
    },
    "countV2": [{
      "type": "vip",
      "usedCount": 0,
      "totalCount": 9999
    }, {
      "type": "vip",
      "usedCount": 0,
      "totalCount": 9999
    }, {
      "type": "vip",
      "usedCount": 0,
      "totalCount": 9999
    }],
    "quinCardCount": [{
      "type": "vip",
      "usedCount": 0,
      "totalCount": 9999
    }, {
      "type": "vip",
      "usedCount": 0,
      "totalCount": 9999
    }, {
      "type": "vip",
      "usedCount": 0,
      "totalCount": 9999
    }],
    "futureTarotCount": [{
      "type": "vip",
      "usedCount": 0,
      "totalCount": 9999
    }, {
      "type": "vip",
      "usedCount": 0,
      "totalCount": 9999
    }],
    "payment": {
      "hasDailyHalfPrice": false,
      "discount": 0.5
    },
    "code": {}
  }
}
$done({body : JSON.stringify(objc)});

