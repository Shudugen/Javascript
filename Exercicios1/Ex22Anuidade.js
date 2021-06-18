let anuidade = (mes, valorAnuidade) => {

    tempo = 13 - mes
    let resultado = valorAnuidade*(Math.pow(1 + 0.05, tempo))
    return resultado.toFixed(2)

}

console.log(`R$ ${anuidade(12,1000)}`)