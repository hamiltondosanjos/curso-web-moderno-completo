function Carro(velocidadeMax = 200, delta = 5){
    // Atributo privado
    let velocidadeAtual = 0;

    //Método publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMax) {
            velocidadeAtual += delta
            
        } else {
            velocidadeAtual = velocidadeMax
        }
    }
    //Método publico
    //Usando a palavra 'this', torno a função publica
    this.getVelocidadeAtual = function (){
        return velocidadeAtual
    }
}
//Operador 'new' usado para instanciar
const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())


console.log(typeof Carro)
console.log(typeof ferrari)
