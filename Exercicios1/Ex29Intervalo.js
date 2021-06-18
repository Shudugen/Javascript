function intervalo (numeros) {

    let [contadorDentro, contadorFora] = [0, 0]
    
    for(let i in numeros){
        
        if(numeros[i] >= 10 && numeros[i] <= 20){
            contadorDentro++
        } else {
            contadorFora++
        }
    }
    
    console.log(`Existem ${contadorDentro} números dentro e ${contadorFora} números fora do intervalo no vetor`)
    
    }
    
    let vetor = [14, 16, 10, 87, 7, 24, 23, 9, 76, 13, 89]
    intervalo(vetor)