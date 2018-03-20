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
Cache = {}
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
addEventListener(ele,type,callback) 添加事件监听