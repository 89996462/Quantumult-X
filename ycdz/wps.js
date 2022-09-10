/******************************
脚本功能：WPS Office+解锁VIP
软件版本：11.26.0
下载地址：http://mtw.so/6jljWQ
脚本作者：彭于晏
更新时间：2022-9-9
问题反馈：QQ+89996462
TG反馈群：https://t.me/plus8889
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************

[rewrite_local]
^https?:\/\/account\.wps\.cn\/api\/users url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/wps.js

[mitm]
hostname = account.wps.cn

**************************/

var body = JSON.parse($response.body);
var obj = {
  exp: 0,
  level: 3,
  privilege: [
    { spid: "data_recover", times: 0, expire_time: 4102415999 },
    { spid: "ocr", times: 0, expire_time: 4102415999 },
    { spid: "pdf2doc", times: 0, expire_time: 4102415999 },
    { spid: "pdf_merge", times: 0, expire_time: 4102415999 },
    { spid: "pdf_sign", times: 0, expire_time: 4102415999 },
    { spid: "pdf_split", times: 0, expire_time: 4102415999 }
  ],
  result: "ok",
  total_buy: 0,
  total_cost: -30,
  userid: body.userid,
  vip: {
    name: "超级会员",
    has_ad: 0,
    memberid: 40,
    expire_time: 4102415999,
    enabled: [
      { memberid: 40, name: "超级会员", expire_time: 4102415999 },
      { memberid: 20, name: "WPS会员", expire_time: 4102415999 },
      { memberid: 12, name: "稻壳会员", expire_time: 4102415999 }
    ]
  },
  wealth: 0,
  expire_time: 4102415999
};

$done({ body: JSON.stringify(obj) });
