/******************************
# 脚本功能：KK键盘 — 会员显示 + 变声次数 + 广告净化
# 脚本作者：彭于晏💞
# 更新时间：2026-5-25
# TG反馈群：https://t.me/plus8889
# TG频道群：https://t.me/py996
# 使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]

# ===== 业务 API（会员 / 次数 / 去广告位）=====

^https?:\/\/kk\.weshine\.im\/ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/kkjp.js

# ===== 穿山甲开屏 / 信息流 =====

^https?:\/\/api-access\.pangolin-sdk-toutiao\.com\/api\/ad\/union\/sdk\/get_ads url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/kkjp.js

^https?:\/\/api-access\.pangolin-sdk-toutiao1\.com\/api\/ad\/union\/sdk\/get_ads url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/kkjp.js


# ===== 快手开屏 =====

^https?:\/\/open\.e\.kuaishou\.com\/ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/kkjp.js


# ===== 硬拦截（开屏配置 / 聚合 SDK / 监测）=====

^https?:\/\/encrypt\.weshine\.im url reject
^https?:\/\/.*\.anythinktech\.com url reject
^https?:\/\/adx-.*\.metricslinks\.com url reject
^https?:\/\/dsp-api-.*\.metricslinks\.com url reject
^https?:\/\/api-access\.pangolin-sdk-toutiao\.com\/api\/ad\/union\/mediation url reject
^https?:\/\/mi\.gdt\.qq\.com url reject
^https?:\/\/pgdt\.ugdtimg\.com url reject

[mitm]

hostname = kk.weshine.im, kk-flow.weshine.im, encrypt.weshine.im, misc.weshineapp.com, api-access.pangolin-sdk-toutiao.com, api-access.pangolin-sdk-toutiao1.com, open.e.kuaishou.com, *.anythinktech.com, *.metricslinks.com, mi.gdt.qq.com, pgdt.ugdtimg.com, log-api.pangolin-sdk-toutiao.com, log-api.pangolin-sdk-toutiao-b.com, toblog.ctobsnssdk.com

*******************************/

const reqUrl = ($request.url || "").replace(/\/$/, "");
const VIP_EXPIRE = 4102444800; 
const FREE_COUNT = 999;

function safeJson(raw) {
    if (!raw) return null;
    try {
        return JSON.parse(raw);
    } catch (e) {
        return null;
    }
}

function isObj(v) {
    return v && typeof v === "object" && !Array.isArray(v);
}

function patchVipInfo(info) {
    if (!isObj(info)) return;
    info.user_type = 2;
    info.vip_expired_time = VIP_EXPIRE;
    info.not_ad_vip_expired_time = VIP_EXPIRE;
    info.is_vip = 1;
    info.vip = 1;
    info.svip = 1;
    info.vvip = 1;
}

function patchUnlockFields(node) {
    if (!isObj(node)) return;
    if ("vip_use" in node) node.vip_use = 0;
    if ("vvip_use" in node) node.vvip_use = 0;
    if ("ad_status" in node) node.ad_status = 0;
    if ("is_vip" in node) node.is_vip = 0;
    if ("lock" in node) node.lock = 0;
    if ("need_vip" in node) node.need_vip = 0;
    if ("need_ad" in node) node.need_ad = 0;
    if ("show_ad" in node) node.show_ad = 0;
    if ("count_ad" in node) node.count_ad = 0;
    if ("freeCount" in node) node.freeCount = FREE_COUNT;
    if ("totalCount" in node) node.totalCount = FREE_COUNT;
    if ("currCount" in node) node.currCount = FREE_COUNT;
    if ("tutorialCount" in node) node.tutorialCount = 0;
    if ("user_vip_info" in node) patchVipInfo(node.user_vip_info);
    if ("user" in node && isObj(node.user)) patchVipInfo(node.user.user_vip_info);
}

function walkPatch(root) {
    if (Array.isArray(root)) {
        root.forEach(walkPatch);
        return;
    }
    if (!isObj(root)) return;
    patchUnlockFields(root);
    Object.keys(root).forEach((k) => walkPatch(root[k]));
}

function patchProfile(data) {
    if (!isObj(data)) return;
    patchVipInfo(data.user_vip_info);
    data.not_ad_vip_expired_time = VIP_EXPIRE;
    data.is_vip = 1;
    data.vip = 1;
    walkPatch(data);
}

function patchText2VoiceCount(data) {
    if (!isObj(data)) return;
    data.totalCount = FREE_COUNT;
    data.currCount = FREE_COUNT;
    data.tutorialCount = 0;
    data.freeCount = FREE_COUNT;
}

function patchAdDetail(data) {
    if (Array.isArray(data)) return [];
    if (isObj(data) && Array.isArray(data.list)) {
        data.list = [];
    }
    return [];
}

function emptyPangleAds() {
    return {
        request_id: "KK-NO-AD-" + Date.now(),
        status_code: 20001,
        reason: 106,
        desc: "no fill"
    };
}

function emptyKuaishouAds() {
    return {
        llsid: 0,
        result: 1,
        errorMsg: "OK",
        egid: "",
        hasMore: false,
        interval: 120,
        feeds: [],
        ad: []
    };
}

function handleKkApi(url, body) {
    if (!body || !isObj(body)) return body;

    if (url.includes("/v1.0/account/profile")) {
        if (body.data) patchProfile(body.data);
        return body;
    }

    if (url.includes("/v3.0/app/AdDetail")) {
        body.data = patchAdDetail(body.data);
        return body;
    }

    if (url.includes("/v1.0/advpricecollect")) {
        body.data = true;
        return body;
    }

    if (
        url.includes("/text2voice/checkCount") ||
        url.includes("/text2voice/consumeCount")
    ) {
        if (body.data) patchText2VoiceCount(body.data);
        return body;
    }

    if (url.includes("/text2voice/createTtsAudio")) {
        if (body.data) body.data.freeCount = FREE_COUNT;
        return body;
    }

    if (body.data !== undefined) walkPatch(body.data);
    return body;
}

function handleHostApi(url, body) {
    const host = ($request.hostname || "").toLowerCase();

    if (host.includes("kk.weshine.im")) {
        return handleKkApi(url, body);
    }

    if (host.includes("pangolin-sdk-toutiao")) {
        return emptyPangleAds();
    }

    if (host.includes("open.e.kuaishou.com")) {
        return emptyKuaishouAds();
    }

    return body;
}

let resBody = safeJson($response.body);
if (resBody) {
    resBody = handleHostApi(reqUrl, resBody);
    $done({ body: JSON.stringify(resBody) });
} else {
    $done({});
}
