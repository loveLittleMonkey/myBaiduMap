// 定义自定义覆盖物的构造函数
function SquareOverlay (center, length, color) {
  this._center = center
  this._length = length
  this._color = color
}
// 继承 API 的 BMap.Overlay
SquareOverlay.prototype = new BMap.Overlay()

// 实现初始化方法
SquareOverlay.prototype.initialize = function (map) {
  // 保存 map 对象实例
  this._map = map
  // 创建 div 元素，作为自定义覆盖物的容器
  var div = document.createElement('div')
  div.style.position = 'absolute'
  div.className = 'myMarker'
  // 可以根据参数设置元素外观
  div.style.width = this._length + 'px'
  div.style.height = this._length + 'px'
  // div.style.background = this._color
  div.style.background = 'url("./static/images/img.png") no-repeat' 
  div.style.backgroundSize = 'cover'

  // var image =  document.createElement("img")
  // image.src = 'static/images/img.png'
  // image.style.width = this._length + 'px'
  // image.style.height = this._length + 'px'
  // div.appendChild(image)

  tmpfun = map.onclick;
  map.onclick = null;
  div.addEventListener("touchstart", function() {    
    map.onclick = tmpfun;
  })

  // 将 div 添加到覆盖物容器中
  map.getPanes().markerPane.appendChild(div)
  // 保存 div 实例
  this._div = div
  // 需要将 div 元素作为方法的返回值，当调用该覆盖物的 show、
  // hide 方法，或者对覆盖物进行移除时，API 都将操作此元素。
  return div
}

// 实现绘制方法
SquareOverlay.prototype.draw = function () {
  // 根据地理坐标转换为像素坐标，并设置给容器
  var position = this._map.pointToOverlayPixel(this._center)
  this._div.style.left = position.x - this._length / 2 + 'px'
  this._div.style.top = position.y - this._length / 2 + 'px'
}

// 实现显示方法
SquareOverlay.prototype.show = function () {
  if (this._div) {
    this._div.style.display = ''
  }
}
// 实现隐藏方法
SquareOverlay.prototype.hide = function () {
  if (this._div) {
    this._div.style.display = 'none'
  }
}

// 添加监听事件
SquareOverlay.prototype.addEventListener = function (event, fun) {  
  this._div['on' + event] = fun
}

module.exports = SquareOverlay
