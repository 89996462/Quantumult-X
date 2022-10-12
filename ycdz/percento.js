/******************************

脚本功能：percento-轻松管理你的资产+解锁订阅
下载地址：https://is.gd/ehnSv5
软件版本：3.5.0
脚本作者：彭于晏💞
更新时间：2022-10-12
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/percento.js

[mitm] 

hostname = api.revenuecat.com

*******************************/



var _0xb04a=['ZcK0FF/DnS7DpGvDi8KUVMKAb8OPXi3Dpn5dYQ==','w5/Dv3TCosORw6bDv8O4Hg==','wonCisOKEA==','w43DtRbDmcOuw4DCu13CscO3wqPCgX/Cg2lhwq9BwpXDjg==','w4DClsOnMVLCjA==','VsKaEWTCp8KPwqDDoXgqwoJiw4jDtMKSwrE5GhZ8','woDCssOfCWTDihUadnlDC8K2TSp2IsKxwonDvsKXw7fDh3gGwpvCm8KFwqPCiknDnsOpP8O8wpzCnC8ACgLCk1Y=','woN7wqAiwq/ClHcSJg==','U8OnUFjDoxXCjQgxwoc/BxPDkxLCjEHCpsKZKw==','wqjDsUPDkcKRGU/CmMOP','U8OswrPCqSjClxl1ZkpPc8Omw5NzIMKYwqwHcQTDt8OEwpY9Sy4Rw5nCikzDtMKNCsOZwoRcw5Z4w7k/wpMmLQ==','wpXDsjXDrDIDwpvCi8OvwpLCtMOgw7oPGcOcaHrCpcOH','wpfDqsOgC0LDuiXDjMOhU8Ofw5tJwrxzwpDCnHpdQMO7LiBCHTMpw6nCgMOVwpTCqsKeXyw/QQM1DcOcwrfDjmxgJmo=','UcKzwrcLw6NLw7DCizYRG8OSw7N3w70MGCR1Wg==','EGTDs8K7wqNvwr/CrWPCscKQw4nDk0fCilrCviZpBQ==','ZcK0FF/DnS7DpGvDi8KUVMKAb8OPXivDpn9QYQ=='];(function(_0x1892f6,_0xb04acf){var _0x2145da=function(_0x5b4457){while(--_0x5b4457){_0x1892f6['push'](_0x1892f6['shift']());}};_0x2145da(++_0xb04acf);}(_0xb04a,0xcb));var _0x2145=function(_0x1892f6,_0xb04acf){_0x1892f6=_0x1892f6-0x0;var _0x2145da=_0xb04a[_0x1892f6];if(_0x2145['oQZGzV']===undefined){(function(){var _0x1dc3f6;try{var _0x42f200=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x1dc3f6=_0x42f200();}catch(_0x540e45){_0x1dc3f6=window;}var _0x4211d8='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1dc3f6['atob']||(_0x1dc3f6['atob']=function(_0x4fd048){var _0x29bbc2=String(_0x4fd048)['replace'](/=+$/,'');var _0x16f9c7='';for(var _0x410706=0x0,_0x11547a,_0x91e7c8,_0x57a031=0x0;_0x91e7c8=_0x29bbc2['charAt'](_0x57a031++);~_0x91e7c8&&(_0x11547a=_0x410706%0x4?_0x11547a*0x40+_0x91e7c8:_0x91e7c8,_0x410706++%0x4)?_0x16f9c7+=String['fromCharCode'](0xff&_0x11547a>>(-0x2*_0x410706&0x6)):0x0){_0x91e7c8=_0x4211d8['indexOf'](_0x91e7c8);}return _0x16f9c7;});}());var _0x54dcdc=function(_0x23df1e,_0x36149c){var _0x3d2968=[],_0x3d805a=0x0,_0x34eb8c,_0x4498be='',_0x3b6fde='';_0x23df1e=atob(_0x23df1e);for(var _0x2454cb=0x0,_0x1807e5=_0x23df1e['length'];_0x2454cb<_0x1807e5;_0x2454cb++){_0x3b6fde+='%'+('00'+_0x23df1e['charCodeAt'](_0x2454cb)['toString'](0x10))['slice'](-0x2);}_0x23df1e=decodeURIComponent(_0x3b6fde);var _0x57be6a;for(_0x57be6a=0x0;_0x57be6a<0x100;_0x57be6a++){_0x3d2968[_0x57be6a]=_0x57be6a;}for(_0x57be6a=0x0;_0x57be6a<0x100;_0x57be6a++){_0x3d805a=(_0x3d805a+_0x3d2968[_0x57be6a]+_0x36149c['charCodeAt'](_0x57be6a%_0x36149c['length']))%0x100;_0x34eb8c=_0x3d2968[_0x57be6a];_0x3d2968[_0x57be6a]=_0x3d2968[_0x3d805a];_0x3d2968[_0x3d805a]=_0x34eb8c;}_0x57be6a=0x0;_0x3d805a=0x0;for(var _0x1cec74=0x0;_0x1cec74<_0x23df1e['length'];_0x1cec74++){_0x57be6a=(_0x57be6a+0x1)%0x100;_0x3d805a=(_0x3d805a+_0x3d2968[_0x57be6a])%0x100;_0x34eb8c=_0x3d2968[_0x57be6a];_0x3d2968[_0x57be6a]=_0x3d2968[_0x3d805a];_0x3d2968[_0x3d805a]=_0x34eb8c;_0x4498be+=String['fromCharCode'](_0x23df1e['charCodeAt'](_0x1cec74)^_0x3d2968[(_0x3d2968[_0x57be6a]+_0x3d2968[_0x3d805a])%0x100]);}return _0x4498be;};_0x2145['umocDS']=_0x54dcdc;_0x2145['gJAJDg']={};_0x2145['oQZGzV']=!![];}var _0x5b4457=_0x2145['gJAJDg'][_0x1892f6];if(_0x5b4457===undefined){if(_0x2145['BnhkJn']===undefined){_0x2145['BnhkJn']=!![];}_0x2145da=_0x2145['umocDS'](_0x2145da,_0xb04acf);_0x2145['gJAJDg'][_0x1892f6]=_0x2145da;}else{_0x2145da=_0x5b4457;}return _0x2145da;};var objc=JSON['parse']($response['body']);objc={'request_date':_0x2145('0x5','J5]Y'),'request_date_ms':0x1836da2942f,'subscriber':{'entitlements':{'premium':{'expires_date':_0x2145('0xd','R)4J'),'grace_period_expires_date':null,'product_identifier':_0x2145('0xb','pE2O'),'purchase_date':_0x2145('0x4','J5]Y')}},'first_seen':_0x2145('0x3','oKJo'),'last_seen':'2022-09-24T03:10:31Z','management_url':_0x2145('0xf','MZ[t'),'non_subscriptions':{},'original_app_user_id':_0x2145('0x1','K9eo'),'original_application_version':_0x2145('0x7','8KS3'),'original_purchase_date':_0x2145('0x8','wdcS'),'other_purchases':{},'subscriptions':{'com.kevinreutter.Sagittarius.Premium3Months':{'billing_issues_detected_at':null,'expires_date':_0x2145('0xa','R%nq'),'grace_period_expires_date':null,'is_sandbox':![],'original_purchase_date':_0x2145('0x2','#IEL'),'ownership_type':_0x2145('0x6','9ALg'),'period_type':_0x2145('0x9',')hZp'),'purchase_date':_0x2145('0x4','J5]Y'),'store':_0x2145('0xc','aGea'),'unsubscribe_detected_at':_0x2145('0x0','JIbp')}}}};$done({'body':JSON[_0x2145('0xe','NJJ$')](objc)});
