var obj = {  
    name: "何旭",  
    age: 18,  
    info: {  
        hobby: ['football', 'pinia', { a: 1 }],  
        career: {  
            teacher: 4,  
            engineer: 9  
        }  
    }  
};  

function deepClone(origin,target){
    var tar = target || {}
    var toStr = Object.prototype.toString
    var arrType = '[Object Array]';
    for( var k in  obj){
       if(origin.hasOwnProperty(k)){
        if(typeof origin[k] === 'object' && origin[k] !== null){
         tar[k] =  toStr.call(origin[k]) === arrType ? []: {};
            deepClone(origin[k], tar[k])
        }else{
            tar[k] = origin[k]
        }
       }
    }

    return tar
}
const newObj = deepClone(obj,{})
console.log(newObj);