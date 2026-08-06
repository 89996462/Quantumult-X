//17点25分

const NAME = "妻社VIP";
const VIP_GROUP_ID = "32";
const VIP_GROUP_TITLE = " 妻社 终身VIP";
const VIP_GROUP_STARS = "Lv.8";
const VIP_GROUP_COLOR = "#FF6600";

(function () {
  const url = ($request || {}).url || "";
  let body = $response.body;

  if (!body) return $done({});

  try {
    const json = JSON.parse(body);
    if (!json || !json.data) return $done({ body });

    const path = extractApiMethod(url);

    if (/config\.init$/i.test(path)) {
      modifyConfig(json.data);
    } else if (/config\.userInit/i.test(path)) {
      modifyUserInit(json.data);
    } else if (/post\.getIndexList|postlist\.getThreadList/i.test(path)) {
      modifyPostList(json.data);
    } else if (/postlist\.getThreadView|post\.getThread/i.test(path)) {
      modifyThreadDetail(json.data);
    } else if (/forum\.getForumByType|forum\.getForumDetail/i.test(path)) {
      modifyForum(json.data);
    } else if (/user\.getInfo|user\.getMyinfo|member\.getInfo/i.test(path)) {
      modifyUser(json.data);
    } else if (/invites/i.test(path)) {
    } else {
      deepModify(json.data);
    }

    $done({ body: JSON.stringify(json) });
  } catch (e) {
    console.log(`[${NAME}] Error: ${e.message || e}`);
    $done({ body });
  }
})();

function modifyConfig(data) {
  const c = data.config || data;
  const p = c.pluginSet || c;

  // 关闭视频VIP
  if ("openVideoVip" in p) p.openVideoVip = "0";
  if ("videoTime" in p) p.videoTime = "99999";
  if ("videoFreeCons" in p) p.videoFreeCons = "";

  // 清弹窗
  if ("forum_tip_groupids" in p) p.forum_tip_groupids = [];
  if ("forum_tip_forumids" in p) p.forum_tip_forumids = "";
  if ("forum_tip_text" in p) p.forum_tip_text = "";
  if ("forum_tip_url" in p) p.forum_tip_url = "";
  if ("forum_tip_bg" in p) p.forum_tip_bg = "";
  if ("post_tip_groupids" in p) p.post_tip_groupids = [];
  if ("post_tip_text" in p) p.post_tip_text = "";
  if ("post_tip_url" in p) p.post_tip_url = "";
  if ("post_tip_bg" in p) p.post_tip_bg = "";

  // 去广告
  if ("gads_show_type" in p) p.gads_show_type = "0";
  if ("gads_req_url" in p) p.gads_req_url = "";
  if ("gads_ios_appid" in p) p.gads_ios_appid = "";
  if ("gads_ios_appkey" in p) p.gads_ios_appkey = "";
  if ("gads_az_appid" in p) p.gads_az_appid = "";
  if ("gads_az_appkey" in p) p.gads_az_appkey = "";
  if ("afficheImg" in p) p.afficheImg = "";
  if ("afficheImgStyle" in p) p.afficheImgStyle = "";
  if ("news_ext_bnt" in p) p.news_ext_bnt = "";
  if ("app_show_adset" in p) p.app_show_adset = "0";
  if ("app_show_tjset" in p) p.app_show_tjset = "0";

  // 放开进群/关注
  if ("add_group_perm" in p) p.add_group_perm = "0";
  if ("add_group_perm_tip" in p) p.add_group_perm_tip = "";
  if ("groupInjonGroupids" in p) p.groupInjonGroupids = [];
  if ("follow_groupids" in p) p.follow_groupids = [];

  // 关闭剪贴板/引导
  if ("open_clipboard" in p) p.open_clipboard = "0";
  if ("guide_open" in p) p.guide_open = "0";

  // 清H5跳转
  if ("replace_h5url_fid" in p) p.replace_h5url_fid = "";
  if ("replace_h5url_tid" in p) p.replace_h5url_tid = "";
  if ("replace_h5url_uid" in p) p.replace_h5url_uid = "";
  if ("allToh5Url" in p) p.allToh5Url = "";

  // 清空间限制
  if ("space_hone_astricts" in p) p.space_hone_astricts = [];

  // 清广告组件
  if ("view_custom_cmp_top" in p) p.view_custom_cmp_top = "";
  if ("view_custom_cmp_bottom" in p) p.view_custom_cmp_bottom = "";
  if ("view_list_cmp" in p) p.view_list_cmp = "";
  if ("view_list_cmp_idx" in p) p.view_list_cmp_idx = "";
  if ("view_custom_ad_top" in p) p.view_custom_ad_top = "";
  if ("view_custom_ad_bottom" in p) p.view_custom_ad_bottom = "";
  if ("forum_custom_cmp" in p) p.forum_custom_cmp = [];
  if ("group_list_cmp" in p) p.group_list_cmp = "";
  if ("group_list_cmp_idx" in p) p.group_list_cmp_idx = "";
  if ("group_all_list_cmp" in p) p.group_all_list_cmp = "";
  if ("group_all_list_cmp_idx" in p) p.group_all_list_cmp_idx = "";
  if ("group_custom_cmp" in p) p.group_custom_cmp = [];

  // 清tab广告
  if (Array.isArray(c.component)) {
    for (const comp of c.component) {
      if (!comp || typeof comp !== "object") continue;
      if (comp.values && Array.isArray(comp.values)) {
        for (const tab of comp.values) {
          if (!tab || typeof tab !== "object") continue;
          if ("component" in tab) tab.component = [];
          if ("tabs_ad_cmp" in tab) tab.tabs_ad_cmp = "";
          if ("tabs_ad_idx" in tab) tab.tabs_ad_idx = "";
        }
      }
    }
  }

  if (data.member) upgradeCurrentUser(data.member);
  console.log(`[${NAME}] config.init 已修改`);
}

