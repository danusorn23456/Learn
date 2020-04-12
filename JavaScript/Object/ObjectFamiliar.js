let obj = {}

Object.defineProperty( obj, "a", {
    value: 1,
    writable: false,
    configurable: true,
    enumerable: true
} )

let obj = {}
let obj = { a: 1 };

Object.preventExtensions( obj );

obj.b = 2;   // in strcit mode it will throw an error.

console.log( obj.b )   // undefined

let obj = { a: 1 };

Object.freeze( obj );

obj.b = 2;   // in strcit mode it will throw an error.

console.log( obj.b )   // undefined