/*******************************

脚本名称:  取证相机
下载地址：https://reurl.cc/ppjmrQ
更新时间：2026-5-28
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************/

[rewrite_local]

^https://ys.qquanyun.top/api/user/my url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/qzxj.js

[mitm] 

hostname = ys.qquanyun.top

*******************************/

var body = $response.body.replace(/free_num":\d+/g,'free_num":999')
.replace(/type":\d/g,'type":2')
.replace(/finish_time":".*?"/g,'finish_time":"9999-01-01到期"')
.replace(/nickname":".*?"/g,'nickname":"TG频道：https://t.me/py996"')
$done({ body });
