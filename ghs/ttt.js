/******************************

脚本功能：汤头条——解锁—金币视频—VIP视频
特别说明：捕获成功后，点击通知即可观看
脚本作者：彭于晏💞
更新时间：2026—5-25
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/[^\/]*\..*\.cn\/\w+\/[a-z0-9]{32}\/[a-z0-9]{32}\.m3u8(\?.*)? url script-request-header https://raw.githubusercontent.com/89996462/Quantumult-X/main/ghs/ttt.js

[mitm]

hostname = p1.ceogberj.cc, *.ceogberj.cc, api3.caanrrim.cc, *.caanrrim.cc, new.iajckz.cn, *.iajckz.cn, tp5.iajckz.cn, tp6.iajckz.cn, 120play.*.cn, h5play.*.com, long.*.cn, *.fipxor.cn


*******************************/


let{headers,url}=$request;const isSurge=typeof $task!=='\x75\x6e\x64\x65\x66\x69\x6e\x65\x64';const isQX=typeof $httpClient!=='\x75\x6e\x64\x65\x66\x69\x6e\x65\x64'&&!isSurge;const isLoon=typeof $loon!=='\x75\x6e\x64\x65\x66\x69\x6e\x65\x64';let newUrl=url['\x72\x65\x70\x6c\x61\x63\x65'](/^https?:\/\/[^\/]+/,'\x68\x74\x74\x70\x73\x3a\x2f\x2f\x64\x33\x39\x6a\x6e\x61\x38\x38\x67\x6d\x68\x61\x30\x6c\x2e\x63\x6c\x6f\x75\x64\x66\x72\x6f\x6e\x74\x2e\x6e\x65\x74')['\x72\x65\x70\x6c\x61\x63\x65'](/\.m3u8/,'\x2e\x6d\x33\x75\x38');if(headers['\x68\x61\x73\x4f\x77\x6e\x50\x72\x6f\x70\x65\x72\x74\x79']('\x58\x2d\x50\x6c\x61\x79\x62\x61\x63\x6b\x2d\x53\x65\x73\x73\x69\x6f\x6e\x2d\x49\x64')){console['\x6c\x6f\x67']('\u6355\u83b7\u5230 \x58\x2d\x50\x6c\x61\x79\x62\x61\x63\x6b\x2d\x53\x65\x73\x73\x69\x6f\x6e\x2d\x49\x64\uff0c\u6b63\u5728\u8f6c\u6362\u94fe\u63a5\x2e\x2e\x2e');if(isSurge){$notify('\u5f6d\u4e8e\u664f\u63d0\u793a\u2757\ufe0f\u89c6\u9891\u94fe\u63a5\u6355\u83b7\u6210\u529f','\u70b9\u51fb\u901a\u77e5\u5373\u53ef\u89c2\u770b','',{'\x6f\x70\x65\x6e\x2d\x75\x72\x6c':newUrl})}if(isQX){$notification['\x70\x6f\x73\x74']('\u5f6d\u4e8e\u664f\u63d0\u793a','\u70b9\u51fb\u901a\u77e5\u5373\u53ef\u89c2\u770b','',{'\x75\x72\x6c':newUrl})}if(isLoon){$notification['\x70\x6f\x73\x74']('\u5f6d\u4e8e\u664f\u63d0\u793a','\u70b9\u51fb\u901a\u77e5\u5373\u53ef\u89c2\u770b','',{'\x6f\x70\x65\x6e\x55\x72\x6c':newUrl})}}$done({response:{headers}});