function modifyUserInit(data) {
  if (data.member) upgradeCurrentUser(data.member);
  console.log(`[${NAME}] config.userInit 已修改`);
}

function upgradeCurrentUser(memberData) {
  if (memberData.member) upgradeUser(memberData.member);
  if (memberData.group) upgradeGroup(memberData.group);
}

function modifyPostList(data) {
  const lists = findLists(data);
  let count = 0;
  for (const list of lists) {
    for (const post of list) { unlockPost(post); count++; }
  }
  console.log(`[${NAME}] 已处理 ${count} 个帖子`);
}

function unlockPost(post) {
  if (!post || typeof post !== "object") return;

  if ("showVerifyThreadPremMsg" in post) post.showVerifyThreadPremMsg = false;
  if ("price" in post) post.price = "0";
  if ("readperm" in post) post.readperm = "0";
  if ("payed" in post) post.payed = 1;
  if ("special" in post && post.special === "1") post.special = "0";

  // 解锁附件
  if (post.attachData) {
    const items = post.attachData.data || post.attachData;
    if (Array.isArray(items)) {
      for (const a of items) {
        if ("readperm" in a) a.readperm = "0";
        if ("price" in a) a.price = "0";
        if ("isreadperm" in a) a.isreadperm = 0;
        a.payed = 1;
        if (a.url && !a.defurl) a.defurl = a.url;
      }
    }
  }

  // 解锁内嵌付费附件
  if (post.message && typeof post.message === "string" && post.message.includes("apptag")) {
    post.message = post.message.replace(
      /\{\{apptag=(video|showimg)\}\}(\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\})\{\{\/apptag\}\}/g,
      function (match, type, jsonStr) {
        try {
          const obj = JSON.parse(jsonStr);
          if ("price" in obj) obj.price = "0";
          if ("readperm" in obj) obj.readperm = "0";
          obj.payed = 1;
          if (obj.url && !obj.defurl) obj.defurl = obj.url;
          return "{{apptag=" + type + "}}" + JSON.stringify(obj) + "{{/apptag}}";
        } catch (e) {
          return match;
        }
      }
    );
  }
}

function modifyThreadDetail(data) {
  let count = 0;

  if (Array.isArray(data.list)) {
    for (const post of data.list) { unlockPost(post); count++; }
  }
  if (data.thread) { unlockPost(data.thread); count++; }
  if (Array.isArray(data.postlist)) {
    for (const reply of data.postlist) { unlockPost(reply); count++; }
  }

  // 清板块权限
  if (data.forum) {
    const f = data.forum;
    if ("viewperm" in f) f.viewperm = "";
    if ("postperm" in f) f.postperm = "";
    if ("replyperm" in f) f.replyperm = "";
    if ("getattachperm" in f) f.getattachperm = "";
    if ("gviewperm" in f) f.gviewperm = "0";
    if ("password" in f) f.password = "";
  }

  if (data.userGroup) upgradeGroup(data.userGroup);

  const lists = findLists(data);
  for (const list of lists) {
    for (const post of list) { unlockPost(post); count++; }
  }

  console.log(`[${NAME}] 帖子详情已处理 ${count} 条`);
}

