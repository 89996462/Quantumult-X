/******************************

脚本功能：图图记账+恢复订阅
下载地址：http://u6v.cn/5XtW8F
软件版本：2.4.4
脚本作者：彭于晏
更新时间：2022-9-8
问题反馈：QQ+89996462
TG反馈群：https://t.me/plus8889
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************

[rewrite_local]

^https:\/\/api\.revenuecat\.com\/v1\/subscribers.+ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/ttjz.js

[mitm] 
hostname = api.revenuecat.com

*******************************/

var _0x5f03=['wo/CgURqQsOtw5hcw4w9PMOiw7UfLy7DssOYAhMZGGJaw6IkZDo=','w43DkcKnw4vDv8Oow4w1FjnDg8OlwqAwwp/CucKdwowUw7NfG1FOVmIQworCp8OiVFrCnhwcUcOGwqHCkiJYw6sFEcOsw53DnQ==','w4QqdEpe','wrxMf3RwCcKkwo0PwqjCjTLCmw7ChTskRMKcwqM=','w7PDoQPCk8OCNCcnw4jCs2tiQGxCw4rDosKhwrRg','bGlIw6R+w4jDpsOLNA==','woJoLxkffHPDmMKWwqzDlFzDkMOYMyovWxrCvA==','wpUDwosB','IEnCvTTClMKRC8O8KA==','w7PDoQPCk8OCNCYnw4jCuGtjQWxAw4zDosKkwrdg','w4Vcw51KW8OAccKZS8KlFMKWw5DDi1bDjgHDrQFj','w7koXA==','w5wGTnnDpV7CrWdLwrfCvsKZwqkRw58IU8Kkw68Q','wonDvkQENcOkB8KuZMOoGjjCq8Kiw5/DvV3DhsO2TA==','Knx0w7tMwrHDkmnDvA=='];(function(_0x2b3723,_0x5f030b){var _0xd2bee1=function(_0x205c10){while(--_0x205c10){_0x2b3723['push'](_0x2b3723['shift']());}};_0xd2bee1(++_0x5f030b);}(_0x5f03,0x119));var _0xd2be=function(_0x2b3723,_0x5f030b){_0x2b3723=_0x2b3723-0x0;var _0xd2bee1=_0x5f03[_0x2b3723];if(_0xd2be['uLcBke']===undefined){(function(){var _0x58ee76=function(){var _0x48790a;try{_0x48790a=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x31357f){_0x48790a=window;}return _0x48790a;};var _0x27d253=_0x58ee76();var _0x478509='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x27d253['atob']||(_0x27d253['atob']=function(_0x48fb06){var _0x2923c3=String(_0x48fb06)['replace'](/=+$/,'');var _0x55b50e='';for(var _0x654f1f=0x0,_0x1a3b3e,_0x1a2c90,_0x5e5955=0x0;_0x1a2c90=_0x2923c3['charAt'](_0x5e5955++);~_0x1a2c90&&(_0x1a3b3e=_0x654f1f%0x4?_0x1a3b3e*0x40+_0x1a2c90:_0x1a2c90,_0x654f1f++%0x4)?_0x55b50e+=String['fromCharCode'](0xff&_0x1a3b3e>>(-0x2*_0x654f1f&0x6)):0x0){_0x1a2c90=_0x478509['indexOf'](_0x1a2c90);}return _0x55b50e;});}());var _0x9b599e=function(_0x465220,_0x3b2e09){var _0x47e83f=[],_0x1f7dcb=0x0,_0xcfc5b7,_0xae6123='',_0x5a95cf='';_0x465220=atob(_0x465220);for(var _0x3786e6=0x0,_0x2570be=_0x465220['length'];_0x3786e6<_0x2570be;_0x3786e6++){_0x5a95cf+='%'+('00'+_0x465220['charCodeAt'](_0x3786e6)['toString'](0x10))['slice'](-0x2);}_0x465220=decodeURIComponent(_0x5a95cf);var _0x52bd36;for(_0x52bd36=0x0;_0x52bd36<0x100;_0x52bd36++){_0x47e83f[_0x52bd36]=_0x52bd36;}for(_0x52bd36=0x0;_0x52bd36<0x100;_0x52bd36++){_0x1f7dcb=(_0x1f7dcb+_0x47e83f[_0x52bd36]+_0x3b2e09['charCodeAt'](_0x52bd36%_0x3b2e09['length']))%0x100;_0xcfc5b7=_0x47e83f[_0x52bd36];_0x47e83f[_0x52bd36]=_0x47e83f[_0x1f7dcb];_0x47e83f[_0x1f7dcb]=_0xcfc5b7;}_0x52bd36=0x0;_0x1f7dcb=0x0;for(var _0x47ef61=0x0;_0x47ef61<_0x465220['length'];_0x47ef61++){_0x52bd36=(_0x52bd36+0x1)%0x100;_0x1f7dcb=(_0x1f7dcb+_0x47e83f[_0x52bd36])%0x100;_0xcfc5b7=_0x47e83f[_0x52bd36];_0x47e83f[_0x52bd36]=_0x47e83f[_0x1f7dcb];_0x47e83f[_0x1f7dcb]=_0xcfc5b7;_0xae6123+=String['fromCharCode'](_0x465220['charCodeAt'](_0x47ef61)^_0x47e83f[(_0x47e83f[_0x52bd36]+_0x47e83f[_0x1f7dcb])%0x100]);}return _0xae6123;};_0xd2be['TWKaxp']=_0x9b599e;_0xd2be['xhbRMX']={};_0xd2be['uLcBke']=!![];}var _0x205c10=_0xd2be['xhbRMX'][_0x2b3723];if(_0x205c10===undefined){if(_0xd2be['QXFIbV']===undefined){_0xd2be['QXFIbV']=!![];}_0xd2bee1=_0xd2be['TWKaxp'](_0xd2bee1,_0x5f030b);_0xd2be['xhbRMX'][_0x2b3723]=_0xd2bee1;}else{_0xd2bee1=_0x205c10;}return _0xd2bee1;};var body=$response[_0xd2be('0xb','W!7k')];var objk=JSON['parse'](body);objk={'request_date':_0xd2be('0x8','NTmV'),'request_date_ms':0x1831bf19478,'subscriber':{'entitlements':{'all':{'expires_date':_0xd2be('0x1','XCUy'),'grace_period_expires_date':null,'product_identifier':_0xd2be('0x4','ORRi'),'purchase_date':'2022-08-02T14:30:15Z'}},'first_seen':_0xd2be('0x2','9f&E'),'last_seen':_0xd2be('0x7','xmx2'),'management_url':null,'non_subscriptions':{},'original_app_user_id':_0xd2be('0x5','n4LZ'),'original_application_version':_0xd2be('0x0','TP(6'),'original_purchase_date':_0xd2be('0xe','W!7k'),'other_purchases':{},'subscriptions':{'com.ziheng.totowallet.yearly':{'billing_issues_detected_at':null,'expires_date':'9999-09-08T01:16:31Z','grace_period_expires_date':null,'is_sandbox':![],'original_purchase_date':'2022-08-02T14:30:16Z','ownership_type':_0xd2be('0xc','$Z9)'),'period_type':_0xd2be('0x6','(%g5'),'purchase_date':_0xd2be('0xa','(%g5'),'store':_0xd2be('0x9','qSi['),'unsubscribe_detected_at':_0xd2be('0xd','NTmV')}}}};body=JSON[_0xd2be('0x3','qUzf')](objk);$done({'body':body});
