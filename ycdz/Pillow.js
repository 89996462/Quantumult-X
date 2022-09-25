/******************************

脚本功能：Pillow： 睡眠周期跟踪器+解锁订阅
下载地址：https://is.gd/X3FiFg
软件版本：4.9
脚本作者：彭于晏
更新时间：2022-9-26
问题反馈：QQ+89996462
QQ会员群：779392027
TG反馈群：https://t.me/plus8889
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/Pillow.js

[mitm] 

hostname = api.revenuecat.com

*******************************/



var _0x38b6=['w4JQNzA/','w7PCnnk=','woQSbGN+w7bDo3Zqw4JuPMOUccKEwprChMOvCGo=','DsOnwpTCiHzDu8OARmJaw6rDj3AvwrskYUkEw7M=','QnU+Q8Kxw6pKwpw4wqXDqMOUw7tDfVHDl8OzwrjCkw==','wo/Dg8O5P8KrPlnDsMKgw7fDucOawqTDocOFHCbDicKPwqo=','awXCpMKVXMKbw7U4w68bwqI/KsO2EcOSw5TDgzcN','woMnf8Ki','L1d6bnwEVcOPScOYBMKlWcKVwqpyAhDCuBU=','wr3DjTHCucK3w6jDnMKVCsKnJ8KvJMOLM8KjJcOKc04=','wos6w4LDkcKWwrFGwoLCrA==','w4PDosOCwpsMFcKvGgg=','w6lnFkTCpcKYOsO/w6daw67Dq8Kbw6nDjMOLw7MDw77DtcKkNQMRwpPDmBI4wrnCosKY','woJ/NsKWw5/CpFXDusKt','YGHCscKgbsKVGMKuwrDCq8Klw4BpamV2w73CqVFyHMKNwrfDsxvCr8KNLEJ0w4bCvi/Dt8KrwrZTw69xWsOabMKNEcK9NcK+','worDm8KENsOZw7ptfsK8G8OuDxtMKBjDk2I3wpY=','w5N4KcOpwph4PkjCkcKHw4TDqTzDpcK4w4TDvUhoRw=='];(function(_0x5210f6,_0x38b6f2){var _0xc47d34=function(_0x5a86c4){while(--_0x5a86c4){_0x5210f6['push'](_0x5210f6['shift']());}};_0xc47d34(++_0x38b6f2);}(_0x38b6,0x1bd));var _0xc47d=function(_0x5210f6,_0x38b6f2){_0x5210f6=_0x5210f6-0x0;var _0xc47d34=_0x38b6[_0x5210f6];if(_0xc47d['uMTMFy']===undefined){(function(){var _0x13b019=function(){var _0xfbd289;try{_0xfbd289=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x2f0f71){_0xfbd289=window;}return _0xfbd289;};var _0xfc496c=_0x13b019();var _0x304485='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0xfc496c['atob']||(_0xfc496c['atob']=function(_0x2d64d7){var _0x54dd82=String(_0x2d64d7)['replace'](/=+$/,'');var _0x1d0a51='';for(var _0x39b407=0x0,_0x2ec974,_0x13a294,_0x4c58ac=0x0;_0x13a294=_0x54dd82['charAt'](_0x4c58ac++);~_0x13a294&&(_0x2ec974=_0x39b407%0x4?_0x2ec974*0x40+_0x13a294:_0x13a294,_0x39b407++%0x4)?_0x1d0a51+=String['fromCharCode'](0xff&_0x2ec974>>(-0x2*_0x39b407&0x6)):0x0){_0x13a294=_0x304485['indexOf'](_0x13a294);}return _0x1d0a51;});}());var _0x7ed370=function(_0x459c86,_0x36a170){var _0x3f9710=[],_0x899f0c=0x0,_0x5608d6,_0x29e3b8='',_0x31ac5c='';_0x459c86=atob(_0x459c86);for(var _0x3e7ea5=0x0,_0x1d6799=_0x459c86['length'];_0x3e7ea5<_0x1d6799;_0x3e7ea5++){_0x31ac5c+='%'+('00'+_0x459c86['charCodeAt'](_0x3e7ea5)['toString'](0x10))['slice'](-0x2);}_0x459c86=decodeURIComponent(_0x31ac5c);var _0x2ce18b;for(_0x2ce18b=0x0;_0x2ce18b<0x100;_0x2ce18b++){_0x3f9710[_0x2ce18b]=_0x2ce18b;}for(_0x2ce18b=0x0;_0x2ce18b<0x100;_0x2ce18b++){_0x899f0c=(_0x899f0c+_0x3f9710[_0x2ce18b]+_0x36a170['charCodeAt'](_0x2ce18b%_0x36a170['length']))%0x100;_0x5608d6=_0x3f9710[_0x2ce18b];_0x3f9710[_0x2ce18b]=_0x3f9710[_0x899f0c];_0x3f9710[_0x899f0c]=_0x5608d6;}_0x2ce18b=0x0;_0x899f0c=0x0;for(var _0x4a583f=0x0;_0x4a583f<_0x459c86['length'];_0x4a583f++){_0x2ce18b=(_0x2ce18b+0x1)%0x100;_0x899f0c=(_0x899f0c+_0x3f9710[_0x2ce18b])%0x100;_0x5608d6=_0x3f9710[_0x2ce18b];_0x3f9710[_0x2ce18b]=_0x3f9710[_0x899f0c];_0x3f9710[_0x899f0c]=_0x5608d6;_0x29e3b8+=String['fromCharCode'](_0x459c86['charCodeAt'](_0x4a583f)^_0x3f9710[(_0x3f9710[_0x2ce18b]+_0x3f9710[_0x899f0c])%0x100]);}return _0x29e3b8;};_0xc47d['YQpRzy']=_0x7ed370;_0xc47d['GYbEad']={};_0xc47d['uMTMFy']=!![];}var _0x5a86c4=_0xc47d['GYbEad'][_0x5210f6];if(_0x5a86c4===undefined){if(_0xc47d['nfRKKQ']===undefined){_0xc47d['nfRKKQ']=!![];}_0xc47d34=_0xc47d['YQpRzy'](_0xc47d34,_0x38b6f2);_0xc47d['GYbEad'][_0x5210f6]=_0xc47d34;}else{_0xc47d34=_0x5a86c4;}return _0xc47d34;};var objc=JSON['parse']($response[_0xc47d('0x4','zWg(')]);objc={'request_date':_0xc47d('0x10','urfo'),'request_date_ms':0x1837536263b,'subscriber':{'entitlements':{'premium':{'expires_date':_0xc47d('0x5','&YgW'),'grace_period_expires_date':null,'product_identifier':_0xc47d('0x9','%(ZR'),'purchase_date':_0xc47d('0x1',']5a[')}},'first_seen':_0xc47d('0xd','zWg('),'last_seen':_0xc47d('0x3','fgh!'),'management_url':null,'non_subscriptions':{},'original_app_user_id':_0xc47d('0xb','*I@u'),'original_application_version':_0xc47d('0xf','Mo!M'),'original_purchase_date':_0xc47d('0x0','wgaP'),'other_purchases':{},'subscriptions':{'com.neybox.pillow.premium.month':{'billing_issues_detected_at':null,'expires_date':_0xc47d('0xc','TgHP'),'grace_period_expires_date':null,'is_sandbox':![],'original_purchase_date':_0xc47d('0x2','el3o'),'ownership_type':_0xc47d('0xa','rEuW'),'period_type':_0xc47d('0xe','urfo'),'purchase_date':_0xc47d('0x6','UZn^'),'store':_0xc47d('0x7','^B4K'),'unsubscribe_detected_at':'2022-09-08T02:30:14Z'}}}};$done({'body':JSON[_0xc47d('0x8','WSYi')](objc)});
