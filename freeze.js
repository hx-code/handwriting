const o = {
    a:1,
    b:2,
    c:{
        d:3,
        e:{
            f:4
        }
    }
}
function deepFreeze(o){
    var _key  = Object.getOwnPropertyNames(o)
    if(_key.length > 0){
        _key.forEach(function(k){
            var _value = o[k]
            if(typeof _value ==='object'&&_value !== null){
                deepFreeze(_value)
            }
        })
    }
    return Object.freeze(o)
}