function ParEImpar (numeros) {

let [contadorPar, contadorImpar] = [0, 0]

for(let i in numeros){
    
    if(numeros[i] % 2 == 0){
        contadorPar++
    } else {
        contadorImpar++
    }
}

console.log(`Existem ${contadorPar} números pares e ${contadorImpar} números impares no vetor`)

}

let vetor = [4, 6, 1, 87, 7, 24, 23, 9, 76, 3, 89]
ParEImpar(vetor)