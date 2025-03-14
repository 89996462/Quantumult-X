/******************************

脚本功能：photoAPP——解锁VIP
下载地址：https://is.gd/uxGPUc
软件版本：2.7.6
脚本作者：彭于晏💞
更新时间：2025-3-15
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/api\.adapty\.io\/api\/v1\/sdk\/analytics\/profiles url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/photoAPP.js

[mitm] 

hostname = api.adapty.io

*******************************/

var objc = JSON.parse($response.body);
    objc = {
  "data": {
    "type": "adapty_analytics_profile",
    "id": "5ddf0a0c-4a06-4d52-b622-1bdbde245f15",
    "attributes": {
      "app_id": "dc4f233a-4ffa-4c6a-b6b8-468c9eb78f2b",
      "profile_id": "5ddf0a0c-4a06-4d52-b622-1bdbde245f15",
      "customer_user_id": "cUzYjtoNvUkhrXE_3FZ5tD",
      "is_test_user": false,
      "total_revenue_usd": 0.0,
      "segment_hash": "ef46db3751d8e999",
      "timestamp": 1741852389017,
      "paid_access_levels": {
        "premium": {
          "is_refund": false,
          "is_lifetime": true,
          "expires_at": "9999-03-16T07:52:14.000000+0000",
          "starts_at": null,
          "will_renew": false,
          "vendor_product_id": "photoapp_lifetime_sub",
          "vendor_transaction_id": "570001895087451",
          "vendor_original_transaction_id": "570001895087451",
          "store": "app_store",
          "activated_at": "2025-03-13T07:52:15.000000+0000",
          "renewed_at": "2025-03-13T07:52:14.000000+0000",
          "unsubscribed_at": "2025-03-13T07:52:43.297269+0000",
          "billing_issue_detected_at": null,
          "is_in_grace_period": false,
          "active_introductory_offer_type": "free_trial",
          "offer_id": null,
          "active_promotional_offer_type": null,
          "active_promotional_offer_id": null,
          "cancellation_reason": null,
          "id": "premium",
          "is_active": true,
          "base_plan_id": null
        }
      },
      "subscriptions": {
        "photoapp_lifetime_sub": {
          "is_refund": false,
          "is_lifetime": true,
          "expires_at": "9999-03-16T07:52:14.000000+0000",
          "starts_at": null,
          "will_renew": false,
          "vendor_product_id": "photoapp_lifetime_sub",
          "vendor_transaction_id": "570001895087451",
          "vendor_original_transaction_id": "570001895087451",
          "store": "app_store",
          "activated_at": "2025-03-13T07:52:15.000000+0000",
          "renewed_at": "2025-03-13T07:52:14.000000+0000",
          "unsubscribed_at": "2025-03-13T07:52:43.295434+0000",
          "billing_issue_detected_at": null,
          "is_in_grace_period": false,
          "active_introductory_offer_type": "free_trial",
          "offer_id": null,
          "active_promotional_offer_type": null,
          "active_promotional_offer_id": null,
          "cancellation_reason": null,
          "is_sandbox": false,
          "is_active": true,
          "base_plan_id": null
        }
      },
      "non_subscriptions": null,
      "custom_attributes": {
        "app_instance_id_1": "E0CE4D56CB3F424B",
        "app_instance_id_2": "952840C4042F1AE6",
        "closeSecs": "0",
        "design": "6",
        "isActive": "true",
        "offerId": "offer_1",
        "packagePaymentTrigger": "false",
        "paywallType": "onboarding_paywall"
      },
      "promotional_offer_eligibility": false,
      "introductory_offer_eligibility": false
    }
  }
}

$done({body : JSON.stringify(objc)});

