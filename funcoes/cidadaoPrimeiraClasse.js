//Função em JS é First-class Object (Citizens)

//Criar de forma literal
function fan1() { }

// Armazenar em uma variável
const fan2 = function () { }

// Armazenar em um array
const array = [function (a,b) {return a + b}, fan1, fan2]
console.log(array[0](2,3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function() {return 'Opa'}
console.log(obj.falar())

//Passar função como parametro
function run (fun) {
    fun()
}
run(function(){
     console.log('Executando')
    })

//Uma função pode retornar/conter uma função
function soma (a, b) {
    return function (c){
        console.log(a+b+c)
    }
}

soma(2,3)(4)
//OU
const cincoMais = soma(2,3)
cincoMais(4)

