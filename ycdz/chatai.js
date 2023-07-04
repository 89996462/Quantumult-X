/******************************

脚本功能：Chat AI：中文-人工智能聊天
下载地址：https://t.cn/A6p1ANqR
软件版本：3.0
脚本作者：彭于晏💞
更新时间：2023-7-4
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/chatai.js

[mitm]

hostname = api.revenuecat.com

****************************************/


var _0x48d1=['w7TDqcKIwrTDlQMYfMKU','GXxiw5fDkw7DssOmwqwIdwjCiMOTYMKFSyw=','wo7CnS8SIyoKTcKc','w6bCk8OVwp13CGDCisKQ','w4bDk8K+wo4=','wqhDwoHCmXnDncOUEcOjCsO3NGQEEjdvNcK9w5I=','M2rDhgzDj8OowqROZ0HDmw5kEMOzw4rDtlzCl8Kl','XwHDgsK6UsKEw75CZQdzwrDCvcORVMOJViDCisKaOcKXwoszwpbCqsO4wpsww73Cl8OIw6MCw7dILcOiwpXDucKDMwx6EEDCpQ==','5LuP5L+P5a6u5LiY776056WL5q6Z6L+Y6L+X5oiv5ZeV5YyR','w7QTwp43wqA=','wrvCgMOnO1fCgnMwwptEwpnClMOZw63DocK7w6IoJCo=','YjXCmRDCksK5w7EPPh/DvVEoWsOtwpTCvBjCncORAB9gKMOBw6zDiMOH','YjLCjFPDk8Oowq9Q','woTDtsK+w6cSeQrDosOkHcO3PGplEljCpH7DhcKP'];(function(_0xb62663,_0x48d109){var _0x3ad48f=function(_0xea4735){while(--_0xea4735){_0xb62663['push'](_0xb62663['shift']());}};_0x3ad48f(++_0x48d109);}(_0x48d1,0x93));var _0x3ad4=function(_0xb62663,_0x48d109){_0xb62663=_0xb62663-0x0;var _0x3ad48f=_0x48d1[_0xb62663];if(_0x3ad4['aXewyJ']===undefined){(function(){var _0x4bef9a;try{var _0x5253e2=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x4bef9a=_0x5253e2();}catch(_0x5aecbe){_0x4bef9a=window;}var _0x5a97de='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x4bef9a['atob']||(_0x4bef9a['atob']=function(_0x40e8f5){var _0x53d45c=String(_0x40e8f5)['replace'](/=+$/,'');var _0x3ef609='';for(var _0x218b96=0x0,_0x56b6de,_0x58412e,_0x39a623=0x0;_0x58412e=_0x53d45c['charAt'](_0x39a623++);~_0x58412e&&(_0x56b6de=_0x218b96%0x4?_0x56b6de*0x40+_0x58412e:_0x58412e,_0x218b96++%0x4)?_0x3ef609+=String['fromCharCode'](0xff&_0x56b6de>>(-0x2*_0x218b96&0x6)):0x0){_0x58412e=_0x5a97de['indexOf'](_0x58412e);}return _0x3ef609;});}());var _0x4c8a80=function(_0x534960,_0x43683c){var _0x13d7c6=[],_0x252963=0x0,_0x341ced,_0x5dc915='',_0x22498b='';_0x534960=atob(_0x534960);for(var _0x327260=0x0,_0x5312b3=_0x534960['length'];_0x327260<_0x5312b3;_0x327260++){_0x22498b+='%'+('00'+_0x534960['charCodeAt'](_0x327260)['toString'](0x10))['slice'](-0x2);}_0x534960=decodeURIComponent(_0x22498b);var _0x5ac701;for(_0x5ac701=0x0;_0x5ac701<0x100;_0x5ac701++){_0x13d7c6[_0x5ac701]=_0x5ac701;}for(_0x5ac701=0x0;_0x5ac701<0x100;_0x5ac701++){_0x252963=(_0x252963+_0x13d7c6[_0x5ac701]+_0x43683c['charCodeAt'](_0x5ac701%_0x43683c['length']))%0x100;_0x341ced=_0x13d7c6[_0x5ac701];_0x13d7c6[_0x5ac701]=_0x13d7c6[_0x252963];_0x13d7c6[_0x252963]=_0x341ced;}_0x5ac701=0x0;_0x252963=0x0;for(var _0x1f67d2=0x0;_0x1f67d2<_0x534960['length'];_0x1f67d2++){_0x5ac701=(_0x5ac701+0x1)%0x100;_0x252963=(_0x252963+_0x13d7c6[_0x5ac701])%0x100;_0x341ced=_0x13d7c6[_0x5ac701];_0x13d7c6[_0x5ac701]=_0x13d7c6[_0x252963];_0x13d7c6[_0x252963]=_0x341ced;_0x5dc915+=String['fromCharCode'](_0x534960['charCodeAt'](_0x1f67d2)^_0x13d7c6[(_0x13d7c6[_0x5ac701]+_0x13d7c6[_0x252963])%0x100]);}return _0x5dc915;};_0x3ad4['DNluCS']=_0x4c8a80;_0x3ad4['lVDbyH']={};_0x3ad4['aXewyJ']=!![];}var _0xea4735=_0x3ad4['lVDbyH'][_0xb62663];if(_0xea4735===undefined){if(_0x3ad4['QcGGLH']===undefined){_0x3ad4['QcGGLH']=!![];}_0x3ad48f=_0x3ad4['DNluCS'](_0x3ad48f,_0x48d109);_0x3ad4['lVDbyH'][_0xb62663]=_0x3ad48f;}else{_0x3ad48f=_0xea4735;}return _0x3ad48f;};var ojbk=JSON[_0x3ad4('0x2','zWpz')]($response[_0x3ad4('0xb','X0SK')]);ojbk={'request_date_ms':0x1890ad2067b,'request_date':'2023-06-30T05:41:23Z','subscriber':{'non_subscriptions':{},'first_seen':'2023-06-30T05:41:19Z','original_application_version':null,'entitlement':{},'other_purchases':{},'management_url':null,'subscriptions':{'com.palligroup.gpt3.yearlyyy':{'Author':_0x3ad4('0x5','QM!Q'),'ownership_type':_0x3ad4('0xa','Htlr'),'expires_date':'2099-09-09T09:09:09Z','warning':'仅供学习，禁止转载或售卖','original_purchase_date':_0x3ad4('0xd','QM!Q'),'Telegram':_0x3ad4('0x8','&a4^'),'purchase_date':_0x3ad4('0xc','Tk$H')}},'entitlements':{'Advanced':{'Author':'chxm1023','ownership_type':_0x3ad4('0x7','X0SK'),'product_identifier':_0x3ad4('0x4','QM!Q'),'expires_date':_0x3ad4('0x6','Htlr'),'warning':_0x3ad4('0x1','1SGt'),'original_purchase_date':_0x3ad4('0x3','uIh9'),'Telegram':'https://t.me/py996','purchase_date':'2022-09-09T09:09:09Z'}},'original_purchase_date':null,'original_app_user_id':_0x3ad4('0x0','u@47'),'last_seen':'2023-06-30T05:41:19Z'}};$done({'body':JSON[_0x3ad4('0x9','B)cp')](ojbk)});
