/******************************

脚本功能：财新-真相就读财新+解锁财新通V2
下载地址：https://is.gd/Cb81De
软件版本：7.9.7
脚本作者：彭于晏💞
更新时间：2022-10-17
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/gateway\.caixin\.com\/api\/ucenter\/appapi\/v1\/userinfo url script-request-header https://raw.githubusercontent.com/89996462/Quantumult-X/main/gx/CaiXin.js

[mitm] 

hostname = gateway.caixin.com


*******************************/

var modifiedHeaders = $request.headers;

modifiedHeaders['Cookie'] = 'ADVC=3b302c11d77ccc';


modifiedHeaders['authentication'] = 'UJB3Br1qRJEWZQpswrS1zoi4mv5kmAfgh9HjyDaDjGecIP3ZVpCUOWL%2FYwzY0Sv8rS1agmBudDA%3D';


modifiedHeaders['User-Agent'] = 'Caixin/7.9.7 (iPhone; iOS 15.1.1; Scale/3.00)';


modifiedHeaders['appinfo'] = '75SU0e5TW70SSqRtJ%2FF6dN60qhTR%2FVmZTj9JQB4m3Uwq7sM2Mqb98LEUtLgtseUYvCTBaWVg8%2Fj2n6SeH%2FUGQiruwzYypv3wwbdaXakQVxgDazGHZI9zJH06ydDC95HRQEc6qzEc7vNYrqB7jnu2zc0%2FZg2X5hO1g8s0%2B%2FRTxzEQBOi7YvEvF1ZC%2FZKo%2BARPWg6WKA9rr2VvXGI5i6MQdat1gd1NQJwPDHXMWIqoT1Vx7k7vkaRp7rVdzSUSO5SaMvFbYOY1VWCwDEJ7Pybks6aEhhtVr05BK2rrQfL7lZR8%2F3wfYcNgsaJymB3SV9G0o4AEWjl0utiEx9Cybi4jeILaimY%2BcSmfEiZ8%2B%2FqFxKTnANL3wzWrxGGgNfYJ%2BL3dqF6S%2Fr5%2BvFwhgQQVQFtx7wXciHFako1eG3cjcI37GGDERqcvtCasSeh6vYhbS6SyEn7Jt%2BJgnm6dssmqHA7rDiSljnUllGvZjHwla%2BUZzMz5ECRD654y4XgdKXAM4RC2';


$done({headers : modifiedHeaders});
