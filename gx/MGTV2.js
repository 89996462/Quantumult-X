/******************************

特别感谢：苍井灰灰  @ios151  大白  @chxm1023

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

^http[s]?:\/\/mobile\.api\.mgtv\.com\/v[0-9]\/(playlist|video\/album|video\/relative|video\/list).*$ url script-request-header https://raw.githubusercontent.com/89996462/Quantumult-X/main/gx/MGTV1.js

^https?:\/\/.*mgtv\.com\/(v\d+\/(video\/getSource|module\/list)|GetUserInfo|entrance\/home) url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/gx/MGTV2.js

# 底部会员LOGO叠加ICON
^https?:\/\/nuc\.api\.mgtv.com\/Logout url reject-200
# 底部会员LOGO叠加ICON
^(https?:\/\/\D.+)(&src=mgtv.*?&testversion=&)(ticket=\w{32})(.+) url 302 $1$2ticket=2031287C725A39BE8D5F5E2FF31D57AB$4
# 底部会员LOGO叠加ICON
^https?:\/\/pcvideoyd\.titan\.mgtv\.com\/pb\/ url reject-img
# 底部会员LOGO叠加ICON
^https?:\/\/api-access\.pangolin-sdk-toutiao\.com\/api\/ad\/union\/sdk\/ url reject-200
# 底部会员LOGO叠加ICON
^https?:\/\/sf3-fe-tos\.pglstatp-toutiao\.com\/obj\/ad-pattern\/renderer\/package\.json url reject-200
# 底部会员LOGO叠加ICON
^https?:\/\/api-access\.pangolin-sdk-toutiao\.com\/api\/ad\/union\/server_bidding\/pre_fetch\/ url reject-200
# 底部会员LOGO叠加ICON
^https?:\/\/api-access\.pangolin-sdk-toutiao\.com\/api\/ad\/union\/sdk\/stats\/batch\/ url reject-200
# 底部会员LOGO叠加ICON
^https?:\/\/mob\.bz\.mgtv\.com\/odin\/c1\/channel\/ads\?_ url reject-200
# 底部会员LOGO叠加ICON
^https?:\/\/mobile\.da\.mgtv\.com\/json\/app\/bdboot url reject-200
# 底部会员LOGO叠加ICON
^https?:\/\/mobile\.api\.mgtv\.com\/mobile\/config\?_support url reject-200
# 底部会员LOGO叠加ICON
^https?:\/\/sf3-fe-tos\.pglstatp-toutiao\.com\/obj\/ad-pattern\/renderer\/ url reject-200
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

var version_='jsjiami.com.v7';var _0x546e13=_0x3258;(function(_0x30e27c,_0x4f0d93,_0x5891b7,_0x5b414b,_0x2e23c5,_0x462e6b,_0x1e7cb5){return _0x30e27c=_0x30e27c>>0x2,_0x462e6b='hs',_0x1e7cb5='hs',function(_0x5109a9,_0x575d11,_0x1ee12e,_0x321215,_0x4af801){var _0x3acdf5=_0x3258;_0x321215='tfi',_0x462e6b=_0x321215+_0x462e6b,_0x4af801='up',_0x1e7cb5+=_0x4af801,_0x462e6b=_0x1ee12e(_0x462e6b),_0x1e7cb5=_0x1ee12e(_0x1e7cb5),_0x1ee12e=0x0;var _0x40f212=_0x5109a9();while(!![]&&--_0x5b414b+_0x575d11){try{_0x321215=parseInt(_0x3acdf5(0x1db,'h7M2'))/0x1+-parseInt(_0x3acdf5(0x1c2,'Ppyy'))/0x2*(-parseInt(_0x3acdf5(0x1b6,'WrVg'))/0x3)+-parseInt(_0x3acdf5(0x1b5,'[&Jh'))/0x4*(-parseInt(_0x3acdf5(0x1b8,'vWED'))/0x5)+-parseInt(_0x3acdf5(0x1d5,'HB!K'))/0x6+-parseInt(_0x3acdf5(0x1c8,'tg56'))/0x7+-parseInt(_0x3acdf5(0x1c1,'Ukmy'))/0x8*(-parseInt(_0x3acdf5(0x1d8,'sY*#'))/0x9)+-parseInt(_0x3acdf5(0x1d2,'n%X4'))/0xa;}catch(_0x1d9f45){_0x321215=_0x1ee12e;}finally{_0x4af801=_0x40f212[_0x462e6b]();if(_0x30e27c<=_0x5b414b)_0x1ee12e?_0x2e23c5?_0x321215=_0x4af801:_0x2e23c5=_0x4af801:_0x1ee12e=_0x4af801;else{if(_0x1ee12e==_0x2e23c5['replace'](/[SCFPwEuyMbYkJnhRfgt=]/g,'')){if(_0x321215===_0x575d11){_0x40f212['un'+_0x462e6b](_0x4af801);break;}_0x40f212[_0x1e7cb5](_0x4af801);}}}}}(_0x5891b7,_0x4f0d93,function(_0x141aaa,_0x4ca25b,_0x1983f4,_0x42868e,_0x37fb63,_0x43b8c8,_0x5ec4bc){return _0x4ca25b='\x73\x70\x6c\x69\x74',_0x141aaa=arguments[0x0],_0x141aaa=_0x141aaa[_0x4ca25b](''),_0x1983f4='\x72\x65\x76\x65\x72\x73\x65',_0x141aaa=_0x141aaa[_0x1983f4]('\x76'),_0x42868e='\x6a\x6f\x69\x6e',(0x13ca2c,_0x141aaa[_0x42868e](''));});}(0x300,0x49348,_0x56e6,0xc2),_0x56e6)&&(version_=_0x56e6);var body=$response['body'],url=$request['url'];url[_0x546e13(0x1c6,'N1O^')]('/v8/video/getSource')&&(body=body[_0x546e13(0x1c9,'dX]u')](/\"text\":\".*?\"/g,_0x546e13(0x1c0,'WrVg')));function _0x56e6(){var _0x5826c2=(function(){return[version_,'CFjswbjtitEakmYCkig.bPucFonMRmSJ.CMyv7fh==','W6aeWRZcHfXXrSobW7bCWQ3cTCkA','yG83sG','oHqnW6dcImkmW67dRSkmWR4qW44R','nd/dHLZcKZiRW5RcKumrWPy','W4/cQCo+C3K','WQ4XWPjBWPxdUCkY','WRTyW6VdMrKNe8o2','l1ZcLeK','erVcKmofW5O','yM9Ef8kwW5S','gmkMnr8','WPSFW7HrBSkUW5ro','D3bklq','i3pcLbFdKYb7WOlLVR7KUOdMMjxMJitNPP/OP5tPLB3MIO7LIO7dKa'].concat((function(){return['W4ncWQ0nk8kfW6DiW53cKeG','W49RWPG1WPtdLCow','WPewW6GP','W5ayW7HsDCoOWOSF5PM45AEs5yw26lE66iEw5PY154k85yEI6iYt5y2tsG','WOBdTCkyWQC','imkmWOuXWQDwlYS','AmkYW6OnD8ovW6SUWRa','W4BdOmk9vSkmW5PnvCoZWRWEWRqL','WQ7dLSohW4qEC8kE','nhdcPmocpb5H','gmomW7BcPIO','W6qLWR8wW7ZcT0G','W6NdUCoWW6SSwCkC','gLDEESkutZDGrbuMW619','ASoLW6pcHHBcQmkMW4xdUmokBSk0pG','BCkhWOCbWOi/WO8'].concat((function(){return['EvPJW6i','W4BcUSoCW7fjlvVdMbJcPHtcRmoR','A2KiWOtcG8oFF8k2WPTknmoAEW','W6pdIcddOSkDcG','WRGlW6NdSepdVN4rW5LZWPeiW4a','yg3cVCoFpH0SWRjn5PUD5AEo5ysJ6lsX6iwV5P2Y54oa5ysE6i2B5yYnW60','W73dO1BcNSovWQreWRG4WPS7amoCW7ddNchdLLLsWPmfWPFdT8ojW6rwW6tdMmkDfaC','gfzzFCo1peDGAXa','W60sWQvXWQJdLSk6','W5xcPa/cGvNcHCoWW44','i8ocoJayWPBdI3dcRc/dMCo1','C8kAEwi','od7dIfBcIJj5WO3dOZz6W6tcLq1mWQ4RW4ldMa','nXRdLtWpWPxdSLJdKmk2zCoh','WOmEW6Wnq8kjAay9W4yrcqy'];}()));}()));}());_0x56e6=function(){return _0x5826c2;};return _0x56e6();};url[_0x546e13(0x1b9,'szZ7')]('/encounter/entrance/home')&&(body=body['replace'](/\"title\":\".*?\"/g,_0x546e13(0x1d6,'(aqI'))['replace'](/\"icon\":\".*?\"/g,_0x546e13(0x1c4,'Ukmy'))['replace'](/\"closeUrl\":\".+"/g,_0x546e13(0x1d7,'ezU*')));var obj=JSON['parse'](body);function _0x3258(_0x5c5e1e,_0x1e66b9){var _0x56e624=_0x56e6();return _0x3258=function(_0x3258bd,_0x28bda4){_0x3258bd=_0x3258bd-0x1b3;var _0x272925=_0x56e624[_0x3258bd];if(_0x3258['AVeKHY']===undefined){var _0x39b4aa=function(_0x20540a){var _0x5ae45d='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x4023ba='',_0x84de5f='';for(var _0x41b3ad=0x0,_0x64922,_0x2d833c,_0x3957b4=0x0;_0x2d833c=_0x20540a['charAt'](_0x3957b4++);~_0x2d833c&&(_0x64922=_0x41b3ad%0x4?_0x64922*0x40+_0x2d833c:_0x2d833c,_0x41b3ad++%0x4)?_0x4023ba+=String['fromCharCode'](0xff&_0x64922>>(-0x2*_0x41b3ad&0x6)):0x0){_0x2d833c=_0x5ae45d['indexOf'](_0x2d833c);}for(var _0x3249e2=0x0,_0x5878c5=_0x4023ba['length'];_0x3249e2<_0x5878c5;_0x3249e2++){_0x84de5f+='%'+('00'+_0x4023ba['charCodeAt'](_0x3249e2)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x84de5f);};var _0x51afa4=function(_0x2ed2f0,_0x3e7dd0){var _0xd5d694=[],_0x3005c0=0x0,_0x2ea2cb,_0x24df92='';_0x2ed2f0=_0x39b4aa(_0x2ed2f0);var _0x2d4638;for(_0x2d4638=0x0;_0x2d4638<0x100;_0x2d4638++){_0xd5d694[_0x2d4638]=_0x2d4638;}for(_0x2d4638=0x0;_0x2d4638<0x100;_0x2d4638++){_0x3005c0=(_0x3005c0+_0xd5d694[_0x2d4638]+_0x3e7dd0['charCodeAt'](_0x2d4638%_0x3e7dd0['length']))%0x100,_0x2ea2cb=_0xd5d694[_0x2d4638],_0xd5d694[_0x2d4638]=_0xd5d694[_0x3005c0],_0xd5d694[_0x3005c0]=_0x2ea2cb;}_0x2d4638=0x0,_0x3005c0=0x0;for(var _0x5ade08=0x0;_0x5ade08<_0x2ed2f0['length'];_0x5ade08++){_0x2d4638=(_0x2d4638+0x1)%0x100,_0x3005c0=(_0x3005c0+_0xd5d694[_0x2d4638])%0x100,_0x2ea2cb=_0xd5d694[_0x2d4638],_0xd5d694[_0x2d4638]=_0xd5d694[_0x3005c0],_0xd5d694[_0x3005c0]=_0x2ea2cb,_0x24df92+=String['fromCharCode'](_0x2ed2f0['charCodeAt'](_0x5ade08)^_0xd5d694[(_0xd5d694[_0x2d4638]+_0xd5d694[_0x3005c0])%0x100]);}return _0x24df92;};_0x3258['LiUdMb']=_0x51afa4,_0x5c5e1e=arguments,_0x3258['AVeKHY']=!![];}var _0x2db284=_0x56e624[0x0],_0x12fc71=_0x3258bd+_0x2db284,_0x417dcd=_0x5c5e1e[_0x12fc71];return!_0x417dcd?(_0x3258['QGgHoy']===undefined&&(_0x3258['QGgHoy']=!![]),_0x272925=_0x3258['LiUdMb'](_0x272925,_0x28bda4),_0x5c5e1e[_0x12fc71]=_0x272925):_0x272925=_0x417dcd,_0x272925;},_0x3258(_0x5c5e1e,_0x1e66b9);}if(url[_0x546e13(0x1be,'Ukmy')]('/GetUserInfo')){var oxWyGj='5|0|1|4|7|6|3|2'[_0x546e13(0x1bb,'uzy[')]('|'),VZWcEF=0x0;while(!![]){switch(oxWyGj[VZWcEF++]){case'0':obj[_0x546e13(0x1dc,'h7M2')][_0x546e13(0x1df,'#2dv')]=0x127879aa82650;continue;case'1':obj['data']['vipinfo'][_0x546e13(0x1cb,'iV81')]=0x1;continue;case'2':body=JSON[_0x546e13(0x1c7,'%$*P')](obj);continue;case'3':obj['data']['nickname']='彭于晏解锁';continue;case'4':obj[_0x546e13(0x1ba,'nu]Z')][_0x546e13(0x1cc,'GaVD')][_0x546e13(0x1de,'QHS^')]=_0x546e13(0x1dd,'WrVg');continue;case'5':obj[_0x546e13(0x1bf,'3Kzu')][_0x546e13(0x1b7,'5OID')]=0x1;continue;case'6':obj['data'][_0x546e13(0x1d9,'vWED')][_0x546e13(0x1bc,'fDvM')]['level']=0x9;continue;case'7':obj[_0x546e13(0x1b4,'dT39')][_0x546e13(0x1ca,'(aqI')][_0x546e13(0x1c5,'n%X4')]='2';continue;}break;}}url['includes']('/module/list')&&(obj[_0x546e13(0x1bd,'X!7C')]['list']=obj[_0x546e13(0x1c3,'#2dv')][_0x546e13(0x1d1,'ki)P')][_0x546e13(0x1d4,'jEyp')](_0x2ed203=>[0x1,0x2,0x4,0x5,0x7][_0x546e13(0x1da,')nRr')](_0x2ed203['id'])),body=JSON[_0x546e13(0x1c7,'%$*P')](obj));$done({'body':body});var version_ = 'jsjiami.com.v7';
