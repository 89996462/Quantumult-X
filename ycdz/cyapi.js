/*******************************

脚本功能：彩云天气+解锁订阅
下载地址：https://t.cn/A66d95hV
软件版本：7.16.1
脚本作者：彭于晏💞
更新时间：2024-10-11
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/biz\.cyapi\.cn\/ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/cyapi.js

[mitm] 

hostname = biz.cyapi.cn
*******************************/

var ojbk = $response.body;
var obj =  JSON.parse(ojbk);

if($request.url.indexOf("/v2/user") != -1) {
  obj.result.is_vip = true;
  obj.result.vip_type = "s";
  obj.result.svip_expired_at = 4070951226;
}

ojbk = JSON.stringify(obj);
$done(ojbk);

