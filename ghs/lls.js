/**
 * LLS 净化脚本 for Quantumult X
 * 功能：
 *   1. 清除所有广告（开屏广告、顶部横幅广告、素材广告）
 *   2. 删除底部"发现"和"游戏"tab
 *   3. 清除游戏大厅/游戏列表/余额相关数据
 *   4. 替换入口预配置，移除测速/客服/下载链接
 *   5. 注入CSS/JS隐藏底部tab栏
 *
 * 使用方法：
 *   将 lls_qx.conf 中的 [rewrite_local]、[filter_local]、[mitm] 合并到你的QX配置
 *   将 lls_clean.js 放在与QX配置文件同目录下
 */

const url = $request.url;
const body = $response.body;

// ====== 1. 处理 get-h5-entry-preconfigured ======
// 返回清理后的预配置（移除客服、测速节点、iOS下载、视频CDN）
if (url.indexOf('get-h5-entry-preconfigured') !== -1) {
    // 干净配置内容 (XOR 0x88 + gzip 压缩后的 base64)
    // 原始干净配置: [*APILIST{*HTTPSGLJYWEBBRHUIZCOM*}*ENTRIES{}*HELPDESKS{}*DEVICE[*H[*FORCEVERSION*]*]*IPADOWNLOADURLS{}*FAURLS{}*]
    const cleanConfigB64 = "H4sIAB8SMWoC/y3KQQqEMAxG4ftfIydpZmJDbX9Fi1CSqocQ9zOCvM23eJVSY2HvF4Xem8/yWU6Mo4Wd16wD3YTYjeHXTQHSCvz7uODgjEqh0qSWccCcNdL2j1sqekbRVHaT557Si+0HQDK47XEAAAA=";
    $done({
        body: cleanConfigB64,
        headers: {
            'Content-Type': 'application/json',
            'Content-Encoding': 'gzip',
            'Cache-Control': 'no-store'
        }
    });
    return;
}

// ====== 2. 处理游戏大厅 ======
if (url.indexOf('/api/v1/game/hall') !== -1) {
    $done({
        body: JSON.stringify({
            "game_type": [],
            "tag_id": [],
            "tp_code": []
        })
    });
    return;
}

// ====== 3. 处理游戏列表 ======
if (url.indexOf('/api/v1/game/list_v1') !== -1) {
    $done({
        body: JSON.stringify({
            "data": [],
            "total": 0,
            "current": 1,
            "pageSize": 1000
        })
    });
    return;
}

// ====== 4. 处理游戏余额 ======
if (url.indexOf('/api/v1/game/balance/all') !== -1) {
    $done({
        body: JSON.stringify({
            "list": [],
            "total": "0"
        })
    });
    return;
}

// ====== 5. 处理用户游戏状态 ======
if (url.indexOf('/api/v1/game/user/status') !== -1) {
    $done({
        body: JSON.stringify({
            "uid": "",
            "status": false,
            "isExist": false
        })
    });
    return;
}

// ====== 6. 处理跑马灯/横幅广告 ======
if (url.indexOf('/api/v1/game/marquee_banner') !== -1) {
    $done({
        body: JSON.stringify({
            "marquee": [],
            "banner": [],
            "customerServiceUrl": []
        })
    });
    return;
}

// ====== 7. 处理广告素材 (oholo) ======
if (url.indexOf('/api/v1/oholo/') !== -1) {
    $done({
        status: 204,
        body: ""
    });
    return;
}

// ====== 8. 处理CMS发布内容 (可能包含开屏广告) ======
if (url.indexOf('/api/v1/cms/') !== -1) {
    $done({
        status: 204,
        body: ""
    });
    return;
}

// ====== 9. 处理公告 (可能包含开屏广告) ======
if (url.indexOf('/api/v1/announce') !== -1) {
    // announce 和 member_announce 都返回空
    $done({
        status: 204,
        body: ""
    });
    return;
}

// ====== 10. 处理游戏点击记录 ======
if (url.indexOf('/api/v1/member_game/') !== -1) {
    $done({
        body: JSON.stringify({})
    });
    return;
}

