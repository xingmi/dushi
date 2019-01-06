var type = decodeURIComponent($.getUrlParam('type'))

$('.sub_title').html(type)

var ww = $(window).width();
var hh = parseInt(ww*0.47)
$(".project_slider,.swiper-container").css({
  'height': hh + 'px'
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
    itemData: []
  },
  computed: {
    scrollItemData: function (){
      // return this.itemData.slice(0, 5) || []
      var projectArray = []
      switch(type) {
        case '华北':
          // 缺少金泰
          projectArray = ['009', '010', '002', '126']
        break;
        case '华东':
          // 缺少金泰
          projectArray = ['004', '007', '011', '003', '123']
        break;
        case '华南':
          projectArray = ['159']
        break;
        case '华中':
          projectArray = ['001', '145', '017', '005', '018']
        break;
        case '西南':
          projectArray = ['019', '015', '006', '104', '129']
        break;
        case '规划':
          projectArray = ['005', '006', '019', '123', '111']
        break;
        case '建筑':
          projectArray = ['004', '007', '011', '009', '145']
        break;
        case '室内':
          projectArray = ['007', '011', '009', '010', '017']
        break;
        case '一体化设计':
          projectArray = ['001', '007', '011', '002', '014']
        break;
        case '城市更新':
          projectArray = ['003', '007', '011']
        break;
        case '酒店':
          projectArray = ['007', '117', '019', '123', '113']
        break;
        case '商业+办公':
          projectArray = ['005', '017', '006', '018', '110']
        break;
        case '文化':
          projectArray = ['009', '010', '011', '015', '014']
        break;
        case '住宅':
          projectArray = ['004', '145', '111', '006', '153']
        break;
        default:;
      }
      var projectArrayList = []
      projectArray.map(function(key){
        projectArrayList.push(projectData[key])
      })
      return projectArrayList
    }
  },
  created: function(){
    for(item in projectData){
      if(
        projectData[item]['territory'].indexOf(type) >= 0 || 
        projectData[item]['type'].indexOf(type) >= 0 ||
        projectData[item]['service'].indexOf(type) >= 0 
      ){
        this.itemData.push(projectData[item])
      }
    }
  },
  mounted: function(){
    const self = this;

    var ww = document.body.clientWidth;
    var hh = parseInt(ww*0.47)
    $(".project_list li").css({
      'height' : (ww/4).toFixed(2) + 'px',
      'width' : (ww/4).toFixed(2) + 'px'
    })

    $(window).resize(function(){
      var ww = document.body.clientWidth;
      var hh = parseInt(ww*0.47)
      $(".project_slider,.swiper-container").css({
        'height': hh + 'px'
      })
      $(".project_list li").css({
        'height' : (ww/4).toFixed(2) + 'px',
        'width' : (ww/4).toFixed(2) + 'px'
      })
    })


    var mySwiper = new Swiper('.swiper-container',{
      pagination : ".pagination",
      paginationClickable : true,
      autoplayDisableOnInteraction: false,
      loop: self.scrollItemData.length > 1 ? true : false,
      autoplay: 7000,
      onSlideChangeStart: function(swiper){
          $(swiper.visibleSlides).find('img').addClass('active').end().siblings().find('img').removeClass('active')
          // $(".swiper-slide:not('')").eq(swiper.activeLoopIndex).find('img').addClass('active').siblings().removeClass('active')
          $(".swiper_text").html(self.scrollItemData[swiper.activeLoopIndex].name)
      },
      onSwiperCreated: function(){
          $(".swiper_text").html(self.scrollItemData[0].name)
          $(".swiper-slide").eq(1).find('img').addClass('active')
      }
    });

    
    $("#designSwiperPrev").on('click',function(){
      mySwiper.swipePrev(); 
    })

    $("#designSwiperNext").on('click',function(){
      mySwiper.swipeNext(); 
    })
  }
})