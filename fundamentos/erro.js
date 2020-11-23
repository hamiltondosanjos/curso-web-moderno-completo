function tratarErroLancar(erro){
    throw new Error('...')
    //ou throw true
    //ou throw 'qualquer coisa'
}

function imprimirNomeGritado(obj) {
    try{
       console.log(obj.name.toUpperCase()+'!!!')  
    } catch (e){
        tratarErroLancar(e)
    } finally {
        console.log('finally')
    } 
   
}

const obj = {
    nome: 'Hamilton'
}
imprimirNomeGritado(obj)