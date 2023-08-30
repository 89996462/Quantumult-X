/******************************

脚本名称: 无尽噩梦5怨灵咒
下载地址：https://is.gd/uNNA0Q
软件版本：2.2.0
脚本作者：彭于晏💞
更新时间：2023-8-31
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

*******************************

[rewrite_local]

^http[s]?:\/\/kb\.chenguanserver\.com\/5\/game\/api\/v1\/activity\/(config|redeem|com) url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/yx/wjhm5.js

[mitm] 

hostname = kb.chenguanserver.com


*************************************/


var ojbk = JSON.parse($response.body);

const vip = '/config';
const vip1 = '/redeem';
const vip2 = '/com';

if ($request.url.indexOf(vip) != -1) {
  ojbk = {"code":200,"msg":"成功","data":{"open":true,"open_default":false,"param":"","param_default":""}};
}

if ($request.url.indexOf(vip1) != -1) {
  ojbk = {"code":200,"msg":"兑换成功","data":{"idRewards":[{"id":20001,"count":99970},{"id":20002,"count":9900000},{"id":20003,"count":91000},{"id":20004,"count":9900000}],"typeRewards":{}}};
}

if ($request.url.indexOf(vip2) != -1) {
  ojbk.body = ojbk.body.replace(/\"c":"\d+"/g, '\"c":"0\"');
}

$done({body: JSON.stringify(ojbk)});