// ====== 11. 处理主入口HTML页面，注入CSS/JS隐藏底部tab ======
// 拦截 rjt4pj11ent.dzfdzf.com 的主页面（非API路径，非静态资源）
if (url.indexOf('rjt4pj11ent.dzfdzf.com') !== -1 &&
    url.indexOf('get-h5-entry-preconfigured') === -1 &&
    url.indexOf('/sw.js') === -1 &&
    url.indexOf('speed') === -1 &&
    url.indexOf('.js') === -1 &&
    url.indexOf('.css') === -1 &&
    url.indexOf('.png') === -1 &&
    url.indexOf('.jpg') === -1 &&
    url.indexOf('.ico') === -1 &&
    url.indexOf('.svg') === -1 &&
    url.indexOf('.woff') === -1) {
    
    // 检查响应Content-Type，只处理HTML
    let contentType = '';
    if ($response && $response.headers) {
        contentType = ($response.headers['Content-Type'] || $response.headers['content-type'] || '').toLowerCase();
    }
    // 如果响应不是HTML类型，直接放行
    if (contentType && contentType.indexOf('text/html') === -1 && contentType.indexOf('application/xhtml') === -1) {
        $done({});
        return;
    }

    // 注入CSS隐藏tab栏 + JS监控DOM动态隐藏
    const injectCode = `
<style id="lls-clean-style">
/* 隐藏底部导航栏中的游戏和发现tab */
[class*="tabbar"] a[href*="game"],
[class*="tab-bar"] a[href*="game"],
[class*="bottom"] a[href*="game"],
[class*="footer"] a[href*="game"],
[class*="tabbar"] [class*="game"],
[class*="tab-bar"] [class*="game"],
[class*="tabbar"] [class*="discover"],
[class*="tab-bar"] [class*="discover"],
[class*="tabbar"] [class*="find"],
[class*="tab-bar"] [class*="find"],
[class*="nav"] [class*="game"],
[class*="nav"] [class*="discover"],
[class*="nav"] [class*="find"],
/* 隐藏开屏广告弹窗 */
[class*="splash"],
[class*="ad-dialog"],
[class*="ad-modal"],
[class*="popup-ad"],
[id*="splash"],
[id*="ad-"],
/* 隐藏顶部横幅广告 */
[class*="banner-ad"],
[class*="top-ad"],
[class*="ad-banner"],
[class*="advertisement"] {
    display: none !important;
    visibility: hidden !important;
    height: 0 !important;
    width: 0 !important;
    opacity: 0 !important;
    pointer-events: none !important;
    overflow: hidden !important;
}
</style>
<script id="lls-clean-script">
(function() {
    // 延迟执行，确保DOM已加载
    function cleanUI() {
        // 方法1: 通过CSS选择器隐藏
        const selectors = [
            '.tabbar', '.tab-bar', '.bottom-nav', '.footer-nav',
            '[class*="tabBar"]', '[class*="TabBar"]',
            '.van-tabbar', '.nut-tabbar', '.taro-tabbar'
        ];
        selectors.forEach(function(sel) {
            try {
                let items = document.querySelectorAll(sel + ' .van-tabbar-item, ' + sel + ' .nut-tabbar-item, ' + sel + ' > div, ' + sel + ' > a');
                items.forEach(function(item) {
                    let text = item.textContent || item.innerText || '';
                    if (text.includes('游戏') || text.includes('发现') ||
                        text.includes('Game') || text.includes('Discover') ||
                        text.includes('game') || text.includes('discover') ||
                        text.includes('博') || text.includes('彩') ||
                        text.includes('投注') || text.includes('下注')) {
                        item.style.display = 'none';
                        item.style.visibility = 'hidden';
                        item.style.width = '0';
                        item.style.height = '0';
                        item.style.overflow = 'hidden';
                        item.remove();
                    }
                });
            } catch(e) {}
        });

        // 方法2: 遍历所有底部导航项
        document.querySelectorAll('[role="tab"], .tab-item, .nav-item, [class*="tab-item"], [class*="TabItem"]').forEach(function(el) {
            let text = (el.textContent || el.innerText || '').trim();
            if (text === '游戏' || text === '发现' || text === 'Game' || text === 'Discover' ||
                text === '遊戲' || text === '發現' || text.includes('博')) {
                el.style.display = 'none';
                el.remove();
            }
        });

        // 方法3: 隐藏splash/ad overlay
        document.querySelectorAll('[class*="splash"], [class*="Splash"], [class*="ad-"], [class*="Ad-"], .overlay, .mask').forEach(function(el) {
            if (el.querySelector && (el.querySelector('img') || el.querySelector('[class*="ad"]'))) {
                el.style.display = 'none';
                el.remove();
            }
        });
    }

    // 立即执行一次
    cleanUI();

    // DOM变化时再次执行（响应SPA动态渲染）
    if (window.MutationObserver) {
        var observer = new MutationObserver(function() {
            cleanUI();
        });
        observer.observe(document.body || document.documentElement, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['class', 'style']
        });
    }

    // 定时清理（处理延迟加载）
    var intervals = [500, 1000, 2000, 3000, 5000];
    intervals.forEach(function(delay) {
        setTimeout(cleanUI, delay);
    });

    // 拦截可能的API调用，伪装游戏状态
    var origFetch = window.fetch;
    window.fetch = function() {
        var args = arguments;
        var url = typeof args[0] === 'string' ? args[0] : (args[0] && args[0].url) || '';
        // 如果脚本已拦截，这里做二次兜底
        return origFetch.apply(this, args).then(function(response) {
            return response;
        });
    };
})();
</script>`;

    // 注入到HTML中
    let newBody;
    if (body && body.indexOf('</head>') !== -1) {
        newBody = body.replace('</head>', injectCode + '</head>');
    } else if (body && body.indexOf('<body') !== -1) {
        newBody = body.replace(/<body([^>]*)>/, '<body$1>' + injectCode);
    } else if (body) {
        // 直接拼在前面
        newBody = injectCode + body;
    } else {
        newBody = '<html><head>' + injectCode + '</head><body></body></html>';
    }

    $done({ body: newBody });
    return;
}

// 默认放行
$done({});
