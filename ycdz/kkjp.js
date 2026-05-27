/******************************

脚本功能：KK键盘——无限变声/文字转语音 + 广告净化
更新时间：2026-5-27
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/kk\.weshine\.im\/(?:v1\.0\/(?:text2voice\/(?:checkCount|consumeCount|createTtsAudio)|advpricecollect)|v3\.0\/app\/(?:GlobalAd|AdDetail)) url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/kkjp.js
^https?:\/\/kk-flow\.weshine\.im\/ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/kkjp.js
^https?:\/\/kkgif\.weshine\.im\/ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/kkjp.js
^https?:\/\/.*pangolin-sdk-toutiao.*\/api\/ad\/union\/ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/kkjp.js
^https?:\/\/open\.e\.kuaishou\.com\/rest\/e\/ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/kkjp.js

^https?:\/\/.*\.anythinktech\.com url reject
^https?:\/\/.*\.metricslinks\.com url reject
^https?:\/\/.*pangolin-sdk-toutiao.*\/api\/ad\/union\/(?:mediation|sdk\/settings|sdk\/stats) url reject
^https?:\/\/gromore\.pangolin-sdk-toutiao\.com url reject
^https?:\/\/log-api\.pangolin-sdk-toutiao url reject
^https?:\/\/toblog\.ctobsnssdk\.com url reject
^https?:\/\/mi\.gdt\.qq\.com url reject
^https?:\/\/win\.gdt\.qq\.com url reject
^https?:\/\/sdk\.e\.qq\.com url reject
^https?:\/\/sdkquic\.e\.qq\.com url reject
^https?:\/\/v[0-9]+mi\.gdt\.qq\.com url reject
^https?:\/\/v[0-9]+\.gdt\.qq\.com url reject
^https?:\/\/c[0-9]+\.gdt\.qq\.com url reject
^https?:\/\/pgdt\.ugdtimg\.com url reject
^https?:\/\/adsmind\.ugdtimg\.com url reject
^https?:\/\/sdk\.beizi\.biz url reject
^https?:\/\/.*\.yunxish\.com url reject
^https?:\/\/.*hookspf\.com url reject
^https?:\/\/.*hubcloud\.com\.cn url reject
^https?:\/\/.*ad-scope\.com\.cn url reject
^https?:\/\/misc\.weshineapp\.com\/.*\/feedback url reject
^https?:\/\/gdfp\.gifshow\.com url reject

[mitm]

hostname = kk.weshine.im, kk-flow.weshine.im, kkgif.weshine.im, api-access.pangolin-sdk-toutiao.com, api-access.pangolin-sdk-toutiao1.com, api-access.pangolin-sdk-toutiao-b.com, gromore.pangolin-sdk-toutiao.com, open.e.kuaishou.com, *.anythinktech.com, *.metricslinks.com, mi.gdt.qq.com, win.gdt.qq.com, sdk.e.qq.com, sdkquic.e.qq.com, v3.gdt.qq.com, c3.gdt.qq.com, pgdt.ugdtimg.com, adsmind.ugdtimg.com, log-api.pangolin-sdk-toutiao.com, log-api.pangolin-sdk-toutiao-b.com, toblog.ctobsnssdk.com, sdk.beizi.biz, *.yunxish.com, *.hookspf.com, *.hubcloud.com.cn, *.ad-scope.com.cn

*******************************/

const host = ($request.hostname || "").toLowerCase();
const reqUrl = $request.url;

function isObj(v) {
    return v && typeof v === "object" && !Array.isArray(v);
}

function isAdItem(node) {
    if (!isObj(node)) return false;
    if (node.is_ad === 1 || node.is_ad === true) return true;
    if (node.isAd === 1 || node.isAd === true) return true;
    if (node.ad_flag === 1) return true;
    const t = String(node.item_type || node.card_type || node.flow_type || node.content_type || node.type || "").toLowerCase();
    if (t === "ad" || t === "ads" || t === "advert" || t === "advertise") return true;
    if (t.includes("ad_item") || t.includes("aditem")) return true;
    if (node.ad_info || node.adInfo || node.ad_data || node.adData) return true;
    if (node.adsite || node.ad_id || node.adid) {
        if (node.nickname || node.avatar || node.content || node.title) return false;
        return true;
    }
    return false;
}

function stripFeedAds(root) {
    if (Array.isArray(root)) {
        return root.filter((item) => !isAdItem(item)).map((item) => {
            if (isObj(item) || Array.isArray(item)) return stripFeedAds(item);
            return item;
        });
    }
    if (!isObj(root)) return root;
    Object.keys(root).forEach((key) => {
        const val = root[key];
        if (Array.isArray(val)) {
            if (key === "list" || key === "feeds" || key === "items" || key === "data" || key === "flow_list" || key === "discover_list" || key === "recommend_list" || /list|feed|flow|discover|recommend/i.test(key)) {
                root[key] = stripFeedAds(val);
            } else {
                root[key] = val.map((item) => stripFeedAds(item));
            }
        } else if (isObj(val) || Array.isArray(val)) {
            root[key] = stripFeedAds(val);
        }
    });
    return root;
}

function patchGlobalAd(data) {
    if (!isObj(data)) return;
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


if (host.includes("pangolin-sdk-toutiao") && reqUrl.includes("/api/ad/union/")) {
    $done({
        body: JSON.stringify({
            request_id: "KK-NO-AD-" + Date.now(),
            status_code: 20001,
            reason: 106,
            desc: "no fill"
        })
    });
}

// 快手联盟
if (host.includes("open.e.kuaishou.com") && reqUrl.includes("/rest/e/")) {
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

let resBody;
try {
    resBody = JSON.parse($response.body || "{}");
} catch (e) {
    $done({});
}


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

else if (reqUrl.includes("/GlobalAd")) {
    if (resBody.data) patchGlobalAd(resBody.data);
} else if (reqUrl.includes("/AdDetail")) {
    resBody.data = [];
} else if (reqUrl.includes("/advpricecollect")) {
    resBody.data = true;
}

else if (host.includes("kk-flow.weshine.im") || host.includes("kkgif.weshine.im")) {
    if (resBody.data !== undefined) resBody.data = stripFeedAds(resBody.data);
    else stripFeedAds(resBody);
}

$done({
    body: JSON.stringify(resBody)
});
