let dobro = function (a){
    return 2 * a
}
//Ou
dobro = (a) => {
    return 2 * a
}
//Se tiver apena um único parâmetro, podemos eliminar o parenteses
//O retirarmos as chaves, implicitamente estamos retornando algo
dobro = a => 2 * a
console.log(dobro(Math.PI))

let ola = function (){
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um parametro
console.log(ola())