function mediaVetor(numeros) {

    let media = 0
    
    for(let i in numeros){
        
    media += numeros[i]

    }
    
    media /= numeros.length
    console.log(`A média é de ${media.toFixed(2)}`)
    
    }
    
    let vetor = [14, 16, 10, 87, 7, 24, 23, 9, 76, 13, 89]
    mediaVetor(vetor)