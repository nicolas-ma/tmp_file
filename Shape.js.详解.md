math = Math
PI = math.PI 
TWOPI = 2 * PI 
DEGREE = PI / 180  角度转化弧度的系数
sqrt = math.sqrt 开根
pow = math.pow 米
cos = math.cos 
sin = math.sin
round = math.round 最接近的整数
abs = math.abs 绝对值
acos = math.acos 反cos 得出角度,
atan2 = math.atan2 反tan正切， 反应出在坐标系的角度
hasOwnProperty = Object.prototype.hasOwnProperty 判定是否为自身的属性
slice = Array.prototype.slice 切片
defaultStyle = 
--|tx: 0
--|ty: 0
--|scaleX: 1
--|scaleY: 1
--|skewX: 0
--|skewY: 0
--|fill: "#000"
--|stroke: ""
--|lineWidth:1
--|lineJoin: "miter"
--|lineCap: "butt"
--|alpha: 1
--|rotation: 0
--|composite: "source-over",
--|shadowColor: "rgba(0, 0, 0, 0.0)",
--|shadowOffsetX: 0,
--|shadowOffsetY: 0,
--|shadowBlur: 0,
--|fontStyle: "normal",
--|fontWeight: "normal",
--|fontSize: 10,
--|fontFamily: "Arial"
cv = Canvas
testCtx Canvas构图环境
distance(p1,p2) 两点的距离
distanceToLine(x1,y1,x2,y2,point) 点到线的距离
rotate(x,y,angle) 旋转angle后的坐标
extend(orig,obj) 将obj属性进入orig

Class Shape
--Attrs
----|this.x 
----|this.y 
--|tx: 0 tranlate的x量
--|ty: 0 translate的y量
--|scaleX: 1
--|scaleY: 1
--|skewX: 0
--|skewY: 0
--|fill: "#000"
--|stroke: ""
--|lineWidth:1
--|lineJoin: "miter"
--|lineCap: "butt"
--|alpha: 1
--|rotation: 0
--|composite: "source-over",
--|shadowColor: "rgba(0, 0, 0, 0.0)",
--|shadowOffsetX: 0,
--|shadowOffsetY: 0,
--|shadowBlur: 0,
--|fontStyle: "normal",
--|fontWeight: "normal",
--|fontSize: 10,
--|fontFamily: "Arial"
--init()
--position() 得到形变之后的位置
--rmove(x,y) 位移x,y后的 tx,ty
--attr(attrs,value) 给Shape赋予属性
--applyStyle(ctx) 将ctxd的属性设置为 Shape自带的属性
--setTransform(ctx) 将ctx 设置 transform 矩阵
--draw(ctx) 没有这个功能
--fill_or_stroke(ctx) 自动检测 是否描边或填充
--hitTest(point) 点击测试 point是否在 canvas环境中
