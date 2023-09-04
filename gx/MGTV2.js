/******************************

脚本名称: 芒果TV——解锁VIP
下载地址：https://is.gd/FK7wLD
软件版本：7.5.2
脚本作者：彭于晏💞
更新时间：2023-9-4
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

更多资源请微信搜索小程序【屌丝博客】

*******************************

[rewrite_local]

^https?:\/\/.*mgtv\.com\/(v\d+\/(video\/getSource|module\/list)|GetUserInfo|entrance\/home) url https://raw.githubusercontent.com/89996462/Quantumult-X/main/gx/MGTV2.js
&src\=mgtv&suuid\=.*&testversion\=&ticket\=[A-Z0-9]{32} url 302 &src=mgtv&testversion=&ticket=4208da032e45503f98a6d2716ad92b08

^https?:\/\/nuc\.api\.mgtv.com\/Logout url reject-dict

^https?:\/\/pcvideoyd\.titan\.mgtv\.com\/pb\/ url reject-dict

^https?:\/\/mob\.bz\.mgtv\.com\/odin\/c1\/channel\/ads\?_ url reject-dict

^https?:\/\/mobile\.da\.mgtv\.com\/json\/app\/bdboot url reject-dict


# 【小芒】
^https?:\/\/mobile\.api\.mgtv\.com\/mobile\/config\?_support url reject-dict

# 底部会员LOGO叠加ICON
^https?:\/\/mob\.bz\.mgtv\.com\/odin\/c1\/skin\/config url reject-dict

# 文件太大了，屏蔽暂未发现副作用https://dc.bz.mgtv.com/dynamic/v1/dsl/list/10101001/0/5/0?
# ^https?:\/\/dc\.bz\.mgtv\.com\/dynamic\/v1\/dsl\/list\/ url reject-dict

#加入会员 跳过广告https://vip.bz.mgtv.com/client/dynamic_entry
^https?:\/\/vip\.bz\.mgtv\.com\/client\/dynamic_entry url reject-dict

#我的积分 余额 5 https://credits.bz.mgtv.com/credits/url
^https?:\/\/credits\.bz\.mgtv\.com\/credits\/url url reject-dict


[mitm] 

hostname = *.mgtv.com

 ********************************/

