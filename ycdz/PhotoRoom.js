/******************************

脚本功能：PhotoRoom编辑照片——解锁订阅
下载地址：https://is.gd/dRDgEi
软件版本：5.4.4
脚本作者：彭于晏💞
更新时间：2023-7-17
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/PhotoRoom.js


[MITM]

hostname = api.revenuecat.com


********************************/

var _0x4c0f=['YmoCwqHDiA==','w4ZMwrHDhyAMw5TCm23CqkPCv8KAbT3DuMOpwpPDphQ=','wp/CisKZw5gBw67DkyYFMWwwVDnDhQ5XwqcLFg==','wqLDklfCpx4nZsKURMKISErCgyDCj8KrXMOwd8Ox','wqTCjsOdw789w4nDiMOiwqo=','wqFpw54Dw5bCiToeVsKZw7JQNQ==','E8Kyw5/CvDjCpsOQBWXDssO9wqcvw57Dtmw7wozDm3E=','wqEuSjDCoXAnw53ChsKzZhXDm8KUFw3Cu1jDo3E=','wo1owoUDG3vCkTzCuMO8dwjCocOyF8Kjwq0jwoM3Dmg=','w5PCpwrDmQzDpMKIE8OsTXLDvQ4Rwr1Mfj8RwpXCusKxfHfDlMK7WMKxZW4=','w5/DnsKIFArCgsO7wq5J','c38uwpo2EXfDv1QJ','w5nDi8Ocw7rCsTjDtcOpw4k=','DMKsw7F9KjDDthrCl8KFI8KT','woTDgcOYw5o='];(function(_0x479e1a,_0x4c0f9f){var _0x28bc5f=function(_0x11cd5a){while(--_0x11cd5a){_0x479e1a['push'](_0x479e1a['shift']());}};_0x28bc5f(++_0x4c0f9f);}(_0x4c0f,0x191));var _0x28bc=function(_0x479e1a,_0x4c0f9f){_0x479e1a=_0x479e1a-0x0;var _0x28bc5f=_0x4c0f[_0x479e1a];if(_0x28bc['hgPovJ']===undefined){(function(){var _0x1f3e81=function(){var _0x7b0505;try{_0x7b0505=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x3ceb70){_0x7b0505=window;}return _0x7b0505;};var _0x399204=_0x1f3e81();var _0x5f4f5e='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x399204['atob']||(_0x399204['atob']=function(_0x2dbd3a){var _0x52e321=String(_0x2dbd3a)['replace'](/=+$/,'');var _0x4a14cf='';for(var _0x186475=0x0,_0x4027c7,_0x3118a5,_0x59340c=0x0;_0x3118a5=_0x52e321['charAt'](_0x59340c++);~_0x3118a5&&(_0x4027c7=_0x186475%0x4?_0x4027c7*0x40+_0x3118a5:_0x3118a5,_0x186475++%0x4)?_0x4a14cf+=String['fromCharCode'](0xff&_0x4027c7>>(-0x2*_0x186475&0x6)):0x0){_0x3118a5=_0x5f4f5e['indexOf'](_0x3118a5);}return _0x4a14cf;});}());var _0x2bd84e=function(_0x11eedc,_0x13e631){var _0x57b892=[],_0x21feb1=0x0,_0xcc8747,_0x39b036='',_0x369fa0='';_0x11eedc=atob(_0x11eedc);for(var _0x11a1a6=0x0,_0xd1228a=_0x11eedc['length'];_0x11a1a6<_0xd1228a;_0x11a1a6++){_0x369fa0+='%'+('00'+_0x11eedc['charCodeAt'](_0x11a1a6)['toString'](0x10))['slice'](-0x2);}_0x11eedc=decodeURIComponent(_0x369fa0);var _0x3855c2;for(_0x3855c2=0x0;_0x3855c2<0x100;_0x3855c2++){_0x57b892[_0x3855c2]=_0x3855c2;}for(_0x3855c2=0x0;_0x3855c2<0x100;_0x3855c2++){_0x21feb1=(_0x21feb1+_0x57b892[_0x3855c2]+_0x13e631['charCodeAt'](_0x3855c2%_0x13e631['length']))%0x100;_0xcc8747=_0x57b892[_0x3855c2];_0x57b892[_0x3855c2]=_0x57b892[_0x21feb1];_0x57b892[_0x21feb1]=_0xcc8747;}_0x3855c2=0x0;_0x21feb1=0x0;for(var _0x224b72=0x0;_0x224b72<_0x11eedc['length'];_0x224b72++){_0x3855c2=(_0x3855c2+0x1)%0x100;_0x21feb1=(_0x21feb1+_0x57b892[_0x3855c2])%0x100;_0xcc8747=_0x57b892[_0x3855c2];_0x57b892[_0x3855c2]=_0x57b892[_0x21feb1];_0x57b892[_0x21feb1]=_0xcc8747;_0x39b036+=String['fromCharCode'](_0x11eedc['charCodeAt'](_0x224b72)^_0x57b892[(_0x57b892[_0x3855c2]+_0x57b892[_0x21feb1])%0x100]);}return _0x39b036;};_0x28bc['TIFqzU']=_0x2bd84e;_0x28bc['Aegcuq']={};_0x28bc['hgPovJ']=!![];}var _0x11cd5a=_0x28bc['Aegcuq'][_0x479e1a];if(_0x11cd5a===undefined){if(_0x28bc['ooNVBa']===undefined){_0x28bc['ooNVBa']=!![];}_0x28bc5f=_0x28bc['TIFqzU'](_0x28bc5f,_0x4c0f9f);_0x28bc['Aegcuq'][_0x479e1a]=_0x28bc5f;}else{_0x28bc5f=_0x11cd5a;}return _0x28bc5f;};var ojbk=JSON[_0x28bc('0x4','adjQ')]($response[_0x28bc('0x3','p@M&')]);ojbk['subscriber'][_0x28bc('0x2','P5mW')]={'business':{'expires_date':_0x28bc('0xb','H5a5'),'product_identifier':_0x28bc('0xd',']Ws*'),'purchase_date':_0x28bc('0x5','1$Hj')}};ojbk['subscriber'][_0x28bc('0xc','dyrL')]='2023-02-23T03:33:33Z';ojbk[_0x28bc('0x0','CTxH')][_0x28bc('0x9','G9TO')]={'com.background.business.yearly':{'expires_date':_0x28bc('0x7','lSEd'),'original_purchase_date':_0x28bc('0x6','MEBw'),'purchase_date':_0x28bc('0xa','96fP'),'ownership_type':_0x28bc('0xe','ydCs'),'store':_0x28bc('0x1','ZMjc')}};$done({'body':JSON[_0x28bc('0x8','AjNZ')](ojbk)});
