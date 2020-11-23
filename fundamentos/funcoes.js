function imprimaSoma(a,b){
    console.log(a+b)
}

imprimaSoma(2,3)
imprimaSoma(2)
imprimaSoma()
imprimaSoma(2,3,4,5,6,7,8,99)

//função com retorno
function soma(a,b=1) {
    return a + b
}
console.log(soma(2,3))
console.log(soma(1))
console.log(soma())