<template>
  <div id="message">
    <div v-for="point in points" :key=point.id class="pointShow">
        <div class="name"><h3>{{point.name}}</h3></div>
        <div class="address"><span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>&nbsp&nbsp{{point.address}}</div>
        <div class="description"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span>&nbsp&nbsp{{point.description}}</div>
        <div class="labels">
          <span class="glyphicon glyphicon-tags" aria-hidden="true"></span>&nbsp&nbsp
          <li v-for="(value, key, index) in point.label" :key="index">
            {{value}}
          </li>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
const ERR_OK = 0
export default {
  name: 'message',
  data () {
    return {
      points: []
    }
  },
  mounted () {
    let self = this
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
  }
}
</script>

<style>
  #message {
    height: 90%;
    overflow: scroll;
    position: absolute;
    top: 10%;

  }
  .pointShow {
      background: white;
      padding: 10px;
      margin: 10px;
      border: 2px dashed gray;
  }
  li {
    display: inline;
  }
</style>
