function PromiseAll(promises){
    return new Promise((resolve, reject)=>{
        let res = []
        let cnt = 0;
        for(let i = 0; i < promises.length; i++){
           promises[i].then((val)=>{
            res[i] = val
            cnt++
            if(cnt === promises.length){
                resolve(res)
            }
           },(err)=>{
            reject(err)
           })
        }
    })
}