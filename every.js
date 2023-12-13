Array.prototype.myEvery = function(cb){
    var _arr = this
    var _len = _arr.length
    var arg2 = arguments[1] || window
    var _res = true

    for(let i = 0; i <_len; i++){
       if(!cb.apply(arg2,[_arr[i], i, _arr])){
        res = false
        break
       }
    }
    return _res
}   