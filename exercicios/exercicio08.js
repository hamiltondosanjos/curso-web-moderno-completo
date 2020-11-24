/*
08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
*/
let listaPontuacoes = '30, 40, 20, 4, 51, 25, 42, 38, 56, 0'

function avaliacaoPontuacoes (listaPontuacoes) {
    let pontuacoes = listaPontuacoes.split(', ')
    let qntQuebraDeRecordes = 0
    let piorResultado = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 0; i < pontuacoes.length; i++) {
        if (pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            qntQuebraDeRecordes++
        } else if (pontuacoes[i]< menorPontuacao){
            menorPontuacao = pontuacoes[i]
            piorResultado = i+1   
        }
        
    }
    return[qntQuebraDeRecordes,piorResultado]
}

console.log(avaliacaoPontuacoes(listaPontuacoes))