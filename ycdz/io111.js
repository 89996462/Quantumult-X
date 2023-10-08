/******************************

脚本功能：mg中文版——解锁VIP
下载地址：https://is.gd/ec7J53
软件版本：1.3.1
脚本作者：彭于晏💞
更新时间：2023-10-5
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************

[rewrite_local]

^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/io111.js

[mitm] 

hostname = buy.itunes.apple.com


*******************************/


var objc = JSON.parse($response.body);

    objc = 
{
  "status" : 0,
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 6447294089,
    "receipt_creation_date" : "2023-09-09 16:06:26 Etc/GMT",
    "bundle_id" : "com.hk.zhongwenhuatu",
    "original_purchase_date" : "2023-09-09 16:00:00 Etc/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1694250549000",
        "expires_date" : "9999-09-09 09:09:09 Etc/GMT",
        "expires_date_pst" : "9999-09-09 06:06:06 America/Los_Angeles",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "490001314520000",
        "is_trial_period" : "false",
        "original_transaction_id" : "490001314520000",
        "purchase_date" : "2023-09-09 09:09:09 Etc/GMT",
        "product_id" : "com.hk.zhongwenhuatu.year",
        "original_purchase_date_pst" : "2023-09-09 02:09:10 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1694250550000",
        "web_order_line_item_id" : "490000123456789",
        "expires_date_ms" : "4092599349000",
        "purchase_date_pst" : "2023-09-09 02:09:09 America/Los_Angeles",
        "original_purchase_date" : "2023-09-09 09:09:10 Etc/GMT"
      }
    ],
    "adam_id" : 6447294089,
    "receipt_creation_date_pst" : "2023-09-09 06:06:26 America/Los_Angeles",
    "request_date" : "2023-09-09 16:06:27 Etc/GMT",
    "request_date_pst" : "2023-09-09 06:06:27 America/Los_Angeles",
    "version_external_identifier" : 859051428,
    "request_date_ms" : "1694273635000",
    "original_purchase_date_pst" : "2023-09-09 06:00:00 America/Los_Angeles",
    "application_version" : "38",
    "original_purchase_date_ms" : "1694273430000",
    "receipt_creation_date_ms" : "1694273634000",
    "original_application_version" : "38",
    "download_id" : 502843394961885440
  },
  "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "1694250549000",
      "expires_date" : "9999-09-09 09:09:09 Etc/GMT",
      "expires_date_pst" : "9999-09-09 06:06:06 America/Los_Angeles",
      "is_in_intro_offer_period" : "false",
      "transaction_id" : "490001314520000",
      "is_trial_period" : "false",
      "original_transaction_id" : "490001314520000",
      "purchase_date" : "2023-09-09 09:09:09 Etc/GMT",
      "product_id" : "com.hk.zhongwenhuatu.year",
      "original_purchase_date_pst" : "2023-09-09 02:09:10 America/Los_Angeles",
      "in_app_ownership_type" : "PURCHASED",
      "original_purchase_date_ms" : "1694250550000",
      "web_order_line_item_id" : "490000123456789",
      "expires_date_ms" : "4092599349000",
      "purchase_date_pst" : "2023-09-09 02:09:09 America/Los_Angeles",
      "original_purchase_date" : "2023-09-09 09:09:10 Etc/GMT"
    }
  ],
  "latest_receipt" : "py996",
  "environment" : "Production",
  "pending_renewal_info" : [
    {
      "product_id" : "com.hk.zhongwenhuatu.year",
      "original_transaction_id" : "490001314520000",
      "auto_renew_product_id" : "com.hk.zhongwenhuatu.year",
      "auto_renew_status" : "1"
    }
  ],
  "warning" : "仅供学习，禁止转载或售卖",
  "Telegram" : "https://t.me/py996"
};
  
$done({body : JSON.stringify(objc)});
