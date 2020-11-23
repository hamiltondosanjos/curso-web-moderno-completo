function getIntRandom(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do{
    opcao = getIntRandom(-1,100)
    console.log(`Opção escolhida foi ${opcao}.`)
}
while (opcao != -1)
    


console.log('Até a próxima')
