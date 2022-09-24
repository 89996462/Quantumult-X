/******************************

脚本功能：Planny • 智能待办+解锁订阅
下载地址：https://is.gd/pYBe5t
软件版本：7.1.5
脚本作者：彭于晏
更新时间：2022-9-24
问题反馈：QQ+89996462
QQ会员群：779392027
TG反馈群：https://t.me/plus8889
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/Planny.js

[mitm] 

hostname = api.revenuecat.com

*******************************/



var _0xc8e6=['w4dpwpzCoDFTQ1LDmmUrw7lxfsOEw7jDqcKZGsO+','FHk0CxrDu8O1w7t3','Di7DiMKPFwYlcHw=','woZYZUDCqsOk','wqAKw5fDs1lTwpjCtQbDtcKEQ3fDtMKOw70WScO0w40=','DlFCLsKyw5PCh8OlB8Oiw6jCkMKPwrAKTn7CpsKsGw==','EMOgwoXCkkDChsKOElfDhEHDnXhLYkPCscOGE8Ku','wqoLw5HDtA==','wpYww4jCniHCunnDmcOiw5BEwpvDgjd9WT/Cilwz','wptxfgrDisKlwq3Dg8Oiw5wcw75BwprCtEk7CsKOew==','QCJ6w4wh','woDDhMKAE8OQJcOrUMOLScOcwpsIwqd/FRtPGQ3CtQIwPitWBcKiwojCq8KQw7c3wotiwo/Dvg7DrsKuw5YAw63Ch8OHdHo=','w5c2w6bDtsOnw5PDvsOhCMK5wqPDhRYswp9rw7vCpQ3Dlw==','KgjDrMKkYmTDl07CoA==','wqAKw5fDs1lTwpjCtQbDtcKEQ3fDtMKOw70WSMO+w40=','dsKiwr8PUsOnbsK8wr8dw7UDZ8OGU8OhwrrCqMOOwpl0FCU9ZmfDrcKaw78yw6fChH7CuFkJwoHCjMONwpZMw5rCtcO/','bsK5ZmFtWMOmw6A8w6bCvg5Awq5bX19HYMOZ','woAQDsOi'];(function(_0x223dc9,_0xc8e6b7){var _0x51879a=function(_0xd6054a){while(--_0xd6054a){_0x223dc9['push'](_0x223dc9['shift']());}};_0x51879a(++_0xc8e6b7);}(_0xc8e6,0xf3));var _0x5187=function(_0x223dc9,_0xc8e6b7){_0x223dc9=_0x223dc9-0x0;var _0x51879a=_0xc8e6[_0x223dc9];if(_0x5187['pFWooo']===undefined){(function(){var _0x20b1ce;try{var _0x443829=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x20b1ce=_0x443829();}catch(_0x2792e7){_0x20b1ce=window;}var _0x2d484b='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x20b1ce['atob']||(_0x20b1ce['atob']=function(_0x2ab018){var _0x14f1b8=String(_0x2ab018)['replace'](/=+$/,'');var _0x5bdc0f='';for(var _0x11a302=0x0,_0x4bf6d8,_0x173d41,_0x185f4a=0x0;_0x173d41=_0x14f1b8['charAt'](_0x185f4a++);~_0x173d41&&(_0x4bf6d8=_0x11a302%0x4?_0x4bf6d8*0x40+_0x173d41:_0x173d41,_0x11a302++%0x4)?_0x5bdc0f+=String['fromCharCode'](0xff&_0x4bf6d8>>(-0x2*_0x11a302&0x6)):0x0){_0x173d41=_0x2d484b['indexOf'](_0x173d41);}return _0x5bdc0f;});}());var _0x5db446=function(_0x3a81f4,_0x2ad7d5){var _0xb83489=[],_0x454939=0x0,_0x396734,_0x1bf81b='',_0x57be13='';_0x3a81f4=atob(_0x3a81f4);for(var _0x394b97=0x0,_0x168806=_0x3a81f4['length'];_0x394b97<_0x168806;_0x394b97++){_0x57be13+='%'+('00'+_0x3a81f4['charCodeAt'](_0x394b97)['toString'](0x10))['slice'](-0x2);}_0x3a81f4=decodeURIComponent(_0x57be13);var _0x4a96da;for(_0x4a96da=0x0;_0x4a96da<0x100;_0x4a96da++){_0xb83489[_0x4a96da]=_0x4a96da;}for(_0x4a96da=0x0;_0x4a96da<0x100;_0x4a96da++){_0x454939=(_0x454939+_0xb83489[_0x4a96da]+_0x2ad7d5['charCodeAt'](_0x4a96da%_0x2ad7d5['length']))%0x100;_0x396734=_0xb83489[_0x4a96da];_0xb83489[_0x4a96da]=_0xb83489[_0x454939];_0xb83489[_0x454939]=_0x396734;}_0x4a96da=0x0;_0x454939=0x0;for(var _0x3ea76d=0x0;_0x3ea76d<_0x3a81f4['length'];_0x3ea76d++){_0x4a96da=(_0x4a96da+0x1)%0x100;_0x454939=(_0x454939+_0xb83489[_0x4a96da])%0x100;_0x396734=_0xb83489[_0x4a96da];_0xb83489[_0x4a96da]=_0xb83489[_0x454939];_0xb83489[_0x454939]=_0x396734;_0x1bf81b+=String['fromCharCode'](_0x3a81f4['charCodeAt'](_0x3ea76d)^_0xb83489[(_0xb83489[_0x4a96da]+_0xb83489[_0x454939])%0x100]);}return _0x1bf81b;};_0x5187['aQQUHu']=_0x5db446;_0x5187['bKpkwC']={};_0x5187['pFWooo']=!![];}var _0xd6054a=_0x5187['bKpkwC'][_0x223dc9];if(_0xd6054a===undefined){if(_0x5187['fouuIg']===undefined){_0x5187['fouuIg']=!![];}_0x51879a=_0x5187['aQQUHu'](_0x51879a,_0xc8e6b7);_0x5187['bKpkwC'][_0x223dc9]=_0x51879a;}else{_0x51879a=_0xd6054a;}return _0x51879a;};var objc=JSON[_0x5187('0x1','OrcX')]($response[_0x5187('0x8','PSDj')]);objc={'request_date':_0x5187('0x0','[e14'),'request_date_ms':0x1836da2ad7d,'subscriber':{'entitlements':{'premium':{'expires_date':_0x5187('0xf','GK^2'),'grace_period_expires_date':null,'product_identifier':'com.kevinreutter.Sagittarius.Premium3Months','purchase_date':_0x5187('0xd','kL2y')}},'first_seen':_0x5187('0x9','qy@w'),'last_seen':_0x5187('0x3','YYAR'),'management_url':_0x5187('0x6','u)^M'),'non_subscriptions':{},'original_app_user_id':_0x5187('0x2','p#T!'),'original_application_version':_0x5187('0x10','kL2y'),'original_purchase_date':_0x5187('0x11','zG1c'),'other_purchases':{},'subscriptions':{'com.kevinreutter.Sagittarius.Premium3Months':{'billing_issues_detected_at':null,'expires_date':_0x5187('0x7','6yrp'),'grace_period_expires_date':null,'is_sandbox':![],'original_purchase_date':_0x5187('0x5','kL2y'),'ownership_type':_0x5187('0xb','ZeOM'),'period_type':_0x5187('0xc','7opR'),'purchase_date':'2022-09-24T03:53:09Z','store':_0x5187('0xa','B]eO'),'unsubscribe_detected_at':_0x5187('0xe','DLku')}}}};$done({'body':JSON[_0x5187('0x4','o*HF')](objc)});
