function myNews(){
    var constructor = [].shift.call(arguments),
    _this = {}
    _this__proto__ = constructor.prototype
    constructor.apply(_this, arguments)
    return _this
}