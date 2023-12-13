Array.prototype.ReduceRight = function(cb, initialValue){
    var _arr = this
    var _len = _arr.length
    var arg2 = arguments[2] || window
    var _item

    for(var i = _len; i > 0; i--){
        _item = deepClone(_arr[i])
        initialValue = cb.apply(arg2,[initialValue,_item, i, _arr])
    }
    return initialValue

}