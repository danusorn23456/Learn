// setTimeout(() => {
//     console.log('a')
//     setTimeout(() => {
//         console.log('b')
//         setTimeout(() => {
//             console.log('c')
//             setTimeout(() => {
//                 console.log('d')
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)


// function setTimeoutAndLog(input) {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log(input)// setTimeout(() => {
//     console.log('a')
//     setTimeout(() => {
//         console.log('b')
//         setTimeout(() => {
//             console.log('c')
//             setTimeout(() => {
//                 console.log('d')
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)


// function setTimeoutAndLog(input) {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log(input)
//             resolve()
//         },1000)
//     })
// }

// setTimeoutAndLog('a').then(()=>{
//     return setTimeoutAndLog('b')
// }).then(()=>{
//             resolve()
//         },1000)
//     })
// }

// setTimeoutAndLog('a').then(()=>{
//     return setTimeoutAndLog('b')
// }).then(()=>{
//     return setTimeoutAndLog('c')
// }).then(()=>{
//     return setTimeoutAndLog('d')
// }).then(()=>{
//     return setTimeoutAndLog('e')
// })

// async function setTimeoutAndLog(input) {
//     return new Promise((reslove, reject) => {
//         setTimeout(() => {
//             console.log(input)
//             reslove()
//         }, 1000)
//     })
// }

// async function Log() {
//     try {
//         await setTimeoutAndLog('a')
//         await setTimeoutAndLog('b')
//         await setTimeoutAndLog('c')
//         await setTimeoutAndLog('d')
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// Log();
