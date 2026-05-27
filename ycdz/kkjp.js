/******************************

脚本功能：KK键盘——无限变声/文字转语音 + 会员显示 + 广告净化
特别说明：开启 MitM 与重写即可生效
脚本作者：自定义
更新时间：2026-05-27
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/kk\.weshine\.im\/(?:v1\.0\/(?:text2voice\/(?:checkCount|consumeCount|createTtsAudio)|account\/profile|advpricecollect)|v2\.0\/vip\/goodslist|v3\.0\/app\/(?:GlobalAd|AdDetail)) url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/kkjp.js
^https?:\/\/.*pangolin-sdk-toutiao.*\/api\/ad\/union\/sdk\/get_ads url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/kkjp.js
^https?:\/\/open\.e\.kuaishou\.com\/rest\/e\/v3\/open\/(?:univ|config) url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/kkjp.js

^https?:\/\/.*\.anythinktech\.com url reject
^https?:\/\/.*\.metricslinks\.com url reject
^https?:\/\/.*pangolin-sdk-toutiao.*\/api\/ad\/union\/(?:mediation|sdk\/settings) url reject
^https?:\/\/gromore\.pangolin-sdk-toutiao\.com url reject
^https?:\/\/mi\.gdt\.qq\.com url reject
^https?:\/\/win\.gdt\.qq\.com url reject
^https?:\/\/pgdt\.ugdtimg\.com url reject
^https?:\/\/misc\.weshineapp\.com\/.*\/feedback url reject

[mitm]

hostname = kk.weshine.im, api-access.pangolin-sdk-toutiao.com, api-access.pangolin-sdk-toutiao1.com, api-access.pangolin-sdk-toutiao-b.com, gromore.pangolin-sdk-toutiao.com, open.e.kuaishou.com, *.anythinktech.com, *.metricslinks.com, mi.gdt.qq.com, win.gdt.qq.com, pgdt.ugdtimg.com, log-api.pangolin-sdk-toutiao.com, log-api.pangolin-sdk-toutiao-b.com, toblog.ctobsnssdk.com

*******************************/

const host = ($request.hostname || "").toLowerCase();
const reqUrl = $request.url;

const VIP_EXPIRE = 4102444800;
const VIP_DATE = "2099-12-31 23:59:59";

function patchVipInfo(info) {
    if (!info || typeof info !== "object") return;
    info.user_type = 3;
    info.vip_expired_time = VIP_EXPIRE;
    info.not_ad_vip_expired_time = VIP_EXPIRE;
    info.vip_expired_time_format = VIP_DATE;
    info.is_vip = 1;
    info.vip = 1;
    info.svip = 1;
    info.vvip = 1;
}

function patchGlobalAd(data) {
    if (!data || typeof data !== "object") return;
    Object.keys(data).forEach((slotName) => {
        const slot = data[slotName];
        if (!slot || typeof slot !== "object") return;
        Object.keys(slot).forEach((pos) => {
            const item = slot[pos];
            if (!item || typeof item !== "object") return;
            item.status = 0;
            item.adid = "";
            item.ad_count = "0";
            item.ad_city_bj = 0;
        });
    });
}

// 穿山甲：无广告填充
if (host.includes("pangolin-sdk-toutiao") && reqUrl.includes("get_ads")) {
    $done({
        body: JSON.stringify({
            request_id: "KK-NO-AD-" + Date.now(),
            status_code: 20001,
            reason: 106,
            desc: "no fill"
        })
    });
}

// 快手联盟：空广告
if (host.includes("open.e.kuaishou.com") && (reqUrl.includes("/open/univ") || reqUrl.includes("/open/config"))) {
    $done({
        body: JSON.stringify({
            llsid: 0,
            result: 1,
            errorMsg: "OK",
            egid: "",
            hasMore: false,
            interval: 120,
            feeds: [],
            ad: [],
            impAdInfo: []
        })
    });
}

let resBody = JSON.parse($response.body || "{}");

// —— 777 原版：变声 / 文字转语音次数 ——
if (reqUrl.includes("checkCount") || reqUrl.includes("consumeCount")) {
    if (resBody.data) {
        resBody.data.totalCount = 999;
        resBody.data.currCount = 999;
        resBody.data.remainCount = 999;
    }
} else if (reqUrl.includes("createTtsAudio")) {
    if (resBody.data) {
        resBody.data.freeCount = 999;
    }
}
// —— 会员显示 ——
else if (reqUrl.includes("/account/profile")) {
    if (resBody.data) {
        const d = resBody.data;
        patchVipInfo(d.user_vip_info);
        patchVipInfo(d);
        d.not_ad_vip_expired_time = VIP_EXPIRE;
        d.is_vip = 1;
        d.vip = 1;
        d.vip_status = 1;
    }
} else if (reqUrl.includes("/vip/goodslist")) {
    if (resBody.data) {
        const d = resBody.data;
        if (d.user_info) {
            patchVipInfo(d.user_info.user_vip_info);
            patchVipInfo(d.user_info);
            d.user_info.not_ad_vip_expired_time = VIP_EXPIRE;
            d.user_info.is_vip = 1;
            d.user_info.vip = 1;
            d.user_info.vip_status = 1;
        }
        d.is_subscribe = 1;
        d.user_subs_goods_type = "year";
        d.is_show = true;
        d.is_show_oneday_vip = false;
        d.ios_is_subscribe_first = 0;
        d.user_subs_info = {
            goods_type: "year",
            expire_time: VIP_EXPIRE,
            expire_time_format: VIP_DATE,
            status: 1,
            auto_renew: 0
        };
    }
}
// —— 广告净化：开屏 / 弹窗 / 软件内广告位配置 ——
else if (reqUrl.includes("/GlobalAd")) {
    if (resBody.data) patchGlobalAd(resBody.data);
} else if (reqUrl.includes("/AdDetail")) {
    resBody.data = [];
} else if (reqUrl.includes("/advpricecollect")) {
    resBody.data = true;
}

$done({
    body: JSON.stringify(resBody)
});
