/******************************

脚本功能：换脸——解锁订阅
下载地址：https://is.gd/D7mpv0
软件版本：1.6.5
脚本作者：彭于晏💞
更新时间：2023-9-27
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]


^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/BL.js

[mitm] 

hostname = buy.itunes.apple.com

*******************************/

var objc = JSON.parse($response.body);

    objc = {
  "environment" : "Production",
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 1638893585,
    "receipt_creation_date" : "2023-09-25 21:25:36 Etc/GMT",
    "bundle_id" : "com.zjp.facechange",
    "original_purchase_date" : "2023-09-25 21:20:07 Etc/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "4090440431000",
        "expires_date" : "9999-09-28 21:25:35 Etc/GMT",
        "expires_date_pst" : "9999-09-28 14:25:35 America/Los_Angeles",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "430001564795058",
        "is_trial_period" : "true",
        "original_transaction_id" : "430001564795058",
        "purchase_date" : "2023-09-25 21:25:35 Etc/GMT",
        "product_id" : "cf_week",
        "original_purchase_date_pst" : "2023-09-25 14:25:36 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1695677136000",
        "web_order_line_item_id" : "430000748682428",
        "expires_date_ms" : "4090440431000",
        "purchase_date_pst" : "9999-09-25 14:25:35 America/Los_Angeles",
        "original_purchase_date" : "2023-09-25 21:25:36 Etc/GMT"
      }
    ],
    "adam_id" : 1638893585,
    "receipt_creation_date_pst" : "2023-09-25 14:25:36 America/Los_Angeles",
    "request_date" : "2023-09-25 21:26:06 Etc/GMT",
    "request_date_pst" : "2023-09-25 14:26:06 America/Los_Angeles",
    "version_external_identifier" : 859909264,
    "request_date_ms" : "1695677166642",
    "original_purchase_date_pst" : "2023-09-25 14:20:07 America/Los_Angeles",
    "application_version" : "3",
    "original_purchase_date_ms" : "1695676807000",
    "receipt_creation_date_ms" : "1695677136000",
    "original_application_version" : "3",
    "download_id" : 502813262469674180
  },
  "pending_renewal_info" : [
    {
      "product_id" : "cf_week",
      "original_transaction_id" : "430001564795058",
      "auto_renew_product_id" : "cf_week",
      "auto_renew_status" : "1"
    }
  ],
  "status" : 0,
  "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "4090440431000",
      "expires_date" : "9999-09-28 21:25:35 Etc/GMT",
      "expires_date_pst" : "9999-09-28 14:25:35 America/Los_Angeles",
      "is_in_intro_offer_period" : "false",
      "transaction_id" : "430001564795058",
      "is_trial_period" : "true",
      "original_transaction_id" : "430001564795058",
      "purchase_date" : "2023-09-25 21:25:35 Etc/GMT",
      "product_id" : "cf_week",
      "original_purchase_date_pst" : "2023-09-25 14:25:36 America/Los_Angeles",
      "in_app_ownership_type" : "PURCHASED",
      "subscription_group_identifier" : "21008214",
      "original_purchase_date_ms" : "1695677136000",
      "web_order_line_item_id" : "430000748682428",
      "expires_date_ms" : "4090440431000",
      "purchase_date_pst" : "9999-09-25 14:25:35 America/Los_Angeles",
      "original_purchase_date" : "2023-09-25 21:25:36 Etc/GMT"
    }
  ],
}


$done({body : JSON.stringify(objc)});

