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

/********************************

^http[s]?:\/\/mobile\.api\.mgtv\.com\/v[0-9]\/(playlist|video\/album|video\/relative|video\/list).*$ url script-request-header https://raw.githubusercontent.com/89996462/Quantumult-X/main/gx/MGTV1.js

********************************/

var { Cookie, 'x-r-i': xri, 'x-l-r-i': xlri, ...rest } = $request.headers;
$done({ headers: rest });
