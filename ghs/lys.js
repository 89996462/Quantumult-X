/******************************

脚本功能：萝幼社——解锁—金币视频—VIP视频-去广告-漫画无解
特别说明：开启脚本即可在线观看视频
特别说明：必须开启HTTP抓包,并且关闭其他的脚本
更新时间：2026—7-14
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/oihqwlma\.00po\.shop\/api\/app\/vid\/m3u8\/.* url script-request-header https://raw.githubusercontent.com/89996462/Quantumult-X/main/ghs/lys.js

[mitm]

hostname = oihqwlma.00po.shop, *.00po.shop, *.oukky-lys.shop, *.cyou, *.eqfx9bas.cc, *.yihaici.top, *.yihaici.com, *.epuf3tk.cc

*******************************/

const headers = $request.headers;
const url = $request.url;
if (url.includes('/api/app/vid/m3u8/') && url.includes('.m3u8')) {
    console.log('检测到00po视频请求: ' + url);
    let directUrl = url.replace(/\/\/[^\.]+\.00po\.shop\//, '//oihqwlma.00po.shop/');
    directUrl = directUrl.replace(/&seconds=\d+/, '');
    directUrl = directUrl.replace(/\?seconds=\d+&?/, '?');
    directUrl = directUrl.replace(/\?$/, ''); // 清理末尾的问号
    let urlObj = new URL(directUrl);
    let params = new URLSearchParams(urlObj.search);
    let cleanParams = new URLSearchParams();
    for (let [key, value] of params) {
        if (key !== 'seconds' && key !== '') {
            cleanParams.append(key, value);
        }
    }
    
    let baseUrl = directUrl.split('?')[0];
    let cleanUrl = baseUrl + (cleanParams.toString() ? '?' + cleanParams.toString() : '');
    
    console.log('转换后的视频链接: ' + cleanUrl);
    const title = '🎬 彭于晏提示❗️视频链接捕获成功';
    const subtitle = '>_ 点击此通知可跳转观看 🔞';
    if (typeof $task !== 'undefined') {
        // Quantumult X
        $notify(title, subtitle, body, {
            'open-url': cleanUrl
        });
    } else if (typeof $httpClient !== 'undefined') {
        // Shadowrocket/其他
        $notification.post(title, subtitle, body, {
            'url': cleanUrl
        });
    } else if (typeof $loon !== 'undefined') {
        // Loon
        $notification.post(title, subtitle, body, {
            'openUrl': cleanUrl
        });
    }
}
$done({
    response: {
        headers: headers
    }
});
