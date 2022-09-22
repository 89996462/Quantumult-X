/******************************

脚本功能：目标地图+解锁订阅
下载地址：https://apps.apple.com/cn/app/%E7%9B%AE%E6%A0%87%E5%9C%B0%E5%9B%BE-%E4%B8%AA%E4%BA%BA%E7%9B%AE%E6%A0%87%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7/id1555022550
软件版本：2.21.3
脚本作者：彭于晏
更新时间：2022-9-22
问题反馈：QQ+89996462
QQ会员群：779392027
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/mbdt.js

[mitm] 

hostname = api.revenuecat.com

*******************************/


var _0x6f38=['w6bDnGXDrcOxw5fCrSZiw4nChTTDiXQdw5Zsw7TCr8Ka','wpUiTMO7QsOKM19I','woVcJg==','XUB1EGrClGHDm8O7','wpTCk10IwqjChMOgL8KQU8Kow6Vzw6xLwpbDoMOmasKOw5EpaQHDn8OBw7YFKsKDwrrDs8O7N2TCviXCl8OtwoLCv3NNwow5TiE=','FxMUYcKEwobCvsKvbzrDn3PCmyplwqPDgwIvw6tawoo6QMO9NCdWwrAiIhI=','w4pCwqhSEA==','QcKWw7PCj8KOw5HDhDNbaF4Aw4rChg7DrHQ5w6jDqg==','fTpnT8K2','Xw/DjW8VOjgeRcOPOcKfIcKPIMOibMOQfz8=','w6bDjsOyw4U/asOrw4bCvcOsV8KSS8Khw6cpw6/CvjjCrQ=='];(function(_0x5610ae,_0x6f38e0){var _0x269984=function(_0x1420cf){while(--_0x1420cf){_0x5610ae['push'](_0x5610ae['shift']());}};_0x269984(++_0x6f38e0);}(_0x6f38,0x1cd));var _0x2699=function(_0x5610ae,_0x6f38e0){_0x5610ae=_0x5610ae-0x0;var _0x269984=_0x6f38[_0x5610ae];if(_0x2699['gnWgZj']===undefined){(function(){var _0x574ad1;try{var _0x5569da=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x574ad1=_0x5569da();}catch(_0x1940e5){_0x574ad1=window;}var _0x5b61c4='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x574ad1['atob']||(_0x574ad1['atob']=function(_0x7e342){var _0x4cae1d=String(_0x7e342)['replace'](/=+$/,'');var _0x52ae8c='';for(var _0x26d17a=0x0,_0x4a9b8b,_0x378069,_0x43ba9b=0x0;_0x378069=_0x4cae1d['charAt'](_0x43ba9b++);~_0x378069&&(_0x4a9b8b=_0x26d17a%0x4?_0x4a9b8b*0x40+_0x378069:_0x378069,_0x26d17a++%0x4)?_0x52ae8c+=String['fromCharCode'](0xff&_0x4a9b8b>>(-0x2*_0x26d17a&0x6)):0x0){_0x378069=_0x5b61c4['indexOf'](_0x378069);}return _0x52ae8c;});}());var _0x57c459=function(_0x135e7f,_0x362b30){var _0x1e15c6=[],_0x509e18=0x0,_0x21c96b,_0x2075ca='',_0x50dd84='';_0x135e7f=atob(_0x135e7f);for(var _0x5cf28e=0x0,_0x99fc11=_0x135e7f['length'];_0x5cf28e<_0x99fc11;_0x5cf28e++){_0x50dd84+='%'+('00'+_0x135e7f['charCodeAt'](_0x5cf28e)['toString'](0x10))['slice'](-0x2);}_0x135e7f=decodeURIComponent(_0x50dd84);var _0x1b6178;for(_0x1b6178=0x0;_0x1b6178<0x100;_0x1b6178++){_0x1e15c6[_0x1b6178]=_0x1b6178;}for(_0x1b6178=0x0;_0x1b6178<0x100;_0x1b6178++){_0x509e18=(_0x509e18+_0x1e15c6[_0x1b6178]+_0x362b30['charCodeAt'](_0x1b6178%_0x362b30['length']))%0x100;_0x21c96b=_0x1e15c6[_0x1b6178];_0x1e15c6[_0x1b6178]=_0x1e15c6[_0x509e18];_0x1e15c6[_0x509e18]=_0x21c96b;}_0x1b6178=0x0;_0x509e18=0x0;for(var _0x141c17=0x0;_0x141c17<_0x135e7f['length'];_0x141c17++){_0x1b6178=(_0x1b6178+0x1)%0x100;_0x509e18=(_0x509e18+_0x1e15c6[_0x1b6178])%0x100;_0x21c96b=_0x1e15c6[_0x1b6178];_0x1e15c6[_0x1b6178]=_0x1e15c6[_0x509e18];_0x1e15c6[_0x509e18]=_0x21c96b;_0x2075ca+=String['fromCharCode'](_0x135e7f['charCodeAt'](_0x141c17)^_0x1e15c6[(_0x1e15c6[_0x1b6178]+_0x1e15c6[_0x509e18])%0x100]);}return _0x2075ca;};_0x2699['IYIOzG']=_0x57c459;_0x2699['fZtNKd']={};_0x2699['gnWgZj']=!![];}var _0x1420cf=_0x2699['fZtNKd'][_0x5610ae];if(_0x1420cf===undefined){if(_0x2699['NqgZVq']===undefined){_0x2699['NqgZVq']=!![];}_0x269984=_0x2699['IYIOzG'](_0x269984,_0x6f38e0);_0x2699['fZtNKd'][_0x5610ae]=_0x269984;}else{_0x269984=_0x1420cf;}return _0x269984;};var objc=JSON[_0x2699('0x9','@rVY')]($response['body']);objc={'request_date':'2022-09-22T02:27:39Z','request_date_ms':0x1836305a984,'subscriber':{'entitlements':{'pro':{'expires_date':'9999-09-08T01:16:31Z','grace_period_expires_date':null,'product_identifier':_0x2699('0x6','5E3)'),'purchase_date':'2022-08-13T17:50:58Z'}},'first_seen':'2022-08-13T17:48:56Z','last_seen':_0x2699('0x0','!o%@'),'management_url':null,'non_subscriptions':{},'original_app_user_id':_0x2699('0x5','BxzA'),'original_application_version':_0x2699('0x3','j#18'),'original_purchase_date':_0x2699('0x1','U4Sw'),'other_purchases':{},'subscriptions':{'com.happydogteam.relax.yearlyPro':{'billing_issues_detected_at':null,'expires_date':_0x2699('0x8','FCre'),'grace_period_expires_date':null,'is_sandbox':![],'original_purchase_date':'2022-08-13T17:50:59Z','ownership_type':_0x2699('0x4',']e]('),'period_type':_0x2699('0x7','h8n6'),'purchase_date':_0x2699('0xa','gJSa'),'store':_0x2699('0x2','T3KP'),'unsubscribe_detected_at':'2022-08-13T17:52:45Z'}}}};$done({'body':JSON['stringify'](objc)});
