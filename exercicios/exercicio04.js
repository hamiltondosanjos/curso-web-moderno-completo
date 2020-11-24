// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.

function dividir (dividendo, divisor) {
    let resto = dividendo % divisor
    return resto
}

console.log(dividir(30,10))