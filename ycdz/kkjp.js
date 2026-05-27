/******************************
# 脚本功能：KK键盘 — 会员显示 + 变声次数 + 广告净化
# 脚本作者：自定义
# 更新时间：2026-05-27
# 使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
#
# 【远程使用 — Quantumult X 配置示例】
# 把本文件上传到 GitHub 后，在 QX 配置文件 [general] 下方加入：
#
# [rewrite_remote]
# https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/kkjp.js, tag=KK键盘, update-interval=86400, opt-parser=true, enabled=true
#
# 说明：
# 1. opt-parser=true 会自动解析下方 [rewrite_local] 和 [mitm]
# 2. 必须把 kkjp.js 上传到你的 GitHub（见下方「上传步骤」）
# 3. 开启 MitM 并信任证书；KK键盘 不要加入 MitM 跳过
# 4. 更新脚本后 QX 下拉刷新订阅，或等 update-interval 自动更新
#
# ⚠️ 当前 GitHub 上的旧版脚本缺少 kk-flow、goodslist、user_type=3 等补丁
#    不覆盖上传则远程订阅不会生效！
#
# REMOTE = https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/kkjp.js
#
# 【上传步骤】
# A) 若你有 89996462/Quantumult-X 仓库权限：
#    用本目录 kkjp.js 覆盖 ycdz/kkjp.js 后 push
# B) 若没有权限 — Fork 该仓库，或新建仓库上传 kkjp.js，然后把下面
#    所有 raw.githubusercontent.com/89996462/... 替换成你的 raw 地址
*******************************

[rewrite_local]

^https?:\/\/kk\.weshine\.im\/ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/kkjp.js
^https?:\/\/kk-flow\.weshine\.im\/ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/kkjp.js
^https?:\/\/.*pangolin-sdk-toutiao.*\/api\/ad\/union\/sdk\/get_ads url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/kkjp.js
^https?:\/\/open\.e\.kuaishou\.com\/ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/kkjp.js

^https?:\/\/encrypt\.weshine\.im url reject
^https?:\/\/.*\.anythinktech\.com url reject
^https?:\/\/.*\.metricslinks\.com url reject
^https?:\/\/.*\.pangolin-sdk-toutiao.*\/api\/ad\/union\/mediation url reject
^https?:\/\/.*\.pangolin-sdk-toutiao.*\/api\/ad\/union\/sdk\/settings url reject
^https?:\/\/mi\.gdt\.qq\.com url reject
^https?:\/\/win\.gdt\.qq\.com url reject
^https?:\/\/pgdt\.ugdtimg\.com url reject
^https?:\/\/gromore\.pangolin-sdk-toutiao\.com url reject

[mitm]
hostname = kk.weshine.im, kk-flow.weshine.im, encrypt.weshine.im, misc.weshineapp.com, kkmob.weshineapp.com, api-access.pangolin-sdk-toutiao.com, api-access.pangolin-sdk-toutiao1.com, gromore.pangolin-sdk-toutiao.com, open.e.kuaishou.com, *.anythinktech.com, *.metricslinks.com, mi.gdt.qq.com, win.gdt.qq.com, pgdt.ugdtimg.com, log-api.pangolin-sdk-toutiao.com, log-api.pangolin-sdk-toutiao-b.com, log-api.pangolin-sdk-toutiao.com, toblog.ctobsnssdk.com, api-access.pangolin-sdk-toutiao1.com

*******************************/

const reqUrl = ($request.url || "").replace(/\/$/, "");
const host = ($request.hostname || "").toLowerCase();
const VIP_EXPIRE = 4102444800;
const VIP_DATE = "2099-12-31 23:59:59";
const FREE_COUNT = 999;

