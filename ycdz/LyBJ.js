/*******************************

脚本功能：录音笔记-解锁会员
下载地址：https://t.cn/A6QOzJSd
软件版本：31.2
脚本作者：彭于晏💞
更新时间：2024-10-11
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/appss\.rhinoxlab\.com\/ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/LyBJ.js

[mitm] 

hostname = appss.rhinoxlab.com

*******************************/

var ojbk = $response.body;
var obj =  JSON.parse(ojbk);

if($request.url.indexOf("/app/account/getAccountInfo") != -1) {
    obj.result.type = "VIP";
    obj.result.freeFlag = "YES";
    obj.result.vipGroupInfos = [
       {
        "groupType" : "TYPE_ONE",
        "vipType" : "VIP",
        "autoPay" : "YES"
      }
    ];
}

ojbk = JSON.stringify(obj);
$done(ojbk);
