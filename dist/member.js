!function(t){function e(r){if(n[r])return n[r].exports;var s=n[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=17)}([function(t,e,n){n(8);var r=n(2)(n(5),n(7),"data-v-77b83627",null);t.exports=r.exports},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},s=0;s<this.length;s++){var a=this[s][0];"number"==typeof a&&(r[a]=!0)}for(s=0;s<e.length;s++){var o=e[s];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(t,e){t.exports=function(t,e,n,r){var s,a=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(s=t,a=t.default);var c="function"==typeof a?a.options:a;if(e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),n&&(c._scopeId=n),r){var i=c.computed||(c.computed={});Object.keys(r).forEach(function(t){var e=r[t];i[t]=function(){return e}})}return{esModule:s,exports:a,options:c}}},function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=u[n.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](n.parts[s]);for(;s<n.parts.length;s++)r.parts.push(a(n.parts[s]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var o=[],s=0;s<n.parts.length;s++)o.push(a(n.parts[s]));u[n.id]={id:n.id,refs:1,parts:o}}}}function s(){var t=document.createElement("style");return t.type="text/css",p.appendChild(t),t}function a(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(v)return f;r.parentNode.removeChild(r)}if(m){var a=d++;r=h||(h=s()),e=o.bind(null,r,a,!1),n=o.bind(null,r,a,!0)}else r=s(),e=c.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function o(t,e,n,r){var s=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=_(e,s);else{var a=document.createTextNode(s),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(a,o[e]):t.appendChild(a)}}function c(t,e){var n=e.css,r=e.media,s=e.sourceMap;if(r&&t.setAttribute("media",r),s&&(n+="\n/*# sourceURL="+s.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(9),u={},p=i&&(document.head||document.getElementsByTagName("head")[0]),h=null,d=0,v=!1,f=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){v=n;var s=l(t,e);return r(s),function(e){for(var n=[],a=0;a<s.length;a++){var o=s[a],c=u[o.id];c.refs--,n.push(c)}e?(s=l(t,e),r(s)):s=[];for(var a=0;a<n.length;a++){var c=n[a];if(0===c.refs){for(var i=0;i<c.parts.length;i++)c.parts[i]();delete u[c.id]}}}};var _=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){n(12);var r=n(2)(null,n(11),"data-v-5685d235",null);t.exports=r.exports},function(t,e){t.exports={data:function(){return{urlType:""}},created:function(){this.urlType=decodeURIComponent($.getUrlParam("type"))},mounted:function(){$(".nav_list li a").hover(function(){$(".sub_nav_"+$(this).data("index")).css("display","block").siblings(".sub_nav").css("display","none")}),$(".sub_nav").mouseleave(function(){$(".sub_nav").css("display","none")}),$(".nav").mouseleave(function(){$(".sub_nav").css("display","none")})},methods:{}}},function(t,e,n){e=t.exports=n(1)(),e.push([t.i,"",""])},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav container"},[n("a",{staticClass:"logo",attrs:{href:"/cn/index.html"}}),t._v(" "),t._m(0),t._v(" "),n("ol",{staticClass:"sub_nav single sub_nav_1"},[n("li",[n("a",{class:{current:"design"==t.urlType},attrs:{href:"/cn/idea.html?type=design&number=3"}},[t._v("一体化设计")]),t._v(" "),n("a",{class:{current:"value"==t.urlType},attrs:{href:"/cn/idea.html?type=value&number=3"}},[t._v("价值发掘者")]),t._v(" "),n("a",{class:{current:"completeness"==t.urlType},attrs:{href:"/cn/idea.html?type=completeness&number=3"}},[t._v("高完成度")])])]),t._v(" "),n("ol",{staticClass:"sub_nav sub_project sub_nav_2 clear_fix"},[n("li",{staticClass:"location"},[n("h4",[t._v("地区")]),t._v(" "),n("a",{class:{current:"华东"==t.urlType},attrs:{href:"/cn/project.html?type=华东"}},[t._v("华东")]),t._v(" "),n("a",{class:{current:"华北"==t.urlType},attrs:{href:"/cn/project.html?type=华北"}},[t._v("华北")]),t._v(" "),n("a",{class:{current:"华中"==t.urlType},attrs:{href:"/cn/project.html?type=华中"}},[t._v("华中")]),t._v(" "),n("a",{class:{current:"华南"==t.urlType},attrs:{href:"/cn/project.html?type=华南"}},[t._v("华南")]),t._v(" "),n("a",{class:{current:"西南"==t.urlType},attrs:{href:"/cn/project.html?type=西南"}},[t._v("西南")])]),t._v(" "),n("li",{staticStyle:{width:"220px"}},[n("h4",[t._v("类型")]),t._v(" "),n("a",{class:{current:"商业+办公"==t.urlType},attrs:{href:"/cn/project.html?type=商业+办公"}},[t._v("商业+办公")]),t._v(" "),n("a",{class:{current:"住宅"==t.urlType},staticStyle:{width:"50px"},attrs:{href:"/cn/project.html?type=住宅"}},[t._v("住宅")]),t._v(" "),n("a",{class:{current:"酒店"==t.urlType},attrs:{href:"/cn/project.html?type=酒店"}},[t._v("酒店")]),t._v(" "),n("a",{class:{current:"旅游小镇"==t.urlType},attrs:{href:"/cn/project.html?type=旅游小镇"}},[t._v("旅游小镇")]),t._v(" "),n("a",{class:{current:"文化"==t.urlType},staticStyle:{width:"50px"},attrs:{href:"/cn/project.html?type=文化"}},[t._v("文化")]),t._v(" "),n("a",{class:{current:"城市更新"==t.urlType},attrs:{href:"/cn/project.html?type=城市更新"}},[t._v("城市更新")])]),t._v(" "),n("li",[n("h4",[t._v("服务")]),t._v(" "),n("a",{class:{current:"室内"==t.urlType},staticStyle:{width:"50px"},attrs:{href:"/cn/project.html?type=室内"}},[t._v("室内")]),t._v(" "),n("a",{class:{current:"一体化设计"==t.urlType},attrs:{href:"/cn/project.html?type=一体化设计"}},[t._v("一体化设计")]),t._v(" "),n("a",{class:{current:"规划"==t.urlType},attrs:{href:"/cn/project.html?type=规划"}},[t._v("规划")]),t._v(" "),n("a",{class:{current:"建筑"==t.urlType},staticStyle:{width:"50px"},attrs:{href:"/cn/project.html?type=建筑"}},[t._v("建筑")])])]),t._v(" "),n("ol",{staticClass:"sub_nav single sub_nav_3"},[n("li",[n("a",{class:{current:"news"==t.urlType},attrs:{href:"/cn/news.html?type=news"}},[t._v("新闻")]),t._v(" "),n("a",{class:{current:"articles"==t.urlType},attrs:{href:"/cn/news.html?type=articles"}},[t._v("出版物/文章")]),t._v(" "),n("a",{class:{current:"propaganda"==t.urlType},attrs:{href:"/cn/news.html?type=propaganda"}},[t._v("在网络媒体的宣传")])])]),t._v(" "),n("ol",{staticClass:"sub_nav single sub_nav_4"},[n("li",[n("a",{class:{current:"award"==t.urlType},attrs:{href:"/cn/awards.html?type=award"}},[t._v("奖项")]),t._v(" "),n("a",{class:{current:"member"==t.urlType},attrs:{href:"/cn/member.html?type=member"}},[t._v("核心团队")]),t._v(" "),n("a",{class:{current:"join"==t.urlType},attrs:{href:"/cn/jobs.html?type=join"}},[t._v("工作机会")]),t._v(" "),n("a",{class:{current:"contact"==t.urlType},attrs:{href:"/cn/contact.html?type=contact"}},[t._v("联系我们")])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"nav_list"},[n("li",[n("a",{attrs:{href:"/cn/index.html"}},[t._v("首页")])]),t._v(" "),n("li",[n("a",{attrs:{href:"javascript:void(0)","data-index":"1"}},[t._v("理念")])]),t._v(" "),n("li",[n("a",{attrs:{href:"javascript:void(0)","data-index":"2"}},[t._v("项目")])]),t._v(" "),n("li",[n("a",{attrs:{href:"javascript:void(0)","data-index":"3"}},[t._v("新闻/出版物")])]),t._v(" "),n("li",[n("a",{attrs:{href:"javascript:void(0)","data-index":"4"}},[t._v("关于我们")])])])}]}},function(t,e,n){var r=n(6);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(3)("2f55904e",r,!0)},function(t,e){t.exports=function(t,e){for(var n=[],r={},s=0;s<e.length;s++){var a=e[s],o=a[0],c=a[1],i=a[2],l=a[3],u={id:t+":"+s,css:c,media:i,sourceMap:l};r[o]?r[o].parts.push(u):n.push(r[o]={id:o,parts:[u]})}return n}},function(t,e,n){e=t.exports=n(1)(),e.push([t.i,"",""])},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"common_footer"},[n("h5",[t._v("上海都设营造建筑设计事务所有限公司")]),t._v(" "),n("h6",[t._v("DuShe Architectural Design Co.Ltd.,Shanghai")]),t._v(" "),n("h6",[t._v("沪ICP备"),n("a",{staticStyle:{color:"#bdbdbd"},attrs:{href:"http://www.beian.miit.gov.cn"}},[t._v("18038338号-1")])])])}]}},function(t,e,n){var r=n(10);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(3)("8cb140a0",r,!0)},,,,,function(t,e,n){var r=[{title:"董事/总建筑师",subtitle:"",img:"1",name:"凌克戈",school:"",honour:"国家一级注册建筑师",subhonour:"国家一级注册建筑师",content:["荣获2005上海市建筑学会青年建筑师奖；2005（上海）第四届国际建筑师作品展一等奖；2006获得中国建筑学会45岁以下最高个人奖青年建筑师奖；2007年重庆大学主楼获中国建筑最高奖詹天佑奖；2009年获得《中国大饭店》中国十大原创酒店设计师；2009入选上海10位最具大师潜质建筑师；2009年申通集团办公楼获上海市优秀勘察设计一等奖；2009年世博中心获上海市建筑学会创作奖优秀奖。扬州瘦西湖虹桥坊项目荣获2013年全国人居经典建筑规划设计规划金奖/上海市建筑学会第六届建筑创作佳作奖;南京白云亭文化艺术中心项目获得2015年上海市建筑学会第六届建筑创作佳作奖/2016中国建筑学会建筑创作奖入围项目（建筑保护与再利用类）；江阴嘉荷酒店2015年上海市建筑学会第六届建筑创作优秀奖/2016中国建筑学会建筑创作奖入围项目（建筑保护与再利用类）；鲅鱼圈保利大剧院及图书馆（金泰文化艺术广场）项目荣获2015年上海市建筑学会第六届建筑创作优秀奖/2016中国建筑学会建筑创作奖入围项目（城市设计类）2017-2018年度中国建筑学会建筑设计奖-建筑幕墙专业奖一等奖。","扬州虹桥坊、姑苏雅集、鲅鱼圈保利大剧院及图书馆、白云亭文化艺术中心、武汉西北湖双玺、北京恒泰广场、重庆大学建筑城规学院建卒厅改造、三亚棕榈泉度假区四季悬崖酒店 、厦门海悦山庄、三亚棕榈泉度假区四季沙滩酒店别墅区 、厦门东坪山高尔夫酒店、上海东郊宾馆北楼扩建、成都协信希尔顿酒店、重庆康德豪生酒店、绿地长岛艾美酒店、绿地三甲港铂瑞，铂骊，Q酒店集群"],contentawards:[]},{title:"创作总监",subtitle:"",img:"2",name:"胡威",school:"天津大学城市规划专业毕业",honour:"国家一级注册建筑师",subhonour:"国家一级注册建筑师",content:["江苏广电城项目荣获2009年全国工程勘察设计行业三等奖/2009年上海市优秀工程勘察设计一等奖；扬州瘦西湖虹桥坊项目荣获2013年全国人居经典建筑规划设计规划金奖/上海市建筑学会第六届建筑创作佳作奖。","江苏广电城、北京恒泰广场、扬州虹桥坊、成都协信中心办公楼及希尔顿酒店、永川协信中心、上海三甲港度假酒店群。"],contentawards:[]},{title:"技术总监",subtitle:"",img:"3",name:"王利民",school:"同济大学建筑学硕士毕业",honour:"国家一级注册建筑师",subhonour:"国家一级注册建筑师",content:["上海区域空中交通管制中心获得2005度上海市优秀工程设计二等奖；上海区域空中交通管制中心获得2005度建设部优秀勘察设计三等奖；上海区域空中交通管制中心第二届上海市建筑学会建筑创作奖佳作奖；东郊宾馆主楼、宴会楼获得2007度上海市优秀工程设计一等奖；福州世茂外滩花园2号楼获二ΟΟ八年上海市优秀住宅工程单体设计项目二等奖;扬州瘦西湖虹桥坊项目荣获2013年全国人居经典建筑规划设计规划金奖/上海市建筑学会第六届建筑创作佳作奖;南京白云亭文化艺术中心项目获得上海市建筑学会第六届建筑创作佳作奖/2016中国建筑学会建筑创作奖入围项目（建筑保护与再利用类）。","扬州瘦西湖虹桥坊、南京白云亭文化艺术中心、成都协信希尔顿酒店、上海三甲港度假酒店群、武汉西北湖双玺、苏州姑苏雅集。"]},{title:"副总经理",subtitle:"设计一部设计总监",img:"4",name:"刘轶佳",school:"同济大学建筑学硕士毕业",honour:"国家一级注册建筑师",subhonour:"国家一级注册建筑师",content:["扬州瘦西湖虹桥坊项目荣获2013年全国人居经典建筑规划设计规划金奖/上海市建筑学会第六届建筑创作佳作奖；江阴嘉荷精品酒店荣获2015年获上海市建筑学会创作奖优秀奖/2016中国建筑协会建筑创作奖入围项目（建筑保护与再利用类）。","江阴嘉荷精品酒店、成都协信希尔顿酒店、上海三甲港度假酒店群、绿地长岛艾美酒店及会议中心、扬州虹桥坊、烟台龙湖领导力学院。"]},{title:"运营总监（COO）",subtitle:"设计二部设计总监",img:"5",name:"徐燕宁",school:"",honour:"国家一级注册建筑师",subhonour:"国家一级注册建筑师 / 高级工程师 / PMP项目管理美国认证专业人员",content:["徐州洲际酒店  2014年优质服务奖；西安临潼悦椿温泉酒店 2015年上海市优秀勘察设计项目一等奖；亚特兰蒂斯水上乐园项目 2016年度优秀工程二等奖；镇江金山湖旅游设施建设项目 2016年度优秀方案佳作奖；上海市第二轮市级志书编撰酒店部分负责人。","三亚雅居乐希尔顿度假酒店、西安临潼悦椿温泉酒店、海南亚特兰蒂斯项目水上乐园工程、济南中弘广场17#地块商业酒店综合体项目、镇江金山湖旅游设施建设项目、徐州洲际酒店、三亚嘉悦海岸中心凯悦酒店群"]},{title:"设计三部设计总监",subtitle:"",img:"6",name:"黄瓯海",school:"",honour:"国家一级注册建筑师/高级工程师",subhonour:"国家一级注册建筑师/高级工程师",content:["荣获2017年上海市工程质量建设能手； 2010 世博会中国船舶馆获上海市建筑创作奖优秀奖、上海市优秀勘察设计二等奖；上海船厂2E2-4 地块 （陆家嘴展览中心） 获 2017 年上海市优秀勘察设计奖二等奖；苏州龙潭苑 获2012 年度上海市优秀勘察( 住宅小区) 设计奖二等奖。","上海世博会中国船舶馆、奥克兰丽丝卡尔顿酒店、上海静安万枫酒店、上海陆家嘴展览中心、杨浦区149街坊总部办公楼、仪征技师学院、宁波万科电商产业园"]},{title:"设计四部设计总监",subtitle:"",img:"7",name:"李炼",school:"",honour:"",content:["2018年加入上海都设营造建筑设计事务所有限公司，任设计四部设计总监。","佛山万科天傲湾、佛山万科翡翠滨江、成都万科五龙山九墅、成都万科公园5号"]},{title:"设计一部设计副总监",subtitle:"",img:"8",name:"熊文昱",school:"",honour:"国家一级注册建筑师",subhonour:"国家一级注册建筑师",content:["轨道交通十号线吴中路停车场地块项目荣获，2017年度上海优秀勘察设计项目三等奖，上海市创新城市品质建筑奖。","长沙宜家购物中心、黄浦区160街坊保护性综合改造项目、轨道交通十号线吴中路停车场地块项目、昆明润城第二大道项目、昆明天娇城四期商业项目"]},{title:"设计二部设计副总监",subtitle:"",img:"9",name:"孔君涛",school:"",honour:"",subhonour:"",content:["设计二部副总监孔君涛，是中国清华大学建筑学学士、硕士，硕士毕业论文《商务区设计控制研究—以上海虹桥商务区08地块为例》获清华大学建筑学院优秀毕业论文。","广西百色干部学院、上海张江中区C-5-2商办项目、安徽黄山鲁徽大酒店、安徽合肥翡翠湖迎宾馆扩建工程、北京会议中心一号楼改建项目、安徽合肥为民服务中心、武汉鄂旅投珞珈国际项目等。其中广西百色干部学院获第七届上海建筑学会建筑创作奖优秀奖、2017年度上海市优秀工程设计一等奖。安徽黄山鲁徽商会酒店获第七届上海市建筑学会建筑创作奖佳作奖。 "]}],s=n(0),a=n(4);new Vue({el:"#app",components:{duHeader:s,duFooter:a},data:{contentList:r,mask:{},imgIndex:0,show_mask:!1},computed:{},created:function(){},mounted:function(){var t=(document.body.clientWidth,document.documentElement.clientWidth),e=document.documentElement.clientHeight;$(".mask_cotent").css({width:(.6*t).toFixed(2),height:(.8*e).toFixed(2),top:"10%",left:"20%"}),$(window).resize(function(){var t=(document.body.clientWidth,document.documentElement.clientWidth),e=document.documentElement.clientHeight;$(".mask_cotent").css({width:(.6*t).toFixed(2),height:(.8*e).toFixed(2),top:"10%",left:"20%"})})},methods:{showDetail:function(t){this.mask=t,setTimeout(function(){$(".mask").show()},200)},closeMask:function(){$(".mask").hide(),this.imgIndex=-1,this.mask={}}}})}]);
//# sourceMappingURL=member.js.map