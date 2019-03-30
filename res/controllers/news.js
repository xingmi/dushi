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
        contentTitle: '浦东三甲港上海文化总会项目',
        content: '2018年3月28日，公司成功改造的“上海三甲港绿地国际旅游度假村酒店群”正式开业。项目规模达27万平方米，改造以独特的海滨度假为中心，以环境美化为主导，以景观建设为补充，以场所特征规划为重点，以地域文化品牌打造为突破口的总体规划指导思想，致力于打造上海近郊周末度假的目的地，提升在地旅游休闲品位。',
        contentTime: '2018/03/28'
      },
      {
        contentTitle: '参观姑苏雅集',
        content: '2018年07月25日，都设全体员工前往江苏苏州参观公司作品——姑苏雅集。',
        contentTime: '2018/07/25'
      },
      {
        contentTitle: '绿地漕宝路长租公寓项目',
        content: '2018年12月7日，由我司设计的绿地集团首个智能化长租公寓项目——上海漕溪路“铂派公寓”项目正式启动。绿地集团董事长、总裁张玉良，执行总裁张蕴，徐汇区委常委、副区长徐建等出席开工仪式。2019年1月，该项目获得绿地集团年度最佳创新实践金奖。',
        contentTime: '2018/12/07'
      },
      {
        contentTitle: '成都协信中心希尔顿酒店',
        content: '2019年1月30日，上海都设设计的成都协信中心希尔顿酒店在成都中心城区正式开业。酒店覆盖15层楼，设计极具现代感，在客房、会议设施、公共空间的设计中巧妙融入川剧和蜀绣等地方特色元素，充分体现成都历史文化精髓。',
        contentTime: '2019/01/30'
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
    title: ' 在网络媒体的宣传',
    list: [
      {
        contentTitle: '南京白云亭副食品市场蜕变记',
        content: '现在炒得最沸沸扬扬的莫过于上海市和深圳市提出的“城市更新”了，而在两三年前，都设就已经开始实践了。在南京一个新近落成的案例中，上海都设将一座1999年落成的副食品市场更新成为了全新的文化艺术中心。在本案中，都设为业主提供了建筑、室内、景观的一体化设计服务，这是继江阴嘉荷酒店之后都设在城市更新和旧建筑改造设计领域的又一个代表作。',
        contentTime: '2015/03/10',
        link: 'https://www.gooood.cn/baiyunting-culture-art-center.htm'
      },
      {
        contentTitle: '嘉荷精品酒店改造',
        content: '江阴嘉荷精品酒店位于江阴东部新城,雨山湖畔,建筑面积7000平方米。此项目为改造项目,前身为办公楼,改造后成为50间客房,8间餐饮包间,宴会厅,会议室,游泳池均配备齐全的精品酒店。这一项目是上海都设建筑设计有限公司从建筑到室内到景观一体化设计的尝试,体现了设计师对于项目完成度的不懈追求。',
        contentTime: '2014/06/24',
        link: 'https://www.gooood.cn/jiahe-boutique-hotel-shdsd.htm'
      },
      {
        contentTitle: '圈保利大剧院',
        content: '大剧院采用简洁的体量，丰富的细节表现出现代建筑实用、美观、富有时代感的特性，极富时代感的外墙喻示营口经济开发区奔向国际的新气象。大剧院既要考虑东南侧景观，也要考虑到日月大道视线，因此，各个立面统一采用波浪形金属半透明材料，形成统一的立面形象，在此基础上根据功能情况又作了不同的细节处理，使其在和谐统一中富有变化。建筑东高西低，这样的处理使平安大街和日月大道上的人看不到剧场高起的部分，保持了建筑的整体形象。',
        contentTime: '2013/07/29',
        link: 'https://www.gooood.cn/bayuquan-baoli-theatre-by-dsd.htm'
      },
      {
        contentTitle: '武汉西北湖双玺',
        content: '西北湖双玺是由上海都设设计的武汉汉口核心区最受瞩目的项目---武汉顶绣西北湖综合体的一期写字楼部分。该项目由一期双塔写字楼和二期超高层住宅、超高层写字楼构成。西北湖双玺写字楼包含两个部分，两栋23层办公塔楼和4层裙房，其中裙房1-2层为商铺和3-4层为办公、商业。本项目是上海都设高完成度与一体化设计的代表作品之一。',
        contentTime: '2018/09/27',
        link: 'http://www.archdaily.cn/cn/902359/wu-yi-xi-bei-hu-shuang-xi-shang-hai-du-she-ying-zao-jian-zhu-she-ji-shi-wu-suo'
      },
      {
        contentTitle: '苏州姑苏雅集',
        content: '项目位于姑苏古城核心区，紧邻沧浪亭。整个基地环境古朴典雅。0.64的容积率注定了这是一个颇具挑战性的规划，如何延续老的城市肌理是关键。设计师不仅仅想设计一个简单的住宅区，而是一个具有艺术气息的多功能社区。',
        contentTime: '2018/09/26',
        link: 'http://www.archdaily.cn/cn/902311/su-zhou-gu-su-ya-ji-shang-hai-du-she-ying-zao-jian-zhu-she-ji-shi-wu-suo'
      },
      
    ]
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