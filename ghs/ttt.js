/******************************

脚本功能：汤头条——解锁—金币视频—VIP视频
特别说明：捕获成功后，点击通知即可观看
下载地址：https://ttt.news
脚本作者：彭于晏💞
更新时间：2026—5-25
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/[^\/]*\..*\.cn\/\w+\/[a-z0-9]{32}\/[a-z0-9]{32}\.m3u8(\?.*)? url script-request-header https://raw.githubusercontent.com/89996462/Quantumult-X/main/ghs/ttt.js

[mitm]

hostname = 120play.*.cn, tp5.iajckz.cn, h5play.*.com, long.*.cn,  *.fipxor.cn


*******************************/


let { headers, url } = $request,
    isQX = typeof $task !== "undefined",
    isSurge = typeof $httpClient !== "undefined" && !isQX,
    isLoon = typeof $loon !== "undefined",

    playURL = url.replace(/\/\/(?!long)[^\.]+\./, "//long.").replace(/\.m3u8/, ".m3u8");

if (headers.hasOwnProperty('X-Playback-Session-Id')) {
    console.log('通杀Crack~');
    if (isQX) {
        $notify("彭于晏提示❗️视频链接捕获成功", ">_ 点击此通知可跳转观看 🔞", "", { "open-url": playURL });
    }
    if (isSurge) {
        $notification.post("彭于晏提示❗️视频链接捕获成功", ">_ 点击此通知可跳转观看 🔞", "", { url: playURL });
    }
    if (isLoon) {
        $notification.post("彭于晏提示❗️视频链接捕获成功", ">_ 点击此通知可跳转观看 🔞", "", { "openUrl": playURL });
    }
}

$done({ response: { headers } });
