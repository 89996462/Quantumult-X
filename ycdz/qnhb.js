

/******************************

脚本功能：青柠海报设计+解锁VIP
下载地址：http://mtw.so/6rCMaa
软件版本：1.5.9
脚本作者：彭于晏
更新时间：2022-9-11
问题反馈：QQ+89996462
QQ会员群：779392027
TG反馈群：https://t.me/plus8889
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************

[rewrite_local]

^https:\/\/api\.qingning6\.com\/api\/user\/getUserInfo url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/qnhb.js

[mitm] 

hostname = api.qingning6.com


*******************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/getUserInfo';


if (url.indexOf(vip) != -1) {
    obj.result.hasPayVip = 1;
    obj.result.isForeverVip = 1;
    obj.result.isVip = 1;
    obj.result.VipExpireTime = 8888888888000;
obj.result.userName = "彭于晏解锁";
    obj.result.isTeamUserVip = 1;

	body = JSON.stringify(obj);
}


$done({body});
