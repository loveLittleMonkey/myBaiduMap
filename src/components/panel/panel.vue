<template>
  <div class="message">
    <span class="glyphicon glyphicon-star" aria-hidden="true"></span><span class="message_name">&nbsp{{point.name}}</span><br>
    <span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>&nbsp&nbsp{{point.address}}<br>
    <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>&nbsp&nbsp{{point.description}}<br>
    <span class="glyphicon glyphicon-tags" aria-hidden="true"></span>&nbsp&nbsp
    <li v-for="(value, key, index) in point.label" :key="index">
      {{value}}
    </li>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    point: {
      type: Object
    },
    map: {
      type: Object
    }
  },
  mount () {
    console.log('panel is created')
  }
}
</script>

<style>
  .message {
    background: white;
    width: 100%;
    height: 20%;
    position: absolute;
    bottom: 0;
    overflow: scroll;
    padding-left: 10px
  }
  .message_name {
    font-family : 微软雅黑,宋体;
    font-size : 2em;
  }
  li {
    display: inline;
  }
</style>

