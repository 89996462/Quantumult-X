/******************************

脚本功能：乐刷短剧——解锁VIP
下载地址：https://is.gd/8Jyeww
软件版本：1.1.1
脚本作者：彭于晏💞
更新时间：2023-9-13
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

http:\/\/akdj\.lunlunkj\.vip\/api\/v1\/user\/account\/info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/lunlunkj.js

[mitm] 

hostname = akdj.lunlunkj.vip


*******************************/

var objc = JSON.parse($response.body);

    objc = 
{
  "msg": "操作成功！",
  "code": 0,
  "data": {
    "id": "1220255",
    "mobile": "",
    "nickName": "彭于晏解锁",
    "avatar": "https://thirdwx.qlogo.cn/mmopen/vi_32/Z1LFYRhfXAsBic1ib1icjzHg53JHh2xtUMM23GhBhGFflTxXyR3CMHibAfibxH4oaat0szUCoIGkmFmISLa5ib3Zqqfg/132",
    "sex": 1,
    "birthday": "1989-10-10",
    "points": null,
    "account": {
      "id": "1220255",
      "redChange": 24.00,
      "smallChange": 128.00,
      "cashChange": 0.00
    },
    "vipInfo": {
      "id": "1220255",
      "startTime": "2023-09-13 10:19:32",
      "endTime": "9999-09-14 10:19:32",
      "vipType": 1,
      "updateTime": "2023-09-13 10:19:32",
      "state": 0,
      "leftDays": 0
    },
    "ucLevel": 1,
    "createTime": "Wed Sep 13 10:15:12 CST 2023",
    "preId": null,
    "auctionNum": null,
    "couponNum": null,
    "giftOrderNum": null,
    "mallOrderNum": null,
    "adviceNum": null,
    "vipEnabled": true,
    "vipBanner": "http://file.meetboxs.com/common/bg_fen_vip.png"
  },
  "success": true
}

$done({body : JSON.stringify(objc)});
