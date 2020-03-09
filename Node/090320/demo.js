function max(a,b,callbackFn){
    if(a>b){
        callbackFn(a)
    }else{
        callbackFn(b)
    }
}

max(22,13,(result)=>{
    console.log(result)
})