Function.prototype.myBind = function (context) {  
    var self = this;  // 保留原始函数  
    // 获取bind()方法传入的多个参数  
    var args = Array.prototype.slice.call(arguments, 1);    
    // 返回一个新函数  
    return function () {  
        // 堆栈中保存的是bind()方法传入的参数  
        var bindArgs = Array.prototype.slice.call(arguments);    
        // 执行函数  
        return self.apply(context, args.concat(bindArgs));    
    }  
};

// bind ->第一个参数 -> test -> this ->{a: 1, b :2}
// bind 接收一部分参数 返回的新函数接收一部分参数
// bind& call 的函数参数是一样的
// 实例化返回的新函数-> this指向的是test新实例