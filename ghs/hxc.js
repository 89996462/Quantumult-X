/******************************
/******************************
  
# 脚本功能：含羞草(h9mcq)——解锁—VIP视频—净化广告—捕获
# 目标站点：https://www.h9mcq.com/home
# 抓包校验：2026-06-06-164219
# 脚本作者：彭于晏💞
# 更新时间：2026-6-6
# 使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************


[rewrite_local]

^https?:\/\/[^\/]+\/.*\.m3u8(\?.*)?$ url script-request-header https://raw.githubusercontent.com/89996462/Quantumult-X/main/ghs/hxc.js

^https?:\/\/[^\/]+\/.*\.flv(\?.*)?$ url script-request-header https://raw.githubusercontent.com/89996462/Quantumult-X/main/ghs/hxc.js

^https?:\/\/[^\/]+\.uwegu\.com\/ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ghs/hxc.js

^https?:\/\/[^\/]+\.s1p7t\.com\/ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ghs/hxc.js

[filter-local]

^https?:\/\/a45n\.n4e4\.com\/ - reject

^https?:\/\/[^\/]+\/aes\/cover\/ads\/ - reject

^https?:\/\/[^\/]+\/cover\/ads\/ - reject

^https?:\/\/www\.google-analytics\.com\/ - reject

^https?:\/\/www\.googletagmanager\.com\/ - reject

[mitm]

hostname = www.h9mcq.com, *.h9mcq.com, a74d.uwegu.com, *.uwegu.com, a93x.s1p7t.com, *.s1p7t.com, i01g.nasuiyile.com, j01x.nasuiyile.com, *.nasuiyile.com, *.q3df4.com, *.n4e4.com


*******************************/


const AD_TITLE_RE =
  /(博万体育|新葡京|博业体育|永利皇宫|开元棋牌|PG游戏|PG电子|裸聊|抖阴|AI科技|AI脱衣|男性约炮|同圈速配|可乐视频|免费抖阴|91男漫|抖欲男漫|男男社区|爱威奶|全网片源|Pornhub|铁粉空间|英皇娱乐|棋牌|体育投注|bw333|xsgdwf|by2258)/i;

const AD_URL_RE = /\/cover\/ads\/|\/aes\/cover\/ads\/|\/upload_01\/ads\//i;

function isAdItem(item) {
  if (!item || typeof item !== "object") return false;
  if (String(item.des || "").toLowerCase() === "banner") return true;
  var name = String(item.name || item.title || "");
  if (name && AD_TITLE_RE.test(name)) return true;
  var thumb = String(item.thumb || item.url || item.h5Url || item.image || "");
  if (AD_URL_RE.test(thumb)) return true;
  if (item.adsId !== undefined) return true;
  return false;
}

function stripAdList(arr) {
  if (!Array.isArray(arr)) return arr;
  for (var i = arr.length - 1; i >= 0; i--) {
    if (isAdItem(arr[i])) arr.splice(i, 1);
  }
  return arr;
}

function stripPanelLayouts(layouts) {
  if (!Array.isArray(layouts)) return layouts;
  for (var i = layouts.length - 1; i >= 0; i--) {
    var lay = layouts[i];
    if (!lay || typeof lay !== "object") continue;
    if (String(lay.layoutCode || "").toLowerCase() === "banner") {
      layouts.splice(i, 1);
      continue;
    }
    if (lay.layoutContent && typeof lay.layoutContent === "string") {
      try {
        var lc = JSON.parse(lay.layoutContent);
        if (lc.adsId !== undefined || String(lc.type || "").toLowerCase() === "base") {
          if (lay.layoutName && /banner|广告/i.test(lay.layoutName)) {
            layouts.splice(i, 1);
          }
        }
      } catch (e) {}
    }
  }
  return layouts;
}

