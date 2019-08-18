var wh = $(window).height();
var home_slider_heigth = wh;

$(".home_slider").css({
  'height':home_slider_heigth
})
$("body").css({
    'display':'block'
})
var swiper_text = [ "004", "001", "011", "007", "003", "019", "017", "180"]
 
// $(".sub_project a").on('click',function(e){
//   window.location.href = 'project.html?type=' + encodeURIComponent($(this).html())
// })

var header = require('../components/Header.vue') 
var app = new Vue({
  el: '#app',
  components: {
    'duHeader' : header
  },
  data: {
    projectItems: [],
    isPhoto: true
  },
  created: function(){
    for (var i = 0; i < swiper_text.length; i++){
      this.projectItems.push(projectData[swiper_text[i]])
    }
  },
  mounted: function(){
    var self = this;
    var mySwiper = new Swiper('.swiper-container',{
      pagination : ".pagination",
      paginationClickable : true,
      autoplayDisableOnInteraction: false,
      loop: true,
      autoplay: 7000,
      onSlideChangeStart: function(swiper){
          $(swiper.visibleSlides).find('img').addClass('active').end().siblings().find('img').removeClass('active')
          // $(".swiper-slide:not('')").eq(swiper.activeLoopIndex).find('img').addClass('active').siblings().removeClass('active')
          $(".swiper_text").html(self.projectItems[swiper.activeLoopIndex].name)
          $(".swiper_time").html(self.projectItems[swiper.activeLoopIndex].startTime || self.projectItems[swiper.activeLoopIndex].endTime + ' ' + self.projectItems[swiper.activeLoopIndex].address)
      },
      onSwiperCreated: function(){
          $(".swiper_text").html(self.projectItems[0].name)
          $(".swiper_time").html(self.projectItems[0].startTime || self.projectItems[0].endTime + ' ' + self.projectItems[0].address)
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














