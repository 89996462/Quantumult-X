/******************************

脚本功能：猫语翻译器——解锁订阅
下载地址：https://is.gd/adB4NY
软件版本：6
脚本作者：彭于晏💞
更新时间：2023-10-5
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/myfyq.js

[mitm] 

hostname = buy.itunes.apple.com


*******************************/


var objc = JSON.parse($response.body);

    objc = 
{
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 6450664362,
    "app_item_id": 6450664362,
    "bundle_id": "com.bingqi.talat",
    "application_version": "1",
    "download_id": 502839605340192100,
    "version_external_identifier": 859735690,
    "receipt_creation_date": "2023-10-05 04:42:04 Etc/GMT",
    "receipt_creation_date_ms": "1696480924000",
    "receipt_creation_date_pst": "2023-10-04 21:42:04 America/Los_Angeles",
    "request_date": "2023-10-05 04:56:39 Etc/GMT",
    "request_date_ms": "1696481799386",
    "request_date_pst": "2023-10-04 21:56:39 America/Los_Angeles",
    "original_purchase_date": "2023-10-05 04:38:31 Etc/GMT",
    "original_purchase_date_ms": "1696480711000",
    "original_purchase_date_pst": "2023-10-04 21:38:31 America/Los_Angeles",
    "original_application_version": "1",
    "in_app": [{
      "quantity": "1",
      "product_id": "bingqi_e2",
      "transaction_id": "420001633931546",
      "original_transaction_id": "420001633931546",
      "purchase_date": "2023-10-05 04:42:03 Etc/GMT",
      "purchase_date_ms": "1696480923000",
      "purchase_date_pst": "2023-10-04 21:42:03 America/Los_Angeles",
      "original_purchase_date": "2023-10-05 04:42:04 Etc/GMT",
      "original_purchase_date_ms": "1696480924000",
      "original_purchase_date_pst": "2023-10-04 21:42:04 America/Los_Angeles",
      "expires_date": "9999-10-08 04:42:03 Etc/GMT",
      "expires_date_ms": "4090440431000",
      "expires_date_pst": "9999-10-07 21:42:03 America/Los_Angeles",
      "web_order_line_item_id": "420000768447047",
      "is_trial_period": "true",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED"
    }]
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "product_id": "bingqi_e2",
    "transaction_id": "420001633931546",
    "original_transaction_id": "420001633931546",
    "purchase_date": "2023-10-05 04:42:03 Etc/GMT",
    "purchase_date_ms": "1696480923000",
    "purchase_date_pst": "2023-10-04 21:42:03 America/Los_Angeles",
    "original_purchase_date": "2023-10-05 04:42:04 Etc/GMT",
    "original_purchase_date_ms": "1696480924000",
    "original_purchase_date_pst": "2023-10-04 21:42:04 America/Los_Angeles",
    "expires_date": "9999-10-08 04:42:03 Etc/GMT",
    "expires_date_ms": "4090440431000",
    "expires_date_pst": "9999-10-07 21:42:03 America/Los_Angeles",
    "web_order_line_item_id": "420000768447047",
    "is_trial_period": "true",
    "is_in_intro_offer_period": "false",
    "in_app_ownership_type": "PURCHASED",
    "subscription_group_identifier": "21358382"
  }],
  "pending_renewal_info": [{
    "auto_renew_product_id": "bingqi_e2",
    "product_id": "bingqi_e2",
    "original_transaction_id": "420001633931546",
    "auto_renew_status": "1"
  }],
  "status": 0
}
$done({body : JSON.stringify(objc)});
