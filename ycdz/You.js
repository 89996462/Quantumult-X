/******************************

脚本功能：You're So Great——解锁订阅
下载地址：https://is.gd/k1kyqT
软件版本：1.0
脚本作者：彭于晏💞
更新时间：2023-3-7
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/You.js

[mitm] 

hostname = buy.itunes.apple.com


*******************************/


var objc = JSON.parse($response.body);

    objc = 
{
  "environment" : "Production",
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 6444022109,
    "receipt_creation_date" : "2023-03-06 15:08:09 Etc/GMT",
    "bundle_id" : "com.bopulab.URSoGreat",
    "original_purchase_date" : "2023-03-06 14:57:38 Etc/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "4076492073000",
        "expires_date" : "2099-03-13 14:05:52 Etc/GMT",
        "expires_date_pst" : "2099-03-13 07:05:52 America/Los_Angeles",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "430001371024842",
        "is_trial_period" : "true",
        "original_transaction_id" : "430001371024842",
        "purchase_date" : "2023-03-06 15:05:52 Etc/GMT",
        "product_id" : "com.bopulab.URSoGreat.subscribe.001",
        "original_purchase_date_pst" : "2023-03-06 07:05:53 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1678115153000",
        "web_order_line_item_id" : "430000652593352",
        "expires_date_ms" : "4076492073000",
        "purchase_date_pst" : "2023-03-06 07:05:52 America/Los_Angeles",
        "original_purchase_date" : "2023-03-06 15:05:53 Etc/GMT"
      }
    ],
    "adam_id" : 6444022109,
    "receipt_creation_date_pst" : "2023-03-06 07:08:09 America/Los_Angeles",
    "request_date" : "2023-03-06 15:11:41 Etc/GMT",
    "request_date_pst" : "2023-03-06 07:11:41 America/Los_Angeles",
    "version_external_identifier" : 852985513,
    "request_date_ms" : "1678115501562",
    "original_purchase_date_pst" : "2023-03-06 06:57:38 America/Los_Angeles",
    "application_version" : "20221117008",
    "original_purchase_date_ms" : "1678114658000",
    "receipt_creation_date_ms" : "1678115289000",
    "original_application_version" : "20221117008",
    "download_id" : 502237785525564394
  },
  "pending_renewal_info" : [
    {
      "product_id" : "com.bopulab.URSoGreat.subscribe.001",
      "original_transaction_id" : "430001371024842",
      "auto_renew_product_id" : "com.bopulab.URSoGreat.subscribe.001",
      "auto_renew_status" : "0"
    }
  ],
  "status" : 0,
  "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "4076492073000",
      "expires_date" : "2099-03-13 14:05:52 Etc/GMT",
      "expires_date_pst" : "2099-03-13 07:05:52 America/Los_Angeles",
      "is_in_intro_offer_period" : "false",
      "transaction_id" : "430001371024842",
      "is_trial_period" : "true",
      "original_transaction_id" : "430001371024842",
      "purchase_date" : "2023-03-06 15:05:52 Etc/GMT",
      "product_id" : "com.bopulab.URSoGreat.subscribe.001",
      "original_purchase_date_pst" : "2023-03-06 07:05:53 America/Los_Angeles",
      "in_app_ownership_type" : "PURCHASED",
      "subscription_group_identifier" : "21038444",
      "original_purchase_date_ms" : "1678115153000",
      "web_order_line_item_id" : "430000652593352",
      "expires_date_ms" : "4076492073000",
      "purchase_date_pst" : "2023-03-06 07:05:52 America/Los_Angeles",
      "original_purchase_date" : "2023-03-06 15:05:53 Etc/GMT"
    }
  ],
  "latest_receipt" : "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"
}
$done({body : JSON.stringify(objc)});
