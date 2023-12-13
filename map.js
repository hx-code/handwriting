Array.prototype.myMap = function(cb) {  
    var _arr = this;  
    var _len = _arr.length; // 这里应该使用 _arr，而不是 _len  
    var _arg2 = arguments[1] || window;  
    var _newArr = [];  
    for (let i = 0; i < _len; i++) {  
        _newArr.push(cb.apply(_arg2, [_arr[i], i, _arr]));  
    }  
    return _newArr;  
};