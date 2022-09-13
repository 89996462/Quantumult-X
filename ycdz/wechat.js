

/******************************

脚本功能：微信自动阅读+薅羊毛
下载地址：二维码
软件版本：8888
脚本作者：彭于晏
更新时间：2022-9-13
问题反馈：QQ+89996462
TG反馈群：https://t.me/plus8889
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************
[rewrite_local]

^https?://mp\.weixin\.qq\.com/s\?.* url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/wechat.js

[mitm]

hostname = mp.weixin.qq.com

*******************************/


var body = $response.body
    .replace(/<\/script>/, 'setTimeout(()=>window.history.back(),5000); </script>');
$done({ body });

