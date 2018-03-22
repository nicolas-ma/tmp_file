check_position(f1, f2)

Class Piece => Shape 的子类 
__|Attrs:=>
--|--|this.tx = this.x + this.width/2(中心走你)
--|--|this.ty = this.y + this.height/2
--|--|this.x = -this.width/2
--|--|this.y = -this.height/2
------------------------------------
--|type:"piece"
--|init(x,y,img,width,height,edges)
--|draw_path(ctx)
--|render(ox,oy)
--|outside(ctx,w,h,cx,cy)
--|inside(ctx,w,h,cx,cy)
--|draw(ctx)'
--|check(other)
--|hitTest(point)
--|rmove(x,y) this.tx+=x,this.ty+=y 

Class Group => Shape 的子类
--|type:"group"
--|init() =>一个pieces的组  _super(0,0)
--|draw(ctx)
--|hitTest(point) 返回true或false , Group的tx,ty为点击的piece的坐标
--|check(other) 检测什么..........
--|rmove(x,y) =>move each piece  piece.rmove(x,y) this.tx = this._current.tx; this.ty = this._current.ty
--|draw_path(ctx) =>画路径
--|



