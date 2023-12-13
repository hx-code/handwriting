Object.deepSeal = function(o){
    var _keys = Object.getOwnPropertyNames(o)
    if(_key.length > 0){
        _keys.forEach(k =>{
            var _value = o[k]

            if(typeof _value === 'object' && _value !== null){
               Object.deepSeal(_value)
            }
        })
    }
    return Object.seal(o)
}