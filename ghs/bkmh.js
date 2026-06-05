/******************************
  
# 脚本功能：哔咔H5——净化广告 + 视频链接捕获
# 目标站点：https://h5.bkh056.com
# 脚本文件：bkh056-noad.js、bkh056-capture.js（请放入 Quantumult X Scripts 目录）
# 抓包校验：2026-06-05-133638
# 使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************


[rewrite_local]

# 视频捕获（双规则：请求头 + 响应体，任一命中即通知）
^https?:\/\/[^\/]+\/bkapi\/m3u8\/link\/[a-f0-9]{32}\.m3u8(\?.*)? url script-request-header https://raw.githubusercontent.com/89996462/Quantumult-X/main/ghs/bkmh.js

^https?:\/\/[^\/]+\/bkapi\/m3u8\/link\/[a-f0-9]{32}\.m3u8(\?.*)? url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ghs/bkmh.js
^https?:\/\/[^\/]+\/bkapi\/(?!line|m3u8) url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ghs/bkmh.js

[filter-local]

^https?:\/\/api-dc-prod-008\.cyou\/ - reject

^https?:\/\/api-dc-prod-002\.cyou\/ - reject

^https?:\/\/api-dc2-prod-02\.cyou\/ - reject

^https?:\/\/ap\.dc-report\.cc\/ - reject

^https?:\/\/ghtawi\.timemate\.top\/hc237\/uploads\/default\/other\/ - reject

^https?:\/\/[^\/]+\/upload_01\/ads\/ - reject

[mitm]

hostname = h5.bkh056.com, h5.bkh057.com, h5.bkh058.com, *.bkh056.com, *.bkh057.com, *.bkh058.com, pwhu.bkk065.com, api-dc-prod-008.cyou, api-dc-prod-002.cyou, api-dc2-prod-02.cyou, ap.dc-report.cc

*******************************/

const M3U8_RE = /\/bkapi\/m3u8\/link\/[a-f0-9]{32}\.m3u8/i;
const PREFS_KEY = "bkh056_capture_last";

const isQX = typeof $task !== "undefined";
const isSurge = typeof $httpClient !== "undefined" && !isQX;
const isLoon = typeof $loon !== "undefined";
const isResponse = typeof $response !== "undefined" && $response != null;

let playURL = $request.url;

function hasPlaybackHeader(hdrs) {
    if (!hdrs) return false;
    return Object.keys(hdrs).some(
        (k) => k.toLowerCase() === "x-playback-session-id"
    );
}

function alreadyCaptured(link) {
    try {
        if (typeof $prefs === "undefined") return false;
        const raw = $prefs.valueForKey(PREFS_KEY) || "";
        const parts = raw.split("|");
        const lastUrl = parts[0] || "";
        const lastTime = Number(parts[1] || 0);
        if (lastUrl === link && Date.now() - lastTime < 60000) return true;
        $prefs.setValueForKey(link + "|" + Date.now(), PREFS_KEY);
        return false;
    } catch (e) {
        return false;
    }
}

function notifyCapture(url) {
    const title = "哔咔H5 · 视频已捕获";
    const subtitle = "点击通知用 Safari 打开";
    const opts = { "open-url": url };

    if (isQX) {
        $notify(title, subtitle, "", opts);
        try {
            $copy(url);
        } catch (e) {}
        return;
    }
    if (isSurge) {
        $notification.post(title, subtitle, url, { url: url });
        return;
    }
    if (isLoon) {
        $notification.post(title, subtitle, url, { openUrl: url });
    }
}

function shouldCapture() {
    if (!M3U8_RE.test(playURL)) return false;

    if (isResponse) {
        const body = $response.body || "";
        if (body.length > 0 && body.indexOf("#EXTM3U") === -1) return false;
        return true;
    }

    // 请求阶段：匹配 m3u8/link 即可；有播放头更可信
    return hasPlaybackHeader($request.headers) || true;
}

function runCapture() {
    if (!shouldCapture()) return;
    if (alreadyCaptured(playURL)) return;
    console.log("[bkh056-capture] " + (isResponse ? "response" : "request") + ": " + playURL);
    notifyCapture(playURL);
}

try {
    runCapture();
} catch (e) {
    console.log("[bkh056-capture] error: " + e);
}

// QX：request-header 用 $done({})；勿写 $done({ response: { headers } })
if (isResponse) {
    $done({});
} else {
    $done({});
}
