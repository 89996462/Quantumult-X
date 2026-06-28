/*******************************

脚本功能：水印猫
脚本作者：彭于晏💞
更新时间：2026-5—28
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

[rewrite_local]
^https:\/\/watersymaoa\.yunxiaoguo\.cn\/user\/info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/sym.js

[mitm]
hostname = watersymaoa.yunxiaoguo.cn

*******************************/

const url = $request.url;

if (url.includes("/user/info")) {
    let body = $response.body;
    body = body.replace(/"isPurchasedSubscribe":\d+/g, '"isPurchasedSubscribe":1');
    body = body.replace(/"waterVipInfo":null/g, '"waterVipInfo":{"subscribeCycle":-1,"beginTime":"2025-09-09 09:09:09","firstOpenTime":"2025-09-09 09:09:09","freeTimes":0,"userSign":"D-ej8OAp7SY","expireTime":"2999-09-09 09:09:09","typeName":"终身会员","remainDays":9,"sign":"wa44coNPDkg","createTime":"2025-09-09 09:09:09"}');
    body = body.replace(/"waterVipInfo":{[^}]*}/g, '"waterVipInfo":{"subscribeCycle":-1,"beginTime":"2025-09-09 09:09:09","firstOpenTime":"2025-09-09 09:09:09","freeTimes":0,"userSign":"D-ej8OAp7SY","expireTime":"2999-09-09 09:09:09","typeName":"终身会员","remainDays":9,"sign":"wa44coNPDkg","createTime":"2025-09-09 09:09:09"}');
    body = body.replace(/"maskMobile":".*?"/g, '"maskMobile":"彭于晏Crack"');
    body = body.replace(/"nickName":".*?"/g, '"nickName":"彭于晏Crack"');
    $done({body});
} else {
    $done({});
}
