

/******************************

脚本功能：Pandora-管理你的订阅+恢复订阅
下载地址：http://u6v.cn/6qQd2t
软件版本：2.0.3
脚本作者：彭于晏
更新时间：2022-9-10
问题反馈：QQ+89996462
TG反馈群：https://t.me/plus8889
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************

[rewrite_local]

^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/Pandora.js

[mitm] 
hostname = buy.itunes.apple.com

*******************************/

var _0x2e8e=['wpfDvR84ecKDasKXwodvwpZdUUJSwogtCsOXUhd/wrd0b8ONCzLDvsO6FMOJwrTDrxrDpR/Ct8OB','w6pZwoZ3w71RwqAOw5o=','NRnCpE8=','woPCk8KSw7ZdwrnDrcOFwqsow6TCo8Ore8KPwo0uMh7Dp8K6w5jCisKpf31AwqPDvALCusK5w7fDvsKlw7w6D8Ko','wpLDoCBMw6fDi8ObKyfDvHTDisKUAsOYWcKCw6JHTsOfw5Y/w4B9w4rCpQ==','diZ0w7XCgFLDoCdSf8OEw47Cmw==','wpLDoCBMw6fDi8ObKyfDvHTDi8KRAsOYWcKCw6JHTsObw485wp1Tw6TCkHZ1AsKwQFLCl3VSwpjDmsKX','wpBzw7PCtSbCsMKgw6Zmwr/DlmbCvUnDhsKswptIRVTDlCISwqphPzM='];(function(_0x1ab5b4,_0x2e8e27){var _0x5884a5=function(_0x2dae29){while(--_0x2dae29){_0x1ab5b4['push'](_0x1ab5b4['shift']());}};_0x5884a5(++_0x2e8e27);}(_0x2e8e,0xd4));var _0x5884=function(_0x1ab5b4,_0x2e8e27){_0x1ab5b4=_0x1ab5b4-0x0;var _0x5884a5=_0x2e8e[_0x1ab5b4];if(_0x5884['yirUbM']===undefined){(function(){var _0x4dd119;try{var _0x53e8e6=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x4dd119=_0x53e8e6();}catch(_0x16272e){_0x4dd119=window;}var _0x512719='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x4dd119['atob']||(_0x4dd119['atob']=function(_0x31c25d){var _0xbd6986=String(_0x31c25d)['replace'](/=+$/,'');var _0x5a85d2='';for(var _0x32a418=0x0,_0x397641,_0x29f42a,_0x14f074=0x0;_0x29f42a=_0xbd6986['charAt'](_0x14f074++);~_0x29f42a&&(_0x397641=_0x32a418%0x4?_0x397641*0x40+_0x29f42a:_0x29f42a,_0x32a418++%0x4)?_0x5a85d2+=String['fromCharCode'](0xff&_0x397641>>(-0x2*_0x32a418&0x6)):0x0){_0x29f42a=_0x512719['indexOf'](_0x29f42a);}return _0x5a85d2;});}());var _0x9d7192=function(_0x4c956c,_0x25b4d6){var _0x14c219=[],_0x5117f1=0x0,_0x5f5db6,_0x108349='',_0x11c04f='';_0x4c956c=atob(_0x4c956c);for(var _0xba8ba5=0x0,_0x4a58e4=_0x4c956c['length'];_0xba8ba5<_0x4a58e4;_0xba8ba5++){_0x11c04f+='%'+('00'+_0x4c956c['charCodeAt'](_0xba8ba5)['toString'](0x10))['slice'](-0x2);}_0x4c956c=decodeURIComponent(_0x11c04f);var _0x549618;for(_0x549618=0x0;_0x549618<0x100;_0x549618++){_0x14c219[_0x549618]=_0x549618;}for(_0x549618=0x0;_0x549618<0x100;_0x549618++){_0x5117f1=(_0x5117f1+_0x14c219[_0x549618]+_0x25b4d6['charCodeAt'](_0x549618%_0x25b4d6['length']))%0x100;_0x5f5db6=_0x14c219[_0x549618];_0x14c219[_0x549618]=_0x14c219[_0x5117f1];_0x14c219[_0x5117f1]=_0x5f5db6;}_0x549618=0x0;_0x5117f1=0x0;for(var _0x4f65f3=0x0;_0x4f65f3<_0x4c956c['length'];_0x4f65f3++){_0x549618=(_0x549618+0x1)%0x100;_0x5117f1=(_0x5117f1+_0x14c219[_0x549618])%0x100;_0x5f5db6=_0x14c219[_0x549618];_0x14c219[_0x549618]=_0x14c219[_0x5117f1];_0x14c219[_0x5117f1]=_0x5f5db6;_0x108349+=String['fromCharCode'](_0x4c956c['charCodeAt'](_0x4f65f3)^_0x14c219[(_0x14c219[_0x549618]+_0x14c219[_0x5117f1])%0x100]);}return _0x108349;};_0x5884['yhioiR']=_0x9d7192;_0x5884['JbOUvk']={};_0x5884['yirUbM']=!![];}var _0x2dae29=_0x5884['JbOUvk'][_0x1ab5b4];if(_0x2dae29===undefined){if(_0x5884['hwnuCp']===undefined){_0x5884['hwnuCp']=!![];}_0x5884a5=_0x5884['yhioiR'](_0x5884a5,_0x2e8e27);_0x5884['JbOUvk'][_0x1ab5b4]=_0x5884a5;}else{_0x5884a5=_0x2dae29;}return _0x5884a5;};var body=$response[_0x5884('0x6','$Mb)')];var objk=JSON['parse'](body);objk={'receipt':{'receipt_type':'Production','adam_id':0x57a6fa94,'app_item_id':0x57a6fa94,'bundle_id':'com.ziheng.OneBox','application_version':'31','download_id':0x6f683eac6256200,'version_external_identifier':0x32c69848,'receipt_creation_date':_0x5884('0x3','2oMc'),'receipt_creation_date_ms':_0x5884('0x1','lwen'),'receipt_creation_date_pst':_0x5884('0x4','BoEw'),'request_date':_0x5884('0x0','S$w#'),'request_date_ms':'1662730606390','request_date_pst':_0x5884('0x2','S$w#'),'original_purchase_date':'2022-09-09\x2011:40:07\x20Etc/GMT','original_purchase_date_ms':'1662723607000','original_purchase_date_pst':_0x5884('0x7','G#9m'),'original_application_version':'8','in_app':[]},'environment':'Production','status':0x0};body=JSON[_0x5884('0x5','PJY^')](objk);$done({'body':body});
