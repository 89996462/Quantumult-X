/*******************************

脚本功能：优雅高定素材
脚本作者：彭于晏💞
更新时间：2026-6—16
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/ai\.yayuanshenghuo\.xin\/api\/(user\/info|init) url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/yayuanshenghuo.js

[mitm] 

hostname = ai.yayuanshenghuo.xin

*******************************/
const url = $request.url;
const body = $response.body;


if (url.includes('/api/user/info') || url.includes('/api/init')) {
    let obj;
    try {
        obj = JSON.parse(body);
    } catch (e) {
        $done({});
        return;
    }

    if (obj.data && obj.data.user) {
  
        let user = obj.data.user;
        user.nickname = "彭于晏Crack";
        user.is_vip = 1;
        user.vip_at = "2026-01-01 00:00:00";
        user.vip_exp_at = "2099-12-31 23:59:59";
        user.vip_product_id = "youyayongjiu";
        if (user.wallet) {
            user.wallet.coin = 99999;
            user.wallet.coin_total = 99999;
            user.wallet.use_coin_total = 0;
            user.wallet.balance = "99999.00";
            user.wallet.balance_total = "99999.00";
            user.wallet.withdraw_balance_total = "0.00";
        }
    }
    
    if (obj.data && obj.data.is_vip !== undefined) {
        obj.data.is_vip = true;
    }

    $done({ body: JSON.stringify(obj) });
} else {
    $done({});
}
