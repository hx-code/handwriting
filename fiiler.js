Array.prototype.MyFilter = function(cb){
     var _arr = this
     var _len = _arr.length
     var _arg2 = arguments[1] || window
     var _newArr = []
     var _item;
     for(let i = 0; i <_len; i++){
        _item =deepClone(_arr[i])
        cb.apply(_arg2 ,[_item, i ,_arr])? _newArr.push(_item) :''

     }
     return _newArr

}