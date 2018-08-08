var wh = $(window).height();
var home_slider_heigth = wh;

$(".home_slider").css({
  'height':home_slider_heigth
})
$("body").css({
    'display':'block'
})
var swiper_text = [
  {localAndTime: '2018/02 江苏苏州', text: '轮播图1'},
  {localAndTime: '2018/11 广东广州', text: '轮播图2'},
  {localAndTime: '2018/04 山东烟台', text: '轮播图3'},
  {localAndTime: '2018/02 湖北武汉', text: '轮播图4'},
  {localAndTime: '2018/04 中国上海', text: '轮播图5'},
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
      $(".swiper_time").html(swiper_text[swiper.activeLoopIndex].localAndTime)
  },
  onSwiperCreated: function(){
      $(".swiper_text").html(swiper_text[0].text)
      $(".swiper_time").html(swiper_text[0].localAndTime)
      $(".swiper-slide").eq(1).find('img').addClass('active')
  }
});  


$(".sub_project a").on('click',function(e){
  window.location.href = 'project.html?type=' + encodeURIComponent($(this).html())
})














