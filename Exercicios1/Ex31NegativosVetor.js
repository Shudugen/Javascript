function negativos(numeros) {

    let quantidadeNegativos = 0
    
    for(let i in numeros){
        
        if(numeros[i] < 0){
            quantidadeNegativos++

        } 
    }
    
    console.log(`Existem ${quantidadeNegativos} números negativos no vetor`)
    
    }
    
    let vetor = [14, -16, -10, 87, 7, -24, -23, 9, 76, 13, -89]
    negativos(vetor)