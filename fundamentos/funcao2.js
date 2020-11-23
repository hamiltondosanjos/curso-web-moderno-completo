// Armazenando uma função em uma variável
const imprimaSoma = function (a,b){
    console.log(a+b)
}

imprimaSoma(2,3)
//OU
// Arrow Function - Armazenando uma função arrow em uma variável
 const soma = (a,b) => {
    return a+b

 }

 console.log(soma(2,3))
// OU
 //Retorno implícito - para uma única sentença de código
 const subtracao = (a,b) => a-b

 console.log(subtracao(2,3))

 const imprimir = a => console.log(a)
 imprimir("Top")