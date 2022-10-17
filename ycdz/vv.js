

/******************************

脚本功能：Apollo-记录你的影视生活
下载地址：http://mtw.so/6jr2E8
软件版本：1.1.1
脚本作者：彭于晏
更新时间：2022-9-11
问题反馈：QQ+89996462
QQ会员群：779392027
TG反馈群：https://t.me/plus8889
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

全家桶可以解锁
*******************************

[rewrite_local]

^https:\/\/blooming-forest-98906\.herokuapp\.com\/ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/vv.js

[mitm] 

hostname = blooming-forest-98906.herokuapp.com


*******************************/


var objc = JSON.parse($response.body);

    objc = 
{
  "status" : 0,
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 961390574,
    "receipt_creation_date" : "2022-10-17 07:08:31 Etc/GMT",
    "bundle_id" : "com.grailr.CARROTweather",
    "original_purchase_date" : "2022-10-17 06:49:19 Etc/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "4095904424000",
        "expires_date" : "9999-10-24 07:08:29 Etc/GMT",
        "expires_date_pst" : "9999-10-24 00:08:29 America/Los_Angeles",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "430001248171377",
        "is_trial_period" : "true",
        "original_transaction_id" : "430001248171377",
        "purchase_date" : "2022-10-17 07:08:29 Etc/GMT",
        "product_id" : "com.grailr.carrotWeather.newPremiumGold1year",
        "original_purchase_date_pst" : "2022-10-17 00:08:30 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1665990510000",
        "web_order_line_item_id" : "430000591030132",
        "expires_date_ms" : "1666595309000",
        "purchase_date_pst" : "2022-10-17 00:08:29 America/Los_Angeles",
        "original_purchase_date" : "2022-10-17 07:08:30 Etc/GMT"
      }
    ],
    "adam_id" : 961390574,
    "receipt_creation_date_pst" : "2022-10-17 00:08:31 America/Los_Angeles",
    "request_date" : "2022-10-17 07:09:25 Etc/GMT",
    "request_date_pst" : "2022-10-17 00:09:25 America/Los_Angeles",
    "version_external_identifier" : 852446003,
    "request_date_ms" : "1665990565072",
    "original_purchase_date_pst" : "2022-10-16 23:49:19 America/Los_Angeles",
    "application_version" : "5.8.2.4",
    "original_purchase_date_ms" : "1665989359000",
    "receipt_creation_date_ms" : "1665990511000",
    "original_application_version" : "5.8.2.4",
    "download_id" : 501840463645590460
  },
  "service" : "apple",
  "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "1665990509000",
      "expires_date" : "9999-10-24 07:08:29 Etc/GMT",
      "expires_date_pst" : "9999-10-24 00:08:29 America/Los_Angeles",
      "is_in_intro_offer_period" : "false",
      "transaction_id" : "430001248171377",
      "is_trial_period" : "true",
      "original_transaction_id" : "430001248171377",
      "purchase_date" : "2022-10-17 07:08:29 Etc/GMT",
      "product_id" : "com.grailr.carrotWeather.newPremiumGold1year",
      "original_purchase_date_pst" : "2022-10-17 00:08:30 America/Los_Angeles",
      "in_app_ownership_type" : "PURCHASED",
      "subscription_group_identifier" : "20701460",
      "original_purchase_date_ms" : "1665990510000",
      "web_order_line_item_id" : "430000591030132",
      "expires_date_ms" : "4095904424000",
      "purchase_date_pst" : "2022-10-17 00:08:29 America/Los_Angeles",
      "original_purchase_date" : "2022-10-17 07:08:30 Etc/GMT"
    }
  ],
  "latest_receipt" : "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",
  "environment" : "Production",
  "pending_renewal_info" : [
    {
      "product_id" : "com.grailr.carrotWeather.newPremiumGold1year",
      "original_transaction_id" : "430001248171377",
      "auto_renew_product_id" : "com.grailr.carrotWeather.newPremiumGold1year",
      "auto_renew_status" : "1"
    }
  ],
  "sandbox" : false
}

$done({body : JSON.stringify(objc)});
