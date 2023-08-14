/*************************************

项目名称：千本笔记——解锁VIP
下载地址：https://is.gd/FmsUjC
软件版本：1.30.0
脚本作者：彭于晏💞
更新时间：2023-8-14
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

**************************************

[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/qmbj.js

[mitm]
hostname = buy.itunes.apple.com

*************************************/


var anni = {
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "receipt_creation_date": "2023-08-12 09:09:09 Etc\/GMT",
    "bundle_id": "com.topstack.iphone.Kilonotes",
    "original_purchase_date": "2023-08-12 09:09:09 Etc\/GMT",
    "in_app": [
      {
        "quantity": "1",
        "purchase_date_ms": "1691802549000",
        "expires_date": "2099-12-31 09:09:09 Etc\/GMT",
        "expires_date_pst": "2099-12-31 09:09:09 America\/Los_Angeles",
        "is_in_intro_offer_period": "false",
        "transaction_id": "99999999999999",
        "is_trial_period": "false",
        "original_transaction_id": "99999999999999",
        "purchase_date": "2023-08-12 09:09:09 Etc\/GMT",
        "product_id": "kipa_kilonotes_quarter_subscription",
        "original_purchase_date_pst": "2023-08-12 09:09:09 America\/Los_Angeles",
        "in_app_ownership_type": "PURCHASED",
        "original_purchase_date_ms": "1691802549000",
        "web_order_line_item_id": "99999999999999",
        "expires_date_ms": "4102362549000",
        "purchase_date_pst": "2023-08-12 09:09:09 America\/Los_Angeles",
        "original_purchase_date": "2023-08-12 09:09:09 Etc\/GMT"
      }
    ],
    "receipt_creation_date_pst": "2023-08-12 09:09:09 America\/Los_Angeles",
    "request_date": "2023-08-12 09:09:09 Etc\/GMT",
    "request_date_pst": "2023-08-12 09:09:09 America\/Los_Angeles",
    "request_date_ms": "1691802549000",
    "original_purchase_date_pst": "2023-08-12 09:09:09 America\/Los_Angeles",
    "application_version": "110",
    "original_purchase_date_ms": "1691802549000",
    "receipt_creation_date_ms": "1691802549000",
    "original_application_version": "123",
  },
  "pending_renewal_info": [
    {
      "product_id": "kipa_kilonotes_quarter_subscription",
      "original_transaction_id": "99999999999999",
      "auto_renew_product_id": "kipa_kilonotes_quarter_subscription",
      "auto_renew_status": "1"
    }
  ],
  "status": 0,
  "latest_receipt_info": [
    {
      "quantity": "1",
      "purchase_date_ms": "1691802549000",
      "expires_date": "2099-12-31 09:09:09 Etc\/GMT",
      "expires_date_pst": "2099-12-31 09:09:09 America\/Los_Angeles",
      "is_in_intro_offer_period": "false",
      "transaction_id": "99999999999999",
      "is_trial_period": "false",
      "original_transaction_id": "99999999999999",
      "purchase_date": "2023-08-12 09:09:09 Etc\/GMT",
      "product_id": "kipa_kilonotes_quarter_subscription",
      "original_purchase_date_pst": "2023-08-12 09:09:09 America\/Los_Angeles",
      "in_app_ownership_type": "PURCHASED",
      "subscription_group_identifier": "66666666",
      "original_purchase_date_ms": "1691802549000",
      "web_order_line_item_id": "99999999999999",
      "expires_date_ms": "4102362549000",
      "purchase_date_pst": "2023-08-12 09:09:09 America\/Los_Angeles",
      "original_purchase_date": "2023-08-12 09:09:09 Etc\/GMT"
    }
  ]
};

$done({ body: JSON.stringify(anni) });
