<template>   
    <div class="nav container">
        <a href="/cn/index.html" class="logo">    
        </a>
        <ul class="nav_list">
          <li><a href="/cn/index.html">首页</a></li>
          <li><a href="javascript:void(0)" data-index="1">理念</a></li>
          <li><a href="javascript:void(0)" data-index="2">项目</a></li>
          <li><a href="javascript:void(0)" data-index="3">新闻/出版物</a></li>
          <li><a href="javascript:void(0)" data-index="4">关于我们</a></li>
        </ul>
        <ol class="sub_nav single sub_nav_1">
          <li>
            <a href="/cn/idea.html?type=design&number=3" :class="{current: urlType == 'design'}">一体化设计</a>
            <a href="/cn/idea.html?type=value&number=3" :class="{current: urlType == 'value'}">价值发掘者</a>
            <a href="/cn/idea.html?type=completeness&number=3" :class="{current: urlType == 'completeness'}">高完成度</a>
          </li>
        </ol>
        <ol class="sub_nav sub_project sub_nav_2 clear_fix">
          <li class="location">
            <h4>地区</h4>
            <a href="/cn/project.html?type=华东" :class="{current: urlType == '华东'}">华东</a>
            <a href="/cn/project.html?type=华北" :class="{current: urlType == '华北'}">华北</a>
            <a href="/cn/project.html?type=华中" :class="{current: urlType == '华中'}">华中</a>
            <a href="/cn/project.html?type=华南" :class="{current: urlType == '华南'}">华南</a>
            <a href="/cn/project.html?type=西南" :class="{current: urlType == '西南'}">西南</a>
          </li>
          <li style="width: 220px;">
            <h4>类型</h4>
            <a href="/cn/project.html?type=商业+办公" :class="{current: urlType == '商业+办公'}">商业+办公</a>
            <a href="/cn/project.html?type=住宅" :class="{current: urlType == '住宅'}" style="width: 50px;">住宅</a>
            <a href="/cn/project.html?type=酒店" :class="{current: urlType == '酒店'}">酒店</a>
            <a href="/cn/project.html?type=旅游小镇" :class="{current: urlType == '旅游小镇'}">旅游小镇</a>
            <a href="/cn/project.html?type=文化" :class="{current: urlType == '文化'}" style="width: 50px;">文化</a>
            <a href="/cn/project.html?type=城市更新" :class="{current: urlType == '城市更新'}">城市更新</a>
          </li>
          <li>
            <h4>服务</h4>
            <a href="/cn/project.html?type=室内" :class="{current: urlType == '室内'}" style="width: 50px;">室内</a>
            <a href="/cn/project.html?type=一体化设计" :class="{current: urlType == '一体化设计'}">一体化设计</a>
            <a href="/cn/project.html?type=规划" :class="{current: urlType == '规划'}">规划</a>
            <a href="/cn/project.html?type=建筑" :class="{current: urlType == '建筑'}" style="width: 50px;">建筑</a>
          </li>
        </ol>
        <ol class="sub_nav single sub_nav_3">
          <li>
            <a href="/cn/news.html?type=news" :class="{current: urlType == 'news'}">新闻</a>
            <a href="/cn/news.html?type=articles" :class="{current: urlType == 'articles'}">出版物/文章</a>
            <a href="/cn/news.html?type=propaganda" :class="{current: urlType == 'propaganda'}">在网络媒体的宣传</a>
          </li>
        </ol>
        <ol class="sub_nav single sub_nav_4">
          <li>
            <a href="/cn/awards.html?type=award" :class="{current: urlType == 'award'}">奖项</a>
            <a href="/cn/member.html?type=member" :class="{current: urlType == 'member'}">核心团队</a>
            <a href="/cn/jobs.html?type=join" :class="{current: urlType == 'join'}">工作机会</a>
            <a href="/cn/contact.html?type=contact" :class="{current: urlType == 'contact'}">联系我们</a>
          </li>
        </ol>
    </div>
</template>

<script>

module.exports = {
    data : function(){
        return {
            urlType: ''
        }
    },
    created: function(){
        this.urlType = decodeURIComponent($.getUrlParam('type'))
    },
    mounted: function(){
        $(".nav_list li a").hover(function(){
            $('.sub_nav_'+$(this).data('index')).css('display','block').siblings('.sub_nav').css('display','none')
          })
          $(".sub_nav").mouseleave(function(){
            $(".sub_nav").css('display','none')
          })
          $(".nav").mouseleave(function(){
            $(".sub_nav").css('display','none')
          })
      },
    methods : {
        
    }
}
</script>

<style scoped>
</style>