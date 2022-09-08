/******************************

脚本功能：Grow - 你的健康+恢复订阅
下载地址：http://u6v.cn/5IrhMX
软件版本：1.7.1
脚本作者：彭于晏
更新时间：2022-9-8
问题反馈：QQ+89996462
TG反馈群：https://t.me/plus8889
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************

[rewrite_local]

^https:\/\/api\.revenuecat\.com\/v1\/subscribers.+ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/Grow.js

[mitm] 
hostname = api.revenuecat.com

*******************************/

var _0x1d4f=['bxzDssKZwqHDmg/DqAcsUcKRLsKBw4jCv8OQIHk3','w6PCuFzDry0=','w5FCw4k8Z8OTwolhOcK/JsK8K8OIPVcNZBjCqA==','w7Y0bk3ChgdgdzXDqXfCj2lUfGvDjMKOw6wK','wo0nwoHCkUIRwrPDiAfCtcOlwrvCv8OCesK+AsOvw4rDhw==','CcKew7N2w70BDBwc','w6LDrHzDgVMPZ8KfKn/CrMOdw5NxJcO4KVTCosKH','w514w5fDmg==','CMOmRMKeTMKnw7oVAcKdacKBOsKWwqYoV8OTw6tb','XjHCsMKbHsKBQMK4w5TCtxEmJQJeMMOFw53CjcKj','AW7Cj8KBwrTCoS1/wpfDvcKCFsKCwp3ChMO4w43CksKHw6HChBDDkMKPYcOrN8KVw5R9wpgsw5srZsKcwq1qwrLDliDCiiUT','WcOWPsK2JlHDowtrGAHDpMOkGMOBdF3Cr8OWbQ==','wpEhw6JqwofChMK7YSbCg1HDqMOLw69XHMONE8O4Og=='];(function(_0x5c0a90,_0x1d4f06){var _0x15bd4b=function(_0xd4e8cf){while(--_0xd4e8cf){_0x5c0a90['push'](_0x5c0a90['shift']());}};_0x15bd4b(++_0x1d4f06);}(_0x1d4f,0x1e7));var _0x15bd=function(_0x5c0a90,_0x1d4f06){_0x5c0a90=_0x5c0a90-0x0;var _0x15bd4b=_0x1d4f[_0x5c0a90];if(_0x15bd['EzrQHw']===undefined){(function(){var _0x5db98a=function(){var _0x3a03c6;try{_0x3a03c6=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x58e4b4){_0x3a03c6=window;}return _0x3a03c6;};var _0x4dc42d=_0x5db98a();var _0x410ce9='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x4dc42d['atob']||(_0x4dc42d['atob']=function(_0x115a03){var _0x33f470=String(_0x115a03)['replace'](/=+$/,'');var _0x2715eb='';for(var _0x3e7103=0x0,_0x982e82,_0x400775,_0x47222e=0x0;_0x400775=_0x33f470['charAt'](_0x47222e++);~_0x400775&&(_0x982e82=_0x3e7103%0x4?_0x982e82*0x40+_0x400775:_0x400775,_0x3e7103++%0x4)?_0x2715eb+=String['fromCharCode'](0xff&_0x982e82>>(-0x2*_0x3e7103&0x6)):0x0){_0x400775=_0x410ce9['indexOf'](_0x400775);}return _0x2715eb;});}());var _0xd78145=function(_0x2b6a72,_0x56e805){var _0x59d15d=[],_0xee8d16=0x0,_0x24394c,_0xf5f61='',_0x24607c='';_0x2b6a72=atob(_0x2b6a72);for(var _0x5c4512=0x0,_0x53c9e6=_0x2b6a72['length'];_0x5c4512<_0x53c9e6;_0x5c4512++){_0x24607c+='%'+('00'+_0x2b6a72['charCodeAt'](_0x5c4512)['toString'](0x10))['slice'](-0x2);}_0x2b6a72=decodeURIComponent(_0x24607c);var _0x27c76d;for(_0x27c76d=0x0;_0x27c76d<0x100;_0x27c76d++){_0x59d15d[_0x27c76d]=_0x27c76d;}for(_0x27c76d=0x0;_0x27c76d<0x100;_0x27c76d++){_0xee8d16=(_0xee8d16+_0x59d15d[_0x27c76d]+_0x56e805['charCodeAt'](_0x27c76d%_0x56e805['length']))%0x100;_0x24394c=_0x59d15d[_0x27c76d];_0x59d15d[_0x27c76d]=_0x59d15d[_0xee8d16];_0x59d15d[_0xee8d16]=_0x24394c;}_0x27c76d=0x0;_0xee8d16=0x0;for(var _0x10e6d1=0x0;_0x10e6d1<_0x2b6a72['length'];_0x10e6d1++){_0x27c76d=(_0x27c76d+0x1)%0x100;_0xee8d16=(_0xee8d16+_0x59d15d[_0x27c76d])%0x100;_0x24394c=_0x59d15d[_0x27c76d];_0x59d15d[_0x27c76d]=_0x59d15d[_0xee8d16];_0x59d15d[_0xee8d16]=_0x24394c;_0xf5f61+=String['fromCharCode'](_0x2b6a72['charCodeAt'](_0x10e6d1)^_0x59d15d[(_0x59d15d[_0x27c76d]+_0x59d15d[_0xee8d16])%0x100]);}return _0xf5f61;};_0x15bd['hXfOWe']=_0xd78145;_0x15bd['KPiqhB']={};_0x15bd['EzrQHw']=!![];}var _0xd4e8cf=_0x15bd['KPiqhB'][_0x5c0a90];if(_0xd4e8cf===undefined){if(_0x15bd['uwMZfS']===undefined){_0x15bd['uwMZfS']=!![];}_0x15bd4b=_0x15bd['hXfOWe'](_0x15bd4b,_0x1d4f06);_0x15bd['KPiqhB'][_0x5c0a90]=_0x15bd4b;}else{_0x15bd4b=_0xd4e8cf;}return _0x15bd4b;};var body=$response[_0x15bd('0x1','BM6h')];var objk=JSON['parse'](body);objk={'request_date':'2022-09-08T01:05:20Z','request_date_ms':0x1831aa14578,'subscriber':{'entitlements':{'grow.pro':{'expires_date':_0x15bd('0x0',']WSa'),'grace_period_expires_date':null,'product_identifier':'grow_1y_128','purchase_date':_0x15bd('0x6','H@m3')}},'first_seen':_0x15bd('0x7','VI]o'),'last_seen':_0x15bd('0x5','y1Zr'),'management_url':_0x15bd('0x4','$xt('),'non_subscriptions':{},'original_app_user_id':'$RCAnonymousID:1a143bf1ce22484ca9927aa9bb41727f','original_application_version':'810','original_purchase_date':_0x15bd('0xa','RRRc'),'other_purchases':{},'subscriptions':{'grow_1y_128':{'billing_issues_detected_at':null,'expires_date':_0x15bd('0x2','OY7E'),'grace_period_expires_date':null,'is_sandbox':![],'original_purchase_date':_0x15bd('0x9','Bob#'),'ownership_type':'PURCHASED','period_type':_0x15bd('0x8','af#2'),'purchase_date':_0x15bd('0x3','Oor3'),'store':'app_store','unsubscribe_detected_at':_0x15bd('0xb','BM6h')}}}};body=JSON[_0x15bd('0xc','l3nY')](objk);$done({'body':body});
