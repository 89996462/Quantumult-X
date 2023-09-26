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
        "expires_date" : "2099-09-28 21:25:35 Etc/GMT",
        "expires_date_pst" : "2099-09-28 14:25:35 America/Los_Angeles",
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
        "purchase_date_pst" : "2023-09-25 14:25:35 America/Los_Angeles",
        "original_purchase_date" : "2023-09-25 21:25:36 Etc/GMT"
      }
    ],
    "adam_id" : 1638893585,
    "receipt_creation_date_pst" : "2023-09-25 14:25:36 America/Los_Angeles",
    "request_date" : "2023-09-26 11:02:22 Etc/GMT",
    "request_date_pst" : "2023-09-26 04:02:22 America/Los_Angeles",
    "version_external_identifier" : 859909264,
    "request_date_ms" : "1695726142120",
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
      "auto_renew_status" : "0"
    }
  ],
  "status" : 0,
  "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "4090440431000",
      "expires_date" : "2099-09-28 21:25:35 Etc/GMT",
      "expires_date_pst" : "2099-09-28 14:25:35 America/Los_Angeles",
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
      "purchase_date_pst" : "2023-09-25 14:25:35 America/Los_Angeles",
      "original_purchase_date" : "2023-09-25 21:25:36 Etc/GMT"
    }
  ],
  "latest_receipt" : "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"
}


$done({body : JSON.stringify(objc)});

