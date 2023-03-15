/*******************************

脚本名称: 小熊便签+解锁订阅
下载地址:https://is.gd/EKUO0r
软件版本：1.2.2
脚本作者：彭于晏💞
更新时间：2023-3-15
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/buy.itunes.apple.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/XXBq.js

[mitm] 

hostname = buy.itunes.apple.com

*******************************/

var objc = JSON.parse($response.body);
    objc = {
  "environment" : "Production",
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 1626436197,
    "receipt_creation_date" : "2023-03-15 13:13:43 Etc/GMT",
    "bundle_id" : "com.ting.MemoWidget",
    "original_purchase_date" : "2023-03-15 13:08:34 Etc/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1678886021000",
        "expires_date" : "2099-03-18 13:13:41 Etc/GMT",
        "expires_date_pst" : "2099-03-18 06:13:41 America/Los_Angeles",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "200001572387241",
        "is_trial_period" : "true",
        "original_transaction_id" : "200001572387241",
        "purchase_date" : "2023-03-15 13:13:41 Etc/GMT",
        "product_id" : "com.memowidget.monthly",
        "original_purchase_date_pst" : "2023-03-15 06:13:43 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1678886023000",
        "web_order_line_item_id" : "200000697911420",
        "expires_date_ms" : "4077494021000",
        "purchase_date_pst" : "2023-03-15 06:13:41 America/Los_Angeles",
        "original_purchase_date" : "2023-03-15 13:13:43 Etc/GMT"
      }
    ],
    "adam_id" : 1626436197,
    "receipt_creation_date_pst" : "2023-03-15 06:13:43 America/Los_Angeles",
    "request_date" : "2023-03-15 13:14:01 Etc/GMT",
    "request_date_pst" : "2023-03-15 06:14:01 America/Los_Angeles",
    "version_external_identifier" : 854038095,
    "request_date_ms" : "1678886041096",
    "original_purchase_date_pst" : "2023-03-15 06:08:34 America/Los_Angeles",
    "application_version" : "1",
    "original_purchase_date_ms" : "1678885714000",
    "receipt_creation_date_ms" : "1678886023000",
    "original_application_version" : "1",
    "download_id" : 502263051674245797
  },
  "pending_renewal_info" : [
    {
      "product_id" : "com.memowidget.monthly",
      "original_transaction_id" : "200001572387241",
      "auto_renew_product_id" : "com.memowidget.monthly",
      "auto_renew_status" : "1"
    }
  ],
  "status" : 0,
  "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "1678886021000",
      "expires_date" : "20-03-18 13:13:41 Etc/GMT",
      "expires_date_pst" : "2099-03-18 06:13:41 America/Los_Angeles",
      "is_in_intro_offer_period" : "false",
      "transaction_id" : "200001572387241",
      "is_trial_period" : "true",
      "original_transaction_id" : "200001572387241",
      "purchase_date" : "2023-03-15 13:13:41 Etc/GMT",
      "product_id" : "com.memowidget.monthly",
      "original_purchase_date_pst" : "2023-03-15 06:13:43 America/Los_Angeles",
      "in_app_ownership_type" : "PURCHASED",
      "subscription_group_identifier" : "21075044",
      "original_purchase_date_ms" : "1678886023000",
      "web_order_line_item_id" : "200000697911420",
      "expires_date_ms" : "4077494021000",
      "purchase_date_pst" : "2023-03-15 06:13:41 America/Los_Angeles",
      "original_purchase_date" : "2023-03-15 13:13:43 Etc/GMT"
    }
  ],
  "latest_receipt" : "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"
}
$done({body : JSON.stringify(objc)});
