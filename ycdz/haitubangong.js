/*******************************

脚本功能：迷你小组件全家桶——解锁VIP
下载地址：https://is.gd/7sux6U
软件版本：1.1.4
脚本作者：彭于晏💞
更新时间：2024-10—8
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/fufei.haitubangong.com\/api\/client\/info url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/haitubangong.js

[mitm] 

hostname = fufei.haitubangong.com

*******************************/

try {
  let obj = JSON.parse($response.body);

  let vipInfo = {
    "forever": 1,
    "vipname": "永久会员",
    "expired_at": "9999-09-09 00:00:00"
  };

  obj.data.vip = vipInfo;

  $done({ body: JSON.stringify(obj) });
} catch (error) {
  console.error('解析或处理响应体时出错:', error);
  $done({ error: '无法处理响应体' });
}
