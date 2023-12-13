function PromiseRace(promises) {  
    return new Promise((resolve, reject) => {  
        for (const p of promises) {  
            p.then(resolve, reject);  
        }  
    });  
}