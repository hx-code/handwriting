function throttle(fn, delay){
    var t = null
    begin = new Date().getTime()
    return function(){
        var _self = this
        var args = arguments
        cur = new Date().getTime()
        clearTimeout(t)
        if(cur - begin >=delay){
            fn.apply(_self, args)
            begin = cur
        }else{
            t = setTimeout(() => {
                fn.apply(_self, args)
                
            }, delay);
        }

    }

}