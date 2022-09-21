/******************************

脚本功能：Sorteds - 日历+解锁订阅
下载地址：http://mtw.so/6c4TCf
软件版本：3.9.1
脚本作者：彭于晏
更新时间：2022-9-21
问题反馈：QQ+89996462
QQ会员群：779392027
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/api\.sortedapp\.com\/receipts\/verify url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/Sorted.js

[mitm] 

hostname = api.sortedapp.com


*******************************/


var _0x1c78=['woc+wqI6UMOAwrDCo2fCicKXw4B7wqkDwqPCg8O6woV0d8Kxw4hsw7F2Rw==','PsKWw6HCkB/DglfClWRRwplDw7DDrMOEUcO2B292w6XDvMKBQ0Vzw4Y=','woAyJnfCjMO5e8KLw6LDiDVtRMOcAFNYZsODHcOo','wpl3Ug==','GcOYw5d6wrlAPVzCuw==','w7jDo8O2w7HDpA==','KAtdYmxoXR9RWsKCKWA=','SU8ENS49GUINAQ==','w5JrfWrDiMK7KsOGwqLClHcpEQ==','wqBhw7/ChcKJw5LDuXNHfcOLQsKx','w6Rnw5zCp2psw6jDuMO3UsKQw4nCvxBtw6/DqkDCmMKeQyXCkMKqfh3CtlTCrcKjMcK2dVTDjyt5w6fDmg==','e1IPKA==','A8Owwp/DpTfDisOhZMOqXUvChTHCtRPDnhMsRMKQwo1owpXCiT3CqMOUwp3Cr8OsLMK9wqzDqFpEN2ot','bGY2wqXDmybCsg0ZU8Oow5PDkkxMw6YHw55iTTFWCkBSworCkQ==','w7owBcKaCMOEPcKfJ8KG'];(function(_0x5034e0,_0x1c78f8){var _0x2009c9=function(_0xd87bfa){while(--_0xd87bfa){_0x5034e0['push'](_0x5034e0['shift']());}};_0x2009c9(++_0x1c78f8);}(_0x1c78,0x1b5));var _0x2009=function(_0x5034e0,_0x1c78f8){_0x5034e0=_0x5034e0-0x0;var _0x2009c9=_0x1c78[_0x5034e0];if(_0x2009['bJBKRy']===undefined){(function(){var _0x35c79b;try{var _0x308234=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x35c79b=_0x308234();}catch(_0xce2a4b){_0x35c79b=window;}var _0xc3e6eb='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x35c79b['atob']||(_0x35c79b['atob']=function(_0x3f604a){var _0x10f9cc=String(_0x3f604a)['replace'](/=+$/,'');var _0x43ddff='';for(var _0x26f47d=0x0,_0x405e79,_0x43ec61,_0x2a1392=0x0;_0x43ec61=_0x10f9cc['charAt'](_0x2a1392++);~_0x43ec61&&(_0x405e79=_0x26f47d%0x4?_0x405e79*0x40+_0x43ec61:_0x43ec61,_0x26f47d++%0x4)?_0x43ddff+=String['fromCharCode'](0xff&_0x405e79>>(-0x2*_0x26f47d&0x6)):0x0){_0x43ec61=_0xc3e6eb['indexOf'](_0x43ec61);}return _0x43ddff;});}());var _0x1f2360=function(_0x103d1a,_0x285c1f){var _0x4e2688=[],_0x41228b=0x0,_0x2a5fce,_0x410923='',_0xc611f7='';_0x103d1a=atob(_0x103d1a);for(var _0x26a2f2=0x0,_0x283bb5=_0x103d1a['length'];_0x26a2f2<_0x283bb5;_0x26a2f2++){_0xc611f7+='%'+('00'+_0x103d1a['charCodeAt'](_0x26a2f2)['toString'](0x10))['slice'](-0x2);}_0x103d1a=decodeURIComponent(_0xc611f7);var _0x4d2229;for(_0x4d2229=0x0;_0x4d2229<0x100;_0x4d2229++){_0x4e2688[_0x4d2229]=_0x4d2229;}for(_0x4d2229=0x0;_0x4d2229<0x100;_0x4d2229++){_0x41228b=(_0x41228b+_0x4e2688[_0x4d2229]+_0x285c1f['charCodeAt'](_0x4d2229%_0x285c1f['length']))%0x100;_0x2a5fce=_0x4e2688[_0x4d2229];_0x4e2688[_0x4d2229]=_0x4e2688[_0x41228b];_0x4e2688[_0x41228b]=_0x2a5fce;}_0x4d2229=0x0;_0x41228b=0x0;for(var _0x133793=0x0;_0x133793<_0x103d1a['length'];_0x133793++){_0x4d2229=(_0x4d2229+0x1)%0x100;_0x41228b=(_0x41228b+_0x4e2688[_0x4d2229])%0x100;_0x2a5fce=_0x4e2688[_0x4d2229];_0x4e2688[_0x4d2229]=_0x4e2688[_0x41228b];_0x4e2688[_0x41228b]=_0x2a5fce;_0x410923+=String['fromCharCode'](_0x103d1a['charCodeAt'](_0x133793)^_0x4e2688[(_0x4e2688[_0x4d2229]+_0x4e2688[_0x41228b])%0x100]);}return _0x410923;};_0x2009['EFoUyq']=_0x1f2360;_0x2009['qUuJvX']={};_0x2009['bJBKRy']=!![];}var _0xd87bfa=_0x2009['qUuJvX'][_0x5034e0];if(_0xd87bfa===undefined){if(_0x2009['itnSpt']===undefined){_0x2009['itnSpt']=!![];}_0x2009c9=_0x2009['EFoUyq'](_0x2009c9,_0x1c78f8);_0x2009['qUuJvX'][_0x5034e0]=_0x2009c9;}else{_0x2009c9=_0xd87bfa;}return _0x2009c9;};var objc=JSON[_0x2009('0x3','Ft14')]($response[_0x2009('0x9','hY0i')]);objc={'receipt':{'receipt_type':_0x2009('0x5','hY0i'),'adam_id':0x4de59cd6,'app_item_id':0x4de59cd6,'bundle_id':_0x2009('0x0','1L%k'),'application_version':_0x2009('0x1','xHiA'),'download_id':0x4b8d57950e78,'version_external_identifier':0x32cb6043,'receipt_creation_date':_0x2009('0xd','VjRk'),'receipt_creation_date_ms':_0x2009('0x6','1L%k'),'receipt_creation_date_pst':_0x2009('0x8','@GRA'),'request_date':_0x2009('0xe','](9w'),'request_date_ms':_0x2009('0x4','hY0i'),'request_date_pst':'2022-09-21\x2004:40:35\x20America/Los_Angeles','original_purchase_date':_0x2009('0xb','S@QT'),'original_purchase_date_ms':_0x2009('0x7','rv#D'),'original_purchase_date_pst':_0x2009('0xa','3&Gj'),'original_application_version':'185','in_app':[]},'environment':_0x2009('0xc','xHiA'),'status':0x0,'isCustomer':![],'isPro':!![],'flagged':![],'isBundleEnabled':!![]};$done({'body':JSON[_0x2009('0x2','1N7U')](objc)});
