Function.prototype.myCall = function(ctx){
    ctx = ctx ? Object(ctx) : window
    ctx.originFn = this; // 引用
    // 拿到myCall的第二个参数开始到结束的所有参数作为test 的实参列表
    var args = []

    for(let i = 1; i < arguments.length; i++){
        args.push('arguments['+ i +']')

    }
// args + 字符串 -> args 展开平铺到fn的实参中去
 var ret = eval('ctx.originFn('+ args +')')
 delete ctx.originFn
 return ret

}
