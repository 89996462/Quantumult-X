/******************************

脚本功能：博树 Busuu-+解锁VIP
下载地址：https://is.gd/ngDZcJ
软件版本：26.2.0
脚本作者：彭于晏💞
更新时间：2022-10-16
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/gateway\.caixin\.com\/api\/app\-api\/auth\/(validate|validateAudioAuth) url script-request-header https://raw.githubusercontent.com/89996462/Quantumult-X/main/gx/CaiXin.js

hostname = gateway.caixin.com

*******************************/

var _0x177f40=$request['headers'];_0x177f40['User-Agent']='Mozilla/5.0 (iPhone; CPU iPhone OS 15_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 CaixinV5/7.9.7 deviceType/1';const _0x4726b2=$request['url']['replace'](/uid=(\d+|)/g,'uid=12780001')['replace'](/code=(\w+|)/g,'code=80EB51CD9AB73EED6BDE653F6AFF49F8')['replace'](/device=(\w+|)/g,'device=498ac57224f029ba98d260fe56e6b6431561b476')['replace'](/deviceType=(\d+|)/g,'deviceType=1');if($request['url']['indexOf']('validateAudioAuth')!=-0x1){_0x177f40['appinfo']='75SU0e5TW70SSqRtJ%2FF6dN60qhTR%2FVmZTj9JQB4m3Uwq7sM2Mqb98LEUtLgtseUYvCTBaWVg8%2Fj2n6SeH%2FUGQiruwzYypv3wwbdaXakQVxgDazGHZI9zJH06ydDC95HRQEc6qzEc7vNYrqB7jnu2zc0%2FZg2X5hO1g8s0%2B%2FRTxzEQBOi7YvEvF1ZC%2FZKo%2BARPWg6WKA9rr2VvXGI5i6MQdat1gd1NQJwPDHXMWIqoT1Vx7k7vkaRp7rVdzSUSO5SaMvFbYOY1VWCwDEJ7Pybks6aEhhtVr05BK2rrQfL7lZR8%2F3wfYcNgsaJymB3SV9G0o4AEWjl0utiEx9Cybi4jeILaimY%2BcSmfEiZ8%2B%2FqFxKTnANL3wzWrxGGgNfYJ%2BL3dqF6S%2Fr5%2BvFwhgQQVQFtx7wXciHFako1eG3cjcI37GGDERqcvtCasSeh6vYhbS6SyEn7Jt%2BJgnm5UufrvY8FiK96M7eZKo7qeAFs5gsPU5ordVdsH3u1HkaYvIyrtVDud';}$done({'url':_0x4726b2,'headers':_0x177f40});
