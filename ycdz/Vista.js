/*******************************

脚本名称: Vista看天下+解锁VIP
脚本作者：彭于晏💞
下载地址：https://is.gd/nSYfBn
软件版本：3.3.2
更新时间：2022年11月27日 下午6:00
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************
[rewrite_local]

^http[s]?:\/\/open3.vistastory.com url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/Vista.js

^https:\/\/open3\.vistastory\.com\/v3\/api\/notice\/need_read_notice_number? url reject

^https:\/\/open3\.vistastory\.com\/v3\/api\/index\/loading_ad2? url reject



[mitm] 

hostname = open3.vistastory.com

*******************************/

var _0x3b4a=['UcKXE3jCoywW','wobDszTCjihUQQ==','BsO+wrvDiwrCkcOjVcO+wo7Dn8Kfw5jCjsKoKQ==','fsO7wrzDisORwrTDmSTDlMOaW2k=','ITnDrAIod8Kg','wqEow5Edw7vDhmMEw6EXacOwbQ==','wqJGPWYew7HCoyzDhyTCksOcFA==','wpsBw65Zw5hgwp4qw53Cr8K6w7nCi3XCoXN1','UBdDfHbCiMO7w5vClzFtdgE=','Z8K2MMKDw7jDmQDCom9d','wqEkw5o7w7vDhCRowrk=','ezbCkS4=','S8OnH8K6w48ROQ==','BcK1wpt8w7sMw58=','Y8K5w57CqSTClDQ=','w7zCr1R7DcORaxtmwrogwrzCksO+OcOJMcOuISTDhsO0w5Q=','azzChTvCgMOXw40=','wp1SwrNRw5U0w63Dp09EJSTCu8OEw4tx','wpHCiFlqUCzCuw==','LA3Ci1I2w77DgA==','ABtAXX7ChcO3'];(function(_0x169003,_0x3b4a70){var _0x47818d=function(_0x3130ff){while(--_0x3130ff){_0x169003['push'](_0x169003['shift']());}};_0x47818d(++_0x3b4a70);}(_0x3b4a,0xc2));var _0x4781=function(_0x169003,_0x3b4a70){_0x169003=_0x169003-0x0;var _0x47818d=_0x3b4a[_0x169003];if(_0x4781['OseSdV']===undefined){(function(){var _0x4ebae4;try{var _0x30cb31=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x4ebae4=_0x30cb31();}catch(_0xa98b60){_0x4ebae4=window;}var _0x2737e9='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x4ebae4['atob']||(_0x4ebae4['atob']=function(_0x2ac06){var _0xe8911f=String(_0x2ac06)['replace'](/=+$/,'');var _0x17801f='';for(var _0x327eff=0x0,_0x244189,_0x49f81a,_0xd1a219=0x0;_0x49f81a=_0xe8911f['charAt'](_0xd1a219++);~_0x49f81a&&(_0x244189=_0x327eff%0x4?_0x244189*0x40+_0x49f81a:_0x49f81a,_0x327eff++%0x4)?_0x17801f+=String['fromCharCode'](0xff&_0x244189>>(-0x2*_0x327eff&0x6)):0x0){_0x49f81a=_0x2737e9['indexOf'](_0x49f81a);}return _0x17801f;});}());var _0x1d997b=function(_0x32143e,_0x352845){var _0xcc5f2d=[],_0x41c4d9=0x0,_0xa890d4,_0x3d51ac='',_0x249504='';_0x32143e=atob(_0x32143e);for(var _0x1491b2=0x0,_0x4ebb0a=_0x32143e['length'];_0x1491b2<_0x4ebb0a;_0x1491b2++){_0x249504+='%'+('00'+_0x32143e['charCodeAt'](_0x1491b2)['toString'](0x10))['slice'](-0x2);}_0x32143e=decodeURIComponent(_0x249504);var _0x49b2e0;for(_0x49b2e0=0x0;_0x49b2e0<0x100;_0x49b2e0++){_0xcc5f2d[_0x49b2e0]=_0x49b2e0;}for(_0x49b2e0=0x0;_0x49b2e0<0x100;_0x49b2e0++){_0x41c4d9=(_0x41c4d9+_0xcc5f2d[_0x49b2e0]+_0x352845['charCodeAt'](_0x49b2e0%_0x352845['length']))%0x100;_0xa890d4=_0xcc5f2d[_0x49b2e0];_0xcc5f2d[_0x49b2e0]=_0xcc5f2d[_0x41c4d9];_0xcc5f2d[_0x41c4d9]=_0xa890d4;}_0x49b2e0=0x0;_0x41c4d9=0x0;for(var _0x6204f9=0x0;_0x6204f9<_0x32143e['length'];_0x6204f9++){_0x49b2e0=(_0x49b2e0+0x1)%0x100;_0x41c4d9=(_0x41c4d9+_0xcc5f2d[_0x49b2e0])%0x100;_0xa890d4=_0xcc5f2d[_0x49b2e0];_0xcc5f2d[_0x49b2e0]=_0xcc5f2d[_0x41c4d9];_0xcc5f2d[_0x41c4d9]=_0xa890d4;_0x3d51ac+=String['fromCharCode'](_0x32143e['charCodeAt'](_0x6204f9)^_0xcc5f2d[(_0xcc5f2d[_0x49b2e0]+_0xcc5f2d[_0x41c4d9])%0x100]);}return _0x3d51ac;};_0x4781['Tfdcvg']=_0x1d997b;_0x4781['lZNXBC']={};_0x4781['OseSdV']=!![];}var _0x3130ff=_0x4781['lZNXBC'][_0x169003];if(_0x3130ff===undefined){if(_0x4781['wQvWsU']===undefined){_0x4781['wQvWsU']=!![];}_0x47818d=_0x4781['Tfdcvg'](_0x47818d,_0x3b4a70);_0x4781['lZNXBC'][_0x169003]=_0x47818d;}else{_0x47818d=_0x3130ff;}return _0x47818d;};var body=$response[_0x4781('0x6','K2pq')]['replace'](/"isVip":\d/g,_0x4781('0x5','zc1w'))[_0x4781('0xb','K2pq')](/"isMiniVip":\d/g,_0x4781('0x3',')u]M'))[_0x4781('0x7','GXz@')](/"endTime":\d+/g,_0x4781('0xa','hrYs'))[_0x4781('0x11','(WH[')](/"isActive":\d/g,_0x4781('0x13','z^9E'))[_0x4781('0x8','^[fg')](/"isUpgradeVip":0/g,_0x4781('0xc','TZOH'))[_0x4781('0xe','FlQH')](/"expireVip":\d/g,_0x4781('0x0','zc1w'))[_0x4781('0x10','XrE@')](/"subscription":null/g,_0x4781('0x12','pOkW'))[_0x4781('0xd','JAp2')](/"checkInStatus":0/g,_0x4781('0x2','[U^!'))[_0x4781('0xf',')u]M')](/"expireVip":1/g,'\x22expireVip\x22:0')[_0x4781('0x9','qS9j')](/"isfree":0/g,'\x22isfree\x22:1')['replace'](/"isFree":0/g,_0x4781('0x4','HeOi'))[_0x4781('0x9','qS9j')](/"isPreview":0/g,_0x4781('0x1','5aK*'))['replace'](/"isBuyArticle":0/g,'\x22isBuyArticle\x22:1')[_0x4781('0x14','#Kz8')](/"isFreeMag":0/g,'\x22isFreeMag\x22:1');$done({'body':body});
