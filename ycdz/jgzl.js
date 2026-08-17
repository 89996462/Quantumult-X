/*******************************

脚本功能：抖音模拟器-解锁VIP
脚本作者：彭于晏💞
更新时间：2026-8—28
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************
[rewrite_local]

^https:\/\/giftstore.work\/api\/(login|user-info|app\/watermark-policy|user\/set-diamonds) url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/jgzl.js

[mitm] 

hostname = giftstore.work

*******************************/

var url = $request.url;
var body = $response.body;
if (url.indexOf('set-diamonds') !== -1) {
    body = JSON.stringify({
        "success": true,
        "msg": "修改成功",
        "diamonds": 88888
    });
} else {
    body = body
        .replace(/"success":\w+/g, '"success":true')
        .replace(/"is_svip":\d+/g, '"is_svip":1')
        .replace(/"svip_expire_at":[^,}]*/g, '"svip_expire_at":"9999-08-16T20:42:13.000Z"')
        .replace(/"svip_card_type":[^,}]*/g, '"svip_card_type":"vip"');
    if (url.indexOf('watermark-policy') !== -1) {
        body = body
            .replace(/"show_watermark":\w+/g, '"show_watermark":false')
            .replace(/"enabled":\w+/g, '"enabled":false')
            .replace(/"log_only":\w+/g, '"log_only":false')
            .replace(/"reason":"[^"]*"/g, '"reason":"svip"');
    }
}

$done({ body });
