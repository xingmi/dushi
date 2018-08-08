$('.sub_title').html( decodeURIComponent($.getUrlParam('type')) )


var swiper_text = [
  {text: '中国北京酒店'},
  {text: '四川成都酒店'},
  {text: '山东烟台酒店'},
  {text: '湖北武汉酒店'},
  {text: '中国上海酒店'},
]

var mySwiper = new Swiper('.swiper-container',{
  pagination : ".pagination",
  paginationClickable : true,
  loop: true,
  autoplay: 7000,
  onSlideChangeStart: function(swiper){
      $(swiper.visibleSlides).find('img').addClass('active').end().siblings().find('img').removeClass('active')
      // $(".swiper-slide:not('')").eq(swiper.activeLoopIndex).find('img').addClass('active').siblings().removeClass('active')
      $(".swiper_text").html(swiper_text[swiper.activeLoopIndex].text)
  },
  onSwiperCreated: function(){
      $(".swiper_text").html(swiper_text[0].text)
      $(".swiper-slide").eq(1).find('img').addClass('active')
  }
});  

var ww = $(window).width();

$(".project_list li").css({
  'height' : (ww/4).toFixed(2) + 'px',
  'width' : (ww/4).toFixed(2) + 'px'
})