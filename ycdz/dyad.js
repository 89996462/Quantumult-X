/*

 * 功能：移除直播间"在么？想跟你组个CP！"广告横幅
 * 版本：1.0
 
[rewrite_local]

^https:\/\/(mconf|apiv2|apiv3|rtbapi)\.douyucdn\.cn\/(resource\/common\/config\/inter_com_m_cp_recommendV2\.json|japi\/adgrowth\/report\/|japi\/dyadx\/gateway\/app\/getinfo|mgapi\/live\/match\/|mgapi\/activitync\/newusers\/popup|mgapi\/activitync\/popupWindow\/getConfig|japi\/operation\/activity\/app\/v2\/create\/panel\/bubble|japi\/sign\/app\/roomPushAd\/getinfo|resource\/common\/happy_game_m\.json|mgapi\/livencc\/appskin\/getActivityRecV3|japi\/carnivalApi\/nc\/appTask\/getRoomTask) url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/dyad.js

[mitm]
hostname = mconf.douyucdn.cn, apiv2.douyucdn.cn, apiv3.douyucdn.cn, rtbapi.douyucdn.cn

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
    

    if (url.includes('/mgapi/live/match/')) {
        console.log('[Douyu CP Ad Block] 处理匹配中心接口');
        
        try {
            let obj = JSON.parse(body);
            

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
    

    if (url.includes('/mgapi/activitync/newusers/popup')) {
        console.log('[Douyu CP Ad Block] 拦截新用户弹窗广告');
        $done({ body: JSON.stringify({
            error: 0,
            data: [],
            msg: "ok"
        })});
        return;
    }
    

    if (url.includes('/mgapi/activitync/popupWindow/getConfig')) {
        console.log('[Douyu CP Ad Block] 拦截弹窗窗口配置');
        $done({ body: JSON.stringify({
            error: 0,
            data: [],
            msg: "ok"
        })});
        return;
    }
    

    if (url.includes('/japi/sign/app/roomPushAd/getinfo')) {
        console.log('[Douyu CP Ad Block] 拦截直播间推送广告');
        $done({ body: JSON.stringify({
            error: 0,
            data: [],
            msg: "ok"
        })});
        return;
    }
    

    if (url.includes('/resource/common/happy_game_m.json')) {
        console.log('[Douyu CP Ad Block] 拦截游戏广告配置');
        $done({ body: JSON.stringify({
            activity: {
                anchorSwitch: 0,
                startTime: 0,
                anchorExpireTime: 0,
                endTime: 0,
                anchorIntro: ""
            },
            scfaHeartIntroductionText: [],
            isLoginOpen: 0,
            appBannerImg: "",
            webBannerImg: "",
            userPropertyIcon: "",
            jumpUrlIsOpen: 0,
            cateGuideVersion: 0,
            act2: {},
            giftConfig: {}
        })});
        return;
    }
    

    if (url.includes('douyucdn.cn') && body) {
        try {
            let obj = JSON.parse(body);
            let modified = false;
            

            function removeAdFields(data) {
                if (!data || typeof data !== 'object') return data;
                
                if (Array.isArray(data)) {
                    return data
                        .filter(item => {
                            if (typeof item === 'object' && item !== null) {
                                let str = JSON.stringify(item);

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

            $done({ body: body });
        }
        return;
    }
    

    if (url.includes('/mgapi/livencc/appskin/getActivityRecV3')) {
        console.log('[Douyu CP Ad Block] 拦截开屏活动推荐');
        try {
            let obj = JSON.parse(body);

            if (obj.data && obj.data.data) {

                let decoded = atob(obj.data.data);
                let activityData = JSON.parse(decoded);

                if (activityData.skin) {
                    activityData.skin.status = 0;
                    activityData.skin.id = 0;
                    activityData.skin.cover = "";
                    activityData.skin.banner = "";
                }
                if (activityData.ctrl) {
                    activityData.ctrl.home = 0;
                    activityData.ctrl.cate = 0;
                    activityData.ctrl.mcenter = 0;
                }
                
                obj.data.data = btoa(JSON.stringify(activityData));
            }
            $done({ body: JSON.stringify(obj) });
        } catch (e) {
            console.log(`[Douyu CP Ad Block] 开屏活动解析失败: ${e.message}`);
            $done({ body: body });
        }
        return;
    }
    
    if (url.includes('/japi/carnivalApi/nc/appTask/getRoomTask')) {
        console.log('[Douyu CP Ad Block] 拦截房间任务');
        $done({ body: JSON.stringify({
            error: 0,
            msg: "success",
            data: {
                taskList: []
            },
            redirectUrl: null
        })});
        return;
    }
    
    $done({ body: body });
    
} catch (e) {
    console.log(`[Douyu CP Ad Block] 脚本执行出错: ${e.message}`);
    console.log(`[Douyu CP Ad Block] 错误堆栈: ${e.stack}`);
    $done({ body: body });
}
