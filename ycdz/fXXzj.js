/******************************

脚本功能：呼吸 小组件——解锁订阅
下载地址：https://is.gd/yz5hgI
软件版本：1.3.0
脚本作者：彭于晏💞
更新时间：2023-3-9
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/fXXzj.js

[mitm] 

hostname = buy.itunes.apple.com


*******************************/


var objc = JSON.parse($response.body);

    objc = 
{
  "environment" : "Production",
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 6444920320,
    "receipt_creation_date" : "2023-03-09 09:14:37 Etc/GMT",
    "bundle_id" : "com.vitalii.mind",
    "original_purchase_date" : "2023-03-09 09:06:25 Etc/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "4076731074000",
        "expires_date" : "2099-03-16 08:14:32 Etc/GMT",
        "expires_date_pst" : "2099-03-16 01:14:32 America/Los_Angeles",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "430001373366255",
        "is_trial_period" : "true",
        "original_transaction_id" : "430001373366255",
        "purchase_date" : "2023-03-09 09:14:32 Etc/GMT",
        "product_id" : "com.vitalii.mind.annual5",
        "original_purchase_date_pst" : "2023-03-09 01:14:33 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1678353273000",
        "web_order_line_item_id" : "430000653791990",
        "expires_date_ms" : "4076731074000",
        "purchase_date_pst" : "2023-03-09 01:14:32 America/Los_Angeles",
        "original_purchase_date" : "2023-03-09 09:14:33 Etc/GMT"
      }
    ],
    "adam_id" : 6444920320,
    "receipt_creation_date_pst" : "2023-03-09 01:14:37 America/Los_Angeles",
    "request_date" : "2023-03-09 09:15:34 Etc/GMT",
    "request_date_pst" : "2023-03-09 01:15:34 America/Los_Angeles",
    "version_external_identifier" : 854551317,
    "request_date_ms" : "1678353334883",
    "original_purchase_date_pst" : "2023-03-09 01:06:25 America/Los_Angeles",
    "application_version" : "33",
    "original_purchase_date_ms" : "1678352785000",
    "receipt_creation_date_ms" : "1678353277000",
    "original_application_version" : "33",
    "download_id" : 502245588432497256
  },
  "pending_renewal_info" : [
    {
      "product_id" : "com.vitalii.mind.annual5",
      "original_transaction_id" : "430001373366255",
      "auto_renew_product_id" : "com.vitalii.mind.annual5",
      "auto_renew_status" : "1"
    }
  ],
  "status" : 0,
  "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "4076731074000",
      "expires_date" : "2099-03-16 08:14:32 Etc/GMT",
      "expires_date_pst" : "2099-03-16 01:14:32 America/Los_Angeles",
      "is_in_intro_offer_period" : "false",
      "transaction_id" : "430001373366255",
      "is_trial_period" : "true",
      "original_transaction_id" : "430001373366255",
      "purchase_date" : "2023-03-09 09:14:32 Etc/GMT",
      "product_id" : "com.vitalii.mind.annual5",
      "original_purchase_date_pst" : "2023-03-09 01:14:33 America/Los_Angeles",
      "in_app_ownership_type" : "PURCHASED",
      "subscription_group_identifier" : "21080758",
      "original_purchase_date_ms" : "1678353273000",
      "web_order_line_item_id" : "430000653791990",
      "expires_date_ms" : "1678954472000",
      "purchase_date_pst" : "2023-03-09 01:14:32 America/Los_Angeles",
      "original_purchase_date" : "2023-03-09 09:14:33 Etc/GMT"
    }
  ],
  "latest_receipt" : "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"
}

$done({body : JSON.stringify(objc)});
