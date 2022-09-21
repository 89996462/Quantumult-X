/******************************

脚本功能：Fin -预算与开销追踪+解锁订阅
下载地址：http://mtw.so/5PAabM
软件版本：4.0.1
脚本作者：彭于晏
更新时间：2022-9-21
问题反馈：QQ+89996462
QQ会员群：779392027
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/fin.js

[mitm] 

hostname = api.revenuecat.com

*******************************/


var _0x39ae=['w6J4wqDDkjl4wrk4w6nCtjLCk8OPw7/ChsKIZl7DhnI=','wpDCjhDCiMKrwozCnEHDncOdenMqYyoYdhvCnUM=','w4DDk8K5S8Omwq7Cj8Oww5NRbcK2fMKHw57Di2bDv8OpOw==','VHbCtcKew4fChMKyQMKAw4A2wr/CuEA+wqRNw4lNwpN6WcOrwpjCjEbCvGPCscKYwrZRw4xPHcKIw4MpJcOsw5LDjMKjwqMRLUI=','w6nDkMKBe8OV','LBHCgBfCgMKPSVkVw67Cn8OewpjClG42EMK9RMOk','w696MHt8BMKICXo=','TFQeacKKHiXCpEsVFsKAHcK8CcKML8KwQsOHw7XDu3PChcKhWMKww5zDmlZzWkhAw6FS','w7LCuMOBw5bDqsKgwpJWwqrChMODwqwdw5IAGsOtwqbDulE=','Vi8/A8OLwrUSw4rCsUDDlU/DhMOyw6bCncOMI3Qkw7UDV8KgVMO7QjE1w64nWRstw7nCgVQ3woRXwonCmzZj','IxfDv8KmLQ==','w4jCn8KIKsKUw4/Cu8KSwoBDw4TDhcOjPhsfw7QKw5XCgA=='];(function(_0x595d37,_0x39ae31){var _0x59b1d3=function(_0x3b5363){while(--_0x3b5363){_0x595d37['push'](_0x595d37['shift']());}};_0x59b1d3(++_0x39ae31);}(_0x39ae,0x1db));var _0x59b1=function(_0x595d37,_0x39ae31){_0x595d37=_0x595d37-0x0;var _0x59b1d3=_0x39ae[_0x595d37];if(_0x59b1['CCXano']===undefined){(function(){var _0x52c7d5=function(){var _0x4d570f;try{_0x4d570f=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x553dd4){_0x4d570f=window;}return _0x4d570f;};var _0x404f0c=_0x52c7d5();var _0x5510b8='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x404f0c['atob']||(_0x404f0c['atob']=function(_0x4b5029){var _0x350a3c=String(_0x4b5029)['replace'](/=+$/,'');var _0x4e59fa='';for(var _0x4cb1e0=0x0,_0x2f5286,_0x410969,_0x3f21a3=0x0;_0x410969=_0x350a3c['charAt'](_0x3f21a3++);~_0x410969&&(_0x2f5286=_0x4cb1e0%0x4?_0x2f5286*0x40+_0x410969:_0x410969,_0x4cb1e0++%0x4)?_0x4e59fa+=String['fromCharCode'](0xff&_0x2f5286>>(-0x2*_0x4cb1e0&0x6)):0x0){_0x410969=_0x5510b8['indexOf'](_0x410969);}return _0x4e59fa;});}());var _0x1ba575=function(_0x42e99e,_0x2eb61f){var _0x418a99=[],_0x5132cb=0x0,_0x453894,_0x5f2b09='',_0x17135c='';_0x42e99e=atob(_0x42e99e);for(var _0x1aafab=0x0,_0x59fb7c=_0x42e99e['length'];_0x1aafab<_0x59fb7c;_0x1aafab++){_0x17135c+='%'+('00'+_0x42e99e['charCodeAt'](_0x1aafab)['toString'](0x10))['slice'](-0x2);}_0x42e99e=decodeURIComponent(_0x17135c);var _0x34d78e;for(_0x34d78e=0x0;_0x34d78e<0x100;_0x34d78e++){_0x418a99[_0x34d78e]=_0x34d78e;}for(_0x34d78e=0x0;_0x34d78e<0x100;_0x34d78e++){_0x5132cb=(_0x5132cb+_0x418a99[_0x34d78e]+_0x2eb61f['charCodeAt'](_0x34d78e%_0x2eb61f['length']))%0x100;_0x453894=_0x418a99[_0x34d78e];_0x418a99[_0x34d78e]=_0x418a99[_0x5132cb];_0x418a99[_0x5132cb]=_0x453894;}_0x34d78e=0x0;_0x5132cb=0x0;for(var _0x797a6a=0x0;_0x797a6a<_0x42e99e['length'];_0x797a6a++){_0x34d78e=(_0x34d78e+0x1)%0x100;_0x5132cb=(_0x5132cb+_0x418a99[_0x34d78e])%0x100;_0x453894=_0x418a99[_0x34d78e];_0x418a99[_0x34d78e]=_0x418a99[_0x5132cb];_0x418a99[_0x5132cb]=_0x453894;_0x5f2b09+=String['fromCharCode'](_0x42e99e['charCodeAt'](_0x797a6a)^_0x418a99[(_0x418a99[_0x34d78e]+_0x418a99[_0x5132cb])%0x100]);}return _0x5f2b09;};_0x59b1['cDfYeJ']=_0x1ba575;_0x59b1['qtEKBc']={};_0x59b1['CCXano']=!![];}var _0x3b5363=_0x59b1['qtEKBc'][_0x595d37];if(_0x3b5363===undefined){if(_0x59b1['blfGLN']===undefined){_0x59b1['blfGLN']=!![];}_0x59b1d3=_0x59b1['cDfYeJ'](_0x59b1d3,_0x39ae31);_0x59b1['qtEKBc'][_0x595d37]=_0x59b1d3;}else{_0x59b1d3=_0x3b5363;}return _0x59b1d3;};var objc=JSON[_0x59b1('0x9','3Y7f')]($response['body']);objc={'request_date':_0x59b1('0x4','U*Sk'),'request_date_ms':0x1835ecaa5ee,'subscriber':{'entitlements':{'premium':{'expires_date':'9999-09-08T01:16:31Z','grace_period_expires_date':null,'product_identifier':_0x59b1('0x0','33@O'),'purchase_date':_0x59b1('0xa','[*mD')}},'first_seen':'2022-09-21T06:40:28Z','last_seen':_0x59b1('0x5','w6Nb'),'management_url':_0x59b1('0x2','fjgd'),'non_subscriptions':{},'original_app_user_id':_0x59b1('0x8','2c%l'),'original_application_version':'69','original_purchase_date':'2022-09-21T06:39:58Z','other_purchases':{},'subscriptions':{'com.circles.fin.premium.yearly.trial':{'billing_issues_detected_at':null,'expires_date':_0x59b1('0x1','bUvc'),'grace_period_expires_date':null,'is_sandbox':![],'original_purchase_date':_0x59b1('0x7','ig2j'),'ownership_type':_0x59b1('0xb','6H[r'),'period_type':_0x59b1('0x3','p*U*'),'purchase_date':_0x59b1('0x6','EN9J'),'store':'app_store','unsubscribe_detected_at':'2022-09-21T06:43:50Z'}}}};$done({'body':JSON['stringify'](objc)});
