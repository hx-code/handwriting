Array.prototype.myReduce = function(cb, initialValue){
    var _arr = this
    var _len = _arr.length
    var arg2 = arguments[2] || window
    var _item

    for(var i = 0; i <_len; i++){
        _item = deepClone(_arr[i])
        initialValue = cb.apply(arg2,[initialValue,_item, i, _arr])
    }
    return initialValue

}