

/******************************

脚本功能：Scanner Pro+解锁订阅
下载地址：http://mtw.so/6bRcSt
软件版本：8.10
脚本作者：彭于晏
更新时间：2022-9-11
问题反馈：QQ+89996462
QQ会员群：779392027
TG反馈群：https://t.me/plus8889
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/Scanner.js

[mitm] 

hostname = api.revenuecat.com

*******************************/


var _0x43e6=['w6xBGMKDGSjDmsKEw5fDnsKtwoDDtgTDg8Kcd3gxdg==','wpPDtQTDncKUw5nCsHLDjndIBMOYw7NbMzg+','w6JRw7Ekwp/CucKGXmV6wpPCixvCtAvDpsKvETTDig==','YmM3wq1JOcONw4jCocKLw6bDl2XCuxbCqW9oAFI=','wpw9Xl8pA0TCj18/EWcrwqseDcOdPh/Cuw==','aMKJL8KVdsOd','wpPDqsKPw7PDj0oRwoPClEXDk8OSw7vDuMOqAiLDmcKnQw==','wrgVwrdkw4HDvcOdFjErwqDDkVnDqA3DoMKnEg==','P8OfZMOBOsKBwpLClMKkwqhYOcOnw4MSw7zCs3zCk8Or','wqTCiR7Dp8OY','NcOpGMKAwqHDm8KqQMKwd8ORX8KLwqDDlnQ3w4zCmwQ=','w7LCuTkYNy/DnF4lLgzCocOqWnHDjlB/eyA='];(function(_0x48dac5,_0x43e6ae){var _0x5751e0=function(_0x177139){while(--_0x177139){_0x48dac5['push'](_0x48dac5['shift']());}};_0x5751e0(++_0x43e6ae);}(_0x43e6,0x196));var _0x5751=function(_0x48dac5,_0x43e6ae){_0x48dac5=_0x48dac5-0x0;var _0x5751e0=_0x43e6[_0x48dac5];if(_0x5751['kKUovk']===undefined){(function(){var _0x54b257=function(){var _0x533bd4;try{_0x533bd4=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x276709){_0x533bd4=window;}return _0x533bd4;};var _0x2550cf=_0x54b257();var _0x44a56d='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x2550cf['atob']||(_0x2550cf['atob']=function(_0x419ba3){var _0x29f4ca=String(_0x419ba3)['replace'](/=+$/,'');var _0x396f1f='';for(var _0x1aff4f=0x0,_0x5704be,_0x2045e1,_0x3560a4=0x0;_0x2045e1=_0x29f4ca['charAt'](_0x3560a4++);~_0x2045e1&&(_0x5704be=_0x1aff4f%0x4?_0x5704be*0x40+_0x2045e1:_0x2045e1,_0x1aff4f++%0x4)?_0x396f1f+=String['fromCharCode'](0xff&_0x5704be>>(-0x2*_0x1aff4f&0x6)):0x0){_0x2045e1=_0x44a56d['indexOf'](_0x2045e1);}return _0x396f1f;});}());var _0x14ddf1=function(_0x4f08a5,_0x271f15){var _0x414618=[],_0x2d22e5=0x0,_0x214e2f,_0x489fb8='',_0x183af6='';_0x4f08a5=atob(_0x4f08a5);for(var _0x2f886a=0x0,_0x3b65bb=_0x4f08a5['length'];_0x2f886a<_0x3b65bb;_0x2f886a++){_0x183af6+='%'+('00'+_0x4f08a5['charCodeAt'](_0x2f886a)['toString'](0x10))['slice'](-0x2);}_0x4f08a5=decodeURIComponent(_0x183af6);var _0x45da0c;for(_0x45da0c=0x0;_0x45da0c<0x100;_0x45da0c++){_0x414618[_0x45da0c]=_0x45da0c;}for(_0x45da0c=0x0;_0x45da0c<0x100;_0x45da0c++){_0x2d22e5=(_0x2d22e5+_0x414618[_0x45da0c]+_0x271f15['charCodeAt'](_0x45da0c%_0x271f15['length']))%0x100;_0x214e2f=_0x414618[_0x45da0c];_0x414618[_0x45da0c]=_0x414618[_0x2d22e5];_0x414618[_0x2d22e5]=_0x214e2f;}_0x45da0c=0x0;_0x2d22e5=0x0;for(var _0x304c3e=0x0;_0x304c3e<_0x4f08a5['length'];_0x304c3e++){_0x45da0c=(_0x45da0c+0x1)%0x100;_0x2d22e5=(_0x2d22e5+_0x414618[_0x45da0c])%0x100;_0x214e2f=_0x414618[_0x45da0c];_0x414618[_0x45da0c]=_0x414618[_0x2d22e5];_0x414618[_0x2d22e5]=_0x214e2f;_0x489fb8+=String['fromCharCode'](_0x4f08a5['charCodeAt'](_0x304c3e)^_0x414618[(_0x414618[_0x45da0c]+_0x414618[_0x2d22e5])%0x100]);}return _0x489fb8;};_0x5751['cFnIkc']=_0x14ddf1;_0x5751['HTUIzG']={};_0x5751['kKUovk']=!![];}var _0x177139=_0x5751['HTUIzG'][_0x48dac5];if(_0x177139===undefined){if(_0x5751['lYlaby']===undefined){_0x5751['lYlaby']=!![];}_0x5751e0=_0x5751['cFnIkc'](_0x5751e0,_0x43e6ae);_0x5751['HTUIzG'][_0x48dac5]=_0x5751e0;}else{_0x5751e0=_0x177139;}return _0x5751e0;};var objc=JSON[_0x5751('0xb','l7[8')]($response['body']);objc={'request_date':_0x5751('0x0','B)pW'),'request_date_ms':0x172845549c1,'subscriber':{'non_subscriptions':{},'first_seen':'2020-05-29T07:59:41Z','original_application_version':'5','other_purchases':{},'management_url':null,'subscriptions':{'com.premium.yearly':{'is_sandbox':![],'period_type':_0x5751('0x7','Spf&'),'billing_issues_detected_at':null,'unsubscribe_detected_at':null,'expires_date':_0x5751('0x5','0SXc'),'original_purchase_date':_0x5751('0x6','EBsl'),'purchase_date':_0x5751('0x2','#wcO'),'store':'app_store'}},'entitlements':{'plus':{'expires_date':_0x5751('0xa','Spf&'),'product_identifier':_0x5751('0x3','43%B'),'purchase_date':_0x5751('0x1','i!js')}},'original_purchase_date':_0x5751('0x8','#$yn'),'original_app_user_id':_0x5751('0x9','IP)P'),'last_seen':_0x5751('0x4','IP)P')}};$done({'body':JSON['stringify'](objc)});
