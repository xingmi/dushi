var type = decodeURIComponent($.getUrlParam('type'))
var number = decodeURIComponent($.getUrlParam('number'))

var ww = $(window).width();
var hh = parseInt(ww*0.47)
$(".project_slider,.swiper-container").css({
  'height': hh + 'px'
})

$(window).resize(function(){
  var ww = $(window).width();
  var hh = parseInt(ww*0.47)
  $(".project_slider,.swiper-container").css({
    'height': hh + 'px'
  })
})


var header = require('../components/Header.vue') 
var footer = require('../components/Footer.vue') 
var app = new Vue({
  el: '#app',
  components: {
    'duHeader' : header,
    'duFooter' : footer
  },
  data: {
    photos: number,
    isPhoto: true,
    type: type,
    title: "",
    introTitle: "",
    introContent: ""
  },
  created: function(){
    switch (type) {
      case 'design':
          this.photos = 4
          this.title = '一体化设计'
          this.introTitle = '建筑/室内/景观一体化全过程设计服务'
          this.introContent = "都设作为国内一体化设计服务最早的倡议者之一，始终抱着”对业主负责，对项目负责 ”的态度，提供建筑 / 室内 / 景观一体化设计服务，保证项目的高完成度。"
        break;
      case 'value':
          this.photos = 3
          this.title = '价值发掘者'
          this.introTitle = '设计的价值在于发掘别人看不见的未来'
          this.introContent = "都设用专业的设计帮助客户精准定位， 发掘项目潜在的价值， 判断操作的可行性， 能够将眼下缺乏亮点的物业、转变为商业上的成功标杆。"
        break;
      case 'completeness':
          this.photos = 3
          this.title = ' 高完成度'
          this.introTitle = '施工图全程三维模型验证 / 构造节点专利 / 建成实景超越效果图'
          this.introContent = "都设把精细化设计和建成效果的高还原度作为设计工作的生命线。骨干设计人员全部具备大院施工图背景，对构造节点有深入的研究并获得多项专利。施工图全程采用三维模型辅助设计，保证建成实景超越效果图。"
        break;
      default:;
    }
  },
  mounted: function(){
    // 照片
    var photoMySwiper = new Swiper('.photos_swiper_container',{
      pagination : ".photos_pagination",
      paginationClickable : true,
      autoplayDisableOnInteraction: false,
      loop: this.photos > 1 ? true : false,
      // autoplay: 7000,
      onSlideChangeStart: function(swiper){
      },
      onSwiperCreated: function(){
          // $(".swiper-slide").eq(1).find('img').addClass('active')
      },
      prevButton: '.swiper-button-prev',
      nextButton: '.swiper-button-next'
    });

    $("#photoSwiperPrev").on('click',function(){
      photoMySwiper.swipePrev(); 
    })

    $("#photoSwiperNext").on('click',function(){
      photoMySwiper.swipeNext(); 
    })

  }
})
