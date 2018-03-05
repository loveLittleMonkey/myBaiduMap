<template>
  <div id='header'>
    <div id="controller" class="row">
      <div class="col-xs-6 col-sm-4 col-xs-offset-1 col-sm-offset-3">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="输入关键词...">
          <span class="input-group-btn">
            <button class="btn btn-default" type="button">搜索</button>
          </span>
        </div><!-- /input-group -->
      </div>
      <div class="col-xs-4 col-sm-2">
        <button type="button" class="btn btn-default col-lg-6" v-on:click="router_push">切换面板</button>
      </div>   
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: '/'
    }
  },
  methods: {
    router_push () {
      // 判断浏览器中的url 是否有main message,好方便切换路由
      var self = this
      var href = window.location.href
      var re1 = /main/
      var re2 = /message/
      var isMain = re1.test(href)
      var isMessage = re2.test(href)
      if (isMain === true && isMessage === false) {
        self.url = 'message'
      } else if (isMain === false && isMessage === true) {
        self.url = 'main'
      } else if (isMain === false && isMessage === false) {
        self.url = 'message'
      }
      self.$router.push(self.url)
    }
  }
}
</script>

<style>
  #header{
    height: 10%;
    width: 100%;
    text-align: center;
  }
  #controller{
    height: 50px;
    width: 100%; 
    position: relative; 
    top: 10px;
  }
</style>
