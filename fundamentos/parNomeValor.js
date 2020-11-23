const saudacao = 'Opa' // contextp léxico

function exec(){
    const saudacao = 'Falaaa' // contexto léxico
    return saudacao
}

const cliente = {
    nome: 'Hamilton',
    idade: 35,
    peso: 68,
    endereco: {
        logradouro: 'Rua da Mina',
        numero: 123 
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
