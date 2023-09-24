/******************************

脚本功能：AI头像馆——解锁订阅
下载地址：https://is.gd/eVigsB
软件版本：1.0.2
脚本作者：彭于晏💞
更新时间：2023-9-25
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/AITXG.js

[mitm] 

hostname = buy.itunes.apple.com


*******************************/


var objc = JSON.parse($response.body);

    objc = 
{
  "environment" : "Production",
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 1660008149,
    "receipt_creation_date" : "2023-09-24 12:32:55 Etc/GMT",
    "bundle_id" : "com.ai.avatar.maker",
    "original_purchase_date" : "2023-09-24 12:22:15 Etc/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "4090440431000",
        "expires_date" : "9999-09-27 12:31:49 Etc/GMT",
        "expires_date_pst" : "9999-09-27 05:31:49 America/Los_Angeles",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "430001563401232",
        "is_trial_period" : "true",
        "original_transaction_id" : "430001563401232",
        "purchase_date" : "2023-09-24 12:31:49 Etc/GMT",
        "product_id" : "com.ai.avatar.maker.month.3dayfree",
        "original_purchase_date_pst" : "2023-09-24 05:31:50 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1695558710000",
        "web_order_line_item_id" : "430000747978002",
        "expires_date_ms" : "4090440431000",
        "purchase_date_pst" : "9999-09-24 05:31:49 America/Los_Angeles",
        "original_purchase_date" : "2023-09-24 12:31:50 Etc/GMT"
      }
    ],
    "adam_id" : 1660008149,
    "receipt_creation_date_pst" : "2023-09-24 05:32:55 America/Los_Angeles",
    "request_date" : "2023-09-24 12:35:44 Etc/GMT",
    "request_date_pst" : "9999-09-24 05:35:44 America/Los_Angeles",
    "version_external_identifier" : 857823538,
    "request_date_ms" : "1695558944795",
    "original_purchase_date_pst" : "2023-09-24 05:22:15 America/Los_Angeles",
    "application_version" : "1.0.0.33",
    "original_purchase_date_ms" : "1695558135000",
    "receipt_creation_date_ms" : "1695558775000",
    "original_application_version" : "1.0.0.33",
    "download_id" : 502809372853284253
  },
  "pending_renewal_info" : [
    {
      "product_id" : "com.ai.avatar.maker.month.3dayfree",
      "original_transaction_id" : "430001563401232",
      "auto_renew_product_id" : "com.ai.avatar.maker.month.3dayfree",
      "auto_renew_status" : "1"
    }
  ],
  "status" : 0,
  "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "4090440431000",
      "expires_date" : "9999-09-27 12:31:49 Etc/GMT",
      "expires_date_pst" : "2023-09-27 05:31:49 America/Los_Angeles",
      "is_in_intro_offer_period" : "false",
      "transaction_id" : "430001563401232",
      "is_trial_period" : "true",
      "original_transaction_id" : "430001563401232",
      "purchase_date" : "2023-09-24 12:31:49 Etc/GMT",
      "product_id" : "com.ai.avatar.maker.month.3dayfree",
      "original_purchase_date_pst" : "2023-09-24 05:31:50 America/Los_Angeles",
      "in_app_ownership_type" : "PURCHASED",
      "subscription_group_identifier" : "21346841",
      "original_purchase_date_ms" : "1695558710000",
      "web_order_line_item_id" : "430000747978002",
      "expires_date_ms" : "4090440431000",
      "purchase_date_pst" : "9999-09-24 05:31:49 America/Los_Angeles",
      "original_purchase_date" : "2023-09-24 12:31:50 Etc/GMT"
    }
  ],
  "latest_receipt" : "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"
}

$done({body : JSON.stringify(objc)});
