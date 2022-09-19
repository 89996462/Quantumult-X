/******************************

脚本功能：cubox-收藏阅读+解锁VIP
下载地址：http://mtw.so/5IpOxH
软件版本：7.1.1
脚本作者：彭于晏
更新时间：2022-9-19
问题反馈：QQ+89996462
QQ会员群：779392027
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************

[rewrite_local]

^https:\/\/cubox\.pro\/c\/api\/userInfo url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/cubox.js

[mitm] 

hostname = cubox.pro

*******************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/userInfo';


if (url.indexOf(vip) != -1) {
    obj.data.level = 1;
    obj.data.expireTime = "2099-09-12T23:50:23+08:00";
    obj.data.nickName = "彭于晏解锁";
    obj.data.thirdNickName = "彭于晏解锁";
    obj.data.isExpire = false;
    obj.data.active = true;
    obj.data.payTime = 1660006006;

	body = JSON.stringify(obj);
}


$done({body});