function safeJson(raw) {
    if (!raw) return null;
    let text = raw;
    if (typeof raw === "object" && raw !== null && raw.byteLength !== undefined) {
        text = String.fromCharCode.apply(null, new Uint8Array(raw));
    }
    text = String(text).trim();
    const start = text.indexOf("{");
    const end = text.lastIndexOf("}");
    if (start >= 0 && end > start) text = text.slice(start, end + 1);
    try {
        return JSON.parse(text);
    } catch (e) {
        return null;
    }
}

function isObj(v) {
    return v && typeof v === "object" && !Array.isArray(v);
}

function patchVipInfo(info) {
    if (!isObj(info)) return;
    info.user_type = 3;
    info.vip_expired_time = VIP_EXPIRE;
    info.not_ad_vip_expired_time = VIP_EXPIRE;
    info.vip_expired_time_format = VIP_DATE;
    info.is_vip = 1;
    info.vip = 1;
    info.svip = 1;
    info.vvip = 1;
}

function patchUnlockFields(node) {
    if (!isObj(node)) return;
    if ("user_type" in node && "vip_expired_time" in node) patchVipInfo(node);
    if ("vip_use" in node) node.vip_use = 0;
    if ("vvip_use" in node) node.vvip_use = 0;
    if ("ad_status" in node) node.ad_status = 0;
    if ("is_vip" in node && !("user_type" in node)) node.is_vip = 0;
    if ("lock" in node) node.lock = 0;
    if ("need_vip" in node) node.need_vip = 0;
    if ("need_ad" in node) node.need_ad = 0;
    if ("show_ad" in node) node.show_ad = 0;
    if ("count_ad" in node) node.count_ad = 0;
    if ("freeCount" in node) node.freeCount = FREE_COUNT;
    if ("totalCount" in node) node.totalCount = FREE_COUNT;
    if ("currCount" in node) node.currCount = FREE_COUNT;
    if ("remainCount" in node) node.remainCount = FREE_COUNT;
    if ("tutorialCount" in node) node.tutorialCount = 0;
    if ("user_vip_info" in node) patchVipInfo(node.user_vip_info);
    if ("user" in node && isObj(node.user)) patchVipInfo(node.user.user_vip_info);
    if ("user_info" in node && isObj(node.user_info)) patchProfile(node.user_info);
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
    if ("user_type" in data) patchVipInfo(data);
    data.not_ad_vip_expired_time = VIP_EXPIRE;
    data.is_vip = 1;
    data.vip = 1;
    data.vip_status = 1;
    walkPatch(data);
}

function patchText2VoiceCount(data) {
    if (!isObj(data)) return;
    data.totalCount = FREE_COUNT;
    data.currCount = FREE_COUNT;
    data.remainCount = FREE_COUNT;
    data.tutorialCount = 0;
    data.freeCount = FREE_COUNT;
}

function patchVipGoodsList(data) {
    if (!isObj(data)) return;
    if (data.user_info) patchProfile(data.user_info);
    data.is_subscribe = 1;
    data.user_subs_goods_type = "year";
    data.is_show_oneday_vip = false;
    walkPatch(data);
}

function patchAdDetail(data) {
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
        ad: [],
        impAdInfo: []
    };
}

function handleKkApi(url, body) {
    if (!body || !isObj(body)) return body;

    if (url.includes("/v1.0/account/profile")) {
        if (body.data) patchProfile(body.data);
        return body;
    }

    if (url.includes("/v2.0/vip/goodslist") || url.includes("/vip/goodslist")) {
        if (body.data) patchVipGoodsList(body.data);
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
        if (body.data) {
            body.data.freeCount = FREE_COUNT;
            patchText2VoiceCount(body.data);
        }
        return body;
    }

    if (body.data !== undefined) walkPatch(body.data);
    return body;
}

function handleHostApi(url, body) {
    if (host.includes("kk.weshine.im") || host.includes("kk-flow.weshine.im")) {
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

const raw = $response.body;
const resBody = safeJson(raw);
if (resBody) {
    const patched = handleHostApi(reqUrl, resBody);
    $done({ body: JSON.stringify(patched) });
} else {
    $done({});
}
