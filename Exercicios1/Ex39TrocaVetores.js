function trocaVetores( vetor1, vetor2) {

if(vetor1.length == vetor2.length) { 

    for(let i in vetor1){
        vetor1[i] = vetor1[i] + vetor2[i]
        vetor2[i] = vetor1[i] - vetor2[i]
        vetor1[i] = vetor1[i] - vetor2[i]
    }

} else {
    console.log('vetores de tamanhos diferentes')
}

    console.log(`'Vetor 1 após troca: ${vetor1}'`)
    console.log(`'Vetor 2 após troca: ${vetor2}'`)
}

trocaVetores([1, 2, 3, 4, 5], [11, 22, 33, 44, 55])