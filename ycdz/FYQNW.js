/*******************************

脚本功能：翻译全能王
下载地址：https://is.gd/SYL9pu
软件版本：9.0.1
脚本作者：彭于晏💞
更新时间：2023-9-12
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/api.528529.com\/apple_product\/ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/FYQNW.js

[mitm] 

hostname = api.528529.com

*******************************/

var objc = JSON.parse($response.body);
    objc = {
  "msg" : "success",
  "data" : [
    {
      "due_time" : "2114-10-02 23:09:13",
      "vip_type" : "vip_free_test",
      "now_time" : "2023-09-07 23:18:27",
      "isExpire" : false,
      "isExist" : true,
      "in_app" : "[{\"quantity\": \"1\", \"product_id\": \"vip_1_year_auto\", \"transaction_id\": \"200001763297663\", \"original_transaction_id\": \"200001768287883\", \"purchase_date\": \"2023-09-07 15:09:13 Etc/GMT\", \"purchase_date_ms\": \"1694099353000\", \"purchase_date_pst\": \"2023-09-07 08:09:13 America/Los_Angeles\", \"original_purchase_date\": \"2023-09-07 15:09:14 Etc/GMT\", \"original_purchase_date_ms\": \"1694099354000\", \"original_purchase_date_pst\": \"2023-09-07 08:09:14 America/Los_Angeles\", \"expires_date\": \"2114-10-02 15:09:13 Etc/GMT\", \"expires_date_ms\": \"4567891456000\", \"expires_date_pst\": \"2114-10-02 08:09:13 America/Los_Angeles\", \"web_order_line_item_id\": \"200000789152229\", \"is_trial_period\": \"true\", \"is_in_intro_offer_period\": \"false\", \"in_app_ownership_type\": \"PURCHASED\"}]"
    }
  ],
  "code" : 1
}

$done({body : JSON.stringify(objc)});
