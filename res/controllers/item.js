var projectId = decodeURIComponent($.getUrlParam('projectId'))

$(".change_module span").on('click',function(){
  $(this).addClass('current').siblings().removeClass('current')
  if($(this).hasClass('design_btn')){
    $('.swiper-slide').find('.design').css({
      'display':'block'
    }).siblings().css({
      'display':'none'
    })
  }else{
     $('.swiper-slide').find('.photo').css({
      'display':'block'
    }).siblings().css({
      'display':'none'
    })
  }
})

var swiper_text = [
  {text: '中国北京酒店'},
  {text: '四川成都酒店'},
  {text: '山东烟台酒店'},
  {text: '湖北武汉酒店'},
  {text: '中国上海酒店'},
]


var header = require('../components/Header.vue') 
var app = new Vue({
  el: '#app',
  components: {
    'duHeader' : header
  },
  data: {
    projectItem: {},
    isPhoto: true
  },
  created: function(){
    this.projectItem = projectData[projectId] 
  },
  mounted: function(){

    // 照片
    var photoMySwiper = new Swiper('.photos_swiper_container',{
      pagination : ".photos_pagination",
      paginationClickable : true,
      autoplayDisableOnInteraction: false,
      loop: this.projectItem.photos > 1 ? true : false,
      autoplay: 7000,
      onSlideChangeStart: function(swiper){
      },
      onSwiperCreated: function(){
          // $(".swiper-slide").eq(1).find('img').addClass('active')
      }
    });

    // 设计
    var designMySwiper = new Swiper('.design_swiper_container',{
      pagination : ".design_pagination",
      paginationClickable : true,
      autoplayDisableOnInteraction: false,
      loop: this.projectItem.design > 1 ? true : false,
      autoplay: 7000,
      onSlideChangeStart: function(swiper){
      },
      onSwiperCreated: function(){
          // $(".swiper-slide").eq(1).find('img').addClass('active')
      }
    });  

  }
})
