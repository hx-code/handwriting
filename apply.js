Function.prototype.myApply = function(ctx, args){
    ctx = ctx ? Object(ctx) : window
    ctx.originFn = this
    if(typeof args !== 'object' && typeof args !== 'function'){
        throw new TypeError('')
    }
    if(!args || typeof(args) != 'Array'){
        return ctx.originFn()
    }
    var ret = eval('ctx.originFn('+ args + ')')
    delete ctx.originFn
    return ret

}