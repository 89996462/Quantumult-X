/*******************************

脚本名称: Flowkey钢琴——解锁VIP
下载地址：商店下载
软件版本：2.55.0
脚本作者：彭于晏💞
更新时间：2023-9-14
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/graphql.flowkey.com.cn\/graphql url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/flowkey.js

[mitm] 

hostname = graphql.flowkey.com.cn

*******************************/

var body = $response.body.replace(/"hasAccess":false/g,'"hasAccess":true')
.replace(/"hasSubscription":false/g,'"hasSubscription":true')
.replace(/"premiumExpiresAt":null/g,'"premiumExpiresAt":"2099-11-11"')
.replace(/"premiumExpiresAt":".*?"/g,'"premiumExpiresAt":"2099-11-11"')
.replace(/"isFree":false/g,'"isFree":true')
.replace(/"activeSalesOffer":null/g,'"activeSalesOffer":true')
$done({ body });
