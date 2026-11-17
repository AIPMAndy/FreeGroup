/* ============================================================
   FreeGroup · 配置文件
   这个文件是整个项目里唯一需要你改的东西。
   改完直接刷新页面就能看到效果，不用重新构建、不用清缓存。
   ============================================================ */

window.FREEGROUP = {

  /* ---------- 1. 站点身份 ---------- */
  site: {
    // 浏览器标签页标题
    title: "Andy 的 AI 学习圈",
    // 一句话说清这是什么（不要写成宣传语）
    lead: "一个免费的 AI 学习群。不卖课，不收钱，只把每天折腾 AI 攒下的东西摊开给你。",
    // 顶部左侧的小字标识
    brand: "AI 酋长 Andy",
    // 顶部右侧链接（可留空）
    brandUrl: "https://metaver.vip"
  },

  /* ---------- 2. 群列表 ----------
     加群、满员、换二维码，都只改这个数组。
     - id       显示用的短编号，一个字符最合适
     - name     群的完整名字
     - members  当前人数（你自己数或在飞书里看）
     - capacity 这个群的人数上限（飞书基础版认证后是 500）
     - url      群分享链接，在飞书里把有效期设成「永久」再复制
     - qr       二维码图片路径，没有就填 null，页面会自动隐藏二维码区
     - status   "open" 可加入 / "full" 已满 / "closed" 暂停
     页面会自动把「人最少的可用群」设为默认推荐。  */
  groups: [
    {
      id: "a",
      name: "Andy的AI学习圈A",
      members: 96,
      capacity: 500,
      url: "https://applink.feishu.cn/client/chat/chatter/add_by_link?link_token=cfao1d6f-12e9-4ecf-b6fb-502cabc09d71",
      qr: "assets/qr-a.png",
      status: "open"
    },
    {
      id: "b",
      name: "Andy的AI学习圈B",
      members: 99,
      capacity: 500,
      url: "https://applink.feishu.cn/client/chat/chatter/add_by_link?link_token=8f8j2107-4be3-4b72-85d7-a04078d74239",
      qr: "assets/qr-b.png",
      status: "open"
    },
    {
      id: "c",
      name: "Andy 的AI 学习圈 C",
      members: 96,
      capacity: 500,
      url: "https://applink.feishu.cn/client/chat/chatter/add_by_link?link_token=bbeu7f94-c19c-4bc1-a1d6-a178a472d354",
      qr: "assets/qr-c.png",
      status: "open"
    },
    {
      id: "d",
      name: "Andy 的 AI 学习圈 D",
      members: 98,
      capacity: 500,
      url: "https://applink.feishu.cn/client/chat/chatter/add_by_link?link_token=48cs0f8b-e934-4104-a517-6a8c385aad4c",
      qr: "assets/qr-d.png",
      status: "open"
    },
    {
      id: "e",
      name: "Andy的 AI 学习圈 E",
      members: 85,
      capacity: 500,
      url: "https://applink.feishu.cn/client/chat/chatter/add_by_link?link_token=53bq1f8b-0373-4551-9937-df9da1a3c860",
      qr: "assets/qr-e.png",
      status: "open"
    }
  ],

  /* ---------- 3. 群里有什么 ----------
     左栏一句话标题，右栏一句说明。控制在 5 条以内。 */
  offer: [
    { title: "每天的东西", text: "新模型、新工具、新玩法，踩过的坑和跑通的流程，随手就发。" },
    { title: "问到人",   text: "卡住的时候把报错贴进来，多数问题当天就有人接。" },
    { title: "一起做",   text: "不定期的实战课与共学，跟着把一件具体的事做完。" },
    { title: "看得到过程", text: "从选题到上线，你要看的是完整过程，不是结论截图。" }
  ],

  /* ---------- 4. 群规 ----------
     建议短，别超过 4 条。 */
  rules: [
    "一人只进一个群，群满换下一个，别重复占位。",
    "不发广告，不拉人，不做任何形式的引流。",
    "提问前先翻一下历史消息，大多数问题已经有人问过。"
  ],

  /* ---------- 5. 主理人 ---------- */
  owner: {
    name: "Andy",
    line: "前腾讯 / 百度 AI 产品负责人，后做大模型公司 VP；现为流量 AI 联创、星觉 AI 创始人。常驻北京，有一个女儿。",
    note: "这个群开了几年，没卖过课。以后也不打算靠它赚钱——它就是个能安心问问题的地方。",
    contact: "微信 AIPMAndy"
  },

  /* ---------- 6. 备用入口 ----------
     给不想装飞书的人留一条路。enabled 改成 false 就整块隐藏。 */
  alt: {
    enabled: true,
    divider: "或者",
    title: "不想装飞书",
    text: "加微信，备注「学习圈」，拉你进微信群。",
    id: "AIPMAndy",
    qr: null   // 有微信二维码就填 "assets/wechat.png"，没有留 null
  },

  /* ---------- 7. 底部 ---------- */
  footer: {
    project: "FreeGroup",
    projectUrl: "https://github.com/AIPMAndy/FreeGroup",
    projectNote: "开源社群入口页，一个配置文件就能部署。"
  }

};
