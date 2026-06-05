/******************************

脚本功能：哔咔H5——视频链接捕获
特别说明：捕获成功后，点击通知可跳转；链接同时写入剪贴板（QX）
目标站点：https://h5.bkh056.com
抓包校验：2026-06-05-125338
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

注意：视频分片为 AES-128 加密，外链播放器可能无法直接播放；
      建议通过通知在 Safari 中打开，或配合支持 HLS 解密的播放器使用。

*******************************

[rewrite_local]

^https?:\/\/[^\/]+\/bkapi\/m3u8\/link\/[a-f0-9]{32}\.m3u8 url script-request-header https://raw.githubusercontent.com/89996462/Quantumult-X/main/ghs/bkmh.js


[mitm]

hostname = h5.bkh056.com, h5.bkh057.com, h5.bkh058.com, *.bkh056.com, *.bkh057.com, *.bkh058.com

*******************************/


const PREFS_KEY = "bkh056_capture_urls";

let { headers, url } = $request,
    isQX = typeof $task !== "undefined",
    isSurge = typeof $httpClient !== "undefined" && !isQX,
    isLoon = typeof $loon !== "undefined",
    playURL = url;

function alreadyCaptured(link) {
    try {
        let cache = JSON.parse($prefs.valueForKey(PREFS_KEY) || "{}");
        if (cache[link]) return true;
        cache[link] = Date.now();
        let now = Date.now();
        Object.keys(cache).forEach((k) => {
            if (now - cache[k] > 3600000) delete cache[k];
        });
        $prefs.setValueForKey(JSON.stringify(cache), PREFS_KEY);
        return false;
    } catch (e) {
        return false;
    }
}

function notify(title, subtitle, openURL) {
    if (isQX) {
        $notify(title, subtitle, openURL, { "open-url": openURL });
        try { $copy(openURL); } catch (e) {}
    }
    if (isSurge) {
        $notification.post(title, subtitle, openURL, { url: openURL });
    }
    if (isLoon) {
        $notification.post(title, subtitle, openURL, { openUrl: openURL });
    }
}

if (
    headers["X-Playback-Session-Id"] ||
    headers["x-playback-session-id"]
) {
    if (!alreadyCaptured(playURL)) {
        console.log("哔咔H5 视频捕获: " + playURL);
        notify(
            "哔咔H5 视频链接捕获成功",
            "点击通知跳转观看（已复制到剪贴板）",
            playURL
        );
    }
}

$done({ response: { headers } });
