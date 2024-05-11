/*******************************
脚本名称:  小星星Ai陪练+解锁VIP
描述:TG群：https://t.me/plus8889

会员群：779392027

作者QQ 89996462

规则仅供学习交流，勿用于其它。

规则只供娱乐，请在下载后24小时内删除，不得用于其它非法用途，否则后果自负。
脚本作者：彭于晏💞
更新时间：2024年4月18日 下午7:03
问题反馈：QQ+89996462
QQ会员群：779392027
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
^http[s]?:\/\/xiaoxingxing.xinghuanufang.cn url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/xinghuanufang.js
[mitm] 
hostname = xiaoxingxing.xinghuanufang.cn

*******************************/

var body = $response.body.replace(/vipType":\d+/g,'vipType":4')
.replace(/vipDateTo":".?"/g,'vipDateTo":"9999-10-31"')
.replace(/vipStatus":\d/g,'vipStatus":0')
.replace(/vipDate":".*?"/g,'vipDate":"8888-08-08"')
.replace(/isVip":\w+/g,'isVip":true')
.replace(/vipStatus":false/g,'vipStatus":true')
.replace(/vipDateFrom":null/g,'vipDateFrom":"2022-10-28 22:36:54"')
.replace(/hasPayLifeCard":null/g,'hasPayLifeCard":false')
.replace(/nickname":null/g,'nickname":"苹果福利社"')
.replace(/leftVipDesc":".*?"/g,'leftVipDesc":"9999年10月31日到期"')
.replace(/vipType":-1/g,'vipType":4')
.replace(/isRenew":\w+/g,'isRenew":true')
.replace(/popWindow":\d/g,'popWindow":1')
.replace(/iconUrl":null/g,'iconUrl":"https://xiaoxingxingai.oss-cn-hangzhou.aliyuncs.com/2021/5/25/dc119d4dbd5a4b0a88811f8b0b1b6772.png"')
.replace(/rightVipDesc":".*?"/g,'rightVipDesc":"已永久"')
.replace(/isMember":\w+/g,'isMember":false')
.replace(/"shortName":".*?"/g,'"shortName":"苹果福利社"')
.replace(/"vipStatus":\d/g,'"vipStatus":1')
.replace(/"vipEnd":null/g,'"vipEnd":"8888-08-08"')
.replace(/"isNonMember":\w+/g,'"isNonMember":false')
.replace(/"nickname":".*?"/g,'"nickname":"苹果福利社"')
.replace(/"leftVipDescNew":".*?"/g,'"leftVipDescNew":"永久使用"')
.replace(/"leftVipDetailUrl":".*?"/g,'"leftVipDetailUrl":"8888-08-08"')
.replace(/"leftVipDetail":".*?"/g,'"leftVipDetail":"8888-08-08"')
.replace(/"vipType":null/g,'"vipType":4')
.replace(/"vipDesc":".*?"/g,'"vipDesc":"永久使用"')
$done({ body });
