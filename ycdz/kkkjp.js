/******************************

脚本功能：KK键盘——解锁无限变声、文字转语音次数
下载地址：https://reurl.cc/0m8Ddx
脚本作者：彭于晏💞
更新时间：2026-5—28
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/kk\.weshine\.im\/v1\.0\/text2voice\/(checkCount|consumeCount|createTtsAudio) url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/kkkjp.js


[mitm]

hostname = kk.weshine.im

*******************************/

const reqUrl = $request.url;
let resBody = JSON.parse($response.body || "{}");

if (reqUrl.includes("checkCount") || reqUrl.includes("consumeCount")) {
    if (resBody.data) {
        resBody.data.totalCount = 999;
        resBody.data.currCount = 999;
    }
} else if (reqUrl.includes("createTtsAudio")) {
    if (resBody.data) {
        resBody.data.freeCount = 999;
    }
}

$done({
    body: JSON.stringify(resBody)
});
