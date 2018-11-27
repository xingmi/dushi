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
            <a href="javascript:void(0)">一体化设计</a>
            <a href="javascript:void(0)">价值发掘者</a>
            <a href="javascript:void(0)">高完成度</a>
          </li>
        </ol>
        <ol class="sub_nav sub_project sub_nav_2 clear_fix">
          <li class="location">
            <h4>地区</h4>
            <a href="project.html?type=华东" :class="{current: urlType == '华东'}">华东</a>
            <a href="project.html?type=华北" :class="{current: urlType == '华北'}">华北</a>
            <a href="project.html?type=华中" :class="{current: urlType == '华中'}">华中</a>
            <a href="project.html?type=华南" :class="{current: urlType == '华南'}">华南</a>
            <a href="project.html?type=西南" :class="{current: urlType == '西南'}">西南</a>
          </li>
          <li>
            <h4>类型</h4>
            <a href="project.html?type=商业+办公" :class="{current: urlType == '商业+办公'}">商业+办公</a>
            <a href="project.html?type=住宅" :class="{current: urlType == '住宅'}">住宅</a>
            <a href="project.html?type=酒店" :class="{current: urlType == '酒店'}">酒店</a>
            <a href="project.html?type=旅游小镇" :class="{current: urlType == '旅游小镇'}">旅游小镇</a>
            <a href="project.html?type=文化" :class="{current: urlType == '文化'}">文化</a>
            <a href="project.html?type=城市更新" :class="{current: urlType == '城市更新'}">城市更新</a>
          </li>
          <li>
            <h4>服务</h4>
            <a href="project.html?type=设计总协调" :class="{current: urlType == '设计总协调'}">设计总协调</a>
            <a href="project.html?type=室内" :class="{current: urlType == '室内'}">室内</a>
            <a href="project.html?type=一体化设计" :class="{current: urlType == '一体化设计'}">一体化设计</a>
            <a href="project.html?type=规划" :class="{current: urlType == '规划'}">规划</a>
            <a href="project.html?type=建筑" :class="{current: urlType == '建筑'}">建筑</a>
          </li>
          <li>
            <h4>研究项目</h4>
            <a href="javascript:void(0)"></a>
            <a href="javascript:void(0)"></a>
            <a href="javascript:void(0)"></a>
            <a href="javascript:void(0)"></a>
            <a href="javascript:void(0)"></a>
            <a href="javascript:void(0)"></a>
          </li>
        </ol>
        <ol class="sub_nav single sub_nav_3">
          <li>
            <a href="">新闻</a>
            <a href="">出版物/文章</a>
            <a href="">在网络媒体的宣传</a>
          </li>
        </ol>
        <ol class="sub_nav single sub_nav_4">
          <li>
            <a href="">奖项</a>
            <a href="">主要成员</a>
            <a href="">工作机会</a>
            <a href="">联系我们</a>
            <a href="">管理结构</a>
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
            console.log('sub_nav_'+$(this).data('index'))
            $('.sub_nav_'+$(this).data('index')).css('display','block').siblings('.sub_nav').css('display','none')
          })
          $(".sub_nav").mouseleave(function(){
            $(".sub_nav").css('display','none')
          })
      },
    methods : {
        
    }
}
</script>

<style scoped>
</style>