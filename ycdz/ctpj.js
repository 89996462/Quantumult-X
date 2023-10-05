/******************************

脚本功能：长图拼接——解锁订阅
下载地址：https://is.gd/GJXSnv
软件版本：3.2
脚本作者：彭于晏💞
更新时间：2023-10-5
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/ctpj.js

[mitm] 

hostname = buy.itunes.apple.com


*******************************/


var objc = JSON.parse($response.body);

    objc = 
{
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 6449481742,
    "receipt_creation_date" : "2023-10-05 06:41:22 Etc\/GMT",
    "bundle_id" : "com.chengwang.ha",
    "original_purchase_date" : "2023-10-05 06:29:56 Etc\/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "4090440431000",
        "expires_date" : "9999-10-08 06:36:09 Etc\/GMT",
        "expires_date_pst" : "9999-10-07 23:36:09 America\/Los_Angeles",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "430001575003492",
        "is_trial_period" : "true",
        "original_transaction_id" : "430001575003492",
        "purchase_date" : "2023-10-05 06:36:09 Etc\/GMT",
        "product_id" : "chengw_c2",
        "original_purchase_date_pst" : "2023-10-04 23:36:10 America\/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1696487770000",
        "web_order_line_item_id" : "430000753671692",
        "expires_date_ms" : "4090440431000",
        "purchase_date_pst" : "9999-10-04 23:36:09 America\/Los_Angeles",
        "original_purchase_date" : "2023-10-05 06:36:10 Etc\/GMT"
      }
    ],
    "adam_id" : 6449481742,
    "receipt_creation_date_pst" : "2023-10-04 23:41:22 America\/Los_Angeles",
    "request_date" : "2023-10-05 06:41:23 Etc\/GMT",
    "request_date_pst" : "2023-10-04 23:41:23 America\/Los_Angeles",
    "version_external_identifier" : 859823851,
    "request_date_ms" : "1696488083951",
    "original_purchase_date_pst" : "2023-10-04 23:29:56 America\/Los_Angeles",
    "application_version" : "2",
    "original_purchase_date_ms" : "1696487396000",
    "receipt_creation_date_ms" : "1696488082000",
    "original_application_version" : "2",
    "download_id" : 502839823203872408
  },

  "environment" : "Production",
  "status" : 0,
  "pending_renewal_info" : [
    {
      "product_id" : "chengw_c2",
      "original_transaction_id" : "430001575003492",
      "auto_renew_product_id" : "chengw_c2",
      "auto_renew_status" : "0"
    }
  ],
  "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "4090440431000",
      "expires_date" : "9999-10-08 06:36:09 Etc\/GMT",
      "expires_date_pst" : "9999-10-07 23:36:09 America\/Los_Angeles",
      "is_in_intro_offer_period" : "false",
      "transaction_id" : "430001575003492",
      "is_trial_period" : "true",
      "original_transaction_id" : "430001575003492",
      "purchase_date" : "2023-10-05 06:36:09 Etc\/GMT",
      "product_id" : "chengw_c2",
      "original_purchase_date_pst" : "2023-10-04 23:36:10 America\/Los_Angeles",
      "in_app_ownership_type" : "PURCHASED",
      "subscription_group_identifier" : "21345232",
      "original_purchase_date_ms" : "1696487770000",
      "web_order_line_item_id" : "430000753671692",
      "expires_date_ms" : "4090440431000",
      "purchase_date_pst" : "2023-10-04 23:36:09 America\/Los_Angeles",
      "original_purchase_date" : "2023-10-05 06:36:10 Etc\/GMT"
    }
  ]
}
  
$done({body : JSON.stringify(objc)});
