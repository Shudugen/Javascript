function MaiorEMenor (numeros) {

    let [Maior, Menor] = [numeros[0], numeros[0]]
    
    for(let i in numeros){
        
        if(numeros[i] > Maior){
            Maior = numeros[i]

        } else if(numeros[i] < Menor) {
            Menor = numeros[i]
        }
    }
    
    console.log(`Maior valor: ${Maior}, Menor valor: ${Menor}`)
    
    }
    
    let vetor = [14, 16, 10, 87, 7, 24, 23, 9, 76, 13, 89]
    MaiorEMenor(vetor)