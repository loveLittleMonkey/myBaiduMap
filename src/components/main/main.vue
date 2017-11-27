<template>
  <div>
    <div id="container"></div>
    <div v-for="point in points" :key=point.id>
      <v-marker :point='point' :map='map' v-on:clickEvent="showMessage" v-on:touchstartEvent="showMessage"></v-marker>
    </div>
    <v-panel v-if="markerIsClick" :map='map' :point='point_message'></v-panel>
  </div>
</template>

<script>
import marker from '../marker/marker'
import panel from '../panel/panel'
import BMap from 'BMap'
import axios from 'axios'
const ERR_OK = 0
export default {
  data () {
    return {
      points: [],
      // 获取得到的是数组，不是对象
      map: {},
      markerIsClick: false,
      point_message: {}
    }
  },
  mounted () {
    let self = this
    // 绘制地图
    var map = new BMap.Map('container')
    self.map = map
    var point = new BMap.Point(113.275, 23.117)
    map.centerAndZoom(point, 12)
    // 增加控件
    var opts = {offset: new BMap.Size(0, 200)}
    map.addControl(new BMap.NavigationControl(opts))
    map.addEventListener('click', function () {
      self.whereClick(event)
    })
    // 异步获取得到json数据
    axios.get('/api/points')
      .then(function (response) {
        response = response.data
        if (response.errno === ERR_OK) {
          self.points = response.data
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {
    // 父组件监听到了子组件marker 被点击了，修改message 的状态，显示信息的面板
    showMessage (data) {
      let self = this
      self.point_message = self.points[data]
      console.log('markerIsClick change')
      self.markerIsClick = true
    },
    whereClick (event) {
      let self = this
      // 地图监听点击事件，如果点击了地图那么状态为FALSE
      // 先判断是不是marker
      // 如果是marker,这个时候marker更改了markerIsClick,div不做操作
      // 如果不是，看marker的状态，如果是false，不管，是更改为FALSE
      self.map.addEventListener('click', self.changeMarkerIsClick(event), false)
    },
    changeMarkerIsClick (event) {
      let self = this
      if (event.target.className !== 'myMarker') {
        self.markerIsClick = false
      }
    }
  },
  components: {
    'v-marker': marker,
    'v-panel': panel
  }
}
</script>

<style>
#container{
  width: 100%;
  height:90%;
  position: absolute;;
  top: 10%
}
</style>
