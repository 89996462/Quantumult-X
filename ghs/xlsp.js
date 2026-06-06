/******************************

# 脚本功能：小蓝视频———解锁———金币视频———VIP视频
# 特别说明：必须开启HTTP抓包,并且关闭其他的脚本
# 特别说明：捕获成功后，点击通知即可观看
# 脚本作者：彭于晏💞
# 更新时间：2026-6-2
# TG反馈群：https://t.me/plus8889
# TG频道群：https://t.me/py996
# 使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/[^\/]+\/videos\d+\/[0-9a-fA-F]{32}\/[0-9a-fA-F]{32}\.m3u8 url script-request-header https://raw.githubusercontent.com/89996462/Quantumult-X/main/ghs/xlsp.js

[mitm]

hostname = 120play.*.cn, long.*.cn, *play.*.cn, *long.*.cn, *.rnhqeo.cn

*******************************/

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('B{k,6}=$C,9=a $D!=="b",l=a $E!=="b"&&!9,m=a $F!=="b";c n(o){5 u=p(o);u=u.4(/:\\/\\/([^\\/:@]+)-q\\./i,"://$1-r.");u=u.4(/:\\/\\/q\\./i,"://r.");u=u.4(/[?&]s=\\d+/t,"");u=u.4(/[?&]e=[^&]*/t,"");u=u.4(/\\?&/,"?").4(/[?&]$/,"");2(u.v("e=")<0){u+=(u.v("?")>=0?"&":"?")+"e=G"}7 u}c w(3){5 f="H"+3;5 g=$x.I(f);5 8=J.8();2(g&&8-K(g)<L)7 M;$x.N(p(8),f);7 O}c y(3){2(w(3))7;2(9){$P("彭于晏提示❗️视频链接捕获成功",">h 点击此通知可跳转观看 🔞","",{"Q-6":3})}2(l){$z.A("彭于晏提示❗️视频链接捕获成功",">h 点击此通知可跳转观看 🔞","",{6:3})}2(m){$z.A("彭于晏提示❗️视频链接捕获成功",">h 点击此通知可跳转观看 🔞","",{R:3})}}5 j=n(6);2(!/[?&]s=\\d+/i.S(j)){y(j)}$T({U:{k}});',57,57,'||if|link|replace|var|url|return|now|isQX|typeof|undefined|function||via_m|key|last|_||playURL|headers|isSurge|isLoon|normalizePlayUrl|raw|String|120play|long|seconds|gi||indexOf|isDuplicate|prefs|notifyCapture|notification|post|let|request|task|httpClient|loon|xblue|xl_cap_|valueForKey|Date|Number|120000|true|setValueForKey|false|notify|open|openUrl|test|done|response'.split('|'),0,{}))
