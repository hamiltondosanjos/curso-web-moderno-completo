class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}
//Factory retorna um objeto
const p1 = new Pessoa('Hamilton')
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Cássia')
p2.falar()