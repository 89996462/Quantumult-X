/******************************

脚本功能：Picsart 美易——解锁VIP
下载地址：https://is.gd/XXUsD9
软件版本：26.9.2
脚本作者：彭于晏💞
更新时间：2025-3-15
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/api.aidimension.cn/shop/subscription/apple/purchases url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/Picsart.js


[mitm] 
hostname = api.aidimension.cn

*******************************/

var objc = JSON.parse($response.body);
    objc = {
  "status" : "success",
  "response" : [
    {
      "status" : "SUBSCRIPTION_PURCHASED",
      "order_id" : "490001314520000",
      "original_order_id" : "490001314520000",
      "is_trial" : true,
      "plan_meta" : {
        "storage_limit_in_mb" : 20480,
        "frequency" : "yearly",
        "scope_id" : "full",
        "id" : "com.picsart.editor.subscription_yearly",
        "product_id" : "subscription_yearly",
        "level" : 2000,
        "description" : "china",
        "type" : "renewable",
        "auto_renew_product_id" : "com.picsart.editor.subscription_yearly",
        "tier_id" : "gold_old",
        "permissions" : [
          "premium_tools_standard",
          "premium_tools_ai"
        ]
      },
      "limitation" : {
        "max_count" : 5,
        "limits_exceeded" : false
      },
      "reason" : "ok",
      "subscription_id" : "com.picsart.editor.subscription_yearly",
      "is_eligible_for_introductory" : false,
      "purchase_date" : 1687020148000,
      "expire_date" : 4092599349000
    }
  ]
}

$done({body : JSON.stringify(objc)});

