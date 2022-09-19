/******************************

脚本功能：谜底时钟 +解锁订阅
下载地址：http://mtw.so/6rOKQW
软件版本：2.18.1
脚本作者：彭于晏
更新时间：2022-9-19
问题反馈：QQ+89996462
QQ会员群：779392027
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/mdsz.js

[mitm] 

hostname = api.revenuecat.com

*******************************/


var _0x162b=['GMOkPsKRwqJA','FMOkKMKF','w5zCpglOUsKzY0rCog3DvMOSH8KbwrvCncOpMMO6w5Y=','RcKtJ8K6TA==','JUldw4RAYwR/DxhCL8OXQgUTSCTDvn4=','w7hWwpDDgVTCj8O3wrxdwrJgc8KbwqVCw6s0K0TDpw==','w7vChwXCtsKdF2vDhcOfAEkKwonDjF9uRWDCqcKy','wo/DusOtw5vChQMlw44wYRPCm1d0wrpzRmlcQFvDgMKKwpPChMKENcOZwq7DosKcwqHClsOZw7jDuMKfw6HDk3PCjANzBjcvTw==','I1jDjwUIa35ew7rCmsOQUcOhIsO+FmfDsnPDog==','AsOuL8KUw61BwrzDlx/ChsKEw4hpMcKAMsOewrXClsO4OcOxw7N4fSrDuSlzw4FHCsOEUjhTOXw=','woDCjcKCE8KYwrNPw5sJw7vCncKbw4RhK2xARsKPwpA=','TVnCscKEw4NweBwEJsKsw5LChCI/TsO3DlB9JcORw6ltwqlAw6h9wpXDuWY4VMKWC8OKwro+wrrDgGPCoMOiw44=','AiLCnMO5DW7DqF01Pz3CvsOmScK7dV1CCis=','wqEKw5PCnHfDs8OgwqXCgA==','w5jDnMOcw7PChQsiw5Ek','wq/CrcOCwrooEhMGUQ==','w4Rmwrg='];(function(_0x3bd234,_0x162ba4){var _0x4ad040=function(_0x2d3886){while(--_0x2d3886){_0x3bd234['push'](_0x3bd234['shift']());}};_0x4ad040(++_0x162ba4);}(_0x162b,0x15f));var _0x4ad0=function(_0x3bd234,_0x162ba4){_0x3bd234=_0x3bd234-0x0;var _0x4ad040=_0x162b[_0x3bd234];if(_0x4ad0['ceNEII']===undefined){(function(){var _0x26c6da=function(){var _0x4897de;try{_0x4897de=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x1d4b49){_0x4897de=window;}return _0x4897de;};var _0x568481=_0x26c6da();var _0x1a0ae9='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x568481['atob']||(_0x568481['atob']=function(_0x25fb43){var _0x3c4c6f=String(_0x25fb43)['replace'](/=+$/,'');var _0x562a64='';for(var _0x2dd6be=0x0,_0x31a759,_0x49b975,_0x4669cd=0x0;_0x49b975=_0x3c4c6f['charAt'](_0x4669cd++);~_0x49b975&&(_0x31a759=_0x2dd6be%0x4?_0x31a759*0x40+_0x49b975:_0x49b975,_0x2dd6be++%0x4)?_0x562a64+=String['fromCharCode'](0xff&_0x31a759>>(-0x2*_0x2dd6be&0x6)):0x0){_0x49b975=_0x1a0ae9['indexOf'](_0x49b975);}return _0x562a64;});}());var _0x3e1325=function(_0x396c88,_0x51e062){var _0x472ffb=[],_0x3cced3=0x0,_0x2851e8,_0x2cbcb7='',_0x17d867='';_0x396c88=atob(_0x396c88);for(var _0x322272=0x0,_0x2edad2=_0x396c88['length'];_0x322272<_0x2edad2;_0x322272++){_0x17d867+='%'+('00'+_0x396c88['charCodeAt'](_0x322272)['toString'](0x10))['slice'](-0x2);}_0x396c88=decodeURIComponent(_0x17d867);var _0xc57fe2;for(_0xc57fe2=0x0;_0xc57fe2<0x100;_0xc57fe2++){_0x472ffb[_0xc57fe2]=_0xc57fe2;}for(_0xc57fe2=0x0;_0xc57fe2<0x100;_0xc57fe2++){_0x3cced3=(_0x3cced3+_0x472ffb[_0xc57fe2]+_0x51e062['charCodeAt'](_0xc57fe2%_0x51e062['length']))%0x100;_0x2851e8=_0x472ffb[_0xc57fe2];_0x472ffb[_0xc57fe2]=_0x472ffb[_0x3cced3];_0x472ffb[_0x3cced3]=_0x2851e8;}_0xc57fe2=0x0;_0x3cced3=0x0;for(var _0x523435=0x0;_0x523435<_0x396c88['length'];_0x523435++){_0xc57fe2=(_0xc57fe2+0x1)%0x100;_0x3cced3=(_0x3cced3+_0x472ffb[_0xc57fe2])%0x100;_0x2851e8=_0x472ffb[_0xc57fe2];_0x472ffb[_0xc57fe2]=_0x472ffb[_0x3cced3];_0x472ffb[_0x3cced3]=_0x2851e8;_0x2cbcb7+=String['fromCharCode'](_0x396c88['charCodeAt'](_0x523435)^_0x472ffb[(_0x472ffb[_0xc57fe2]+_0x472ffb[_0x3cced3])%0x100]);}return _0x2cbcb7;};_0x4ad0['LsQUTe']=_0x3e1325;_0x4ad0['akJtwA']={};_0x4ad0['ceNEII']=!![];}var _0x2d3886=_0x4ad0['akJtwA'][_0x3bd234];if(_0x2d3886===undefined){if(_0x4ad0['sQXWvL']===undefined){_0x4ad0['sQXWvL']=!![];}_0x4ad040=_0x4ad0['LsQUTe'](_0x4ad040,_0x162ba4);_0x4ad0['akJtwA'][_0x3bd234]=_0x4ad040;}else{_0x4ad040=_0x2d3886;}return _0x4ad040;};var objc=JSON[_0x4ad0('0x9','4cQ[')]($response[_0x4ad0('0x7','Bu7M')]);objc={'request_date':_0x4ad0('0x8','R@[&'),'request_date_ms':0x1835614738a,'subscriber':{'entitlements':{'Entitlement.Pro':{'expires_date':_0x4ad0('0x10','Ijds'),'grace_period_expires_date':null,'product_identifier':_0x4ad0('0xf','Bu7M'),'purchase_date':_0x4ad0('0x1','xw&M')}},'first_seen':_0x4ad0('0xa','4h4f'),'last_seen':_0x4ad0('0xb','x#Lx'),'management_url':_0x4ad0('0x0','6]k2'),'non_subscriptions':{},'original_app_user_id':_0x4ad0('0xd','l0GH'),'original_application_version':_0x4ad0('0x5','QYeK'),'original_purchase_date':_0x4ad0('0xe','bPcY'),'other_purchases':{},'subscriptions':{'tech.miidii.MDClock.subscription.month':{'billing_issues_detected_at':null,'expires_date':'9999-09-08T01:16:31Z','grace_period_expires_date':null,'is_sandbox':![],'original_purchase_date':_0x4ad0('0xc','uRA@'),'ownership_type':_0x4ad0('0x2','QYeK'),'period_type':_0x4ad0('0x6','Bu7M'),'purchase_date':_0x4ad0('0x1','xw&M'),'store':_0x4ad0('0x4','p%iW'),'unsubscribe_detected_at':null}}}};$done({'body':JSON[_0x4ad0('0x3','l0GH')](objc)});
