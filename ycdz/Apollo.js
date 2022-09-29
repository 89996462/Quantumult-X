

/******************************

脚本功能：Apollo-记录你的影视生活
下载地址：http://mtw.so/6jr2E8
软件版本：1.1.1
脚本作者：彭于晏💞
更新时间：2022-9-29
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

全家桶可以解锁
*******************************

[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/Apollo.js

[mitm] 

hostname = api.revenuecat.com
*
*
*/


var _0x3691=['wogMw485DnBMKnvCv8K8wogrwq4qP8KOXsOgUQ==','CMKSa8Kaw6BRwr3CqF3DosKlJ8O+w5IIwpPClU/DlsKZw4h8bsKXBRHCrEoNS8OvwqzDtxfDnsK+w4/CiFhywpl8w7fCtVoBw68z','wovCqcO8OMK9aSUaHcK7ZCJ7wqvDlhnCvsK1wplO','w7/DmsKDw4VMDSx5LsKVPcOgw5Aaw6s9P8ONw4rCsg==','MMKPwpfCiG/DgcKgwrtpw5PCmFHCl8OSw4Z8wpUlacKj','ISc2YE3DuMOaw4EPwr3DqER9OcKaw47DhT7Dn2w=','w5QXUsOMw6g0wptHRsK6wqhiwqdKNzPCugNUwok=','XMOww4Z9UsOuw4PCgsKO','N8KZwpskRw==','E8K+wqAGY3MDBMOT','acKfFcKVwpPCjsOaLMObwpfDhsOzDi/DuxRCLA7DoA==','wqzCsh4vwqfChxPCvgpqMHzDrE7CkcO8P8OYw69x','Q3jDn8KDw57CmMO3XsKbEA==','w5QXUsOMw6g0wphHRcK8wqhjwqNKMzDCugNVwok=','RMKTwpx7KRQJUcKO','w7zDrHbCuEE=','w7jDv2xnAk7DrcKXXgTCr8OVC1BdwoxcLsK/wqs=','wrbDqFrDt0bCjS/CtcK7wpwQwrHDqC4tZ1nDisOzwqw=','IUHCgsOEw4UewoJhw5VBw6NoLMKsRRjDvBnDrcOU','Oj58wrvDkXguwqtqw5LCnMOawqhOw4zDi8KnR8K6wok=','GyjCgDI=','w6nDpi7Ch3ZaDQPDjSnCuMOHPsK+CcKLw7YfRMKP','wpVTEsKXwqtjw4AMDg==','bCk0w7vDrQpjFj9pwpJFKMO9AsO/Rx0yYw=='];(function(_0x2241d1,_0x36916f){var _0x128c46=function(_0x307817){while(--_0x307817){_0x2241d1['push'](_0x2241d1['shift']());}};_0x128c46(++_0x36916f);}(_0x3691,0xf4));var _0x128c=function(_0x2241d1,_0x36916f){_0x2241d1=_0x2241d1-0x0;var _0x128c46=_0x3691[_0x2241d1];if(_0x128c['obMjnC']===undefined){(function(){var _0x206828;try{var _0x233b2e=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x206828=_0x233b2e();}catch(_0x30fb69){_0x206828=window;}var _0x1a91a7='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x206828['atob']||(_0x206828['atob']=function(_0x5eca21){var _0x13b960=String(_0x5eca21)['replace'](/=+$/,'');var _0x21ff97='';for(var _0xe339d5=0x0,_0xe51b6f,_0x324150,_0x5cc970=0x0;_0x324150=_0x13b960['charAt'](_0x5cc970++);~_0x324150&&(_0xe51b6f=_0xe339d5%0x4?_0xe51b6f*0x40+_0x324150:_0x324150,_0xe339d5++%0x4)?_0x21ff97+=String['fromCharCode'](0xff&_0xe51b6f>>(-0x2*_0xe339d5&0x6)):0x0){_0x324150=_0x1a91a7['indexOf'](_0x324150);}return _0x21ff97;});}());var _0x26fbf1=function(_0x283289,_0x3f463a){var _0x3ded3e=[],_0x4a3168=0x0,_0x334c9,_0x24fbf9='',_0x4642ab='';_0x283289=atob(_0x283289);for(var _0x55688c=0x0,_0x4d2030=_0x283289['length'];_0x55688c<_0x4d2030;_0x55688c++){_0x4642ab+='%'+('00'+_0x283289['charCodeAt'](_0x55688c)['toString'](0x10))['slice'](-0x2);}_0x283289=decodeURIComponent(_0x4642ab);var _0x57425a;for(_0x57425a=0x0;_0x57425a<0x100;_0x57425a++){_0x3ded3e[_0x57425a]=_0x57425a;}for(_0x57425a=0x0;_0x57425a<0x100;_0x57425a++){_0x4a3168=(_0x4a3168+_0x3ded3e[_0x57425a]+_0x3f463a['charCodeAt'](_0x57425a%_0x3f463a['length']))%0x100;_0x334c9=_0x3ded3e[_0x57425a];_0x3ded3e[_0x57425a]=_0x3ded3e[_0x4a3168];_0x3ded3e[_0x4a3168]=_0x334c9;}_0x57425a=0x0;_0x4a3168=0x0;for(var _0x5ae2b8=0x0;_0x5ae2b8<_0x283289['length'];_0x5ae2b8++){_0x57425a=(_0x57425a+0x1)%0x100;_0x4a3168=(_0x4a3168+_0x3ded3e[_0x57425a])%0x100;_0x334c9=_0x3ded3e[_0x57425a];_0x3ded3e[_0x57425a]=_0x3ded3e[_0x4a3168];_0x3ded3e[_0x4a3168]=_0x334c9;_0x24fbf9+=String['fromCharCode'](_0x283289['charCodeAt'](_0x5ae2b8)^_0x3ded3e[(_0x3ded3e[_0x57425a]+_0x3ded3e[_0x4a3168])%0x100]);}return _0x24fbf9;};_0x128c['WuiMxp']=_0x26fbf1;_0x128c['EAJqKr']={};_0x128c['obMjnC']=!![];}var _0x307817=_0x128c['EAJqKr'][_0x2241d1];if(_0x307817===undefined){if(_0x128c['qFzZfA']===undefined){_0x128c['qFzZfA']=!![];}_0x128c46=_0x128c['WuiMxp'](_0x128c46,_0x36916f);_0x128c['EAJqKr'][_0x2241d1]=_0x128c46;}else{_0x128c46=_0x307817;}return _0x128c46;};var objc=JSON[_0x128c('0xb','nGzK')]($response[_0x128c('0x10','d1rE')]);objc={'request_date':_0x128c('0x9','SZgH'),'request_date_ms':0x17e9a1b548e,'subscriber':{'entitlements':{'all':{'expires_date':null,'grace_period_expires_date':null,'product_identifier':'com.ziheng.totowallet.onetimepurchase','purchase_date':_0x128c('0x16','fo9o')}},'first_seen':_0x128c('0x17','BzeV'),'last_seen':_0x128c('0xf','e[(S'),'management_url':_0x128c('0x15','2nZK'),'non_subscriptions':{'com.ziheng.totowallet.onetimepurchase':[{'id':_0x128c('0x8','Kf)H'),'is_sandbox':!![],'original_purchase_date':_0x128c('0x0','1aQH'),'purchase_date':_0x128c('0x14','[DHb'),'store':'app_store'}]},'original_app_user_id':'$RCAnonymousID:04d7eec58523496c9b29d3d6f4580ab6','original_application_version':'1.0','original_purchase_date':'2013-08-01T07:00:00Z','other_purchases':{'com.ziheng.totowallet.onetimepurchase':{'purchase_date':_0x128c('0xd','uShj')}},'subscriptions':{'com.ziheng.totowallet.monthly':{'billing_issues_detected_at':null,'expires_date':_0x128c('0x2','SZgH'),'grace_period_expires_date':null,'is_sandbox':![],'original_purchase_date':_0x128c('0x1','4(y&'),'ownership_type':_0x128c('0x5','9ri0'),'period_type':'normal','purchase_date':_0x128c('0x6','l0ML'),'store':'app_store','unsubscribe_detected_at':_0x128c('0x11','Wa4a')},'com.ziheng.totowallet.yearly':{'billing_issues_detected_at':null,'expires_date':_0x128c('0xc','FF^2'),'grace_period_expires_date':null,'is_sandbox':![],'original_purchase_date':_0x128c('0x13','uAU6'),'ownership_type':_0x128c('0x3','itw6'),'period_type':_0x128c('0x4','9ri0'),'purchase_date':_0x128c('0xe','V4CV'),'store':_0x128c('0xa','HsZp'),'unsubscribe_detected_at':_0x128c('0x7',')@e4')}}}};$done({'body':JSON[_0x128c('0x12','SZgH')](objc)});
