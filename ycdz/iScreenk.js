/*******************************

脚本功能：iScreen-小组件——解锁VIP
下载地址：https://is.gd/ktU5t2
软件版本：3.7.5
脚本作者：彭于晏💞
更新时间：2023-7-23
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/cs.kuso.xyz\/configs url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/iScreenk.js

[mitm] 

hostname = cs.kuso.xyz

*******************************/

var objc = JSON.parse($response.body);
    objc = {"status":0,"data":{"launchAd":4,"lockscreen_noVip":"0,1","main_pop_ad_interval":3,"IsandBannerAd":1,"Hudong_Interval":900,"douyin":"https://v.douyin.com/FDTcBfg/","FeedAd":2,"activityUpdateTime":1687959242,"noAds":1,"pic_lock_count":50,"ThemeFeedAd":2,"vipPopupType":1,"xiaohongshu":"https://www.xiaohongshu.com/user/profile/5fa3bfe9000000000101faae","SplashInter":500,"showRing":1,"rewardAd":0,"showOurApp":1,"BannerAd":4,"FeedBanner":"3333","ai_painting_wp":1,"ai_painting_wp_data":{"banner_img":"https://cdnq.kuso.xyz/cs/ai/images/info/banner/E1.png"},"ai_painting":1,"lang":"zh","country":"cn"},"ab":1}
$done({body : JSON.stringify(objc)});
