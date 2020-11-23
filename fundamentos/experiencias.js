let a = 3
global.b = 123
this.c = 456

console.log(this.a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)


// module.exports = {e: 456, f: false, g: 'teste'}

abc = 123 // crinado uma variável sem var ou let, Nunca faça isso
console.log(global.abc)
