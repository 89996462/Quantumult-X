/******************************

脚本功能：真题伴侣一解锁VIP
下载地址：https://is.gd/Fbf2VE
软件版本：2.1.56
脚本作者：彭于晏💞
更新时间：2023—8-2
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

http:\/\/newtest\.zoooy111\.com\/mobile\.php\/User\/index url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/ztbl.js

[mitm] 

hostname = newtest.zoooy111.com,newtest.zoooy111.com
mobile.php




*******************************/

var objc = JSON.parse($response.body);

    objc = 
{
  "success": 1,
  "data": "f86066eaa6d7f595b616d54121151b732aec04c65e07fcea7a743278ab2c5a61b6d6262c1fb01badf2133626102e79f6ccbeb57a159fd85ba2fc0d75fef26f27c38dcc44eb675c0a9bbb3f30fffb2a49427ee233c4112c992656a870a81ae4e838828bb33b41aaf75504d754420f6df532c625a78f6c2e2cf544a9ddd47aa1c6f3db8236850acd1cb1f84347e6b77d8e44f5edbd12da04882989a40e0066b2e3de969013d4b13b703ef8f96f5f378a55c87401c13d01a247b099bb8ba16f9e29a29c603c831d297ffdf86fee2638fd104434af15cc2d390ec4ea9a8e674616205b749e55bdbdbfcf0acf2e9652e484190bfe88ed0ee4e8c34ecebc595b8b89dd0ea7b76318a57966d5bef373474f68c168baeee87cafd185720986989b8be87270f8e6b4e2e864c39dab9863042278b6b5abb8af7515f6b59d2509491a5e4a82539f3d346c6b602ded9662dd1af11381"
}


$done({body : JSON.stringify(objc)});
