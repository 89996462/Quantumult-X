/******************************

脚本名称: Focus Video一解锁订阅
下载地址：https://is.gd/vJ7Bfq
软件版本：3.0.1
脚本作者：彭于晏💞
更新时间：2023-8-9
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

*******************************

[rewrite_local]


^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/FocusVideo.js

[mitm] 

hostname = buy.itunes.apple.com

*******************************/

var objc = JSON.parse($response.body);

    objc = 
{
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 1669034660,
    "receipt_creation_date" : "2023-08-09 11:37:25 Etc/GMT",
    "bundle_id" : "com.focus.roller",
    "original_purchase_date" : "2023-08-03 16:57:00 Etc/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1691579481000",
        "transaction_id" : "490001449562908",
        "is_trial_period" : "false",
        "original_transaction_id" : "490001449562908",
        "purchase_date" : "2023-08-09 11:11:21 Etc/GMT",
        "product_id" : "com.focus.roller.nonconsum.permanentpro",
        "original_purchase_date_pst" : "2023-08-09 04:11:21 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1691579481000",
        "purchase_date_pst" : "2023-08-09 04:11:21 America/Los_Angeles",
        "original_purchase_date" : "2023-08-09 11:11:21 Etc/GMT"
      }
    ],
    "adam_id" : 1669034660,
    "receipt_creation_date_pst" : "2023-08-09 04:37:25 America/Los_Angeles",
    "request_date" : "2023-08-09 11:37:26 Etc/GMT",
    "request_date_pst" : "2023-08-09 04:37:26 America/Los_Angeles",
    "version_external_identifier" : 858983935,
    "request_date_ms" : "1691581046765",
    "original_purchase_date_pst" : "2023-08-03 09:57:00 America/Los_Angeles",
    "application_version" : "28",
    "original_purchase_date_ms" : "1691081820000",
    "receipt_creation_date_ms" : "1691581045000",
    "original_application_version" : "15",
    "download_id" : 502662693711297940
  },
  "environment" : "Production",
  "status" : 0,
  "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "1691579481000",
      "transaction_id" : "490001449562908",
      "is_trial_period" : "false",
      "original_transaction_id" : "490001449562908",
      "purchase_date" : "2023-08-09 11:11:21 Etc/GMT",
      "product_id" : "com.focus.roller.nonconsum.permanentpro",
      "original_purchase_date_pst" : "2023-08-09 04:11:21 America/Los_Angeles",
      "in_app_ownership_type" : "PURCHASED",
      "original_purchase_date_ms" : "1691579481000",
      "purchase_date_pst" : "2023-08-09 04:11:21 America/Los_Angeles",
      "original_purchase_date" : "2023-08-09 11:11:21 Etc/GMT"
    }
  ],
  "latest_receipt" : "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"
}
$done({body : JSON.stringify(objc)});