var version_='jsjiami.com.v7';function _0x1cf5(){var _0x6d40aa=(function(){return[version_,'ODjJsjBiOrLaJmMiK.cuCoKmEN.yGvB7DfgdnHPP==','W6z/jCoVWPJdQNVcRUAzNUwNM+wfO+I2T+IeKEACNEEbLEweNUIoJ+wnGSkK','W6ZcS8k+sutcHcCn','W5ZcGmkNka','hSkLrNJdMaDMWOyMWPNdTCkD','WORcH8kLFa','WQ14jCoSWOpcRctdVW','W7/dOh7cP8otvNm5','WQvLcG3dKHq','WOL0W4hcHmoFWQ0w','W6ORWQam','WQ4CpSoKwSkXW4CpW7JdOa58kW','WQyxtttcVW','WOtcSCkjW53dTSkusW','W48ME8ooW68uWPRcT17cUW','WQmCwd3cPI12WP0','a8oXW6ZdOmkkWPG','WPddUCoKWO56W7FcPa'].concat((function(){return['oJpcPbeVWPDPpW','WOyQvMOVW6yRWPW','s8oMW63dTmkrWOuwn8ovWP7dJ8kWqSoTeMGcW5boWRlcSZ7dIbm','WOJdNmo0zmklW6fbWORLV77KUAFMM6FMJ7JNPyxOPRpPLkdMI6JLI4fD','W5KnW6iFWO48W6VcTSoQzW','f8o3W7hdVSkqWPCrjCoj','W5SlW6OBWRe0W6/cKSonBW','WPPCWQnhWOeNW7K','W6JdRcZcKxqDW4lcVmk2W51a','W5pdJmk/WOa','5B605lMs5PMr6kwf6zwd','WQHuoSkUx8o8W4uPWOddS3DAwszw','ygZdSe5PW4a7pCofeSo+jwS','W5LZWRHJW6emW5a','WOVdKmoKESkCueCfW4RdKIrmrW','WO53mCkeW5S','W4Kwi8oZwCoRiCkVnu3dVY7dIq','W6u1xIxcHJP2WPXVcSoUW4y','sCo0W7dcSXG'].concat((function(){return['yrJdP8opW6PNW6rTFCoFWRO','WPFcJmk8lCoAdXvBW4VdVW9X','AwBcKSohxfpdM14','xmkjESoWWRpcI8oB','sSkEnX4ZsrGpWROj','W4Kvi8o9xCkSwCkWhuJdUa','WPb/imkCW5a5WRpcOa','W73dPYVdMCkvjw05ptzAtW','W43cK8k/','gqzGySo0BmoSWO1LA8o1WR1S','WQNdI2BcTmkmyqxcGrr/','kCkdWOjVWPS8W4yYnXqe','W7LyxWVcUSk/W6FdNfxdPCoXWPDfhSohC8k7WRO0','WOldTNjLWQG','wSo8aH7cHv9JWRGxWPZdSSkz','W73dPIddMmkwiW4PmJbNsmoi','WOlcRCkjW5q'];}()));}()));}());_0x1cf5=function(){return _0x6d40aa;};return _0x1cf5();}function _0x5a2b(_0x2bf2f7,_0x4bb76a){var _0x1cf507=_0x1cf5();return _0x5a2b=function(_0x5a2b23,_0x3321e1){_0x5a2b23=_0x5a2b23-0x18b;var _0x3cb39b=_0x1cf507[_0x5a2b23];if(_0x5a2b['wbaQbI']===undefined){var _0x41ea7d=function(_0x5c5690){var _0x45e0af='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x3a37c2='',_0x9a54c6='';for(var _0x5b7e44=0x0,_0x47fb61,_0x3ea2f5,_0x1c1a74=0x0;_0x3ea2f5=_0x5c5690['charAt'](_0x1c1a74++);~_0x3ea2f5&&(_0x47fb61=_0x5b7e44%0x4?_0x47fb61*0x40+_0x3ea2f5:_0x3ea2f5,_0x5b7e44++%0x4)?_0x3a37c2+=String['fromCharCode'](0xff&_0x47fb61>>(-0x2*_0x5b7e44&0x6)):0x0){_0x3ea2f5=_0x45e0af['indexOf'](_0x3ea2f5);}for(var _0x162f7b=0x0,_0x590495=_0x3a37c2['length'];_0x162f7b<_0x590495;_0x162f7b++){_0x9a54c6+='%'+('00'+_0x3a37c2['charCodeAt'](_0x162f7b)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x9a54c6);};var _0x1a5152=function(_0x5aad80,_0x4c9c28){var _0x2a02c7=[],_0x12463f=0x0,_0x2585da,_0x170ffc='';_0x5aad80=_0x41ea7d(_0x5aad80);var _0x2b3e44;for(_0x2b3e44=0x0;_0x2b3e44<0x100;_0x2b3e44++){_0x2a02c7[_0x2b3e44]=_0x2b3e44;}for(_0x2b3e44=0x0;_0x2b3e44<0x100;_0x2b3e44++){_0x12463f=(_0x12463f+_0x2a02c7[_0x2b3e44]+_0x4c9c28['charCodeAt'](_0x2b3e44%_0x4c9c28['length']))%0x100,_0x2585da=_0x2a02c7[_0x2b3e44],_0x2a02c7[_0x2b3e44]=_0x2a02c7[_0x12463f],_0x2a02c7[_0x12463f]=_0x2585da;}_0x2b3e44=0x0,_0x12463f=0x0;for(var _0x5a713b=0x0;_0x5a713b<_0x5aad80['length'];_0x5a713b++){_0x2b3e44=(_0x2b3e44+0x1)%0x100,_0x12463f=(_0x12463f+_0x2a02c7[_0x2b3e44])%0x100,_0x2585da=_0x2a02c7[_0x2b3e44],_0x2a02c7[_0x2b3e44]=_0x2a02c7[_0x12463f],_0x2a02c7[_0x12463f]=_0x2585da,_0x170ffc+=String['fromCharCode'](_0x5aad80['charCodeAt'](_0x5a713b)^_0x2a02c7[(_0x2a02c7[_0x2b3e44]+_0x2a02c7[_0x12463f])%0x100]);}return _0x170ffc;};_0x5a2b['AeMSan']=_0x1a5152,_0x2bf2f7=arguments,_0x5a2b['wbaQbI']=!![];}var _0x1b21b2=_0x1cf507[0x0],_0x2b8c43=_0x5a2b23+_0x1b21b2,_0x495ae9=_0x2bf2f7[_0x2b8c43];return!_0x495ae9?(_0x5a2b['WYLGQV']===undefined&&(_0x5a2b['WYLGQV']=!![]),_0x3cb39b=_0x5a2b['AeMSan'](_0x3cb39b,_0x3321e1),_0x2bf2f7[_0x2b8c43]=_0x3cb39b):_0x3cb39b=_0x495ae9,_0x3cb39b;},_0x5a2b(_0x2bf2f7,_0x4bb76a);};var _0x1c7274=_0x5a2b;(function(_0x1ad00c,_0x221532,_0x156ff7,_0x496dc1,_0x550087,_0x391f0d,_0x37f1cf){return _0x1ad00c=_0x1ad00c>>0x6,_0x391f0d='hs',_0x37f1cf='hs',function(_0x479130,_0x34557f,_0x57bf91,_0x37b2d2,_0x44b5bc){var _0x5836fe=_0x5a2b;_0x37b2d2='tfi',_0x391f0d=_0x37b2d2+_0x391f0d,_0x44b5bc='up',_0x37f1cf+=_0x44b5bc,_0x391f0d=_0x57bf91(_0x391f0d),_0x37f1cf=_0x57bf91(_0x37f1cf),_0x57bf91=0x0;var _0x57d37b=_0x479130();while(!![]&&--_0x496dc1+_0x34557f){try{_0x37b2d2=parseInt(_0x5836fe(0x190,'^@3K'))/0x1+-parseInt(_0x5836fe(0x1be,'U0h$'))/0x2+-parseInt(_0x5836fe(0x1b4,'OY[#'))/0x3*(-parseInt(_0x5836fe(0x1af,'JBPy'))/0x4)+-parseInt(_0x5836fe(0x1ac,'AP8J'))/0x5*(-parseInt(_0x5836fe(0x1a7,'JBPy'))/0x6)+parseInt(_0x5836fe(0x1ae,'sUOc'))/0x7*(parseInt(_0x5836fe(0x1aa,'qFs0'))/0x8)+-parseInt(_0x5836fe(0x1a3,'HqK['))/0x9+parseInt(_0x5836fe(0x19d,'isyM'))/0xa*(-parseInt(_0x5836fe(0x1b1,'mR&$'))/0xb);}catch(_0x1fcd33){_0x37b2d2=_0x57bf91;}finally{_0x44b5bc=_0x57d37b[_0x391f0d]();if(_0x1ad00c<=_0x496dc1)_0x57bf91?_0x550087?_0x37b2d2=_0x44b5bc:_0x550087=_0x44b5bc:_0x57bf91=_0x44b5bc;else{if(_0x57bf91==_0x550087['replace'](/[yBngCNdKJPOEDufrMHGL=]/g,'')){if(_0x37b2d2===_0x34557f){_0x57d37b['un'+_0x391f0d](_0x44b5bc);break;}_0x57d37b[_0x37f1cf](_0x44b5bc);}}}}}(_0x156ff7,_0x221532,function(_0x976f83,_0x1f1324,_0x5ca7d4,_0x3fb891,_0x385b5a,_0x48f662,_0x4993b8){return _0x1f1324='\x73\x70\x6c\x69\x74',_0x976f83=arguments[0x0],_0x976f83=_0x976f83[_0x1f1324](''),_0x5ca7d4='\x72\x65\x76\x65\x72\x73\x65',_0x976f83=_0x976f83[_0x5ca7d4]('\x76'),_0x3fb891='\x6a\x6f\x69\x6e',(0x13c97e,_0x976f83[_0x3fb891](''));});}(0x3340,0xc3f57,_0x1cf5,0xcf),_0x1cf5)&&(version_=_0x1cf5);var body=$response[_0x1c7274(0x1bf,'VB7C')],url=$request[_0x1c7274(0x1b2,'wuyA')];url[_0x1c7274(0x197,'HqK[')](_0x1c7274(0x1b6,'Cxmn'))&&(body=body[_0x1c7274(0x196,'toPB')](/\"text\":\".*?\"/g,_0x1c7274(0x19a,'RDVG')));url[_0x1c7274(0x198,']VeY')](_0x1c7274(0x199,'CuWk'))&&(body=body['replace'](/\"title\":\".*?\"/g,'\x22title\x22:\x22更多免费脚本点击获取\x22')[_0x1c7274(0x19e,'isyM')](/\"icon\":\".*?\"/g,_0x1c7274(0x1bb,'oT@v'))[_0x1c7274(0x192,'a2Wi')](/\"closeUrl\":\".+"/g,'\x22closeUrl\x22:\x22https://t.me/py996\x22'));var obj=JSON[_0x1c7274(0x1a6,'ZvBb')](body);if(url[_0x1c7274(0x194,'Qg@K')](_0x1c7274(0x1a8,'Qg@K'))){var XXJsHg=_0x1c7274(0x1a2,'^@3K')[_0x1c7274(0x1a9,'$MUQ')]('|'),wCTMvK=0x0;while(!![]){switch(XXJsHg[wCTMvK++]){case'0':obj['data'][_0x1c7274(0x1b3,'jaxg')]=0x127879aa82650;continue;case'1':body=JSON[_0x1c7274(0x19c,'CuWk')](obj);continue;case'2':obj['data'][_0x1c7274(0x1ad,'ehOH')]['isvip']=0x1;continue;case'3':obj['data'][_0x1c7274(0x1a4,'gY9S')][_0x1c7274(0x1b8,'U0h$')]='9999-08-08\x2000:00:00';continue;case'4':obj['data'][_0x1c7274(0x18e,'6anQ')][_0x1c7274(0x1ba,'a2Wi')]='2';continue;case'5':obj[_0x1c7274(0x1bd,'wuyA')][_0x1c7274(0x1b0,'ZvBb')]=_0x1c7274(0x1a1,'yqj)');continue;case'6':obj['data']['vipinfo'][_0x1c7274(0x195,'CuWk')][_0x1c7274(0x191,'Qg@K')]=0x9;continue;case'7':obj['data'][_0x1c7274(0x1b7,'1nf6')]=0x1;continue;}break;}}url[_0x1c7274(0x1bc,'E(&9')](_0x1c7274(0x1ab,'wuyA'))&&(obj[_0x1c7274(0x18f,'Fld0')]['list']=obj[_0x1c7274(0x1a0,'To4F')]['list'][_0x1c7274(0x18d,'E1dM')](_0x1c1283=>[0x1,0x2,0x4,0x5,0x7][_0x1c7274(0x18b,'oT@v')](_0x1c1283['id'])),body=JSON['stringify'](obj));$done({'body':body});var version_ = 'jsjiami.com.v7';
