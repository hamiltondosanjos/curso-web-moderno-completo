const peso1 = 1.0;
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

//usar apenas (2) casas decimais
console.log(media.toFixed(2))
//Em binário
console.log(media.toString(2))
//Tipo de dado
console.log(typeof media)

/*
* Cuidados com number
*/
// gera o tipo infinity
console.log(7 / 0)
// Em decorrencia de ser fracamente tipada, o javascript consegue tirar o valor da string, e dividi-la por 2, como no exemplo abaixo.
console.log('10' / 2) // 5
console.log("Show!" / 2)// NaN
console.log(0.1 + 0.7) // 0.799999999999
console.log((10.453).toFixed(2))