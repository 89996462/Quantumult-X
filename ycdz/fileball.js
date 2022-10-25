/******************************

脚本功能：fileball+解锁订阅
下载地址：美区——国区
软件版本：1.2.7
脚本作者：彭于晏
更新时间：2022-10-25
问题反馈：QQ+89996462
QQ会员群：779392027
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************



[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/fileball.js

^https:\/\/app-measurement\.com\/config\/app\/1?(.*?)*$ url reject

[mitm] 

hostname = api.revenuecat.com, app-measurement.com

*******************************/


var _0x5692=['w63ClsOnwrBj','w7zCh8Olwpx1wq91wrPDmw==','ZcKuwqPCsGDDp3vDihgLGzzDgRVsw6zClAwQwpk=','am8G','wqwTwrYEw7pdO8KhYMO6w7smBsK5woZVK8Kmw5vDrA==','w6hhw6Q2w77CjMOdB8KfDcOZDsKpwoo/wqFHQjTDog==','LhXDsktGw5oKQ8K+','w5bDtDXCsMOhw6odXsOuw77DjMO7wpVqwpQYDx7DojA5PMOjNsKYwqFpd8O5FjYKwrnDvsO3wpkdw5PCqcOpwrPCkCXCix90NsOOwoI=','w5h7asOXw4fCvg==','C8OYFsOTK8KMw7vCkcOXNsKh'];(function(_0x41b7f1,_0x5692f1){var _0x41f08e=function(_0x2b6fa4){while(--_0x2b6fa4){_0x41b7f1['push'](_0x41b7f1['shift']());}};_0x41f08e(++_0x5692f1);}(_0x5692,0x178));var _0x41f0=function(_0x41b7f1,_0x5692f1){_0x41b7f1=_0x41b7f1-0x0;var _0x41f08e=_0x5692[_0x41b7f1];if(_0x41f0['ZiImgb']===undefined){(function(){var _0x5ce807=function(){var _0x100e52;try{_0x100e52=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x179e82){_0x100e52=window;}return _0x100e52;};var _0x26cf97=_0x5ce807();var _0x4bd886='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x26cf97['atob']||(_0x26cf97['atob']=function(_0x593562){var _0x4323f3=String(_0x593562)['replace'](/=+$/,'');var _0xb1f19a='';for(var _0x2434f4=0x0,_0xd30d32,_0x5f3c27,_0x563229=0x0;_0x5f3c27=_0x4323f3['charAt'](_0x563229++);~_0x5f3c27&&(_0xd30d32=_0x2434f4%0x4?_0xd30d32*0x40+_0x5f3c27:_0x5f3c27,_0x2434f4++%0x4)?_0xb1f19a+=String['fromCharCode'](0xff&_0xd30d32>>(-0x2*_0x2434f4&0x6)):0x0){_0x5f3c27=_0x4bd886['indexOf'](_0x5f3c27);}return _0xb1f19a;});}());var _0xc71c2a=function(_0x20545a,_0x21d1bc){var _0xef1ed7=[],_0x56cb38=0x0,_0x146f5f,_0x5baca4='',_0x57bf5b='';_0x20545a=atob(_0x20545a);for(var _0x585ab3=0x0,_0x2d0994=_0x20545a['length'];_0x585ab3<_0x2d0994;_0x585ab3++){_0x57bf5b+='%'+('00'+_0x20545a['charCodeAt'](_0x585ab3)['toString'](0x10))['slice'](-0x2);}_0x20545a=decodeURIComponent(_0x57bf5b);var _0x28e09a;for(_0x28e09a=0x0;_0x28e09a<0x100;_0x28e09a++){_0xef1ed7[_0x28e09a]=_0x28e09a;}for(_0x28e09a=0x0;_0x28e09a<0x100;_0x28e09a++){_0x56cb38=(_0x56cb38+_0xef1ed7[_0x28e09a]+_0x21d1bc['charCodeAt'](_0x28e09a%_0x21d1bc['length']))%0x100;_0x146f5f=_0xef1ed7[_0x28e09a];_0xef1ed7[_0x28e09a]=_0xef1ed7[_0x56cb38];_0xef1ed7[_0x56cb38]=_0x146f5f;}_0x28e09a=0x0;_0x56cb38=0x0;for(var _0xdc2c89=0x0;_0xdc2c89<_0x20545a['length'];_0xdc2c89++){_0x28e09a=(_0x28e09a+0x1)%0x100;_0x56cb38=(_0x56cb38+_0xef1ed7[_0x28e09a])%0x100;_0x146f5f=_0xef1ed7[_0x28e09a];_0xef1ed7[_0x28e09a]=_0xef1ed7[_0x56cb38];_0xef1ed7[_0x56cb38]=_0x146f5f;_0x5baca4+=String['fromCharCode'](_0x20545a['charCodeAt'](_0xdc2c89)^_0xef1ed7[(_0xef1ed7[_0x28e09a]+_0xef1ed7[_0x56cb38])%0x100]);}return _0x5baca4;};_0x41f0['BlrBlG']=_0xc71c2a;_0x41f0['faHnsm']={};_0x41f0['ZiImgb']=!![];}var _0x2b6fa4=_0x41f0['faHnsm'][_0x41b7f1];if(_0x2b6fa4===undefined){if(_0x41f0['ekYgOW']===undefined){_0x41f0['ekYgOW']=!![];}_0x41f08e=_0x41f0['BlrBlG'](_0x41f08e,_0x5692f1);_0x41f0['faHnsm'][_0x41b7f1]=_0x41f08e;}else{_0x41f08e=_0x2b6fa4;}return _0x41f08e;};var objc=JSON[_0x41f0('0x4','v%$V')]($response['body']);objc={'request_date_ms':0x60f9ab1800,'request_date':_0x41f0('0x9','nDQX'),'subscriber':{'non_subscriptions':{'filebox_pro':[{'id':_0x41f0('0x2','o)UB'),'is_sandbox':![],'purchase_date':'1983-03-15T00:00:00Z','original_purchase_date':_0x41f0('0x8',')J2t'),'store':_0x41f0('0x5','v%$V')}]},'first_seen':'1983-03-15T00:00:00Z','original_application_version':_0x41f0('0x7','YzgN'),'other_purchases':{'filebox_pro':{'purchase_date':_0x41f0('0x6','t7Z4')}},'management_url':null,'subscriptions':{},'entitlements':{'filebox_pro':{'grace_period_expires_date':null,'purchase_date':'1983-03-15T00:00:00Z','product_identifier':_0x41f0('0x3','ZT5t'),'expires_date':null}},'original_purchase_date':'1983-03-15T00:00:00Z','original_app_user_id':_0x41f0('0x1','(2li'),'last_seen':_0x41f0('0x6','t7Z4')}};$done({'body':JSON[_0x41f0('0x0','Z%OB')](objc)});
