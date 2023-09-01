/******************************

1项目名称：SODA相机
软件版本：1.9.1
下载地址：https://is.gd/8g1S7y
2项目名称：CCD相机
软件版本：5.8
下载地址：https://is.gd/5Q1lNE
3项目名称：Dispo相机
软件版本：3.2
下载地址：https://is.gd/Cxov3O
4项目名称：拍立得相机
软件版本：3.1
下载地址：https://is.gd/ilhTk0
5项目名称:ZAPAN
软件版本：3.9
下载地址：https://is.gd/dShGYd

脚本作者：彭于晏💞
更新时间：2023-9-2
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

*******************************

[rewrite_local]

^http:\/\/yueh\.app168\.cc\/(first|panda|jiaopian|emoji|manghe)\/iap\/check\.php$ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/yueh.js

[mitm]

hostname = yueh.app168.cc

*************************************/


var body = JSON.parse($response.body);

body.vip_date = 4102366850,

$done({ body: JSON.stringify(body) });
