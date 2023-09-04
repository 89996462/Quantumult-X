/******************************

脚本名称: 芒果TV——解锁VIP
下载地址：https://is.gd/FK7wLD
软件版本：7.5.2
脚本作者：彭于晏💞
更新时间：2023-9-4
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

*******************************

[rewrite_local]

^http[s]?:\/\/mobile\.api\.mgtv\.com\/v[0-9]\/(playlist|video\/album|video\/relative|video\/list).*$ url script-request-header https://raw.githubusercontent.com/89996462/Quantumult-X/main/gx/MGTV1.js

^https?:\/\/.*mgtv\.com\/(v\d+\/(video\/getSource|module\/list)|GetUserInfo|entrance\/home) url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/gx/MGTV2.js

&src\=mgtv&suuid\=.*&testversion\=&ticket\=[A-Z0-9]{32} url 302 &src=mgtv&testversion=&ticket=2031287C725A39BE8D5F5E2FF31D57AB




^https?:\/\/nuc\.api\.mgtv.com\/Logout url reject-200
^https?:\/\/pcvideoyd\.titan\.mgtv\.com\/pb\/ url reject-img
^https?:\/\/api-access\.pangolin-sdk-toutiao\.com\/api\/ad\/union\/sdk\/ url reject-200
^https?:\/\/sf3-fe-tos\.pglstatp-toutiao\.com\/obj\/ad-pattern\/renderer\/package\.json url reject-200
^https?:\/\/api-access\.pangolin-sdk-toutiao\.com\/api\/ad\/union\/server_bidding\/pre_fetch\/ url reject-200
&src\=mgtv&suuid\=.*&testversion\=&ticket\=[A-Z0-9]{32} url 302 &src=mgtv&testversion=&ticket=84122092810F360BA056B85869F9F51A
^https?:\/\/api-access\.pangolin-sdk-toutiao\.com\/api\/ad\/union\/sdk\/stats\/batch\/ url reject-200
^https?:\/\/mob\.bz\.mgtv\.com\/odin\/c1\/channel\/ads\?_ url reject-200
^https?:\/\/mobile\.da\.mgtv\.com\/json\/app\/bdboot url reject-200
^https?:\/\/mobile\.api\.mgtv\.com\/mobile\/config\?_support url reject-200
^https?:\/\/sf3-fe-tos\.pglstatp-toutiao\.com\/obj\/ad-pattern\/renderer\/ url reject-200


# 【小芒】
^https?:\/\/mobile\.api\.mgtv\.com\/mobile\/config\?_support url reject-dict

# 底部会员LOGO叠加ICON
#^https?:\/\/mob\.bz\.mgtv\.com\/odin\/c1\/skin\/config url reject-dict

# 文件太大了，屏蔽暂未发现副作用https://dc.bz.mgtv.com/dynamic/v1/dsl/list/10101001/0/5/0?
# ^https?:\/\/dc\.bz\.mgtv\.com\/dynamic\/v1\/dsl\/list\/ url reject-dict

#加入会员 跳过广告https://vip.bz.mgtv.com/client/dynamic_entry
#^https?:\/\/vip\.bz\.mgtv\.com\/client\/dynamic_entry url reject-dict

#我的积分 余额 5 https://credits.bz.mgtv.com/credits/url
#^https?:\/\/credits\.bz\.mgtv\.com\/credits\/url url reject-dict


[mitm] 

hostname = *.mgtv.com

 ********************************/

var body = $response.body;
var url = $request.url;

if (url.includes('/v8/video/getSource')) {
    body = body.replace(/\"text\":\".*?\"/g, '\"text\":"彭于晏提示解锁成功"');
}

if (url.includes('/encounter/entrance/home')) {
    body = body.replace(/\"title\":\".*?\"/g, '\"title\":"更多免费脚本点击获取"').replace(/\"icon\":\".*?\"/g, '\"icon\":"更多免费脚本点击获取"').replace(/\"closeUrl\":\".+"/g, '\"closeUrl\":"https://t.me/py996"');
}


var obj = JSON.parse(body);

if (url.includes('/GetUserInfo')) {
    obj.data.isVip = 1;
    obj.data.vipExpiretime = 324938345490000;
    obj.data.vipinfo.isvip = 1;
    obj.data.vipinfo.vip_end_time = "9999-08-08 00:00:00";
    obj.data.vipinfo.type = "2";
    obj.data.vipinfo.growth.level = 9;
    obj.data.nickname = "彭于晏解锁";

    body = JSON.stringify(obj);
}

if (url.includes('/module/list')) {
    obj.data.list = obj.data.list.filter(item => [1, 2, 4, 5, 7].includes(item.id));
    body = JSON.stringify(obj);
}

$done({ body });
