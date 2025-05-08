console.log(global === this) //false
console.log(module === this) //false
console.log(module.exports === this) //true


// module.exports.digaOi = function() {
//     console.log('Oi')
// }

this.digaOi = function () {
    console.log('Oi')
} //funcionou igual o module.exports