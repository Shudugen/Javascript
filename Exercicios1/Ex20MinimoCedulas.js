let minimoCedulas = (valor) => {

    let contador = 0

    while(valor / 100 >= 1){
        valor = valor - 100
        contador++
        if(valor / 100 < 1){
            console.log(`${contador} nota(s) de R$ 100`)
        }
    }
    contador = 0
    while(valor / 50 >= 1){
        valor = valor - 50
        contador++
        if(valor / 50 < 1){
            console.log(`${contador} nota(s) de R$ 50`)
        }
    }
    contador = 0
    while(valor / 10 >= 1){
        valor = valor - 10
        contador++
        if(valor / 10 < 1){
            console.log(`${contador} nota(s) de R$ 10`)
        }
    }
    contador = 0
    while(valor / 5 >= 1){
        valor = valor - 5
        contador++
        if(valor / 5 < 1){
            console.log(`${contador} nota(s) de R$ 5`)
        }
    }
    contador = 0
    while(valor / 1 >= 1){
        valor = valor - 1
        contador++
        if(valor / 1 < 1){
            console.log(`${contador} nota(s) de R$ 1`)
        }
    }
}

minimoCedulas(1942)