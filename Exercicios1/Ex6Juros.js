let jurossimples = (capitalInicial, TaxaJuros, TempoAplicacao) => {

    resultadoS = capitalInicial + (capitalInicial * (TaxaJuros/100) * TempoAplicacao)
    return resultadoS.toFixed(2)

}

let jurosCompostos = (capitalInicial, TaxaJuros, TempoAplicacao) => {

    let resultadoC = capitalInicial*(Math.pow(1 + (TaxaJuros/100), TempoAplicacao))
    return resultadoC.toFixed(2)

}
console.log(`O montante total é de: R$ ${jurossimples(1200, 2.5, 10)}`)
console.log(`O montante total é de: R$ ${jurosCompostos(3000, 3, 4)}`)