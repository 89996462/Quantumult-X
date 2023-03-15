/*******************************

脚本名称: 高级恋爱话术——解锁VIP
下载地址: https://is.gd/7MNvjx
软件版本：2.0.15
脚本作者：彭于晏💞
更新时间：2023-3-15
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/buy.itunes.apple.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/gjlahs.js

[mitm] 

hostname = buy.itunes.apple.com

*******************************/

var objc = JSON.parse($response.body);
    objc = {
  "environment" : "Production",
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 1630727969,
    "receipt_creation_date" : "2023-03-04 18:04:19 Etc/GMT",
    "bundle_id" : "com.1ps.lovetalk",
    "original_purchase_date" : "2023-03-04 17:51:19 Etc/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1677953057000",
        "expires_date" : "2099-03-11 18:04:17 Etc/GMT",
        "expires_date_pst" : "2099-03-11 10:04:17 America/Los_Angeles",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "200001561092708",
        "is_trial_period" : "true",
        "original_transaction_id" : "200001561092708",
        "purchase_date" : "2023-03-04 18:04:17 Etc/GMT",
        "product_id" : "com.1ps.lovetalk.normal.weekly",
        "original_purchase_date_pst" : "2023-03-04 10:04:18 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1677953058000",
        "web_order_line_item_id" : "200000692592814",
        "expires_date_ms" : "4076906657000",
        "purchase_date_pst" : "2023-03-04 10:04:17 America/Los_Angeles",
        "original_purchase_date" : "2023-03-04 18:04:18 Etc/GMT"
      }
    ],
    "adam_id" : 1630727969,
    "receipt_creation_date_pst" : "2023-03-04 10:04:19 America/Los_Angeles",
    "request_date" : "2023-03-11 03:00:08 Etc/GMT",
    "request_date_pst" : "2023-03-10 19:00:08 America/Los_Angeles",
    "version_external_identifier" : 855281776,
    "request_date_ms" : "1678503608216",
    "original_purchase_date_pst" : "2023-03-04 09:51:19 America/Los_Angeles",
    "application_version" : "1",
    "original_purchase_date_ms" : "1677952279000",
    "receipt_creation_date_ms" : "1677953059000",
    "original_application_version" : "1",
    "download_id" : 502232464674064382
  },
  "pending_renewal_info" : [
    {
      "product_id" : "com.1ps.lovetalk.normal.weekly",
      "original_transaction_id" : "200001561092708",
      "auto_renew_product_id" : "com.1ps.lovetalk.normal.weekly",
      "auto_renew_status" : "0"
    }
  ],
  "status" : 0,
  "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "1677953057000",
      "expires_date" : "2099-03-11 18:04:17 Etc/GMT",
      "expires_date_pst" : "2099-03-11 10:04:17 America/Los_Angeles",
      "is_in_intro_offer_period" : "false",
      "transaction_id" : "200001561092708",
      "is_trial_period" : "true",
      "original_transaction_id" : "200001561092708",
      "purchase_date" : "2023-03-04 18:04:17 Etc/GMT",
      "product_id" : "com.1ps.lovetalk.normal.weekly",
      "original_purchase_date_pst" : "2023-03-04 10:04:18 America/Los_Angeles",
      "in_app_ownership_type" : "PURCHASED",
      "subscription_group_identifier" : "20967767",
      "original_purchase_date_ms" : "1677953058000",
      "web_order_line_item_id" : "200000692592814",
      "expires_date_ms" : "4076906657000",
      "purchase_date_pst" : "2023-03-04 10:04:17 America/Los_Angeles",
      "original_purchase_date" : "2023-03-04 18:04:18 Etc/GMT"
    }
  ],
  "latest_receipt" : "MIIUjQYJKoZIhvcNAQcCoIIUfjCCFHoCAQExCzAJBgUrDgMCGgUAMIIDywYJKoZIhvcNAQcBoIIDvASCA7gxggO0MAoCARQCAQEEAgwAMAsCAQMCAQEEAwwBMTALAgETAgEBBAMMATEwCwIBGQIBAQQDAgEDMAwCAQ4CAQEEBAICAIowDQIBCgIBAQQFFgMxNyswDQIBDQIBAQQFAgMCIuEwDgIBAQIBAQQGAgRhMu8hMA4CAQkCAQEEBgIEUDI2MDAOAgELAgEBBAYCBAdMZgowDgIBEAIBAQQGAgQy+pBwMBICAQ8CAQEECgIIBvhJxAORB/4wFAIBAAIBAQQMDApQcm9kdWN0aW9uMBgCAQQCAQIEEHbDxxvWMgRUATBxJgGnXocwGgIBAgIBAQQSDBBjb20uMXBzLmxvdmV0YWxrMBwCAQUCAQEEFJvgCqNQRyS/5GQDpcJCS9jkfRXgMB4CAQgCAQEEFhYUMjAyMy0wMy0wNFQxODowNDoxOVowHgIBDAIBAQQWFhQyMDIzLTAzLTExVDAzOjAwOjA4WjAeAgESAgEBBBYWFDIwMjMtMDMtMDRUMTc6NTE6MTlaMEcCAQYCAQEEPyDpgoHKg389BNCRHCXh/mE/lHi8pvALhWEmmyeu9OVVK92UMnRS2gdUZ8rc2fvUcq8Vc/YqJcVz7NUZv6FitTBOAgEHAgEBBEZBnuBPzaeJ8++4jUOsfxclFStYL4TSd9UzKZl7Ubx8JzpZMnX7evBBq+3d7vT/yZ7q214jBp4Un9ChoEA8nXd2CAklv/IiMIIBmgIBEQIBAQSCAZAxggGMMAsCAgatAgEBBAIMADALAgIGsAIBAQQCFgAwCwICBrICAQEEAgwAMAsCAgazAgEBBAIMADALAgIGtAIBAQQCDAAwCwICBrUCAQEEAgwAMAsCAga2AgEBBAIMADAMAgIGpQIBAQQDAgEBMAwCAgarAgEBBAMCAQMwDAICBrECAQEEAwIBATAMAgIGtwIBAQQDAgEAMAwCAga6AgEBBAMCAQAwDwICBq4CAQEEBgIEYUjQBzASAgIGrwIBAQQJAgcAteZKPKCuMBoCAganAgEBBBEMDzIwMDAwMTU2MTA5MjcwODAaAgIGqQIBAQQRDA8yMDAwMDE1NjEwOTI3MDgwHwICBqgCAQEEFhYUMjAyMy0wMy0wNFQxODowNDoxN1owHwICBqoCAQEEFhYUMjAyMy0wMy0wNFQxODowNDoxOFowHwICBqwCAQEEFhYUMjAyMy0wMy0xMVQxODowNDoxN1owKQICBqYCAQEEIAweY29tLjFwcy5sb3ZldGFsay5ub3JtYWwud2Vla2x5oIIO4jCCBcYwggSuoAMCAQICEC2rAxu91mVz0gcpeTxEl8QwDQYJKoZIhvcNAQEFBQAwdTELMAkGA1UEBhMCVVMxEzARBgNVBAoMCkFwcGxlIEluYy4xCzAJBgNVBAsMAkc3MUQwQgYDVQQDDDtBcHBsZSBXb3JsZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9ucyBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eTAeFw0yMjEyMDIyMTQ2MDRaFw0yMzExMTcyMDQwNTJaMIGJMTcwNQYDVQQDDC5NYWMgQXBwIFN0b3JlIGFuZCBpVHVuZXMgU3RvcmUgUmVjZWlwdCBTaWduaW5nMSwwKgYDVQQLDCNBcHBsZSBXb3JsZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9uczETMBEGA1UECgwKQXBwbGUgSW5jLjELMAkGA1UEBhMCVVMwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDA3cautOi8bevBfbXOmFn2UFi2QtyV4xrF9c9kqn/SzGFM1hTjd4HEWTG3GcdNS6udJ6YcPlRyUCIePTAdSg5G5dgmKRVL4yCcrtXzJWPQmNRx+G6W846gCsUENek496v4O5TaB+VbOYX/nXlA9BoKrpVZmNMcXIpsBX2aHzRFwQTN1cmSpUYXBqykhfN3XB+F96NB5tsTEG9t8CHqrCamZj1eghXHXJsplk1+ik6OeLtXyTWUe7YAzhgKi3WVm+nDFD7BEDQEbbc8NzPfzRQ+YgzA3y9yu+1Kv+PIaQ1+lm0dTxA3btP8PRoGfWwBFMjEXzFqUvEzBchg48YDzSaBAgMBAAGjggI7MIICNzAMBgNVHRMBAf8EAjAAMB8GA1UdIwQYMBaAFF1CEGwbu8dSl05EvRMnuToSd4MrMHAGCCsGAQUFBwEBBGQwYjAtBggrBgEFBQcwAoYhaHR0cDovL2NlcnRzLmFwcGxlLmNvbS93d2RyZzcuZGVyMDEGCCsGAQUFBzABhiVodHRwOi8vb2NzcC5hcHBsZS5jb20vb2NzcDAzLXd3ZHJnNzAxMIIBHwYDVR0gBIIBFjCCARIwggEOBgoqhkiG92NkBQYBMIH/MDcGCCsGAQUFBwIBFitodHRwczovL3d3dy5hcHBsZS5jb20vY2VydGlmaWNhdGVhdXRob3JpdHkvMIHDBggrBgEFBQcCAjCBtgyBs1JlbGlhbmNlIG9uIHRoaXMgY2VydGlmaWNhdGUgYnkgYW55IHBhcnR5IGFzc3VtZXMgYWNjZXB0YW5jZSBvZiB0aGUgdGhlbiBhcHBsaWNhYmxlIHN0YW5kYXJkIHRlcm1zIGFuZCBjb25kaXRpb25zIG9mIHVzZSwgY2VydGlmaWNhdGUgcG9saWN5IGFuZCBjZXJ0aWZpY2F0aW9uIHByYWN0aWNlIHN0YXRlbWVudHMuMDAGA1UdHwQpMCcwJaAjoCGGH2h0dHA6Ly9jcmwuYXBwbGUuY29tL3d3ZHJnNy5jcmwwHQYDVR0OBBYEFLJFfcNEimtMSa9uUd4XyVFG7/s0MA4GA1UdDwEB/wQEAwIHgDAQBgoqhkiG92NkBgsBBAIFADANBgkqhkiG9w0BAQUFAAOCAQEAd4oC3aSykKWsn4edfl23vGkEoxr/ZHHT0comoYt48xUpPnDM61VwJJtTIgm4qzEslnj4is4Wi88oPhK14Xp0v0FMWQ1vgFYpRoGP7BWUD1D3mbeWf4Vzp5nsPiakVOzHvv9+JH/GxOZQFfFZG+T3hAcrFZSzlunYnoVdRHSuRdGo7/ml7h1WGVpt6isbohE0DTdAFODr8aPHdpVmDNvNXxtif+UqYPY5XY4tLqHFAblHXdHKW6VV6X6jexDzA6SCv8m0VaGIWCIF+v15a2FoEP+40e5e5KzMcoRsswIVK6o5r7AF5ldbD6QopimkS4d3naMQ32LYeWhg5/pOyshkyzCCBFUwggM9oAMCAQICFDQYWP8B/gY/jvGfH+k8AbTBRv/JMA0GCSqGSIb3DQEBBQUAMGIxCzAJBgNVBAYTAlVTMRMwEQYDVQQKEwpBcHBsZSBJbmMuMSYwJAYDVQQLEx1BcHBsZSBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eTEWMBQGA1UEAxMNQXBwbGUgUm9vdCBDQTAeFw0yMjExMTcyMDQwNTNaFw0yMzExMTcyMDQwNTJaMHUxCzAJBgNVBAYTAlVTMRMwEQYDVQQKDApBcHBsZSBJbmMuMQswCQYDVQQLDAJHNzFEMEIGA1UEAww7QXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCsrtHTtoqxGyiVrd5RUUw/M+FOXK+z/ALSZU8q1HRojHUXZc8o5EgJmHFSMiwWTniOklZkqd2LzeLUxzuiEkU3AhliZC9/YcbTWSK/q/kUo+22npm6L/Gx3DBCT7a2ssZ0qmJWu+1ENg/R5SB0k1c6XZ7cAfx4b2kWNcNuAcKectRxNrF2CXq+DSqX8bBeCxsSrSurB99jLfWI6TISolVYQ3Y8PReAHynbsamfq5YFnRXc3dtOD+cTfForLgJB9u56arZzYPeXGRSLlTM4k9oAJTauVVp8n/n0YgQHdOkdp5VXI6wrJNpkTyhy6ZawCDyIGxRjQ9eJrpjB8i2O41ElAgMBAAGjge8wgewwEgYDVR0TAQH/BAgwBgEB/wIBADAfBgNVHSMEGDAWgBQr0GlHlHYJ/vRrjS5ApvdHTX8IXjBEBggrBgEFBQcBAQQ4MDYwNAYIKwYBBQUHMAGGKGh0dHA6Ly9vY3NwLmFwcGxlLmNvbS9vY3NwMDMtYXBwbGVyb290Y2EwLgYDVR0fBCcwJTAjoCGgH4YdaHR0cDovL2NybC5hcHBsZS5jb20vcm9vdC5jcmwwHQYDVR0OBBYEFF1CEGwbu8dSl05EvRMnuToSd4MrMA4GA1UdDwEB/wQEAwIBBjAQBgoqhkiG92NkBgIBBAIFADANBgkqhkiG9w0BAQUFAAOCAQEAUqMIKRNlt7Uf5jQD7fYYd7w9yie1cOzsbDNL9pkllAeeITMDavV9Ci4r3wipgt5Kf+HnC0sFuCeYSd3BDIbXgWSugpzERfHqjxwiMOOiJWFEif6FelbwcpJ8DERUJLe1pJ8m8DL5V51qeWxA7Q80BgZC/9gOMWVt5i4B2Qa/xcoNrkfUBReIPOmc5BlkbYqUrRHcAfbleK+t6HDXDV2BPkYqLK4kocfS4H2/HfU2a8XeqQqagLERXrJkfrPBV8zCbFmZt/Sw3THaSNZqge6yi1A1FubnXHFibrDyUeKobfgqy2hzxqbEGkNJAT6pqQCKhmyDiNJccFd62vh2zBnVsDCCBLswggOjoAMCAQICAQIwDQYJKoZIhvcNAQEFBQAwYjELMAkGA1UEBhMCVVMxEzARBgNVBAoTCkFwcGxlIEluYy4xJjAkBgNVBAsTHUFwcGxlIENlcnRpZmljYXRpb24gQXV0aG9yaXR5MRYwFAYDVQQDEw1BcHBsZSBSb290IENBMB4XDTA2MDQyNTIxNDAzNloXDTM1MDIwOTIxNDAzNlowYjELMAkGA1UEBhMCVVMxEzARBgNVBAoTCkFwcGxlIEluYy4xJjAkBgNVBAsTHUFwcGxlIENlcnRpZmljYXRpb24gQXV0aG9yaXR5MRYwFAYDVQQDEw1BcHBsZSBSb290IENBMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA5JGpCR+R2x5HUOsF7V55hC3rNqJXTFXsixmJ3vlLbPUHqyIwAugYPvhQCdN/QaiY+dHKZpwkaxHQo7vkGyrDH5WeegykR4tb1BY3M8vED03OFGnRyRly9V0O1X9fm/IlA7pVj01dDfFkNSMVSxVZHbOU9/acns9QusFYUGePCLQg98usLCBvcLY/ATCMt0PPD5098ytJKBrI/s61uQ7ZXhzWyz21Oq30Dw4AkguxIRYudNU8DdtiFqujcZJHU1XBry9Bs/j743DN5qNMRX4fTGtQlkGJxHRiCxCDQYczioGxMFjsWgQyjGizjx3eZXP/Z15lvEnYdp8zFGWhd5TJLQIDAQABo4IBejCCAXYwDgYDVR0PAQH/BAQDAgEGMA8GA1UdEwEB/wQFMAMBAf8wHQYDVR0OBBYEFCvQaUeUdgn+9GuNLkCm90dNfwheMB8GA1UdIwQYMBaAFCvQaUeUdgn+9GuNLkCm90dNfwheMIIBEQYDVR0gBIIBCDCCAQQwggEABgkqhkiG92NkBQEwgfIwKgYIKwYBBQUHAgEWHmh0dHBzOi8vd3d3LmFwcGxlLmNvbS9hcHBsZWNhLzCBwwYIKwYBBQUHAgIwgbYagbNSZWxpYW5jZSBvbiB0aGlzIGNlcnRpZmljYXRlIGJ5IGFueSBwYXJ0eSBhc3N1bWVzIGFjY2VwdGFuY2Ugb2YgdGhlIHRoZW4gYXBwbGljYWJsZSBzdGFuZGFyZCB0ZXJtcyBhbmQgY29uZGl0aW9ucyBvZiB1c2UsIGNlcnRpZmljYXRlIHBvbGljeSBhbmQgY2VydGlmaWNhdGlvbiBwcmFjdGljZSBzdGF0ZW1lbnRzLjANBgkqhkiG9w0BAQUFAAOCAQEAXDaZTC14t+2Mm9zzd5vydtJ3ME/BH4WDhRuZPUc38qmbQI4s1LGQEti+9HOb7tJkD8t5TzTYoj75eP9ryAfsfTmDi1Mg0zjEsb+aTwpr/yv8WacFCXwXQFYRHnTTt4sjO0ej1W8k4uvRt3DfD0XhJ8rxbXjt57UXF6jcfiI1yiXV2Q/Wa9SiJCMR96Gsj3OBYMYbWwkvkrL4REjwYDieFfU9JmcgijNq9w2Cz97roy/5U2pbZMBjM3f3OgcsVuvaDyEO2rpzGU+12TZ/wYdV2aeZuTJC+9jVcZ5+oVK3G72TQiQSKscPHbZNnF5jyEuAF1CqitXa5PzQCQc3sHV1ITGCAbEwggGtAgEBMIGJMHUxCzAJBgNVBAYTAlVTMRMwEQYDVQQKDApBcHBsZSBJbmMuMQswCQYDVQQLDAJHNzFEMEIGA1UEAww7QXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkCEC2rAxu91mVz0gcpeTxEl8QwCQYFKw4DAhoFADANBgkqhkiG9w0BAQEFAASCAQCKrfu4o4btk3HX3loKoM4zwDu+BHINodAD9JCUy//lWHgtuDvteZdma6D5T9HkSJ85p5aGTTr907VMbRbXSYhjFe/S+f+f8m9WdCYvvC0YsyMFRqumTKpPamd1cb9hVSGpnxt11jpLxrG1gvJWGMVhaLu3724bwJqVxm5WpiVlvpQPKeXvoaWbeJg3lTlQvuH+aezyMJH/iCVPClPWNopoY66YG3c9eHU6On8LmnqerMyx6moMplzvnvFm9LAKxRP0ihw53IgtyVip8aOOfQsvorBlGvqX2wxMjflXARHA6DODCN2jaqYJxElfjFpr/eiezYCYNXqF3SFDkhzdJJ2m"
}
$done({body : JSON.stringify(objc)});
