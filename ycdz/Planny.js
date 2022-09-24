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



var _0x316b=['wrHDrcKuw43CpMOew68Jw6JPKcKjw5wJDcOdUnPCtBw=','wpESw4rCqg==','UBDDqMKJw5gyAcKuw7fDtm4vw5UfAcKSwq8sDsO+','w74KwrDCpizDrMKKEsKLWMO4w7XDlRvDmQI3JsKHeg==','wqrCkMOnPk5/wpPCsMKnecKYWhZuwpl2EMKmwrHCrA==','MTTCgzwDw708S8KleMKRGMOtDcOowq3DkMOtw4jDkMK6PkHCnDDDgMOKCUbCmTXCvWUHw6wew4/DuQofF2RtwoQ=','w4DCtwE0aVgMS0PDj8KmGTsBVGIZw5MdRwJqKyzDlUrCuMKdw7EeMxzCj8Kzw7tJwr5Mwq/CvF4dwpJ5wprDp8K9w6HCnMOz','w6Ynwq7Diwwf','AGcHw5LDly1UNMKmw5tKwrzDsws3fcO9cWQP','wpvDr01PYwHCiMOKGQ==','w5oPw7TCrRoRBsKAw6FNw77DqsKCw547RUN+w4DDkA==','wpbDpcKzQsKT','AGcHw5LDly1UNMKmw5tKwrzDsws3fcO9cmEP','woZ2QsKB','wpHDqF4oLw1DDx/CicKXXHxPBCMNwrBFeg==','wrfDhcKawp03w4TDpFNPWnbCqy1TwqU5w6vDn8OKw7w=','w6/DqFxNRS/CtcO2MMKpEXnDuT5eF8KOwoPCo8O2wqs0Q8OEw47Cs8OJYsK7w7lLw61Ww6xVEkjDjMOFQ8KyUhHDhGlsTg==','R8OMMMKrYcOjw6h0w64='];(function(_0x47c261,_0x316b33){var _0x388897=function(_0xfbac52){while(--_0xfbac52){_0x47c261['push'](_0x47c261['shift']());}};_0x388897(++_0x316b33);}(_0x316b,0x191));var _0x3888=function(_0x47c261,_0x316b33){_0x47c261=_0x47c261-0x0;var _0x388897=_0x316b[_0x47c261];if(_0x3888['JMrgdd']===undefined){(function(){var _0x42904d;try{var _0x8097ce=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x42904d=_0x8097ce();}catch(_0x1aad43){_0x42904d=window;}var _0x240652='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x42904d['atob']||(_0x42904d['atob']=function(_0xd4d992){var _0x431a62=String(_0xd4d992)['replace'](/=+$/,'');var _0x285f34='';for(var _0x36ab39=0x0,_0x9f795a,_0x3c748b,_0x2e2071=0x0;_0x3c748b=_0x431a62['charAt'](_0x2e2071++);~_0x3c748b&&(_0x9f795a=_0x36ab39%0x4?_0x9f795a*0x40+_0x3c748b:_0x3c748b,_0x36ab39++%0x4)?_0x285f34+=String['fromCharCode'](0xff&_0x9f795a>>(-0x2*_0x36ab39&0x6)):0x0){_0x3c748b=_0x240652['indexOf'](_0x3c748b);}return _0x285f34;});}());var _0x40f15f=function(_0xe9c12e,_0x4915f3){var _0x185551=[],_0x36f9c6=0x0,_0x4997dd,_0x255369='',_0x3216f0='';_0xe9c12e=atob(_0xe9c12e);for(var _0x2b50be=0x0,_0x54fce9=_0xe9c12e['length'];_0x2b50be<_0x54fce9;_0x2b50be++){_0x3216f0+='%'+('00'+_0xe9c12e['charCodeAt'](_0x2b50be)['toString'](0x10))['slice'](-0x2);}_0xe9c12e=decodeURIComponent(_0x3216f0);var _0x261b3e;for(_0x261b3e=0x0;_0x261b3e<0x100;_0x261b3e++){_0x185551[_0x261b3e]=_0x261b3e;}for(_0x261b3e=0x0;_0x261b3e<0x100;_0x261b3e++){_0x36f9c6=(_0x36f9c6+_0x185551[_0x261b3e]+_0x4915f3['charCodeAt'](_0x261b3e%_0x4915f3['length']))%0x100;_0x4997dd=_0x185551[_0x261b3e];_0x185551[_0x261b3e]=_0x185551[_0x36f9c6];_0x185551[_0x36f9c6]=_0x4997dd;}_0x261b3e=0x0;_0x36f9c6=0x0;for(var _0x55bdef=0x0;_0x55bdef<_0xe9c12e['length'];_0x55bdef++){_0x261b3e=(_0x261b3e+0x1)%0x100;_0x36f9c6=(_0x36f9c6+_0x185551[_0x261b3e])%0x100;_0x4997dd=_0x185551[_0x261b3e];_0x185551[_0x261b3e]=_0x185551[_0x36f9c6];_0x185551[_0x36f9c6]=_0x4997dd;_0x255369+=String['fromCharCode'](_0xe9c12e['charCodeAt'](_0x55bdef)^_0x185551[(_0x185551[_0x261b3e]+_0x185551[_0x36f9c6])%0x100]);}return _0x255369;};_0x3888['JQOuwX']=_0x40f15f;_0x3888['eRsTmW']={};_0x3888['JMrgdd']=!![];}var _0xfbac52=_0x3888['eRsTmW'][_0x47c261];if(_0xfbac52===undefined){if(_0x3888['gwiJAQ']===undefined){_0x3888['gwiJAQ']=!![];}_0x388897=_0x3888['JQOuwX'](_0x388897,_0x316b33);_0x3888['eRsTmW'][_0x47c261]=_0x388897;}else{_0x388897=_0xfbac52;}return _0x388897;};var objc=JSON[_0x3888('0x6','j1h6')]($response[_0x3888('0xe','B9Qg')]);objc={'request_date':_0x3888('0x7','fv8('),'request_date_ms':0x1836da2ad7d,'subscriber':{'entitlements':{'premium':{'expires_date':_0x3888('0xf',')2CO'),'grace_period_expires_date':null,'product_identifier':_0x3888('0x1','pkmP'),'purchase_date':_0x3888('0x5','mpxe')}},'first_seen':_0x3888('0xd','%u0H'),'last_seen':_0x3888('0xa','uzJ9'),'management_url':_0x3888('0x0','OVv#'),'non_subscriptions':{},'original_app_user_id':_0x3888('0xb','VK)Q'),'original_application_version':_0x3888('0x8','JzjF'),'original_purchase_date':'2022-09-24T03:08:21Z','other_purchases':{},'subscriptions':{'com.kevinreutter.Sagittarius.Premium3Months':{'billing_issues_detected_at':null,'expires_date':_0x3888('0x10','YobH'),'grace_period_expires_date':null,'is_sandbox':![],'original_purchase_date':_0x3888('0x11','vIdG'),'ownership_type':_0x3888('0x4','VK)Q'),'period_type':_0x3888('0x2','cGlc'),'purchase_date':_0x3888('0x9','pkmP'),'store':_0x3888('0xc','HzU#'),'unsubscribe_detected_at':_0x3888('0x3','fv8(')}}}};$done({'body':JSON['stringify'](objc)});
