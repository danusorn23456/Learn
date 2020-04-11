//asyn
setTimeout(() => {
    console.log('hi')
}, 1000)

/*asyn can do with 2 type
1:promise
2.callback
*/

Array.prototype.myFunctionMap = function (callbackfn) {
    let array = [];
    for (let i = 0; i < this.length; i++) {
        let isTrue = callbackfn(this[i], i, this);
        if(isTrue == true){
            array.push(this[i])
        }
    }
    return array;
}


let x = [1, 2, 3];
let y = x.myFunctionMap((item) => item % 2 == 0)
console.log(y)
