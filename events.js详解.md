传入参数(window, doc, undefined)
toString()转字符串函数
func = "function"
string = "string"
array = 'array'
object = "object"
USE_MOUSE_OVER_OUT = false
Instances = [] 实例数组
TOUCH_MOVE = false 
isTouchDevice = null
isIE = window.G_vmlCanvasManager 
changeKeypress = "webkit" of 'msie'
SELECTOR = 正则判定是非＃开头等等
mouseButtons = ['', "LEFT", "CENTER", 'RIGHT']
eventQueue = []
currentCanvas = null
curDrag = null
inDrag = false
hash = "Cevent1233455"数字随启动的现实时间变化
uuid = 0
Cache = {}  =>{id:{name:data}}
requestAnimation = 兼容函数
is = (obj,type) 判定obj是否为type
each(arr,callback) arr里元素循环调用 callback(a,b) a为递归到的元素，b为index
removeElement(arr,item) 将item从arr中移除并且返回item的值
indexOf(a,e) 返回e 在 a中的位置
eventsMap = {
	click: "touchstart",
	mousedown: "touchstart",
	mousemove:"touchmove",
	mouseup:"touchend"
} // 事件映射
normalizeEvent(e) 阻止事件的默认行为，阻止事件的传播（只作用点到的元素）
touchEventHandler(callback,type)转化成 func(event) func里执行callback并将事件e传入进去 与addEve配合使用
(就是将一个callback函数转化为 接触事件)
addEventListener(ele,type,callback) 添加事件监听，内部使用touchEventHandler()过滤callback
findPosition(obj) 返回obj的绝对坐标
data(obj, name, data) 将Cache添加数据,并且返回 有name 返回 data,没有name 返回{} 
removeData(obj,name) 将name对应的数据从Cache中删除
addEvent(obj,eventType,fn) 将eventType组 依次将handlers.push(fn)
handleEvent(obj,handlers,context,event)处理事件 将handlers依次处理，返回是否全部处理的状态
colectEvent(shape,eventType,e,self) 收集函数 将{shape,shapeHandlers}{shape,globalHandlers}push进eventQueue
fireEvents(context,event)点燃事件 将eventQueue里事件全部清空, canvas重绘制(context.redraw())
getObjectUnderCursor(e,self) 将shapes里的shape进行检测 返回第一个hittest的shape
mousemove(self,curHover) return function(e) 内部处理逻辑
mousedown(self) return func(e) 内部处理逻辑
mouseup(self) return func(e) 内部处理逻辑
click(self) return func(e) 内部处理逻辑
dblclick(self) return func(e) 内部处理逻辑
keyevent(type,self)  return func(e) 内部处理逻辑
Cevent(canvas,shapes) 内部兼容ie 返回 new Cevent.fn.init(canvas,shapes)
Cevent.fn = Cevent.prototype={}
..init: 初始化
..updateCache: 刷新 Cache 
..calcCanvasPosition: 计算canvas位置
..get(i) i<0从后往前查找，i>0从前往后查找, 返回this._shapes[i] 可能是某个形状
..getAll(selector) selector为*获得所有shapes selector 为＃开头，则返回选中图形
..remove(shape) 将shape从 this._shapes移除 ，shape. hash 对应数据从Cache中移除
..addId(id) this._last带查找
..removeId this._last 
..find(selector) 先ret = [get all shapes] return Cevent(this.cv, ret[0])
..attr(attrs,value) shapes = this._last shape.attr(attrs,value)
..rotate(angle) return this.attr({rotation:angle})
..translate(x,y) return this.attr({tx:x,ty:y})
..scale(x,y) return this.attr({scaleX:x,scaleY:y})
..skewX(val) return this.attr({skewX:val})
..skewY(val) return this.attr({skewY:val})
..zoomTo(value) value == "string" this.__zoom = value 
..zoomIn return  this.zoomTo(this.__zoom+.1)
..zoomOut return this.zoomTo(this.__zoom-.1)
..setGlobalKeyEvents(v) this.__setGlobalKeyEvents == !!v return this
..bind(name, fn, obj) obj=shape ,addEvent(shape,name,fn)
..beforeDraw(fn) this.__beforeDraw = fn 
..afterDraw(fn) this.__afterDraw = fn 
..clear(x,y,width,height) 清除所给参数的画布 clearRect()
..draw() shpaes = this._shapes  loop shape draw ctx.restore() return this;
..redraw() 先clear then draw()
..loop(fn) 循环播放函数 play_flag tdata=data(this.cv) tdata.loop = fn fn=tdata.loop play_flag=this.play = ++uuid frameCount++1
..frameCount:0
..stop() delete this.play return this 
Cevent.fn.init.prototype = Cevent.prototype 
Cevent.addEventListener = addEventListener
makeLive(selector,fn) 达到条件 fn.call(this.self,e)
each([鼠标事件],func(name))=> Cevent.fn[name] = func(fn,match){fn = makeLive(fn,match) return this.bind(name,fn,obj)}
each(["keydown keypress keyup"],func(name))=>Cevent.fn[name] = func(combi,fn){this.bind(combi,fn,dat(this.cv,name))}
if(changeKeypress){
	Cevent.fn.keypress = Cevent.fn.keydown;
}
Cevent.fn.drag(handlers){}
Cevent.registre = Cevent.register(name,Class)
addEventListener(doc,"mousedown",function(e){}) = >返回currentCanvas点击的目标
Cevent.isTouchDevice = isTouchDevice 
window.Cevent = Cevent;

传入 this, document
通过shapes.js Cevent被扩充了
..distance:distance
..__zoom:1
..Shape:Shape 
..setContext(ctx)
..polygon:plolygon
..ellipse:ellipse 
.
.
.