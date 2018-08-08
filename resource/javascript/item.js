// $('.sub_title').html( decodeURIComponent($.getUrlParam('type')) )


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
