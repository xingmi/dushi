var type = decodeURIComponent($.getUrlParam('type'))

$('.sub_title').html(type)

  

var ww = $(window).width();
var hh = parseInt(ww*0.57)
$(".project_slider,.swiper-container").css({
  'height': hh + 'px'
})
$(".project_list li").css({
  'height' : (ww/4).toFixed(2) + 'px',
  'width' : (ww/4).toFixed(2) + 'px'
})

$(window).resize(function(){
  var ww = $(window).width();
  var hh = parseInt(ww*0.57)
  $(".project_slider,.swiper-container").css({
    'height': hh + 'px'
  })
  $(".project_list li").css({
    'height' : (ww/4).toFixed(2) + 'px',
    'width' : (ww/4).toFixed(2) + 'px'
  })

})


var header = require('../components/Header.vue') 
var app = new Vue({
  el: '#app',
  components: {
    'duHeader' : header
  },
  data: {
    itemData: []
  },
  computed: {
    scrollItemData: function (){
      return this.itemData.slice(0, 5) || []
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
  }
})