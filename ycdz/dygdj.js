/******************************

脚本功能：电音阁dj——解锁VIP
下载地址：https://is.gd/jdVajc
软件版本：2.0.3
脚本作者：彭于晏💞
更新时间：2023-3-5
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

http:\/\/api\.dianyinge\.com\/apis\/user\/user_info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/dygdj.js

[mitm] 

hostname = api.dianyinge.com



*******************************/


var objc = JSON.parse($response.body);

    objc = 
{
  "result" : {
    "share_num" : 0,
    "login_imei" : null,
    "birthday" : "",
    "invite_code" : 40910,
    "like_path" : "",
    "all_dance_dividend_money" : "999999",
    "sex" : 1,
    "vip_level" : "vip5",
    "share_coin" : "99999",
    "intro" : null,
    "vip_status" : 1,
    "path" : "http://dyg.dianyinge.com/dianyinge/uploads/upload_face/user_path.png",
    "day_dividend_money" : 0,
    "sign_num" : 0,
    "name" : "彭于晏rack",
    "fans_num" : 0,
    "vip_end" : "2999-11-11 00:00:00",
    "invite_num" : 0,
    "uid" : 40910,
    "coin" : "0.00",
    "phone" : "1888888888",
    "dance_dividend_money" : "99999",
    "follow_num" : 0,
    "message_num" : 1,
    "sign_status" : 2,
    "down_path" : "",
    "play_path" : "",
    "sign_coin" : 999,
    "cash_money" : "99999",
    "order_num" : 0
  },
  "msg" : "ok",
  "code" : "200"
}


$done({body : JSON.stringify(objc)});
