/**
 * Quantumult X 一体化脚本 - ShardVaultVkwt (黑猫小说) v2.6.3.1
 * 
 * 功能: 广告净化 | VIP会员模拟 | 视频解锁 | 启动配置
 * 日期: 2026-06-15
 * 
 * 使用方式:
 *   1. 将本文件放入 我的iPhone/Quantumult X/Scripts/shardvault_vip.js
 *   2. 将 ShardVaultVkwt_qx.conf 内容合并到你的 QX 配置
 *   3. MITM 需开启 api.einhn4.com
 */

const url = $request.url;

// ==================== 配置区域 ====================

// 广告接口 - 直接拒绝(无响应)
const adRejectPaths = [
    "ad/space",
    "popup/activityInfo",
    "panda/popup",
    "blindBox/getOngoingActivities",
    "demand_activity/myRecordCounts",
    "activityNavigations",
];

// VIP接口 - 返回空响应(模拟VIP)
const vipEmptyPaths = [
    "vip/pricing",
    "vip/download",
    "vip/patent",
    "vip/getVipGiftPopup",
    "user/vipFrameGroup",
    "user/wallet",
    "user/oneLiveInfo",
    "deposit/pricing",
];

// 启动配置 - 返回空(使用本地缓存)
const bootstrapPath = "bootstrap";

// ==================== 处理逻辑 ====================

function matchPath(paths) {
    return paths.some(p => url.includes(`api.einhn4.com/v2.5/${p}`));
}

// 1. 广告接口 -> 完全拒绝
if (matchPath(adRejectPaths)) {
    console.log(`[ShardVault] 🚫 拦截广告: ${url}`);
    $done({ response: { status: 404 } });
    return;
}

// 2. VIP接口 + 启动配置 -> 返回空200
if (matchPath(vipEmptyPaths) || url.includes(`api.einhn4.com/v2.5/${bootstrapPath}`)) {
    console.log(`[ShardVault] 👑 模拟VIP: ${url}`);
    $done({
        response: {
            status: 200,
            headers: {
                "Content-Type": "text/plain; charset=utf-8",
                "Content-Length": "0",
                "Connection": "keep-alive",
            },
            body: ""
        }
    });
    return;
}

// 3. 其他接口 -> 放行
$done({});
