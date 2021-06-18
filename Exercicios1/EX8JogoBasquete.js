let pontuacao = (string) => {
    pontuacao = []
    pontuacao = string.split(' ')

    let recorde = pontuacao[0]
    let pontuacaoMaisBaixa = pontuacao[0]
    resultado = [0,0]

    for(let i in pontuacao){

        pontuacao[i] = parseInt(pontuacao[i], 10)
        
        if(pontuacao[i] > recorde){

            resultado[0]++
            recorde = pontuacao[i]

        } else if(pontuacao[i] < pontuacaoMaisBaixa){

            resultado[1] = parseInt(i) + 1
            pontuacaoMaisBaixa = pontuacao[i]

        }
    }

    return resultado
} 

console.log(pontuacao('10 20 20 8 25 3 0 30 1'))