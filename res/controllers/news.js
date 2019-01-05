var type = decodeURIComponent($.getUrlParam('type'))

var ww = $(window).width();
var hh = parseInt(ww*0.57)
$(".project_slider,.swiper-container").css({
  'height': hh + 'px'
})


var contentList = {
  'news': {
    title: '新闻',
    list: [
      {
        contentTitle: '校园招聘启动',
        content: '2018年10月，校园招聘启动。公司赴重庆大学、哈尔滨工业大学、天津大学、清华大学、西安建筑科技大学、东南大学等高校进行设计主题宣讲会。',
        contentTime: '2018/10'
      },
      {
        contentTitle: '完成度体系宣讲',
        content: '中外一流建筑设计公司之间的差距并不在于建筑师个体的差距，而在于设计体系的差距。都设把精细化设计和建成效果的高还原度作为设计工作的生命线。2018年07月11日，都设邀请上海睿柏建筑外墙设计咨询有限公司和弗思特工程咨询有限公司一起探讨建筑幕墙设计体系。',
        contentTime: '2018/07/11'
      },
      {
        contentTitle: '参观姑苏雅集',
        content: '2018年07月25日，都设全体员工前往江苏苏州参观公司作品——姑苏雅集。',
        contentTime: '2018/07/25'
      },
      {
        contentTitle: '公司年中会',
        content: '2018年07月26日，上海都设2018年度年中总结会在苏州希尔顿酒店举行。',
        contentTime: '2018/07/26'
      },
    ]
  },
  'articles': {
    title: '出版物/文章',
    list: [
      {
        contentTitle: '书-《HILTON WUHAN OPTICS VALLEY——The Story of Landmark Resort》',
        content: 'Built to the standard specifications of Hilton’s flagship resort, Hilton Wuhan Optics Valley is the biggest, the most multi-functional, state-of-the-art hotel for state guests. It is the business and convention center for the Donghu High-tech Zone, as well as a prime hub for political and business activities.',
        contentTime: '2018/10'
      },
      {
        contentTitle: '从此无论开车还是高铁，到达南京都将看到“都设设计”',
        content: '都设原创设计的“南京高力力新庄广场”年底将完成地下室施工，2020年，一个10万平米的“六角广场”将展现在南京玄武湖边。南京高力新庄广场位于新庄立交，靠近南京站，占据了南京进出的门户位置，加上都设在南京南站北侧设计的万科九都荟写字楼以及尚都荟公寓，未来进出南京都将看到都设的设计作品。',
        contentTime: '2018/10/05',
        link: 'https://mp.weixin.qq.com/s/al_iqhl_Kb2xilHxgG6A3g'
      },
      {
        contentTitle: '便宜、好看、容易抄的打孔铝板又来了',
        content: '从鲅鱼圈保利大剧院到南京白云亭文化艺术中心，都设一直在探索打孔铝板这个便宜的、可塑性极强的材料，同时由于其模块化的安装便于控制最后的完成度，所以这些做法在社会上被广泛的“借鉴”，很多朋友发图片问是不是我们设计的，在此声明都设不太会复制自己的作品，我们只会每一次都力求创新。即使在复制率最高的住宅领域，我们也不会去复制一个“姑苏雅集”。',
        contentTime: '2018/09/30',
        link: 'https://mp.weixin.qq.com/s/8qTdXQLPXqQQ-0RM3wt4CA'
      },
      {
        contentTitle: '用一个住宅回应建筑学的世纪难题，用一个建筑实现吴冠中笔下的江南',
        content: '在中国当代建筑学中一直想要解决一个难题：如何在现代建筑中体现出中国文化。“夺回古都风貌”的穿衣戴帽到各中对古代建筑元素的“现代重构”，实际上都以失败告终，总是不伦不类，',
        contentTime: '2018/06/05',
        link: 'https://mp.weixin.qq.com/s/Ctz5njJYCW-Lo4gQe5JQDw'
      },
      {
        contentTitle: '好防佳节元宵后，便是烟消火灭时--聊聊设计这个行业',
        content: '“他强任他强，清风拂山岗”——这是2017年我的内心的写照。每当面对外部的不堪，我只能这样安慰和规劝自己。2016-2017对我对都设都是至关重要的一年，若干年之后再回首，痛苦的2016-2017年会是都设的最低谷，但也是最有战略意义的两年。',
        contentTime: '2018/05/07',
        link: 'https://mp.weixin.qq.com/s/Co08euXJxn6QxSXLoSjP9g'
      },
      {
        contentTitle: '历时两年—都设竟然做了这样的豪宅！',
        content: '西北湖壹号，地处武汉长江大道与黄孝西路交汇处，是西北湖区域唯一在售的楼盘，这里是武汉的oldmoney地段，经受时间的洗礼占据了俯瞰一线湖景湖面的稀缺资源。',
        contentTime: '2018/04/10',
        link: 'https://mp.weixin.qq.com/s/QWz55dgbSk3NdfJvmaY8rg'
      },
      {
        contentTitle: '设计完成度的控制之道——系列篇年终回顾',
        content: '转眼间，《设计完成度的控制之道》系列文章已经连载至第八回啦!新年将至，下面就让我们来盘点回顾一下这些干货满满的良心好文吧！',
        contentTime: '2018/02/11',
        link: 'https://mp.weixin.qq.com/s/SPPpX5fjBjpTErHJNFJSJw'
      },
      {
        contentTitle: '画好建筑图只是走出第一步，设计是一个体系',
        content: '设计完成度的控制之道系列已经出了七期，涵盖了虹桥坊这样的传统建筑、光谷希尔顿这样的度假酒店、白云亭文化艺术中心和鲅鱼圈保利大剧院两个打孔铝板幕墙的案例、北京恒泰广场这样的石材幕墙和商业幕墙体系、一体化的贺胜桥办公楼，这一期推出的是玻璃幕墙为主的高层办公楼---武汉西北湖双玺。',
        contentTime: '2018/02/09',
        link: 'https://mp.weixin.qq.com/s/p8rCWPkrgKPjKTDVmCfLXQ'
      },
      {
        contentTitle: '都设设计 | 2017-2018作品年鉴',
        content: '上海都设建筑设计有限公司始终秉承“设计创造价值、设计塑造生活”的理念，专注于酒店、公共建筑、高端居住建筑设计领域。以战略合作伙伴模式推广业务，以“设计定制”理念提供专业服务，针对项目的特点提供独一无二的定制设计。希望借此平台与大家分享交流。',
        contentTime: '2018/02/08',
        link: 'https://mp.weixin.qq.com/s/GfbZ35Av25hL45hBUgy1Ug'
      },
      {
        contentTitle: '都设讲堂2018-01——马进·从空间到表皮',
        content: '2018年的第一次讲座，比以往时候来得都早一些。这次我们请来了重量级嘉宾东南大学建筑学院的马进教授为我们讲述：从空间到表皮',
        contentTime: '2018/02/06',
        link: 'https://mp.weixin.qq.com/s/RExSxWRe1I3g906nvGvmBA'
      },
    ]
  },
  'propaganda': {
    title: ' 在网络媒体的宣传'
  }

}

  
var header = require('../components/Header.vue')
var footer = require('../components/Footer.vue') 
var app = new Vue({
  el: '#app',
  components: {
    'duHeader' : header,
    'duFooter' : footer
  },
  data: {
    type: type,
    itemData: contentList[type]['list'],
    subTitle: contentList[type]['title'],
    mask: {},
    imgIndex: 0,
    show_mask: false
  },
  computed: {
  },
  created: function(){

  },
  mounted: function(){
    const self = this;
    var ww = document.body.clientWidth - 100;
    var clientWidth = document.documentElement.clientWidth
    var clientHeight = document.documentElement.clientHeight
    $(".news_list li").css({
      // 'height' : (ww*0.62/4).toFixed(2) + 'px',
      'width' : (ww/4).toFixed(2) + 'px'
    })

    $(".mask_cotent").css({
      'width': (clientWidth*0.6).toFixed(2),
      'height': (clientHeight*0.8).toFixed(2),
      'top': '10%',
      'left': '20%',
    })


    $(window).resize(function(){
      var ww = document.body.clientWidth - 100;
      var clientWidth = document.documentElement.clientWidth
      var clientHeight = document.documentElement.clientHeight
      $(".news_list li").css({
        // 'height' : (ww*0.62/4).toFixed(2) + 'px',
        'width' : (ww/4).toFixed(2) + 'px'
      })
      $(".mask_cotent").css({
        'width': (clientWidth*0.6).toFixed(2),
        'height': (clientHeight*0.8).toFixed(2),
        'top': '10%',
        'left': '20%',
      })
    })
  },
  methods: {

    showDetail: function(item, index) {
      this.imgIndex = index
      this.mask = item
      setTimeout(function(){
        $(".mask").show()
      },200)
    },

    closeMask: function(){
      $(".mask").hide()
      this.imgIndex = -1;
      this.mask = {}
    }
  }
})