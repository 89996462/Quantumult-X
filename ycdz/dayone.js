/*******************************

脚本功能：Day One 日记＋笔记——解锁订阅
下载地址：https://is.gd/mt4BxG
软件版本：7.18.2
脚本作者：彭于晏💞
更新时间：2022-10-22
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

https://dayone.app/api/v2/users/(receipt|account-status) url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/dayone.js

[mitm] 

hostname = dayone.app

*******************************/

const path1 = "/account-status";
const path2 = "/receipt";

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
obj = {
  "expirationDate": 1866888955000,
  "startDate": 1582805832000,
  "subscriptionPlan": "com.bloombuilt.dayoneios.subscription.premium.yearly_discounted_trial",
  "lastRenewalDate": 1582805831000,
  "subscriptionName": "premium",
  "bundleReason": "purchase",
  "cancellationDate": 0
    }
}
if ($request.url.indexOf(path2) != -1){
obj={
  "bundle": {
    "bundleName": "premium",
    "features": [{
      "name": "imagesPerEntry",
      "limit": 30,
      "canUpgrade": false
    }, {
      "name": "journalLimit",
      "limit": 100,
      "canUpgrade": false
    }, {
      "name": "audioPerEntry",
      "limit": 10,
      "canUpgrade": false
    }, {
      "name": "sync",
      "limit": null,
      "canUpgrade": false
    }, {
      "name": "backup",
      "limit": null,
      "canUpgrade": false
    }, {
      "name": "printingDiscount",
      "limit": null,
      "canUpgrade": false
    }, {
      "name": "prioritySupport",
      "limit": null,
      "canUpgrade": false
    }, {
      "name": "drawingsPerEntry",
      "limit": 30,
      "canUpgrade": false
    }, {
      "name": "scanToPDF",
      "limit": 30,
      "canUpgrade": false
    }, {
      "name": "videosPerEntry",
      "limit": 30,
      "canUpgrade": false
    }, {
      "name": "journalViaSMS",
      "limit": null,
      "canUpgrade": false
    }],
    "featuresFull": [{
      "name": "journalLimit",
      "limit": 100,
      "canUpgrade": false
    }, {
      "name": "backup",
      "enabled": true,
      "canUpgrade": false
    }, {
      "name": "sync",
      "enabled": true,
      "canUpgrade": false
    }, {
      "name": "discountedSubscription",
      "enabled": false,
      "canUpgrade": false
    }, {
      "name": "printingDiscount",
      "enabled": true,
      "canUpgrade": false
    }, {
      "name": "prioritySupport",
      "enabled": true,
      "canUpgrade": false
    }, {
      "name": "scanToPDF",
      "enabled": true,
      "canUpgrade": false
    }, {
      "name": "attachmentsPerEntry",
      "limit": 30,
      "canUpgrade": false
    }, {
      "name": "journalViaSMS",
      "enabled": true,
      "canUpgrade": false
    }, {
      "name": "canAttachPhoto",
      "enabled": true,
      "canUpgrade": false
    }, {
      "name": "canAttachVideo",
      "enabled": true,
      "canUpgrade": false
    }, {
      "name": "canAttachAudio",
      "enabled": true,
      "canUpgrade": false
    }, {
      "name": "canAttachDrawing",
      "enabled": true,
      "canUpgrade": false
    }, {
      "name": "canAttachPDF",
      "enabled": true,
      "canUpgrade": false
    }, {
      "name": "instagram",
      "enabled": true,
      "canUpgrade": false
    }, {
      "name": "ifttt",
      "enabled": true,
      "canUpgrade": false
    }, {
      "name": "colors",
      "enabled": true,
      "canUpgrade": false
    }, {
      "name": "emailToJournal",
      "enabled": true,
      "canUpgrade": false
    }, {
      "name": "appIcons",
      "enabled": true,
      "canUpgrade": false
    }, {
      "name": "moonPhase",
      "enabled": true,
      "canUpgrade": false
    }, {
      "name": "foursquareNearbyVenues",
      "enabled": true,
      "canUpgrade": false
    }]
  },
  "reason": "purchase"
}
}
$done({body: JSON.stringify(obj)});
