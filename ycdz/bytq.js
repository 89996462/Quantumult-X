

/******************************

脚本功能：白云天气-感知自然呼吸+解锁订阅
使用教程：如果不行解锁：点击免费试用，卸载在开启规则
下载地址：http://mtw.so/6jqFa0
软件版本：1.31
脚本作者：彭于晏
更新时间：2022-9-11
问题反馈：QQ+89996462
QQ会员群：779392027
TG反馈群：https://t.me/plus8889
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/bytq.js

[mitm] 

hostname = api.revenuecat.com

*******************************/



var _0x1633=['NcK4WsKXwovDn8KSwoHCjcKqNibDsknDmFRJwpTClBc=','wod6w5MCw4XCkj/Cr8OLw53DhcO5w7wzP3bDnMKkwpRh','w4TCpVVfw7xNVcOPFsOLwo9zw7prV8ONIcKNM8K6w4/DsSU8wqLCvMKlYCJqIT3Dq8KXw4J9bzHDqRFbE8KRwqs=','e3Ytw55CBjoiw63DqsKjwp3DgFHDuWDDrcKdHMKf','wp81wr89FsOQfnfCq8KDBcKcOlnDjzHCncO0U10=','WsOBwo/DmCslcsOkGg==','w4LChAskDsKVw65KwqHCgcORZQ/CtcOJXn8Se8OW','w6ouwpXDqQ==','Vkc2w6jCsgnDplLCqQ==','UWoHD0w=','FsOZwoJyGU/DgRZewqVDwrXDjcOyYcOUIcOVb8On','w4rDocOwwrjDqMOlwqLDscK6','w5/CpVNGw6EQE8KGDg==','YE4ew7wi','PsKxUcKcwovDn8KSwoHCjMKjNifDsEnDnVRJwpPCkxc='];(function(_0x3f9070,_0x163348){var _0x367b91=function(_0x3f7d52){while(--_0x3f7d52){_0x3f9070['push'](_0x3f9070['shift']());}};_0x367b91(++_0x163348);}(_0x1633,0x16f));var _0x367b=function(_0x3f9070,_0x163348){_0x3f9070=_0x3f9070-0x0;var _0x367b91=_0x1633[_0x3f9070];if(_0x367b['aWDedt']===undefined){(function(){var _0x1774fc;try{var _0x10e8fd=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x1774fc=_0x10e8fd();}catch(_0x3cf20d){_0x1774fc=window;}var _0x44b399='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1774fc['atob']||(_0x1774fc['atob']=function(_0xeee881){var _0x3c33a5=String(_0xeee881)['replace'](/=+$/,'');var _0x9f0ad='';for(var _0x245541=0x0,_0x284b2b,_0x1d986e,_0x4b2a75=0x0;_0x1d986e=_0x3c33a5['charAt'](_0x4b2a75++);~_0x1d986e&&(_0x284b2b=_0x245541%0x4?_0x284b2b*0x40+_0x1d986e:_0x1d986e,_0x245541++%0x4)?_0x9f0ad+=String['fromCharCode'](0xff&_0x284b2b>>(-0x2*_0x245541&0x6)):0x0){_0x1d986e=_0x44b399['indexOf'](_0x1d986e);}return _0x9f0ad;});}());var _0x15073c=function(_0x20ab65,_0x2ca276){var _0x551a7b=[],_0xa58b0f=0x0,_0x2fcbf2,_0x58b908='',_0x41ecb5='';_0x20ab65=atob(_0x20ab65);for(var _0x535509=0x0,_0x4d4ffe=_0x20ab65['length'];_0x535509<_0x4d4ffe;_0x535509++){_0x41ecb5+='%'+('00'+_0x20ab65['charCodeAt'](_0x535509)['toString'](0x10))['slice'](-0x2);}_0x20ab65=decodeURIComponent(_0x41ecb5);var _0x9d6011;for(_0x9d6011=0x0;_0x9d6011<0x100;_0x9d6011++){_0x551a7b[_0x9d6011]=_0x9d6011;}for(_0x9d6011=0x0;_0x9d6011<0x100;_0x9d6011++){_0xa58b0f=(_0xa58b0f+_0x551a7b[_0x9d6011]+_0x2ca276['charCodeAt'](_0x9d6011%_0x2ca276['length']))%0x100;_0x2fcbf2=_0x551a7b[_0x9d6011];_0x551a7b[_0x9d6011]=_0x551a7b[_0xa58b0f];_0x551a7b[_0xa58b0f]=_0x2fcbf2;}_0x9d6011=0x0;_0xa58b0f=0x0;for(var _0x155859=0x0;_0x155859<_0x20ab65['length'];_0x155859++){_0x9d6011=(_0x9d6011+0x1)%0x100;_0xa58b0f=(_0xa58b0f+_0x551a7b[_0x9d6011])%0x100;_0x2fcbf2=_0x551a7b[_0x9d6011];_0x551a7b[_0x9d6011]=_0x551a7b[_0xa58b0f];_0x551a7b[_0xa58b0f]=_0x2fcbf2;_0x58b908+=String['fromCharCode'](_0x20ab65['charCodeAt'](_0x155859)^_0x551a7b[(_0x551a7b[_0x9d6011]+_0x551a7b[_0xa58b0f])%0x100]);}return _0x58b908;};_0x367b['MimhGO']=_0x15073c;_0x367b['WhqrRY']={};_0x367b['aWDedt']=!![];}var _0x3f7d52=_0x367b['WhqrRY'][_0x3f9070];if(_0x3f7d52===undefined){if(_0x367b['rFDOoK']===undefined){_0x367b['rFDOoK']=!![];}_0x367b91=_0x367b['MimhGO'](_0x367b91,_0x163348);_0x367b['WhqrRY'][_0x3f9070]=_0x367b91;}else{_0x367b91=_0x3f7d52;}return _0x367b91;};var objc=JSON[_0x367b('0x6','NxO5')]($response[_0x367b('0x0','Me1T')]);objc={'request_date':_0x367b('0x7','*AZr'),'request_date_ms':0x1832ccd76ca,'subscriber':{'entitlements':{'allaccess':{'expires_date':_0x367b('0x8','*AZr'),'grace_period_expires_date':null,'product_identifier':_0x367b('0x4','OIZU'),'purchase_date':_0x367b('0xb','4lbN')}},'first_seen':_0x367b('0x9','2Ufr'),'last_seen':_0x367b('0xe','DQa9'),'management_url':_0x367b('0xa','5f#&'),'non_subscriptions':{},'original_app_user_id':'$RCAnonymousID:abad66a1510e4f37a529a7c26f893b97','original_application_version':'70','original_purchase_date':_0x367b('0xc','mYY%'),'other_purchases':{},'subscriptions':{'wc_pro_1y':{'billing_issues_detected_at':null,'expires_date':'9999-09-08T01:16:31Z','grace_period_expires_date':null,'is_sandbox':![],'original_purchase_date':'2022-09-11T13:45:07Z','ownership_type':_0x367b('0x1','a6^y'),'period_type':_0x367b('0x2','Wqz6'),'purchase_date':_0x367b('0x3','dZAC'),'store':_0x367b('0xd','t0bC'),'unsubscribe_detected_at':null}}}};$done({'body':JSON[_0x367b('0x5','5f#&')](objc)});
