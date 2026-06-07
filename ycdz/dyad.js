/*
 * 功能：移除直播间"在么？想跟你组个CP！"广告横幅
 * 版本：1.0

[rewrite_local]

^https:\/\/mconf\.douyucdn\.cn\/resource\/common\/config\/inter_com_m_cp_recommendV2\.json url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/dyad.js
^https:\/\/apiv2\.douyucdn\.cn\/japi\/adgrowth\/report\/iosReport url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/dyad.js
^https:\/\/rtbapi\.douyucdn\.cn\/japi\/dyadx\/gateway\/app\/getinfo url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/dyad.js
^https:\/\/apiv3\.douyucdn\.cn\/mgapi\/live\/match\/ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/dyad.js

[mitm]
hostname = mconf.douyucdn.cn, apiv2.douyucdn.cn, rtbapi.douyucdn.cn, apiv3.douyucdn.cn
 */

let url = $request.url;
let body = $response.body;

console.log(`[Douyu CP Ad Block] 拦截请求: ${url}`);

try {
    // 处理 CP 推荐配置文件
    if (url.includes('inter_com_m_cp_recommendV2.json')) {
        console.log('[Douyu CP Ad Block] 处理 CP 推荐配置文件');
        
        let obj = JSON.parse(body);
        
        // 禁用 CP 推荐功能
        obj.isOpen = 0;
        obj.tipsWindow = 0;
        obj.tipsText = "";
        obj.boxAward = [];
        obj.roomWhitelist = [];
        obj.roomBlacklist = [];
        obj.lOrnament = 0;
        obj.sOrnament = 0;
        obj.actStartTime = 0;
        obj.actEndTime = 0;
        
        // 清空所有装饰和活动图片
        delete obj.honorPic1;
        delete obj.honorPic2;
        delete obj.lotteryTaskPic;
        delete obj.loginPropPic;
        delete obj.svga;
        
        $done({ body: JSON.stringify(obj) });
        return;
    }
    
    // 处理广告增长报告接口
    if (url.includes('/japi/adgrowth/report/')) {
        console.log('[Douyu CP Ad Block] 拦截广告增长报告');
        $done({ body: JSON.stringify({
            code: 0,
            msg: "success",
            data: {}
        })});
        return;
    }
    
    // 处理广告 SDK 接口
    if (url.includes('/dyadx/gateway/app/getinfo')) {
        console.log('[Douyu CP Ad Block] 拦截广告 SDK 接口');
        $done({ body: JSON.stringify({
            code: 0,
            msg: "success",
            data: {
                ads: [],
                enable: false
            }
        })});
        return;
    }
    
    // 处理匹配中心相关接口
    if (url.includes('/mgapi/live/match/')) {
        console.log('[Douyu CP Ad Block] 处理匹配中心接口');
        
        try {
            let obj = JSON.parse(body);
            
            // 递归移除 CP 匹配相关内容
            function cleanCPData(data) {
                if (!data || typeof data !== 'object') return data;
                
                if (Array.isArray(data)) {
                    return data.filter(item => {
                        if (typeof item === 'object' && item !== null) {
                            // 过滤掉包含 CP、匹配、心动等关键词的对象
                            let str = JSON.stringify(item);
                            return !/cp|匹配|心动|组个|recommend/i.test(str);
                        }
                        return true;
                    }).map(item => cleanCPData(item));
                }
                
                let cleaned = {};
                for (let key in data) {
                    if (data.hasOwnProperty(key)) {
                        // 跳过包含敏感关键词的字段
                        if (/cp|match|recommend|心动|匹配/i.test(key)) {
                            console.log(`[Douyu CP Ad Block] 移除字段: ${key}`);
                            continue;
                        }
                        
                        let value = data[key];
                        if (typeof value === 'object' && value !== null) {
                            cleaned[key] = cleanCPData(value);
                        } else {
                            cleaned[key] = value;
                        }
                    }
                }
                return cleaned;
            }
            
            let result = cleanCPData(obj);
            $done({ body: JSON.stringify(result) });
        } catch (e) {
            console.log(`[Douyu CP Ad Block] JSON 解析失败: ${e.message}`);
            $done({ body: body });
        }
        return;
    }
    
    // 处理直播间信息接口（尝试从响应中移除广告）
    if (url.includes('douyucdn.cn') && body) {
        try {
            let obj = JSON.parse(body);
            let modified = false;
            
            // 递归清理函数
            function removeAdFields(data) {
                if (!data || typeof data !== 'object') return data;
                
                if (Array.isArray(data)) {
                    return data
                        .filter(item => {
                            if (typeof item === 'object' && item !== null) {
                                let str = JSON.stringify(item);
                                // 过滤包含广告相关关键词的对象
                                return !/cp|匹配|心动|组个|ad.*growth|recommend/i.test(str);
                            }
                            return true;
                        })
                        .map(item => removeAdFields(item));
                }
                
                let cleaned = {};
                for (let key in data) {
                    if (data.hasOwnProperty(key)) {
                        let value = data[key];
                        
                        // 跳过广告相关字段
                        if (/cp|match|recommend|ad.*growth|心动|匹配|广告/i.test(key)) {
                            console.log(`[Douyu CP Ad Block] 移除字段: ${key}`);
                            modified = true;
                            continue;
                        }
                        
                        if (typeof value === 'object' && value !== null) {
                            cleaned[key] = removeAdFields(value);
                        } else {
                            cleaned[key] = value;
                        }
                    }
                }
                return cleaned;
            }
            
            let result = removeAdFields(obj);
            
            if (modified) {
                console.log('[Douyu CP Ad Block] 已清理直播间数据中的广告字段');
                $done({ body: JSON.stringify(result) });
            } else {
                $done({ body: body });
            }
        } catch (e) {
            // 不是 JSON 数据，直接返回
            $done({ body: body });
        }
        return;
    }
    
    // 默认：不做任何修改
    $done({ body: body });
    
} catch (e) {
    console.log(`[Douyu CP Ad Block] 脚本执行出错: ${e.message}`);
    console.log(`[Douyu CP Ad Block] 错误堆栈: ${e.stack}`);
    $done({ body: body });
}
