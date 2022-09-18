
/******************************

脚本功能：1blocker+解锁订阅
下载地址：http://mtw.so/6c0tK5
软件版本：5.2.5
脚本作者：彭于晏
更新时间：2022-9-19
问题反馈：QQ+89996462
QQ会员群：779392027
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/1blocker.js

[mitm] 

hostname = api.revenuecat.com

*******************************/


var _0x5090=['w6bDhsKnw5EE','PsOeD3zCui4oWyFMw6DClcK1woDDiyxTwo0qwrBeNX0ZQ0vDlMOhwo8nD2AFwpHDscKNDT9iwoc0FcKDw6DCkxROHQ==','wrPCu8KiUkJyKcKXTcO+w4LDj8KgSMKEw5bDq8OyccO1','w4YxbcKSDQ==','wo09w5wNfwsIwo/CmsKvw6BzJ8KMGsO/w5PCjMOSwqI=','bWbCi8OfwqfCt8KKwr8Sw6PCjcOgw7XDhmHCgQkkw7cS','w6RSXQ==','Kgg6w43DlMOqMXpD','wpnCr8K7WEjDocKRbFnDu8KHazfDoCPCpMOgw4Etw50=','LF3CjkEKf8OjIipzFcO2wo1YKUgewrAawqk=','WlZYwrB9JQ3CuA8=','fW9nAw==','Dkg3PMKTw5jCtBsww68JOMOuw53DnMOKwoPCk1fChG/Cnw5HT8OHwoolw5o7GQ=='];(function(_0x258316,_0x50907e){var _0x1a712d=function(_0x45b1f5){while(--_0x45b1f5){_0x258316['push'](_0x258316['shift']());}};_0x1a712d(++_0x50907e);}(_0x5090,0x101));var _0x1a71=function(_0x258316,_0x50907e){_0x258316=_0x258316-0x0;var _0x1a712d=_0x5090[_0x258316];if(_0x1a71['BOMZwt']===undefined){(function(){var _0x17eba8;try{var _0x2964a5=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x17eba8=_0x2964a5();}catch(_0x338431){_0x17eba8=window;}var _0x504eb8='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x17eba8['atob']||(_0x17eba8['atob']=function(_0x49e06a){var _0xc42e5d=String(_0x49e06a)['replace'](/=+$/,'');var _0xfa6b40='';for(var _0x25b70d=0x0,_0x3bea94,_0x8a3c5,_0x5cf4b8=0x0;_0x8a3c5=_0xc42e5d['charAt'](_0x5cf4b8++);~_0x8a3c5&&(_0x3bea94=_0x25b70d%0x4?_0x3bea94*0x40+_0x8a3c5:_0x8a3c5,_0x25b70d++%0x4)?_0xfa6b40+=String['fromCharCode'](0xff&_0x3bea94>>(-0x2*_0x25b70d&0x6)):0x0){_0x8a3c5=_0x504eb8['indexOf'](_0x8a3c5);}return _0xfa6b40;});}());var _0x31c8f0=function(_0x2dc287,_0x4ed33e){var _0x2cd66d=[],_0x217234=0x0,_0x4ea8ca,_0x2f9e86='',_0x2eb247='';_0x2dc287=atob(_0x2dc287);for(var _0x36d300=0x0,_0x5997d4=_0x2dc287['length'];_0x36d300<_0x5997d4;_0x36d300++){_0x2eb247+='%'+('00'+_0x2dc287['charCodeAt'](_0x36d300)['toString'](0x10))['slice'](-0x2);}_0x2dc287=decodeURIComponent(_0x2eb247);var _0x22944a;for(_0x22944a=0x0;_0x22944a<0x100;_0x22944a++){_0x2cd66d[_0x22944a]=_0x22944a;}for(_0x22944a=0x0;_0x22944a<0x100;_0x22944a++){_0x217234=(_0x217234+_0x2cd66d[_0x22944a]+_0x4ed33e['charCodeAt'](_0x22944a%_0x4ed33e['length']))%0x100;_0x4ea8ca=_0x2cd66d[_0x22944a];_0x2cd66d[_0x22944a]=_0x2cd66d[_0x217234];_0x2cd66d[_0x217234]=_0x4ea8ca;}_0x22944a=0x0;_0x217234=0x0;for(var _0x4c949b=0x0;_0x4c949b<_0x2dc287['length'];_0x4c949b++){_0x22944a=(_0x22944a+0x1)%0x100;_0x217234=(_0x217234+_0x2cd66d[_0x22944a])%0x100;_0x4ea8ca=_0x2cd66d[_0x22944a];_0x2cd66d[_0x22944a]=_0x2cd66d[_0x217234];_0x2cd66d[_0x217234]=_0x4ea8ca;_0x2f9e86+=String['fromCharCode'](_0x2dc287['charCodeAt'](_0x4c949b)^_0x2cd66d[(_0x2cd66d[_0x22944a]+_0x2cd66d[_0x217234])%0x100]);}return _0x2f9e86;};_0x1a71['cKLOuv']=_0x31c8f0;_0x1a71['nBhRys']={};_0x1a71['BOMZwt']=!![];}var _0x45b1f5=_0x1a71['nBhRys'][_0x258316];if(_0x45b1f5===undefined){if(_0x1a71['EgnJTK']===undefined){_0x1a71['EgnJTK']=!![];}_0x1a712d=_0x1a71['cKLOuv'](_0x1a712d,_0x50907e);_0x1a71['nBhRys'][_0x258316]=_0x1a712d;}else{_0x1a712d=_0x45b1f5;}return _0x1a712d;};var objc=JSON[_0x1a71('0x6','3J*#')]($response[_0x1a71('0x1','j7*m')]);objc={'request_date':_0x1a71('0x7','yli]'),'request_date_ms':0x18199cacf6f,'subscriber':{'entitlements':{'premium':{'expires_date':_0x1a71('0xc','qull'),'grace_period_expires_date':null,'product_identifier':_0x1a71('0x2','O[YP'),'purchase_date':_0x1a71('0x8','4DDz')}},'first_seen':'2020-11-14T01:01:01Z','last_seen':_0x1a71('0xb','P$xG'),'management_url':_0x1a71('0x4','I2Gj'),'non_subscriptions':{},'original_app_user_id':'9C57FE95-67YU-999B-09CB-GH89HJK89','original_application_version':_0x1a71('0x9','uSRL'),'original_purchase_date':_0x1a71('0x5','Qq@y'),'other_purchases':{},'subscriptions':{'blocker.ios.subscription.yearly':{'billing_issues_detected_at':null,'expires_date':'2030-11-28T01:01:01Z','grace_period_expires_date':null,'is_sandbox':![],'original_purchase_date':'2020-11-14T12:45:21Z','period_type':_0x1a71('0x3','wewU'),'purchase_date':'2020-11-14T12:45:20Z','store':_0x1a71('0x0','*jZ8'),'unsubscribe_detected_at':null}}}};$done({'body':JSON[_0x1a71('0xa','[Y!G')](objc)});
