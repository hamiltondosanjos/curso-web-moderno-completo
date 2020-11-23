//Function declaration

console.log(soma(3, 4))
function soma(x, y){
    return x + y
}

//function expression
const sub  = function (x,y) {
    return x - y
}

console.log(sub(3,4))

//Named function expression
const mult =  function mult(x,y) {
    return x * y
}
console.log(mult(3,4))

//Function Arrow
const dividir = (x, y) => x * y
console.log(dividir(50, 5))