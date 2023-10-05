/******************************

脚本功能：长图拼图——解锁订阅
下载地址：https://is.gd/MWHMjJ
软件版本：1.4
脚本作者：彭于晏💞
更新时间：2023-10-5
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/ctpjq.js

[mitm] 

hostname = buy.itunes.apple.com


*******************************/


var objc = JSON.parse($response.body);

    objc = 
{
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 6450306480,
    "receipt_creation_date" : "2023-10-05 07:53:43 Etc\/GMT",
    "bundle_id" : "com.qingqiu.gokhan",
    "original_purchase_date" : "2023-10-05 06:49:14 Etc\/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "4090440431000",
        "expires_date" : "9999-10-08 07:08:39 Etc\/GMT",
        "expires_date_pst" : "9999-10-08 00:08:39 America\/Los_Angeles",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "430001575025765",
        "is_trial_period" : "true",
        "original_transaction_id" : "430001575025765",
        "purchase_date" : "2023-10-05 07:08:39 Etc\/GMT",
        "product_id" : "qingq_c",
        "original_purchase_date_pst" : "2023-10-05 00:08:40 America\/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1696489720000",
        "web_order_line_item_id" : "430000753684327",
        "expires_date_ms" : "4090440431000",
        "purchase_date_pst" : "9999-10-05 00:08:39 America\/Los_Angeles",
        "original_purchase_date" : "2023-10-05 07:08:40 Etc\/GMT"
      }
    ],
    "adam_id" : 6450306480,
    "receipt_creation_date_pst" : "2023-10-05 00:53:43 America\/Los_Angeles",
    "request_date" : "2023-10-05 07:53:44 Etc\/GMT",
    "request_date_pst" : "2023-10-05 00:53:44 America\/Los_Angeles",
    "version_external_identifier" : 859249123,
    "request_date_ms" : "1696492424647",
    "original_purchase_date_pst" : "2023-10-04 23:49:14 America\/Los_Angeles",
    "application_version" : "1",
    "original_purchase_date_ms" : "1696488554000",
    "receipt_creation_date_ms" : "1696492423000",
    "original_application_version" : "1",
    "download_id" : 502839862916402152
  },

  "environment" : "Production",
  "status" : 0,
  "pending_renewal_info" : [
    {
      "product_id" : "qingq_c",
      "original_transaction_id" : "430001575025765",
      "auto_renew_product_id" : "qingq_c",
      "auto_renew_status" : "1"
    }
  ],
  "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "4090440431000",
      "expires_date" : "9999-10-08 07:08:39 Etc\/GMT",
      "expires_date_pst" : "9999-10-08 00:08:39 America\/Los_Angeles",
      "is_in_intro_offer_period" : "false",
      "transaction_id" : "430001575025765",
      "is_trial_period" : "true",
      "original_transaction_id" : "430001575025765",
      "purchase_date" : "2023-10-05 07:08:39 Etc\/GMT",
      "product_id" : "qingq_c",
      "original_purchase_date_pst" : "2023-10-05 00:08:40 America\/Los_Angeles",
      "in_app_ownership_type" : "PURCHASED",
      "subscription_group_identifier" : "21354574",
      "original_purchase_date_ms" : "1696489720000",
      "web_order_line_item_id" : "430000753684327",
      "expires_date_ms" : "4090440431000",
      "purchase_date_pst" : "9999-10-05 00:08:39 America\/Los_Angeles",
      "original_purchase_date" : "2023-10-05 07:08:40 Etc\/GMT"
    }
  ]
}
  
$done({body : JSON.stringify(objc)});
