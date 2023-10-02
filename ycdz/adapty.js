/*******************************

脚本功能：Sketchar—学习绘画——解锁订阅
下载地址：https://is.gd/OCS4iC
软件版本：8.26.1
脚本作者：彭于晏💞
更新时间：2023-10-1
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/api\.adapty\.io\/api\/v1\/sdk\/in-apps\/apple\/receipt\/validate\/ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/adapty.js

[mitm] 

hostname = api.adapty.io


*******************************/

var objc = JSON.parse($response.body);
    objc = {
  "data" : {
    "type" : "adapty_inapps_apple_receipt_validation_result",
    "id" : "efad7fd1-55ed-445a-9239-e1b8bfa372e8",
    "attributes" : {
      "app_id" : "a69cdf1c-c212-4331-86e2-ff2b9f437d4f",
      "total_revenue_usd" : 0,
      "customer_user_id" : null,
      "subscriptions" : {
        "tech.sketchar.subscription.yearly" : {
          "vendor_transaction_id" : "430001571102987",
          "offer_id" : null,
          "billing_issue_detected_at" : null,
          "is_lifetime" : false,
          "store" : "app_store",
          "vendor_product_id" : "tech.sketchar.subscription.yearly",
          "vendor_original_transaction_id" : "430001571102987",
          "will_renew" : true,
          "renewed_at" : "2023-10-01T15:06:31.000000+0000",
          "cancellation_reason" : null,
          "active_promotional_offer_id" : null,
          "active_promotional_offer_type" : null,
          "unsubscribed_at" : null,
          "is_active" : true,
          "activated_at" : "2023-10-01T15:06:32.000000+0000",
          "is_refund" : false,
          "is_in_grace_period" : false,
          "active_introductory_offer_type" : "free_trial",
          "expires_at" : "2099-10-04T15:06:31.000000+0000",
          "starts_at" : null,
          "is_sandbox" : false
        }
      },
      "promotional_offer_eligibility" : false,
      "custom_attributes" : {

      },
      "profile_id" : "efad7fd1-55ed-445a-9239-e1b8bfa372e8",
      "paid_access_levels" : {
        "premium" : {
          "id" : "premium",
          "is_lifetime" : false,
          "vendor_product_id" : "tech.sketchar.subscription.yearly",
          "active_promotional_offer_type" : null,
          "cancellation_reason" : null,
          "billing_issue_detected_at" : null,
          "unsubscribed_at" : null,
          "expires_at" : "2099-10-04T15:06:31.000000+0000",
          "will_renew" : true,
          "is_active" : true,
          "offer_id" : null,
          "is_in_grace_period" : false,
          "activated_at" : "2023-10-01T15:06:32.000000+0000",
          "active_promotional_offer_id" : null,
          "renewed_at" : "2023-10-01T15:06:31.000000+0000",
          "is_refund" : false,
          "active_introductory_offer_type" : "free_trial",
          "store" : "app_store",
          "starts_at" : null
        }
      },
      "introductory_offer_eligibility" : false,
      "apple_validation_result" : {
        "environment" : "Production",
        "receipt" : {
          "receipt_type" : "Production",
          "app_item_id" : 1221482822,
          "receipt_creation_date" : "2023-10-01 15:07:16 Etc/GMT",
          "bundle_id" : "tech.sketchar.ios",
          "original_purchase_date" : "2023-10-01 15:02:17 Etc/GMT",
          "in_app" : [
            {
              "quantity" : "1",
              "purchase_date_ms" : "4090440431000",
              "expires_date" : "2099-10-04 15:06:31 Etc/GMT",
              "expires_date_pst" : "2099-10-04 08:06:31 America/Los_Angeles",
              "is_in_intro_offer_period" : "false",
              "transaction_id" : "430001571102987",
              "is_trial_period" : "true",
              "original_transaction_id" : "430001571102987",
              "purchase_date" : "2023-10-01 15:06:31 Etc/GMT",
              "product_id" : "tech.sketchar.subscription.yearly",
              "original_purchase_date_pst" : "2023-10-01 08:06:32 America/Los_Angeles",
              "in_app_ownership_type" : "PURCHASED",
              "original_purchase_date_ms" : "1696172792000",
              "web_order_line_item_id" : "430000751784558",
              "expires_date_ms" : "4090440431000",
              "purchase_date_pst" : "2023-10-01 08:06:31 America/Los_Angeles",
              "original_purchase_date" : "2023-10-01 15:06:32 Etc/GMT"
            }
          ],
          "adam_id" : 1221482822,
          "receipt_creation_date_pst" : "2023-10-01 08:07:16 America/Los_Angeles",
          "request_date" : "2023-10-01 15:07:48 Etc/GMT",
          "request_date_pst" : "2023-10-01 08:07:48 America/Los_Angeles",
          "version_external_identifier" : 860219844,
          "request_date_ms" : "1696172868049",
          "original_purchase_date_pst" : "2023-10-01 08:02:17 America/Los_Angeles",
          "application_version" : "1286",
          "original_purchase_date_ms" : "1696172537000",
          "receipt_creation_date_ms" : "1696172836000",
          "original_application_version" : "1286",
          "download_id" : 502829507349068502
        },
        "pending_renewal_info" : [
          {
            "product_id" : "tech.sketchar.subscription.yearly",
            "original_transaction_id" : "430001571102987",
            "auto_renew_product_id" : "tech.sketchar.subscription.yearly",
            "auto_renew_status" : "1"
          }
        ],
        "status" : 0,
        "latest_receipt_info" : [
          {
            "quantity" : "1",
            "purchase_date_ms" : "4090440431000",
            "expires_date" : "2099-10-04 15:06:31 Etc/GMT",
            "expires_date_pst" : "2099-10-04 08:06:31 America/Los_Angeles",
            "is_in_intro_offer_period" : "false",
            "transaction_id" : "430001571102987",
            "is_trial_period" : "true",
            "original_transaction_id" : "430001571102987",
            "purchase_date" : "2023-10-01 15:06:31 Etc/GMT",
            "product_id" : "tech.sketchar.subscription.yearly",
            "original_purchase_date_pst" : "2023-10-01 08:06:32 America/Los_Angeles",
            "in_app_ownership_type" : "PURCHASED",
            "subscription_group_identifier" : "20459405",
            "original_purchase_date_ms" : "1696172792000",
            "web_order_line_item_id" : "430000751784558",
            "expires_date_ms" : "4090440431000",
            "purchase_date_pst" : "2023-10-01 08:06:31 America/Los_Angeles",
            "original_purchase_date" : "2023-10-01 15:06:32 Etc/GMT"
          }
        ],
        "latest_receipt" : "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"
      },
      "non_subscriptions" : null
    }
  }
}

$done({body : JSON.stringify(objc)});
