function teste1 (num){
    if (num > 7) {
        console.log(num)
        console.log('final')
    }
}

teste1(6)
teste1(8)

//ERRADO
function teste2 (num){
    if (num > 7); {// Cuidado com ;, nao usar nas estrtuturas de controle
        console.log(num)
        console.log('final')
    }
}

teste2(6)
teste2(8)