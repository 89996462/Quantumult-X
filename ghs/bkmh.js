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

// 尝试的CDN域名列表（基于常见模式）
const CDN_DOMAINS = [
    "ghtawi.timemate.top",
    "media.timemate.top",
    "video.timemate.top",
    "cdn.timemate.top",
    "bk-copilot.bytedance.net",
    "bk.bytedance.net"
];

// 尝试替换域名
function tryReplaceDomain(url) {
    // 原始CDN域名模式
    const patterns = [
        /\/\/ghtawi\.timemate\.top\//,
        /\/\/[^\/]+\.timemate\.top\//,
        /\/\/[^\/]+\.bytedance\.net\//
    ];
    
    // 尝试替换为不同的CDN节点
    for (const domain of CDN_DOMAINS) {
        for (const pattern of patterns) {
            const newUrl = url.replace(pattern, `//${domain}/`);
            if (newUrl !== url) {
                console.log(`[bkh056-crack] 尝试域名替换: ${url} -> ${newUrl}`);
                return newUrl;
            }
        }
    }
    return url;
}

// 修改m3u8响应体中的ts文件域名
function modifyM3U8Body(body) {
    if (!body) return body;
    
    let modifiedBody = body;
    
    // 尝试替换ts文件的域名
    for (const domain of CDN_DOMAINS) {
        modifiedBody = modifiedBody.replace(
            /https?:\/\/[^\/]+\.timemate\.top\//g,
            `https://${domain}/`
        );
    }
    
    // 如果替换了域名，尝试移除preview标识
    if (modifiedBody !== body) {
        modifiedBody = modifiedBody.replace(/m3u8-preview/g, "m3u8");
        console.log("[bkh056-crack] 已修改m3u8响应体，尝试解锁完整流");
    }
    
    return modifiedBody;
}

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
    const title = "🎬 哔咔H5 · 视频已捕获";
    const subtitle = "点击通知用 Safari 打开";
    const opts = { "open-url": url };

    console.log(`[bkh056-crack] === 捕获成功 ===`);
    console.log(`[bkh056-crack] 链接: ${url}`);
    console.log(`[bkh056-crack] ===================`);

    if (isQX) {
        $notify(title, subtitle, "", opts);
        try { $copy(url); } catch (e) {}
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

function runCapture() {
    console.log(`[bkh056-crack] 检测到请求: ${playURL}`);
    
    if (!M3U8_RE.test(playURL)) {
        console.log("[bkh056-crack] URL不匹配");
        $done({});
        return;
    }
    
    if (alreadyCaptured(playURL)) {
        console.log("[bkh056-crack] 重复捕获");
        $done({});
        return;
    }
    
    if (isResponse) {
        // 修改响应体中的域名
        const modifiedBody = modifyM3U8Body($response.body);
        
        if (modifiedBody !== $response.body) {
            // 如果成功修改了响应体，返回修改后的内容
            console.log("[bkh056-crack] 返回修改后的m3u8");
            notifyCapture(playURL);
            $done({ body: modifiedBody });
            return;
        }
    }
    
    // 请求阶段：尝试替换域名
    const newURL = tryReplaceDomain(playURL);
    
    if (newURL !== playURL) {
        notifyCapture(newURL);
    } else {
        notifyCapture(playURL);
    }
    
    $done({});
}

try {
    runCapture();
} catch (e) {
    console.log("[bkh056-crack] error: " + e);
    $done({});
}
