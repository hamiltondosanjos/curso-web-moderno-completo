const fabricante = ["Mercedes","Audi","BMW"]

function imprimir(nome, indice) {
console.log(`${indice + 1}. ${nome}`)
}

//foreach: Para cada indice no array 'fabricante' aciona outra funcao 'imprimir'
fabricante.forEach(imprimir)


fabricante.forEach(function(fabricante){
    console.log(fabricante)
})
//Ou function arrow
fabricante.forEach(fabricante => console.log(fabricante))