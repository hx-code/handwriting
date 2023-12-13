var types = {
        '[object Object]' :'Object',
        '[object Array]' : 'Array',
        '[object Number]' :'Number',
        '[object String]' : 'String',
        '[object Boolean]':'Boolean'

}
if(typeof(value) === 'object'){
    res =[({}).toString.call(value)]
    var type = types[res]
}