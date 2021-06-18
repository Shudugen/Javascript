function multiplicaVetor(vetor, inteiro){

let vetorResultado = [] 

for(let i in vetor){
    vetorResultado[i] = vetor[i] * inteiro
}

return vetorResultado

}

function multiplicaElementoM5(vetor, inteiro){

    let vetorResultado = [] 
    
    for(let i in vetor){
        if(vetor[i] > 5){
            vetorResultado[i] = vetor[i] * inteiro
        } else {
            vetorResultado[i] = vetor[i]
        }

    }
    
    return vetorResultado
    
    }
    
console.log(multiplicaVetor([4, 2, 5, 8, 3, 7, 9], 3))
console.log(multiplicaElementoM5([4, 2, 5, 8, 3, 7, 9], 3))