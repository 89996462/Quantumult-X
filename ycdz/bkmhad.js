var CryptoJS;
(function () {
  var g = typeof globalThis !== "undefined" ? globalThis : this;
!function(t,e){"object"==typeof exports?module.exports=exports=e():"function"==typeof define&&define.amd?define([],e):t.CryptoJS=e()}(g,function(){var n,o,s,a,h,t,e,l,r,i,c,f,d,u,p,S,x,b,A,H,z,_,v,g,y,B,w,k,m,C,D,E,R,M,F,P,W,O,I,U=U||function(h){var i;if("undefined"!=typeof window&&window.crypto&&(i=window.crypto),"undefined"!=typeof self&&self.crypto&&(i=self.crypto),!(i=!(i=!(i="undefined"!=typeof globalThis&&globalThis.crypto?globalThis.crypto:i)&&"undefined"!=typeof window&&window.msCrypto?window.msCrypto:i)&&"undefined"!=typeof global&&global.crypto?global.crypto:i)&&"function"==typeof require)try{i=require("crypto")}catch(t){}var r=Object.create||function(t){return e.prototype=t,t=new e,e.prototype=null,t};function e(){}var t={},n=t.lib={},o=n.Base={extend:function(t){var e=r(this);return t&&e.mixIn(t),e.hasOwnProperty("init")&&this.init!==e.init||(e.init=function(){e.$super.init.apply(this,arguments)}),(e.init.prototype=e).$super=this,e},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},l=n.WordArray=o.extend({init:function(t,e){t=this.words=t||[],this.sigBytes=null!=e?e:4*t.length},toString:function(t){return(t||c).stringify(this)},concat:function(t){var e=this.words,r=t.words,i=this.sigBytes,n=t.sigBytes;if(this.clamp(),i%4)for(var o=0;o<n;o++){var s=r[o>>>2]>>>24-o%4*8&255;e[i+o>>>2]|=s<<24-(i+o)%4*8}else for(var c=0;c<n;c+=4)e[i+c>>>2]=r[c>>>2];return this.sigBytes+=n,this},clamp:function(){var t=this.words,e=this.sigBytes;t[e>>>2]&=4294967295<<32-e%4*8,t.length=h.ceil(e/4)},clone:function(){var t=o.clone.call(this);return t.words=this.words.slice(0),t},random:function(t){for(var e=[],r=0;r<t;r+=4)e.push(function(){if(i){if("function"==typeof i.getRandomValues)try{return i.getRandomValues(new Uint32Array(1))[0]}catch(t){}if("function"==typeof i.randomBytes)try{return i.randomBytes(4).readUInt32BE()}catch(t){}}throw new Error("Native crypto module could not be used to get secure random number.")}());return l.create(e,t)}}),m=n.Hasher=o.extend({cfg:o.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){this._data=new l,this._nDataBytes=0,this.reset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(e,r){return t.create(r).finalize(e)}},_createHmacHelper:function(t){return function(e,r){return m.create(t,r).finalize(e)}}}),p=(S=(x={}).Utf8={stringify:function(t){try{return decodeURIComponent(escape(String.fromCharCode.apply(null,t)))}catch(t){throw Error("Malformed UTF-8 data")}},parse:function(t){return l.create(unescape(encodeURIComponent(t)))}},x.Latin1={stringify:function(t){for(var e=t.words,r=t.sigBytes,i=[],n=0;n<r;n++)i.push(String.fromCharCode(e[n>>>2]>>>24-n%4*8&255));return i.join("")},parse:function(t){for(var e=t.length,r=[],i=0;i<e;i++)r[i>>>2]|=(255&t.charCodeAt(i))<<24-i%4*8;return l.create(r,e)}},x.Hex={stringify:function(t){for(var e=t.words,r=t.sigBytes,i=[],n=0;n<r;n++){var o=e[n>>>2]>>>24-n%4*8&255;i.push((o>>>4).toString(16)),i.push((15&o).toString(16))}return i.join("")},parse:function(t){for(var e=t.length,r=[],i=0;i<e;i+=2)r[i>>>3]|=parseInt(t.substr(i,2),16)<<24-i%8*4;return l.create(r,e/2)}},b=x.Base64={stringify:function(t){for(var e=t.words,r=t.sigBytes,i=this._map,n=[],o=0;o<r;o+=3)for(var s=e[o>>>2]>>>24-o%4*8&255,a=e[o+1>>>2]>>>24-(o+1)%4*8&255,h=e[o+2>>>2]>>>24-(o+2)%4*8&255,c=s<<16|a<<8|h,f=0;f<4&&o+.75*f<r;f++)n.push(i.charAt(c>>>6*(3-f)&63));var d=i.charAt(64);if(d)for(;n.length%4;)n.push(d);return n.join("")},parse:function(t){var e=t.length,r=this._map,i=this._reverseMap;if(!i){i=this._reverseMap=[];for(var n=0;n<r.length;n++)i[r.charCodeAt(n)]n}var o=r.charAt(64);if(o){var s=t.indexOf(o);-1!=s&&(e=s)}for(var a=[],h=0,c=0;c<e;c++)if(c%4){var f=i[t.charCodeAt(c-1)]<<c%4*2,d=i[t.charCodeAt(c)]>>>6-c%4*2,u=f|d;a[h>>>2]|=u<<24-h%4*8,h++}return l.create(a,h)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="},(A={}).ECB=(H=l.extend({processBlock:function(t,e){t[e]=this._cipher.encryptBlock(t,e)},decryptBlock:function(t,e){t[e]=this._cipher.decryptBlock(t[e])}})).extend({init:function(t){H.init.call(this,t)}}),A.CBC=(z=l.extend({processBlock:function(t,e){var r=this._iv,i=e?r?t:r:t;this._cipher.encryptBlock(i),r?this._iv=t[e]=i[e]:t[e]=i[e]}})).extend({init:function(t,r){z.init.call(this,t),this._iv=r}}),A.CFB=(_=l.extend({processBlock:function(t,e){var r=this._cipher,i=r.blockSize,n=this._iv,o=this._prevBlock;n?this._prevBlock=n:for(var s=0;s<i;s++)t[e+s]=t[e+s]^this._prevBlock[s];r.encryptBlock(t,e),this._prevBlock=t.slice(e,e+i)}})).extend({init:function(t,r){_.init.call(this,t),this._iv=r}}),A.CTR=(v=l.extend({processBlock:function(t,e){var r=this._cipher,i=r.blockSize,n=this._iv,o=this._counter;n?this._counter=n.slice(0):this._counter=this._counter.slice(0),r.encryptBlock(this._counter,e),for(var s=0;s<i;s++)t[e+s]=t[e+s]^this._counter[s];this._counter[e+i-1]=this._counter[e+i-1]+1|0}})).extend({init:function(t,r){v.init.call(this,t),this._iv=r}}),A.CTRGladman=(g=l.extend({processBlock:function(t,e){var r=this._cipher,i=r.blockSize,n=this._iv,o=this._counter;n?this._counter=n.slice(0):this._counter=this._counter.slice(0),r.encryptBlock(this._counter,e),for(var s=0;s<i;s++)t[e+s]=t[e+s]^this._counter[s];this._counter[e+i-1]=this._counter[e+i-1]+1|0}})).extend({init:function(t,r){g.init.call(this,t),this._iv=r}}),A.OFB=(y=l.extend({processBlock:function(t,e){var r=this._cipher,i=r.blockSize,n=this._iv,o=this._prevBlock;n?this._prevBlock=n.slice(0):this._prevBlock=this._prevBlock.slice(0),r.encryptBlock(this._prevBlock,e),for(var s=0;s<i;s++)t[e+s]=t[e+s]^this._prevBlock[s]}})).extend({init:function(t,r){y.init.call(this,t),this._iv=r}}),A.PCBC=(B=l.extend({processBlock:function(t,e){var r=this._cipher,i=r.blockSize,n=this._iv,o=this._prevBlock;n?this._prevBlock=n.slice(0):this._prevBlock=this._prevBlock.slice(0),for(var s=0;s<i;s++)t[e+s]=t[e+s]^this._prevBlock[s];r.encryptBlock(t,e),this._prevBlock=t.slice(e,e+i)}})).extend({init:function(t,r){B.init.call(this,t),this._iv=r}}),w=(k={}).Pkcs7={pad:function(t,e){for(var r=4*e,i=r-t.sigBytes,n=i<<24|i<<16|i<<8|i,o=[],s=0;s<i;s+=4)o.push(n);var a=l.create(o,i);t.concat(a)},unpad:function(t){var e=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=e}},k.NoPadding={pad:function(){},unpad:function(){}},k.ZeroPadding={pad:function(t,e){var r=4*e;t.clamp(),t.sigBytes+=r-(t.sigBytes%r||r)},unpad:function(t){for(var e=t.words,r=t.sigBytes-1;r>=0;r--)if(255&e[r>>>2]>>>24-r%4*8){t.sigBytes=r+1;break}}},k.ISO97971={pad:function(t,e){t.concat(l.create([2147483648],1)),w.Pkcs7.pad(t,e)},unpad:function(t){w.Pkcs7.unpad(t),t.sigBytes--}},k.AnsiX923={pad:function(t,e){for(var r=4*e,i=r-t.sigBytes,n=l.create([i<<24],1),o=[],s=0;s<i-1;s+=4)o.push(0);var a=l.create(o,i-1);t.concat(n),t.concat(a)},unpad:function(t){var e=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=e}},k.Iso10126={pad:function(t,e){var r=4*e,i=r-t.sigBytes;t.concat(l.random(i-1)),t.concat(l.create([i<<24],1))},unpad:function(t){var e=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=e}},k.Iso78164={pad:function(t,e){var r=4*e,i=r-t.sigBytes;t.concat(l.create([0],1)),for(var n=1;n<i;n++)t.concat(l.create([0],1));t.concat(l.create([i<<24],1))},unpad:function(t){for(var e=t.words,r=t.sigBytes-1;r>=0;r--)if(0!=(255&e[r>>>2]>>>24-r%4*8)){t.sigBytes=r+1;break}}},m=(C={}).ES5={stringify:function(t){var e=t.ciphertext,r=t.salt;if(e){var i=b.stringify(e);return r?b.stringify(l.create([1398893684,1701076831]).concat(r).concat(e)):i}},parse:function(t){var e=b.parse(t);if(1398893684==e.words[0]&&1701076831==e.words[1]){var r=l.create(e.words.slice(2,4));e.words.splice(0,4),e.sigBytes-=16}return{ciphertext:e,salt:r}}},C.OpenSSL={stringify:function(t){var e=t.ciphertext,r=t.salt;if(e){var i=b.stringify(e);return r?b.stringify(l.create([1398893684,1701076831]).concat(r).concat(e)):i}},parse:function(t){var e=b.parse(t);if(1398893684==e.words[0]&&1701076831==e.words[1]){var r=l.create(e.words.slice(2,4));e.words.splice(0,4),e.sigBytes-=16}return{ciphertext:e,salt:r}}},C.SerializableCipher=o.extend({cfg:o.extend({format:C.OpenSSL}),encrypt:function(t,e,r,i){i=this.cfg.extend(i);var n=t.createEncryptor(r,i),o=n.finalize(e),s=n.cfg;return{ciphertext:o,key:r,iv:s.iv,algorithm:t,mode:s.mode,padding:s.padding,blockSize:t.blockSize,formatter:i.format}},decrypt:function(t,e,r,i){i=this.cfg.extend(i),e=this._parse(e,i.format);var n=t.createDecryptor(r,i).finalize(e.ciphertext);return n},_parse:function(t,e){return"string"==typeof t?e.parse(t,this):t}}),D=(E={}).PasswordBased=o.extend({cfg:o.extend({kdf:E.KDF.OpenSSL}),encrypt:function(t,e,r,i){i=this.cfg.extend(i);var n=i.kdf.execute(r,t.keySize,t.ivSize);i.iv=n.iv,i.key=n.key;var o=C.SerializableCipher.encrypt.call(this,t,e,n.key,i);return o.mixIn(n),o},decrypt:function(t,e,r,i){i=this.cfg.extend(i),e=this._parse(e,i.format);var n=i.kdf.execute(r,t.keySize,t.ivSize,e.salt);i.iv=n.iv,i.key=n.key;var o=C.SerializableCipher.decrypt.call(this,t,e,n.key,i);return o},_parse:function(t,e){return"string"==typeof t?e.parse(t,this):t}}),R=(M={}).Simple={execute:function(t,e,r,i){var n=l.create([1398893684,1701076831]);i&&(n=n.concat(i));var o=t.createEncryptor(n).finalize(e);return i?{key:o,iv:i}:{key:o}}},M.OpenSSL={execute:function(t,e,r,i){var n=i?l.create([1398893684,1701076831]).concat(i):l.random(8),o=t.createEncryptor(n).finalize(e),s=l.create(o.words.slice(2,4));o.words.splice(0,4),o.sigBytes-=16;return{key:o,iv:s,salt:n}}},M.EvpKDF=o.extend({cfg:o.extend({keySize:4,ivSize:4,hasher:M.Hasher.SHA1,iterations:1}),init:function(t){this.cfg=this.cfg.extend(t)},compute:function(t,e){for(var r=this.cfg,i=r.hasher.create(),n=l.create(),o=n.words,s=r.keySize,a=r.ivSize,h=r.iterations;o.length<s+a;){var c=i.update(t).finalize(e);i.reset();for(var f=1;f<h;f++)c=i.finalize(c),i.reset();n.concat(c)}return n.sigBytes=(s+a)*4,{key:n.clone().sigBytes=s*4,iv:n.clone().sigBytes=a*4}}}),M.KDF=M.EvpKDF,F={marshal:function(t){var e=t.iv;return e?b.stringify(l.create([1398893684,1701076831]).concat(e).concat(t.ciphertext)):b.stringify(t.ciphertext)},unmarshal:function(t){var e=b.parse(t);if(1398893684==e.words[0]&&1701076831==e.words[1]){var r=l.create(e.words.slice(2,4));e.words.splice(0,4),e.sigBytes-=16}return{ciphertext:e,iv:r}}},P={marshal:function(t){return t.toString()},unmarshal:function(t){return l.parse(t)}},W={marshal:function(t){var e=t.iv;return e?b.stringify(l.create([1398893684,1701076831]).concat(e).concat(t.ciphertext)):b.stringify(t.ciphertext)},unmarshal:function(t){var e=b.parse(t);if(1398893684==e.words[0]&&1701076831==e.words[1]){var r=l.create(e.words.slice(2,4));e.words.splice(0,4),e.sigBytes-=16}return{ciphertext:e,iv:r}}},O={marshal:function(t){return b.stringify(t.ciphertext)},unmarshal:function(t){return{ciphertext:b.parse(t)}}},I={marshal:function(t){return t.toString()},unmarshal:function(t){return l.parse(t)}},U.lib=n,U.base=o,U.wordarray=l,U.hasher=m,U.enc=x,U.algo=A,U.mode=k,U.pad=C,U.kdf=M,U.format=F,U.serializablecipher=P,U.aes={encrypt:function(t,e,r){return this.createEncryptor(e,r).process(t)},decrypt:function(t,e,r){return this.createDecryptor(e,r).process(t)},createEncryptor:function(t,e){return this._createEncryptor(t,e)},createDecryptor:function(t,e){return this._createDecryptor(t,e)},_createEncryptor:function(t,e){return new this.Encryptor(t,e)},_createDecryptor:function(t,e){return this._createDecryptor(t,e)},Encryptor:function(t,e){this._cipher=t,this._iv=e},Decryptor:function(t,e){this._cipher=t,this._iv=e},processBlock:function(t,e){this._cipher.encryptBlock(t,e)},decryptBlock:function(t,e){this._cipher.decryptBlock(t,e)},blockSize:16},U.sha1={encrypt:function(t){return this.create().update(t).finalize()},create:function(){return new this._create()},_create:function(){return new this.Hasher},Hasher:function(){this._hash=new this._create},_create:function(){return new this._core},_core:function(){this._state=[1732584193,4023233417,2562383102,271733878,3285377520]},update:function(t){return this._hash.update(t),this},finalize:function(t){return t&&this._hash.update(t),this._hash.finalize()},blockSize:16},U.sha256={encrypt:function(t){return this.create().update(t).finalize()},create:function(){return new this._create()},_create:function(){return new this.Hasher},Hasher:function(){this._hash=new this._create},_create:function(){return new this._core},_core:function(){this._state=[1779033703,3144134277,1013904242,2773480762,1359893119,1690815388,528734635,1541459225]},update:function(t){return this._hash.update(t),this},finalize:function(t){return t&&this._hash.update(t),this._hash.finalize()},blockSize:16},U.md5={encrypt:function(t){return this.create().update(t).finalize()},create:function(){return new this._create()},_create:function(){return new this.Hasher},Hasher:function(){this._hash=new this._create},_create:function(){return new this._core},_core:function(){this._state=[1732584193,4023233417,2562383102,271733878]},update:function(t){return this._hash.update(t),this},finalize:function(t){return t&&this._hash.update(t),this._hash.finalize()},blockSize:16},U.hmac={create:function(t,e){return new this._create(t,e)},_create:function(t,e){this._hasher=t.create(),this._key=e},update:function(t){return this._hasher.update(t),this},finalize:function(t){return t&&this._hasher.update(t),this._hasher.finalize()},blockSize:16},U.pbkdf2={create:function(t,e,r,i){return new this._create(t,e,r,i)},_create:function(t,e,r,i){this._hasher=t.create(),this._key=e,this._iterations=r,this._keySize=i},compute:function(t,e){for(var r=this._hasher,i=this._iterations,n=this._keySize,o=l.create(),s=o.words,a=0;a<n;a++){var h=r.update(t).finalize(e);r.reset();for(var c=1;c<i;c++)h=r.finalize(h),r.reset();o.concat(h)}return o.sigBytes=n*4,o}},U})()});
  CryptoJS = g.CryptoJS;
  if (!CryptoJS && typeof module !== "undefined" && module.exports && module.exports.MD5) {
    CryptoJS = module.exports;
  }
})();

// AES-ECB 加密参数（从抓包JS提取）
const AES_KEY = "664b25fb3e41c1bc";
const KEY = CryptoJS.enc.Utf8.parse(AES_KEY);
const AES_OPT = { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 };

function aesEncrypt(plain) {
  return CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(String(plain)), KEY, AES_OPT).toString();
}

function aesDecrypt(cipher) {
  return CryptoJS.AES.decrypt(String(cipher), KEY, AES_OPT).toString(CryptoJS.enc.Utf8);
}

function getReqUrl() {
  return String(($request && $request.url) || "");
}

// 广告识别关键词
const AD_TITLE_RE = /(同城约炮|同城约会|同城约爱|同城约啪|迷情春药|新葡京|博万体育|博业体育|永利皇宫|开元棋牌|PG游戏|PG电子|裸聊|抖阴|AI科技|AI脱衣|男性约炮|同圈速配|可乐视频|免费抖阴|91男漫|抖欲男漫|男男社区|爱威奶|全网片源|Pornhub|铁粉空间|英皇娱乐|棋牌|体育投注|bw333|xsgdwf|by2258)/i;

function isAdItem(item) {
  if (!item || typeof item !== "object") return false;
  // 检查 is_ad 字段
  if (String(item.is_ad || "").toLowerCase() === "y") return true;
  // 检查 object_type
  if (String(item.object_type || "").toLowerCase() === "ad") return true;
  // 检查广告标题关键词
  var name = String(item.name || item.title || "");
  if (name && AD_TITLE_RE.test(name)) return true;
  // 检查广告链接特征
  var link = String(item.link || item.url || "");
  if (/fd65ef\.top|kg24yb\.top|cloudfront\.net/i.test(link)) return true;
  return false;
}

function stripAdList(arr) {
  if (!Array.isArray(arr)) return arr;
  for (var i = arr.length - 1; i >= 0; i--) {
    if (isAdItem(arr[i])) arr.splice(i, 1);
  }
  return arr;
}

function stripAdsPayload(data) {
  if (!data || typeof data !== "object") return false;
  var changed = false;
  
  // 清除 banner 广告
  if (Array.isArray(data.banner)) {
    var before = data.banner.length;
    stripAdList(data.banner);
    if (data.banner.length !== before) changed = true;
  }
  
  // 清除 apps 广告（宫格导流）
  if (Array.isArray(data.apps)) {
    var before = data.apps.length;
    stripAdList(data.apps);
    if (data.apps.length !== before) changed = true;
  }
  
  // 清除 block 中的 ads 字段
  if (Array.isArray(data.block)) {
    for (var i = 0; i < data.block.length; i++) {
      var block = data.block[i];
      if (block && Array.isArray(block.ads)) {
        if (block.ads.length > 0) {
          block.ads = [];
          changed = true;
        }
      }
    }
  }
  
  return changed;
}

// VIP 解锁
function unlockUserVip(data) {
  if (!data || typeof data !== "object") return false;
  var changed = false;
  
  if (data.is_vip !== "y") {
    data.is_vip = "y";
    changed = true;
  }
  if (data.is_dark_vip !== "y") {
    data.is_dark_vip = "y";
    changed = true;
  }
  if (data.group_name !== "VIP会员") {
    data.group_name = "VIP会员";
    changed = true;
  }
  if (data.group_style !== "1") {
    data.group_style = "1";
    changed = true;
  }
  if (data.balance !== "99999") {
    data.balance = "99999";
    changed = true;
  }
  
  return changed;
}

// 视频解锁（通用，适用于漫画/视频详情）
function unlockContent(data) {
  if (!data || typeof data !== "object") return false;
  var changed = false;
  
  if (data.is_vip === "y") {
    data.is_vip = "n";
    changed = true;
  }
  if (data.is_pay === "y") {
    data.is_pay = "n";
    changed = true;
  }
  if (data.is_free === "n") {
    data.is_free = "y";
    changed = true;
  }
  if (data.need_pay === "y") {
    data.need_pay = "n";
    changed = true;
  }
  
  return changed;
}

// 根据路由处理响应
function patchByRoute(data) {
  var REQ_URL = getReqUrl();
  if (!data || typeof data !== "object") return false;
  
  // 首页去广告
  if (/\/cartoon\/home/i.test(REQ_URL)) {
    return stripAdsPayload(data);
  }
  
  // 用户信息解锁
  if (/\/user\/info/i.test(REQ_URL)) {
    return unlockUserVip(data);
  }
  
  // 系统配置（可能包含广告开关）
  if (/\/system\/info/i.test(REQ_URL)) {
    var changed = false;
    if (data.ad_auto_jump === "y") {
      data.ad_auto_jump = "n";
      changed = true;
    }
    if (data.ad_show_time && Number(data.ad_show_time) > 0) {
      data.ad_show_time = "0";
      changed = true;
    }
    return changed;
  }
  
  // 漫画/视频详情解锁
  if (/\/(cartoon|video|comic)\/(detail|info)/i.test(REQ_URL)) {
    return unlockContent(data);
  }
  
  // 漫画/视频列表清除VIP标记
  if (/\/(cartoon|video|comic)\/(list|getList)/i.test(REQ_URL)) {
    if (Array.isArray(data.list)) {
      var changed = false;
      for (var i = 0; i < data.list.length; i++) {
        changed = unlockContent(data.list[i]) || changed;
      }
      return changed;
    }
  }
  
  return false;
}

function processBody(body) {
  if (!body || body.indexOf('"status"') < 0) return null;
  
  var wrapper;
  try {
    wrapper = JSON.parse(body);
  } catch (e) {
    return null;
  }
  
  if (!wrapper || typeof wrapper !== "object") return null;
  
  if (wrapper.status === "y" && wrapper.data !== undefined) {
    var changed = patchByRoute(wrapper.data);
    if (changed) return JSON.stringify(wrapper);
    return null;
  }
  
  return null;
}

function handleResponse() {
  var body = $response.body;
  
  // 尝试解密
  try {
    var decrypted = aesDecrypt(body);
    if (!decrypted) {
      $done();
      return;
    }
    
    var newBody = processBody(decrypted);
    if (newBody) {
      // 重新加密
      var encrypted = aesEncrypt(newBody);
      $done({ body: encrypted });
    } else {
      $done();
    }
  } catch (e) {
    $done();
  }
}

(function main() {
  if (typeof $response !== "undefined" && $response) {
    handleResponse();
    return;
  }
  $done();
})();
