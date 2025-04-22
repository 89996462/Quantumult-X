/*******************************

脚本功能：问真排版八字——解锁VIP
下载地址：https://t.cn/A60rFcfv
软件版本：1.2.2
脚本作者：彭于晏💞
更新时间：2025-10—8
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

https:\/\/.+\.iwzbz\.com\/api\/v1\.1\/user\/getvipinfo url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/iwzbz.js.js

[mitm] 

hostname = bzpp2.iwzbz.com

*******************************/


const targetAPI = /https:\/\/.+\.iwzbz\.com\/api\/v1\.1\/user\/getvipinfo/;

if ($request && targetAPI.test($request.url)) {
  let body = JSON.parse($response.body);
  if (body.data) {
    body.isSuccess = true;
    body.code = 1;
    body.data.vipLevel = 3;
    body.data.expires = "9999-09-09";
  }
  
  $done({ body: JSON.stringify(body) });
} else {
  $done({});
}
