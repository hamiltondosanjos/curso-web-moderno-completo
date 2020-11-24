/*
06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.

*/

function calculandoJurosSimples(capInicial, txJuros, tmpAplicacao){
    const valorDojuros = capInicial * (txJuros / 100)
    const montante = capInicial + valorDojuros * tmpAplicacao
    return montante
}

console.log(calculandoJurosSimples(2000, 2, 3))

function calculandoJurosComposto (capInicial, txJuros, tmpAplicacao){
    let montante = capInicial * (1 + txJuros) ** tmpAplicacao
    return montante
}
console.log(calculandoJurosComposto(100, 10/100, 3))

