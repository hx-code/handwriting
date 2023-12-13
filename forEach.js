Array.prototype.myForeach = function(cb){
    var _arr= this;
    var _len = _arr.length;
    var _arg2 = arguments[1] || window
    for(let i = 0 ; i < _len; i++){
        cb.apply(_arg2, [_arr[i],i,_arr ])
    }
    
}