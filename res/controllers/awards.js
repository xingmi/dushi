var header = require('../components/Header.vue') 
var footer = require('../components/Footer.vue') 

var type = decodeURIComponent($.getUrlParam('type'))

var app = new Vue({
  el: '#app',
  components: {
    'duHeader' : header,
    'duFooter' : footer
  },
  data: {
    type
  },
  created: function(){
   
  },
  mounted: function(){
  }
})
