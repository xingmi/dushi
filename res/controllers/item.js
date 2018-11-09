var projectId = decodeURIComponent($.getUrlParam('projectId'))

var ww = $(window).width();
var hh = parseInt(ww*0.57)
$(".project_slider,.swiper-container").css({
  'height': hh + 'px'
})

$(window).resize(function(){
  var ww = $(window).width();
  var hh = parseInt(ww*0.57)
  $(".project_slider,.swiper-container").css({
    'height': hh + 'px'
  })
})


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
