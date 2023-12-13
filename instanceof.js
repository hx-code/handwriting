function instanceOf(target, type){
    type = type.prototype
    target = target.__proto__;

    while(true){
        if(target === null){
            return false
        }
        if(target === type)
        target = target.__proto__;
        

    }
}
























