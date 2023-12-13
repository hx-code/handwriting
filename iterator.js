//生成器-> 生成 返回一个迭代器
// function * generator(arr){
//     for(var v of arr){
//         yield v;
//     }
// }
// const iterator = generator(arr)
// console.log(iterator.next().value);
// console.log(iterator.next().value);
 function generator(){
    let nextIndex  = 0
    var _this = this
    return{
        next(){
            return nextIndex < _this.length
            ?
            {value:_this[nextIndex++], done:false}
            :
            {value:undefined, done:true}
        }
    }


 }