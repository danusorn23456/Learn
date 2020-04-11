let promise = (new Promise((reslove,reject)=>{
    let array = [];
    for(let i = 0; i < 5 ;i++){
        array.push(i)
    }
    reslove(array)
}))

promise.then((result)=>{
    console.log(result);
})

setTimeoutToLog=(str,ms)=>{
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            console.log(str);
            reslove(str);
        },ms)
    })
}

setTimeoutToLog('a',1000)
.then(()=>{
    return setTimeoutToLog('b',1000)
})
.then(()=>{
    return setTimeoutToLog('c',1000)
})
.then(()=>{
    return setTimeoutToLog('d',1000)
})
.catch(()=>{
    
})

async function log(){
    let a = await setTimeoutToLog('a',1000);
    let b = await setTimeoutToLog(`${a} b`,1000);
    let c = await setTimeoutToLog(`${b} c`,1000);
}

log()