//////////////////////////////////////////////
////////////彭于晏规则合集 QQ+89996462//////////
////////////规则仅供学习交流，勿用于其它//////////
/////////////////////////////////////////////

[mitm]

hostname= user-kaji-api.b612kaji.com, buy.itunes.apple.com,buy.itunes.apple.com, partner-ai-api.quthing.com,api.xiuxiu.meitu.com,subscription-api.notedapp.io,wallpaper.soutushenqi.com,buy.itunes.apple.com,www.xmind.cn,api.xunyou.mobi,m2u-api.getkwai.com,





[rewrite_local]

# /******************************
# 脚本功能：B612咔叽+解锁VIP
# 下载地址：http://mtw.so/64S4xg
# 软件版本：11.4.5
# 脚本作者：彭于晏
# 更新时间：2022-9-2
# 问题反馈：QQ+89996462
# 使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
# *******************************

^https:\/\/user-kaji-api\.b612kaji\.com\/v1\/purchase\/subscription\/subscriber\/status url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/bj.js

# /******************************
# 脚本：https抓包+解锁功能订阅
# 软件版本：v2.2.2
# 作者：彭于晏
# 更新时间：2022-9-1
# 问题反馈：QQ+89996462
# 使用声明⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
# *******************************

^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/https.js

# /******************************
# 脚本：幻影相册功能+VIP
# 下载地址：http://mtw.so/64MsjK
# 软件版本：v5
# 作者：彭于晏
# 更新时间：2022-9-1
# 问题反馈：QQ+89996462
# 使用声明⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
# *******************************

^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/hyxc.js

# /******************************
# 脚本功能：来音智能陪练+解锁VIP
# 下载地址：http://mtw.so/5tfCxX
# 软件版本：v2.3.0
# 脚本作者：彭于晏
# 更新时间：2022-9-1
# 问题反馈：QQ+89996462
# 使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
# *******************************

^https:\/\/partner-ai-api\.quthing\.com\/ai\/vip\/state url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/ly.js

# /******************************
# 脚本功能：美图秀秀+解锁VIP
# 软件版本：v9.6.20
# 脚本作者：彭于晏
# 更新时间：2022-9-1
# 问题反馈：QQ+89996462
# 使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
# *******************************

^https:\/\/api\.xiuxiu\.meitu\.com\/v1 url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/mtxx.js

# /******************************
# 脚本功能：Noted-录音笔记+解锁订阅
# 下载地址：http://mtw.so/5XgNfB
# 软件版本：3.6.10
# 脚本作者：彭于晏
# 更新时间：2022-9-2
# 问题反馈：QQ+89996462
# 使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩⚠️⚠️⚠️
# *******************************

^https:\/\/subscription-api\.notedapp\.io\/api\/verifyReceipt url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/noteb.js

# /******************************
# 脚本功能：搜图神器+解锁VIP
# 软件版本：v1.2.7
# 脚本作者：彭于晏
# 更新时间：2022-9-1
# 问题反馈：QQ+89996462
# 使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
# *******************************

http:\/\/wallpaper\.soutushenqi\.com\/api\/v1\/account url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/stsq.js

# /******************************
# 脚本功能：PrettyUp视频美化+解锁订阅
# 下载地址：http://mtw.so/6rpHwa
# 软件版本：5.2
# 脚本作者：彭于晏
# 更新时间：2022-9-1
# 问题反馈：QQ+89996462
# 使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
# *******************************

^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/upp.js

# /******************************
# 脚本功能：XMind思维导图+解锁订阅
# 下载地址：http://mtw.so/64S2u0
# 软件版本：3.2.10
# 脚本作者：彭于晏
# 更新时间：2022-9-2
# 问题反馈：QQ+89996462
# 使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
# *******************************

^https:\/\/www\.xmind\.cn\/_res\/devices url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/xmind.js

# /******************************
# 脚本功能：迅游手游加速器+解锁VIP
# 下载地址：http://mtw.so/6cjeYf
# 软件版本：4.7.4
# 脚本作者：彭于晏
# 更新时间：2022-9-1
# 问题反馈：QQ+89996462
# 使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
# *******************************

^https:\/\/api\.xunyou\.mobi\/api\/v1\/android\/sessions url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/xyjsq.js

# /******************************
# 脚本功能：一甜相机+解锁VIP
# 下载地址：http://mtw.so/5Ie06z
# 软件版本：3.0.2
# 脚本作者：彭于晏
# 更新时间：2022-9-1
# 问题反馈：QQ+89996462
# 使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
# *******************************

^https?:\/\/m2u-api\.getkwai\.com\/api-server\/api\/v2\/vip\/vipUserInfo url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/ytxj.js
