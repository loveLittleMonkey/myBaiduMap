<template>
  
</template>

<script>
import BMap from 'BMap'
import SquareOverlay from '../../../static/js/SquareOverlay'

export default {
  props: {
    point: {
      type: Object
    },
    map: {
      type: Object
    }
  },
  mounted () {
    let self = this
    var location = new BMap.Point(self.point.location.lat, self.point.location.lng)

    // 生成的标注
    var myMarker = new SquareOverlay(location, 15, 'red')
    // 自带标注
    // var myMarker = new BMap.Marker(location);
    
    self.map.addOverlay(myMarker);

    myMarker.addEventListener('click', function () {
      console.log('a marker is click')
      self.$emit('clickEvent', self.point.id)
    })

    myMarker.addEventListener('touchstart', function () {
      console.log('a marker is touch')
      self.$emit('touchstartEvent', self.point.id)
    })
  }
}
</script>
