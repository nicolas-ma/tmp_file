window.Util = {}
Util.randint(n) 返回小于n的随机整数
Util.fullScreen() window.scrollTo(1,1)
Util.getContext(canvas) 获取canvas上下文
Util.extend(orig,obj) 将obj属性扩充到orig中
Util.calcPieces(img,tmpl)  计算可以将这个图片分成多少块
Util.addEvent = addEvent(elem,event,callback) 给elem绑定什么事件
Util.$ 就是 jquery 的$