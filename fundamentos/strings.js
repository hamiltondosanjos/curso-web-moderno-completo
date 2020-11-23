const escola = "cod3r"

console.log(escola.charAt(4))

// Retorna vazio caso ultrapasse a quantidade de caracter do string
console.log(escola.charAt(5))

console.log(escola.charCodeAt(3))// Código da tabela unicode

console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0,3))

//Concatenação
console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola  + "!")

//Regex - substitui os caracteres 
console.log(escola.replace(3, 'e'))

// transformando em Array
console.log('Ana','Maria','Pedro'.split(','))