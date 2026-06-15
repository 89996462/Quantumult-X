/*******************************

脚本作者：彭于晏💞
更新时间：2026-6—16
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

https://api.mag-store.com/api/client/app/bootstrap url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/NexCam.js
[mitm] 

hostname = api.mag-store.com

*******************************/

let body = $response.body;
let obj = JSON.parse(body);

if (obj.data) {

    obj.data.member = true;
    obj.data.memberExpiresAt = "2099-12-31T23:59:59";
    obj.data.vipExpiresAt = "2099-12-31T23:59:59";
    obj.data.vipExpiresAtIso = "2099-12-31T15:59:59Z";
    obj.data.vipExpiresAtMs = 4102444799000;       
    obj.data.vipRemainingSeconds = 2592000000;      
    obj.data.userType = "vip";
    obj.data.trialClaimLimit = 999;
    obj.data.trialClaimUsed = 0;
    obj.data.trialClaimRemaining = 999;
}

$done({ body: JSON.stringify(obj) });
