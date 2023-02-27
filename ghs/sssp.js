/******************************

脚本功能：涩涩视频——去除所有广告
下载地址：https://is.gd/q5XyVE
网页在线:https://files.yuchenglw.com
软件版本：1.0
脚本作者：彭于晏💞
更新时间：2023-2-27
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/files\.(yuchenglw|honghufly)\.com url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ghs/sssp.js

[mitm]

hostname = files.*.com

*************************************/


var body=$response.body;

body = body.replace(/(<div class="speaker" style="display: none;">)[\s\S[\d\D]{0,101}(<\/div>)/g,'<!--  -->');

body = body.replace(/(<div id="popup">)[\s\S[\d\D]{0,1539}(<\/div>)/g,'<!--  -->');

body = body.replace(/(<div class="float-app">)[\s\S[\d\D]{0,345}(<\/div>)/g,'<!--  -->');

body = body.replace(/(<div id="carousel")[\s\S[\d\D]{0,1777}(<\/div>)/g,'<!--  -->');

body = body.replace(/(<div class="header fixed-top">)[\s\S[\d\D]{0,345}(<\/div>)/g,'<!--  -->');

body = body.replace(/(<div class="banner mt-3">)[\s\S[\d\D]{0,20000}(<h3 class="mt-3">今日推荐<\/h3>)/g,'<h3 class="mt-3">今日推荐</h3>');

body = body.replace(/(<div class="banner">)[\s\S[\d\D]{0,20000}(<div class="play mt-3">)/g,'<div class="play mt-3">');

body = body.replace(/(<div class="banner">)[\s\S[\d\D]{0,2500}(<div class="row lists">)/g,'<div class="row lists">');

body = body.replace(/(<div class="banner mt-3">)[\s\S[\d\D]{0,20000}(<div class="mt-5 text-center">)/g,'<div class="mt-5 text-center">');

$done({body});