function modifyForum(data) {
  if (data.forum) {
    const f = data.forum;
    if ("viewperm" in f) f.viewperm = "";
    if ("postperm" in f) f.postperm = "";
    if ("replyperm" in f) f.replyperm = "";
    if ("getattachperm" in f) f.getattachperm = "";
    if ("gviewperm" in f) f.gviewperm = "0";
    if ("password" in f) f.password = "";
  }
  modifyPostList(data);
  console.log(`[${NAME}] 板块数据已修改`);
}

function modifyUser(data) {
  upgradeUser(data.member || data.user || data);
  console.log(`[${NAME}] 用户信息已提权`);
}

function upgradeUser(user) {
  if (!user || typeof user !== "object") return;
  if ("username" in user) user.username = "联合国儿童基金会";
  if ("groupid" in user) user.groupid = VIP_GROUP_ID;
  if ("groupexpiry" in user) user.groupexpiry = 4102444800;
  if ("grouptitle" in user) user.grouptitle = VIP_GROUP_TITLE;
  if ("groupstars" in user) user.groupstars = VIP_GROUP_STARS;
  if ("groupcolor" in user) user.groupcolor = VIP_GROUP_COLOR;
  if ("adminid" in user) user.adminid = -1;
  if ("credits" in user) user.credits = 999999;
  if ("freeze" in user) user.freeze = 0;
  if ("memberstatus" in user) user.memberstatus = 0;
}

function upgradeGroup(g) {
  if (!g || typeof g !== "object") return;
  g.groupid = VIP_GROUP_ID;
  g.grouptitle = VIP_GROUP_TITLE;
  g.color = VIP_GROUP_COLOR;
  if ("stars" in g) g.stars = "8";
  if ("readaccess" in g) g.readaccess = "200";
  if ("allowvisit" in g) g.allowvisit = "1";
  if ("allowreply" in g) g.allowreply = "1";
  if ("allowpost" in g) g.allowpost = "1";
  if ("allowgetattach" in g) g.allowgetattach = "1";
  if ("allowgetimage" in g) g.allowgetimage = "1";
  if ("allowpostattach" in g) g.allowpostattach = "1";
  if ("allowpostimage" in g) g.allowpostimage = "1";
  if ("allowsendpm" in g) g.allowsendpm = "1";
  if ("allowfollow" in g) g.allowfollow = "1";
  if ("allowinvite" in g) g.allowinvite = "1";
  if ("allowcomment" in g) g.allowcomment = "1";
  if ("allowcommentpost" in g) g.allowcommentpost = "1";
  if ("allowcommentreply" in g) g.allowcommentreply = "1";
  if ("maxprice" in g) g.maxprice = "99999";
  if ("allowpostreply" in g) g.allowpostreply = true;
  if ("allowpostpoll" in g) g.allowpostpoll = "1";
  if ("allowpostreward" in g) g.allowpostreward = "1";
  if ("allowposttrade" in g) g.allowposttrade = "1";
}

function deepModify(obj) {
  if (!obj || typeof obj !== "object") return;
  if (Array.isArray(obj)) {
    for (const item of obj) deepModify(item);
    return;
  }
  if ("tid" in obj && "fid" in obj) unlockPost(obj);
  if ("viewperm" in obj && "fid" in obj) {
    obj.viewperm = "";
    obj.postperm = obj.postperm ? "" : undefined;
    obj.replyperm = obj.replyperm ? "" : undefined;
    obj.getattachperm = obj.getattachperm ? "" : undefined;
  }
  for (const key of Object.keys(obj)) {
    const val = obj[key];
    if (val && typeof val === "object") deepModify(val);
  }
}

function extractApiMethod(url) {
  const m = url.match(/index\.php\/([^?&#]+)/);
  if (m) return m[1];
  const m2 = url.match(/\/mserver\/(.+?)(?:\?|$)/);
  if (m2) return m2[1];
  return url;
}

function findLists(obj) {
  const result = [];
  if (!obj || typeof obj !== "object") return result;
  if (Array.isArray(obj)) {
    if (obj.length > 0 && obj[0] && "tid" in obj[0]) {
      result.push(obj);
    } else {
      for (const item of obj) result.push(...findLists(item));
    }
    return result;
  }
  for (const key of Object.keys(obj)) {
    if (key === "list" || key === "stickList" || key === "data") {
      const val = obj[key];
      if (Array.isArray(val) && val.length > 0 && val[0] && "tid" in val[0]) {
        result.push(val);
      } else if (val && typeof val === "object") {
        result.push(...findLists(val));
      }
    }
  }
  return result;
}
