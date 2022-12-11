(() => {
  "use strict";
  var e = {};
  (e.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == typeof window) return window;
    }
  })()),
    (() => {
      var t;
      e.g.importScripts && (t = e.g.location + "");
      var a = e.g.document;
      if (!t && a && (a.currentScript && (t = a.currentScript.src), !t)) {
        var i = a.getElementsByTagName("script");
        i.length && (t = i[i.length - 1].src);
      }
      if (!t)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (t = t
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (e.p = t + "../");
    })();
  class t {
    id;
    name;
    el;
    constructor(e) {
      (this.id = e.id), (this.name = e.name), (this.el = null);
    }
  }
  class a {
    area;
    name;
    singer;
    release_time;
    cover;
    el;
    constructor(e) {
      (this.area = e.area),
        (this.name = e.name),
        (this.singer = e.singer),
        (this.release_time = e.release_time),
        (this.cover = e.cover),
        (this.el = null);
    }
  }
  const i = e.p + "fd914ea52c4135d092aa.png",
    n = JSON.parse(
      '[{"id":1,"name":"内地"},{"id":2,"name":"港台"},{"id":3,"name":"欧美"},{"id":4,"name":"韩国"},{"id":5,"name":"日本"},{"id":6,"name":"其他"}]'
    ),
    r = JSON.parse(
      '[{"area":1,"name":"如果你在我身边","singer":"温岚","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000001CBN5K0PfS00_1.jpg"},{"area":1,"name":"Deep Down","singer":"刘柏辛Lexie","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M00000148fYE1yE8xs_1.jpg"},{"area":1,"name":"星云号","singer":"电气樱桃","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000000II5he3GgacD_1.jpg"},{"area":1,"name":"当归","singer":"萧忆情Alex","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000003C3knT3yGPpW_1.jpg"},{"area":1,"name":"我的女孩","singer":"张紫豪","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M0000049FJbJ3AfXWH_1.jpg"},{"area":1,"name":"大城小爱","singer":"你的大表哥曲甲","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000000FGj7f1FkTkT_1.jpg"},{"area":1,"name":"槐花绽放在大连","singer":"火风","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000002ptOgN00E1iH_1.jpg"},{"area":1,"name":"Remember Our Summer (Acoustic)","singer":"FrogMonster","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M00000248LZa2ZWPle_1.jpg"},{"area":1,"name":"你怎么说","singer":"张程皓","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000003DU34l1GSKBo_1.jpg"},{"area":1,"name":"烂片","singer":"李韩宇Yuzi","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M0000003Aa8k3DKbfx_1.jpg"},{"area":1,"name":"枫林听雨","singer":"鸾音社","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000000f3aaZ01m35q_1.jpg"},{"area":1,"name":"小说","singer":"张鑫","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000002WohzQ03Q6eU_1.jpg"},{"area":1,"name":"Close to Me","singer":"X-GANG","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000004CXCQH1HC4Ag_1.jpg"},{"area":1,"name":"别叫我达芬奇 (Punk Version)","singer":"Lil Ghost小鬼","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000003VZzma11sgHk_1.jpg"},{"area":1,"name":"失控","singer":"Tizzy T","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000004RP8B71e5FXI_1.jpg"},{"area":1,"name":"y？","singer":"刘逸云 Amber Liu","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000004DLAAT2CBIwq_1.jpg"},{"area":1,"name":"乐观孤独症","singer":"陈其楠","release_time":"2021-05-06","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000000a9GGa3I9K3T_1.jpg"},{"area":1,"name":"陪你去闯 (feat. 秦牛正威)","singer":"葛兆恩Kodii","release_time":"2021-05-06","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000002mkDdo431tra_1.jpg"},{"area":2,"name":"将逝之爱","singer":"F.I.R.飞儿乐团","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000003pyTOW09YEqO_1.jpg"},{"area":2,"name":"你麦管","singer":"曹雅雯","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000001S365D3W372n_1.jpg"},{"area":2,"name":"流光","singer":"周传雄","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000002rKcRc3ZRNLI_1.jpg"},{"area":2,"name":"无声浪","singer":"黄妍","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000001zFcMu4N3w8A_1.jpg"},{"area":2,"name":"答案","singer":"陈允特","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000002QEO8d0vYGbS_1.jpg"},{"area":2,"name":"这世界那么多人","singer":"莫文蔚","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000001fN0ks2oUDvX_1.jpg"},{"area":2,"name":"Eye Love You (feat. 蔡恩雨)","singer":"3P","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M0000002j17v0Fu2XU_1.jpg"},{"area":2,"name":"奶奶","singer":"魏如萱","release_time":"2021-05-06","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000000NES1R1Vwyeu_1.jpg"},{"area":2,"name":"苏菲阿姨","singer":"大渊(顽童MJ116)","release_time":"2021-05-06","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000002cMLMf2I0tOh_1.jpg"},{"area":2,"name":"离开你以后","singer":"周兴哲","release_time":"2021-05-06","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000001JaUwd3tQupw_1.jpg"},{"area":2,"name":"先哭为敬","singer":"郑欣宜","release_time":"2021-05-05","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000002J0Dx219VmN4_1.jpg"},{"area":2,"name":"恰查某","singer":"布朗","release_time":"2021-05-05","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000002sYKOp1ktwGs_1.jpg"},{"area":2,"name":"睡眠儿歌‧童谣钢琴摇篮曲","singer":"睡眠宝宝贵族音乐","release_time":"2021-05-05","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000003iTZgm1fL2jr_1.jpg"},{"area":2,"name":"钢琴‧深眠: 古典摇篮曲选辑","singer":"贵族音乐古典","release_time":"2021-05-05","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M0000025jexN3lqrpA_1.jpg"},{"area":2,"name":"Jerk","singer":"吴映洁","release_time":"2021-05-05","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000003cBUQu0ZKphZ_1.jpg"},{"area":2,"name":"古典乐效应: 肖邦名曲集","singer":"Noble Music Project","release_time":"2021-05-05","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000001082fQ1gPKYA_1.jpg"},{"area":2,"name":"孤毒","singer":"泳儿","release_time":"2021-05-04","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000002aTayX1QqoOq_1.jpg"},{"area":2,"name":"万物有时","singer":"郑秀文","release_time":"2021-05-04","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M0000020VF3n1KcllU_1.jpg"},{"area":2,"name":"太难唱了","singer":"彭佳慧","release_time":"2021-05-04","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000000dnfoX4URmCp_1.jpg"},{"area":2,"name":"Mama Don’t Look","singer":"李芷婷","release_time":"2021-05-04","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000000WjUN21dB5WG_1.jpg"},{"area":3,"name":"Fast (Motion) [Explicit]","singer":"Saweetie","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M00000241LHj3GHoCR_1.jpg"},{"area":3,"name":"Better Mistakes (Explicit)","singer":"Bebe Rexha","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000004HcRK31FLX42_1.jpg"},{"area":3,"name":"Express Yourself","singer":"Madonna","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000001LK3dR2Y4IUY_1.jpg"},{"area":3,"name":"Sideways","singer":"ILLENIUM","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000004UFvcN4Oo4rQ_1.jpg"},{"area":3,"name":"All I Know So Far (Explicit)","singer":"P!NK","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M0000048x8Ah2iThlv_1.jpg"},{"area":3,"name":"Astronaut In The Ocean (Remix) [feat. G-Eazy & DDG] (Explicit)","singer":"Masked Wolf","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000003S9lQC1aE0la_1.jpg"},{"area":3,"name":"La Fuerza Joven","singer":"La Nueva Luna","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M00000093nCN1HrGHv_2.jpg"},{"area":3,"name":"Get Together","singer":"David Guetta","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000001DlFNH4YaVZC_1.jpg"},{"area":3,"name":"I\'ll Be There","singer":"BEKA","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000004dzXW54XNUq9_1.jpg"},{"area":3,"name":"the long way home","singer":"Powfu","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000002Pwf7H2kKeYh_1.jpg"},{"area":3,"name":"Feel Something","singer":"Joshua Bassett","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000001j0CBI0uFkZ0_1.jpg"},{"area":3,"name":"Life By Misadventure","singer":"Rag\'N\'Bone Man","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M0000032SBPE3Sa14Q_1.jpg"},{"area":3,"name":"Higher Power","singer":"Coldplay","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000000tX4XL4HkNYC_1.jpg"},{"area":3,"name":"Like That","singer":"JP Saxe","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000004BtB9f1ygNLn_1.jpg"},{"area":3,"name":"The Light, The Dark And The Endless Knot","singer":"Waylander","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000000b74eU0839FR_1.jpg"},{"area":3,"name":"Evilized","singer":"Impious","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M0000011GiEh0oRMXL_1.jpg"},{"area":3,"name":"On My Way","singer":"Alex Lahey","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000003eQUsG0V5yNx_1.jpg"},{"area":3,"name":"Run","singer":"OneRepublic","release_time":"2021-05-05","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M00000139uXe1gJzZc_1.jpg"},{"area":3,"name":"Astronaut In The Ocean (TCTS Remix)","singer":"Masked Wolf","release_time":"2021-05-05","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000004Vobyr1wCDM6_1.jpg"},{"area":3,"name":"Purge The Poison (feat. Pussy Riot)","singer":"MARINA","release_time":"2021-05-05","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000002rxza30iWkcp_1.jpg"},{"area":4,"name":"ZOOM","singer":"CNBLUE","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000000nA3tx0sMTwA_1.jpg"},{"area":4,"name":"As Time Goes By","singer":"Hee-young Lim","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000003XzQXE2Y8yD7_1.jpg"},{"area":4,"name":"Awaken","singer":"샴","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000003RaQ7S4b0vU5_1.jpg"},{"area":4,"name":"Cotton Candy & Orange","singer":"필통","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M00000055hli0hDUzZ_1.jpg"},{"area":4,"name":"응급실 (2021)","singer":"황인욱","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000001IqkIW0UJ6M4_1.jpg"},{"area":4,"name":"MOA4550","singer":"MOA","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000004OcUXB4TvydV_1.jpg"},{"area":4,"name":"로스쿨 OST Part 2","singer":"다린","release_time":"2021-05-06","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000000Cyaki1H0hkH_1.jpg"},{"area":4,"name":"I.F.L.Y.","singer":"ZASMIIN","release_time":"2021-05-06","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000001zNSDS2PH2Th_1.jpg"},{"area":4,"name":"Hey, Go smile (Explicit)","singer":"BLOO","release_time":"2021-05-06","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M0000046CPN42X1LOP_1.jpg"},{"area":4,"name":"드라이브","singer":"김아름","release_time":"2021-05-06","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000001OvS2a2Z1Uin_1.jpg"},{"area":4,"name":"I\'m In Love","singer":"Colde","release_time":"2021-05-06","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000000DzZxz0oSz1q_1.jpg"},{"area":4,"name":"꽃이 피고 지면 멈춰서","singer":"MuzGrain","release_time":"2021-05-06","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M0000008aOTo1XohQt_1.jpg"},{"area":4,"name":"코인세탁소","singer":"Donutman","release_time":"2021-05-06","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000000gKtJS17emw5_1.jpg"},{"area":4,"name":"Oh! 珠仁君 OST Part 5","singer":"BIBI","release_time":"2021-05-06","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000001zGmAx3fUewx_1.jpg"},{"area":4,"name":"Octopus\' Dream","singer":"安艺恩","release_time":"2021-05-06","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000003bWEoQ24nSHL_1.jpg"},{"area":4,"name":"Full Bloom for All","singer":"Maktub","release_time":"2021-05-06","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000004CBQXM32eKQH_1.jpg"},{"area":4,"name":"Livin\' Life (feat. NO NAME\'S) [Explicit]","singer":"유토","release_time":"2021-05-05","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M0000027Citd1di0tL_1.jpg"},{"area":4,"name":"Culture","singer":"Dok2","release_time":"2021-05-05","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000001JoSuG4YGhzo_1.jpg"},{"area":4,"name":"Flavors of love","singer":"Monsta X","release_time":"2021-05-05","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M0000035cy7R0DYJQD_1.jpg"},{"area":4,"name":"태평동 보물찾기 (feat. 태평동 문화벨트)","singer":"수후","release_time":"2021-05-05","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000002U4Jc23i2UGx_1.jpg"},{"area":5,"name":"アヤメ","singer":"石崎ひゅーい","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000000L3mdc0bdgzM_1.jpg"},{"area":5,"name":"愛を知るまでは","singer":"爱缪","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000001qyo5p0qNT5E_1.jpg"},{"area":5,"name":"ビューティフルライフ","singer":"Have a Nice Day!","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000002bsKyD1W81hn_1.jpg"},{"area":5,"name":"僕たちの","singer":"神様、僕は気づいてしまった","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M0000019eZN21A8kRC_1.jpg"},{"area":5,"name":"Cry Baby","singer":"Official鬍子男dism","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M00000186HMi32SNRo_1.jpg"},{"area":5,"name":"誰が為に愛は鳴る","singer":"TrySail","release_time":"2021-05-06","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M0000018icEv4QnoKP_1.jpg"},{"area":5,"name":"in case...","singer":"BiSH","release_time":"2021-05-06","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000001PQI6q3H8cls_1.jpg"},{"area":5,"name":"EVERYBODY! EVERYBODY! / YOU YOU YOU","singer":"芹澤優","release_time":"2021-05-06","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M0000038koJ23l763d_1.jpg"},{"area":5,"name":"1995","singer":"平井堅","release_time":"2021-05-05","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000003cp6cd0njv5x_1.jpg"},{"area":5,"name":"ピアソラ：バンドネオン協奏曲　他","singer":"小松亮太","release_time":"2021-05-05","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000002HHfj71LJU7n_1.jpg"},{"area":5,"name":"What a Beautiful Life","singer":"BIGMAMA","release_time":"2021-05-05","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000000yNd1j4JMAry_1.jpg"},{"area":5,"name":"サチアレ!!!","singer":"あゆみくりかまき","release_time":"2021-05-05","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000000ZMBeu43sdJ2_1.jpg"},{"area":5,"name":"変だ、変だ、変だ","singer":"昆虫キッズ","release_time":"2021-05-05","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000003YrIhJ3vgYrk_1.jpg"},{"area":5,"name":"Die Sana Jah","singer":"ORIONBEATS","release_time":"2021-05-05","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M0000038MPkU2fp2Ol_1.jpg"},{"area":5,"name":"HONEY / AWAKE","singer":"TEAM SHACHI","release_time":"2021-05-05","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000000cCAjA4D1A1x_1.jpg"},{"area":5,"name":"ナミダメ","singer":"すとぷり","release_time":"2021-05-05","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M00000107s0j4CI3JM_1.jpg"},{"area":5,"name":"閃光","singer":"[Alexandros]","release_time":"2021-05-05","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000000XyWSl1deAiT_1.jpg"},{"area":5,"name":"やったれ我が人生","singer":"祭nine.","release_time":"2021-05-05","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000003oravg2Ok09J_1.jpg"},{"area":5,"name":"Lost love song【III】","singer":"Hilcrhyme","release_time":"2021-05-05","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000002wtBWu0nnFIO_1.jpg"},{"area":5,"name":"ガラクタリブート","singer":"るぅと","release_time":"2021-05-05","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M0000038RCL63JnFTD_1.jpg"},{"area":6,"name":"How Sweet It Is (To Be Loved by You)","singer":"Anthem Lights","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000003zB7Su2bwwBf_1.jpg"},{"area":6,"name":"Fast (Motion)","singer":"Saweetie","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000003EDsVO05p99g_1.jpg"},{"area":6,"name":"Way Too Long (feat. MoStack) [Navos Remix]","singer":"Nathan Dawe","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000003xcmdc3DCaj6_1.jpg"},{"area":6,"name":"Here And Now (Deluxe)","singer":"Kenny Chesney","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000001bnoH43J1Mdl_1.jpg"},{"area":6,"name":"Higher (feat. iann dior) (Dimitri Vegas & Like Mike Remix)","singer":"Clean Bandit","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M0000042E0aJ1JPQwS_1.jpg"},{"area":6,"name":"She Used To Be Mine (Live from the Hollywood Bowl)","singer":"Sara Bareilles","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000001JeLVS071gVl_1.jpg"},{"area":6,"name":"Holy Holy (2020 Mix)","singer":"David Bowie","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000001P2wHv0cqtgs_1.jpg"},{"area":6,"name":"The Best Of Den Harrow","singer":"Den Harrow","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000003oeoJQ3NNWMD_1.jpg"},{"area":6,"name":"Come to Brazil (Explicit)","singer":"Alaska Thunderfuck","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000004K0trc1dqoal_1.jpg"},{"area":6,"name":"Afternoons in Utopia (2021 Remaster)","singer":"Alphaville","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000004bX1U4098nzU_1.jpg"},{"area":6,"name":"Best Summer Hits","singer":"Various Artists","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M0000010rKge1SIZib_1.jpg"},{"area":6,"name":"Seven Times (Wu-Lu Remix)","singer":"Lianne La Havas","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000001X4gEy44mGzL_1.jpg"},{"area":6,"name":"The Breathtaking Blue (2021 Remaster)","singer":"Alphaville","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000004Ce30o2BHxKw_1.jpg"},{"area":6,"name":"Hypa Hypa","singer":"Eskimo Callboy","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000003q3cLm07rcMi_1.jpg"},{"area":6,"name":"Education, Entertainment, Recreation (Live)","singer":"New Order","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000003UwUq247fQXb_1.jpg"},{"area":6,"name":"Summer Hits of the 10s (Explicit)","singer":"Various Artists","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000002fhWWZ1bMnTn_1.jpg"},{"area":6,"name":"High Right Now (Loud Colors Remix) [Explicit]","singer":"Tyla Yaweh","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000001yJ4gi10Ln8S_1.jpg"},{"area":6,"name":"Voodoo Doll (Never Will: Live From A Distance)","singer":"Ashley McBryde","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000001ibLBq4KweFT_1.jpg"},{"area":6,"name":"Melody","singer":"VINAI","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000004SIxYi3QqTp8_2.jpg"},{"area":6,"name":"Live A Life You Will Remember","singer":"Avicii","release_time":"2021-05-07","cover":"https://y.gtimg.cn/music/photo_new/T002R300x300M000003UybMY27cOsn_1.jpg"}]'
    );
  let s,
    m = [],
    o = [];
  function g(e) {
    s = e;
    for (let t of m)
      t.id === e
        ? (t.el.className = "tab-item tab-active")
        : (t.el.className = "tab-item");
    p();
  }
  function c(e) {
    e.el.parentNode.removeChild(e.el);
    let t = o.indexOf(e);
    o.splice(t, 1);
  }
  function p() {
    let e = document.querySelector(".list"),
      t = o.filter((e) => e.area === s),
      a = document.createDocumentFragment();
    for (let e of t) {
      if (null === e.el) {
        let t = document.createElement("div");
        t.className = "album";
        let a = document.createElement("cover");
        a.className = "cover";
        let n = document.createElement("img");
        (n.src = e.cover), a.appendChild(n);
        let r = document.createElement("div");
        r.className = "mask";
        let s = document.createElement("img");
        (s.src = i),
          s.addEventListener("click", () => c(e)),
          r.appendChild(s),
          a.appendChild(r),
          t.appendChild(a);
        let m = document.createElement("a");
        (m.className = "title nowrap"),
          (m.href = "#"),
          (m.innerText = e.name),
          t.appendChild(m);
        let o = document.createElement("a");
        (o.href = "#"), (o.innerText = e.singer), t.appendChild(o);
        let g = document.createElement("div");
        (g.innerText = e.release_time), t.appendChild(g), (e.el = t);
      }
      a.appendChild(e.el);
    }
    (e.innerHTML = ""), e.appendChild(a);
  }
  !(async function () {
    await (async function () {
      (m = n.map((e) => new t(e))), (o = r.map((e) => new a(e))), (s = m[0].id);
    })(),
      (function () {
        let e = document.querySelector(".tabs");
        for (let t of m) {
          let a = document.createElement("li");
          (a.className = "tab-item"),
            t.id === s && (a.className += " tab-active"),
            (a.innerText = t.name),
            a.addEventListener("click", () => g(t.id)),
            e.appendChild(a),
            (t.el = a);
        }
      })(),
      p();
  })();
})();
