const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0],valores[3])
console.log(valores[4])


valores[4] =  10
console.log(valores)
// length tamanho do array
console.log(valores.length)

//Push adiciona elementos no array
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

// Retira o ultimo item do array
console.log(valores.pop())

delete valores[0]
console.log(valores)

//typeof retorna o tipo
console.log(typeof valores)