function unlockUserFields(node) {
  if (!node || typeof node !== "object") return;
  if (node.vip && typeof node.vip === "object") {
    if (node.vip.type !== undefined) node.vip.type = 1;
    if (node.vip.level !== undefined) node.vip.level = 5;
    if (node.vip.endTime !== undefined) node.vip.endTime = Math.floor(Date.now() / 1000) + 86400 * 365;
    if (node.vip.expireTime !== undefined) node.vip.expireTime = Math.floor(Date.now() / 1000) + 86400 * 365;
  }
  if (node.coin !== undefined) node.coin = 99999;
  if (node.point !== undefined && Number(node.point) > 0) node.point = 0;
  if (node.isVip !== undefined) node.isVip = 1;
  if (node.isBuy !== undefined) node.isBuy = 1;
  if (node.isNeedLogin !== undefined) node.isNeedLogin = 0;
  if (node.Authority && typeof node.Authority === "object") {
    node.Authority.isVip = true;
    if (node.Authority.type !== undefined) node.Authority.type = 3;
  }
}

function unlockVideoBlock(data) {
  if (!data || typeof data !== "object") return;
  if (data.canPlay !== undefined) data.canPlay = true;
  if (data.canPrePlay !== undefined) data.canPrePlay = true;
  if (data.discountPoint !== undefined) data.discountPoint = 0;
  if (data.downloadPoint !== undefined) data.downloadPoint = 0;
  if (data.info && typeof data.info === "object") {
    var info = data.info;
    info.isBuy = 1;
    info.point = 0;
    if (info.isVip !== undefined) info.isVip = 1;
    if (info.isNeedLogin !== undefined) info.isNeedLogin = 0;
    if (info.isTemporarilyFree !== undefined) info.isTemporarilyFree = 1;
    if (!info.url && info.preUrl) info.url = info.preUrl;
  }
}

function walkUnlock(node) {
  if (!node || typeof node !== "object") return;
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) walkUnlock(node[i]);
    return;
  }
  unlockVideoBlock(node);
  unlockUserFields(node);
  if (node.info && typeof node.info === "object") {
    unlockVideoBlock(node);
    unlockUserFields(node.info);
    if (node.info.Layouts) stripPanelLayouts(node.info.Layouts);
  }
  if (node.data && typeof node.data === "object") {
    walkUnlock(node.data);
  }
  var keys = Object.keys(node);
  for (var j = 0; j < keys.length; j++) {
    var k = keys[j];
    if (k === "data" || k === "info") continue;
    walkUnlock(node[k]);
  }
}

function stripAdsPayload(payload) {
  if (!payload || typeof payload !== "object") return;
  if (Array.isArray(payload.list)) stripAdList(payload.list);
  if (Array.isArray(payload)) {
    for (var i = payload.length - 1; i >= 0; i--) {
      if (isAdItem(payload[i])) payload.splice(i, 1);
    }
  }
  if (payload.info && payload.info.Layouts) stripPanelLayouts(payload.info.Layouts);
  if (payload.data && Array.isArray(payload.data)) {
    for (var j = payload.data.length - 1; j >= 0; j--) {
      if (isAdItem(payload.data[j])) payload.data.splice(j, 1);
    }
  }
  walkUnlock(payload);
}

function processBody(body) {
  if (!body || body.indexOf('"code"') < 0) return null;
  var wrapper;
  try {
    wrapper = JSON.parse(body);
  } catch (e) {
    return null;
  }
  if (!wrapper || wrapper.code !== 0) return null;
  try {
    if (wrapper.data !== undefined) {
      if (Array.isArray(wrapper.data)) {
        for (var i = wrapper.data.length - 1; i >= 0; i--) {
          if (isAdItem(wrapper.data[i])) wrapper.data.splice(i, 1);
        }
      }
      stripAdsPayload(wrapper.data);
      walkUnlock(wrapper.data);
    }
    walkUnlock(wrapper);
    return JSON.stringify(wrapper);
  } catch (e) {
    return null;
  }
}

var body = $response.body;
var newBody = processBody(body);
if (newBody) {
  $done({ body: newBody, headers: $response.headers });
} else {
  $done();
}
