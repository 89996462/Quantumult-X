/******************************

脚本功能：元气桌面壁纸——解锁会员
下载地址：https://is.gd/yfTj5W
软件版本：2.91.1940
脚本作者：彭于晏💞
更新时间：2023-2-23
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************
[rewrite_local]

^http[s]?:\/\/mobile-ios-wallpaper-api.zhhainiao.com\/v1\/user\/info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/yqzmbz.js

[mitm] 

hostname = mobile-ios-wallpaper-api.zhhainiao.com

*******************************/

var objc = JSON.parse($response.body);
    objc = {
  "user_info" : {
    "uid" : 76837142,
    "user_type" : 0,
    "following_count" : 0,
    "works_mobile_download_cnt" : 0,
    "nickname" : "彭于晏crack",
    "wx_openid" : "",
    "is_real_name_auth" : 0,
    "open_id" : "1624225033495252992",
    "works_mobile_cnt" : 0,
    "mobile_like_cnt" : 0,
    "mobile_like_static_cnt" : 0,
    "works_scan_cnt" : 0,
    "works_like_cnt" : 0,
    "follower_count" : 0,
    "user_desc" : "",
    "mobile_static_buy_wp_cnt" : 0,
    "mobile_buy_wp_cnt" : 0,
    "like_static_wp_cnt" : 0,
    "contract_user_type" : 0,
    "permission_vip_info" : [
      {
        "vip_ex_date" : 2676251736,
        "vip_type" : "13",
        "vip_start_date" : 0
      }
    ],
    "works_static_cnt" : 0,
    "works_mobile_like_cnt" : 0,
    "works_cnt" : 0,
    "avatar" : "http://newvip-cdn.zhhainiao.com/public/avatar/avatar4@2x.jpg",
    "login_user_info" : {
      "lenovo_info" : null,
      "facebook_info" : null,
      "mobile_info" : null,
      "wx_infos" : null,
      "qq_infos" : null,
      "is_tourist" : 0,
      "google_info" : null,
      "mail_info" : null,
      "apple_info" : null
    },
    "current_time" : 1676165575,
    "works_mobile_static_cnt" : 0,
    "like_wp_cnt" : 0,
    "static_buy_wp_cnt" : 0,
    "works_mobile_live_cnt" : 0,
    "works_live_cnt" : 0,
    "buy_wp_cnt" : 0,
    "works_download_cnt" : 0,
    "works_mobile_scan_cnt" : 0,
    "vip_type" : 0,
    "contract_status" : 0
  },
  "permission_vip_info" : [
    {
      "vip_ex_date" : 2676251736,
      "vip_type" : "13",
      "vip_start_date" : 0
    }
  ],
  "resp_common" : {
    "ret" : 0,
    "msg" : "ok",
    "request_id" : "63e841c7-2bf9bf3a"
  },
  "platforms" : [
    {
      "last_time" : 1676138665,
      "first_time" : 1676080400,
      "refer" : "",
      "frm" : "",
      "platform" : "ios"
    }
  ]
}

$done({body : JSON.stringify(objc)});
