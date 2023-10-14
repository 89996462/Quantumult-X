/******************************

脚本功能：谜底时钟 +解锁全家桶订阅
下载地址：https://is.gd/uwPUdm
软件版本：2.30
脚本作者：彭于晏💞
更新时间：2023-10-11
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/mdsz.js

^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-request-header https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/mdsz.js

[MITM]

hostname = api.revenuecat.com

********************************/

var _0x4d57=['D8O8w7dmFcK3wrHDscOFw4YgBcKi','worDhgNywp/DqMOTw7jDqsKh','wrlKwoc5','woTDjnDCpcKKw7fDlsK3BcKlwp9lcFfDmQISwojCpMKN','SlvDnsOqfFcvYsOB','eMO4MTVGw4DDisKdI8OiecOxcMKGw7/DgsKDIGl4','w7TDmGhjw7A=','wq5YUMOvS8KEw4vCliHDksKHT0F4HEUsRirChQ==','X07DjcOdIU4pecOAw5Mew4tpw7TCmsOMwo4MwqzDkHUeHBrCr20bZALCjHxKfz3CuxDDtX8fYQ==','woHDmsOXw5fDq8KGw7nDscKF','wrvDi8KtwonCnzfDpcO3RsOcw7QdBmDDpibCksK8wpXChg==','wrQZwq06VMKhwr5jDw==','bTvCvsK0w74EwovDj8KqOMKZwr7Cm8O3FhbCqA1bYg==','IGjDt8ORQkBywpjDjCXCk8OsYxPCtcOZwoQMw6vCmQ==','PirCscKYclYMRH17EsKD'];(function(_0xa7c743,_0x4d5703){var _0x1e2b31=function(_0x7c07ea){while(--_0x7c07ea){_0xa7c743['push'](_0xa7c743['shift']());}};_0x1e2b31(++_0x4d5703);}(_0x4d57,0x90));var _0x1e2b=function(_0xa7c743,_0x4d5703){_0xa7c743=_0xa7c743-0x0;var _0x1e2b31=_0x4d57[_0xa7c743];if(_0x1e2b['rfDFof']===undefined){(function(){var _0x481ba4;try{var _0x5d4e26=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x481ba4=_0x5d4e26();}catch(_0x281536){_0x481ba4=window;}var _0x51e45f='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x481ba4['atob']||(_0x481ba4['atob']=function(_0x31a6e8){var _0x3a19eb=String(_0x31a6e8)['replace'](/=+$/,'');var _0x4866f9='';for(var _0x3ac276=0x0,_0x1f4b21,_0x3829a3,_0x19f632=0x0;_0x3829a3=_0x3a19eb['charAt'](_0x19f632++);~_0x3829a3&&(_0x1f4b21=_0x3ac276%0x4?_0x1f4b21*0x40+_0x3829a3:_0x3829a3,_0x3ac276++%0x4)?_0x4866f9+=String['fromCharCode'](0xff&_0x1f4b21>>(-0x2*_0x3ac276&0x6)):0x0){_0x3829a3=_0x51e45f['indexOf'](_0x3829a3);}return _0x4866f9;});}());var _0xccbde3=function(_0x32c848,_0x178459){var _0x557704=[],_0xbea41f=0x0,_0xf19360,_0x5d3988='',_0x3e9261='';_0x32c848=atob(_0x32c848);for(var _0x11b285=0x0,_0x24aedd=_0x32c848['length'];_0x11b285<_0x24aedd;_0x11b285++){_0x3e9261+='%'+('00'+_0x32c848['charCodeAt'](_0x11b285)['toString'](0x10))['slice'](-0x2);}_0x32c848=decodeURIComponent(_0x3e9261);var _0x2ccc95;for(_0x2ccc95=0x0;_0x2ccc95<0x100;_0x2ccc95++){_0x557704[_0x2ccc95]=_0x2ccc95;}for(_0x2ccc95=0x0;_0x2ccc95<0x100;_0x2ccc95++){_0xbea41f=(_0xbea41f+_0x557704[_0x2ccc95]+_0x178459['charCodeAt'](_0x2ccc95%_0x178459['length']))%0x100;_0xf19360=_0x557704[_0x2ccc95];_0x557704[_0x2ccc95]=_0x557704[_0xbea41f];_0x557704[_0xbea41f]=_0xf19360;}_0x2ccc95=0x0;_0xbea41f=0x0;for(var _0x4a238e=0x0;_0x4a238e<_0x32c848['length'];_0x4a238e++){_0x2ccc95=(_0x2ccc95+0x1)%0x100;_0xbea41f=(_0xbea41f+_0x557704[_0x2ccc95])%0x100;_0xf19360=_0x557704[_0x2ccc95];_0x557704[_0x2ccc95]=_0x557704[_0xbea41f];_0x557704[_0xbea41f]=_0xf19360;_0x5d3988+=String['fromCharCode'](_0x32c848['charCodeAt'](_0x4a238e)^_0x557704[(_0x557704[_0x2ccc95]+_0x557704[_0xbea41f])%0x100]);}return _0x5d3988;};_0x1e2b['NcxqSl']=_0xccbde3;_0x1e2b['JhuWBP']={};_0x1e2b['rfDFof']=!![];}var _0x7c07ea=_0x1e2b['JhuWBP'][_0xa7c743];if(_0x7c07ea===undefined){if(_0x1e2b['ephHgd']===undefined){_0x1e2b['ephHgd']=!![];}_0x1e2b31=_0x1e2b['NcxqSl'](_0x1e2b31,_0x4d5703);_0x1e2b['JhuWBP'][_0xa7c743]=_0x1e2b31;}else{_0x1e2b31=_0x7c07ea;}return _0x1e2b31;};var py996=JSON[_0x1e2b('0xc','iu]@')]($response[_0x1e2b('0x8','(&iA')]);py996['subscriber'][_0x1e2b('0x5','CG8#')]={'Entitlement.Pro':{'expires_date':_0x1e2b('0x9','bSuT'),'product_identifier':_0x1e2b('0xe','O)UR'),'purchase_date':_0x1e2b('0xb','al!V')}};py996[_0x1e2b('0x7','fLtq')]['original_purchase_date']=_0x1e2b('0xd','ukr8');py996['subscriber'][_0x1e2b('0x6','Rq&v')]={'tech.miidii.MDClock.subscription.year.v1':{'expires_date':_0x1e2b('0x4','Ep8F'),'original_purchase_date':_0x1e2b('0x1','x9FO'),'purchase_date':_0x1e2b('0x3','7GIg'),'ownership_type':_0x1e2b('0x0','PqLb'),'store':_0x1e2b('0xa','O)UR')}};$done({'body':JSON[_0x1e2b('0x2','CLJN')](py996)});
