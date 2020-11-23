const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua Mina',
        numero: 1000
    }
}

const {nome, idade} = pessoa // tire do objeto 'pessoa' os atributos'nome' e 'idade'
console.log(nome, idade)

const{nome: name, idade: age} = pessoa
console.log(name, age)

//Posso atribuir um padrão, ppara caso não seja especificado no objeto em questao ex: 'bemHumorado=true'
const{ sobrenome, beHumorado = true} = pessoa;
console.log(sobrenome, beHumorado)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)