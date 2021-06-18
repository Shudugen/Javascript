let SistemaDeNotas = (nota) => {

    let cont = 0
    let resultado = nota
    let aux = nota
    while((aux % 5 !== 0)){
        cont++
        aux++
    }
    if(cont < 3 && nota >= 38) {
        resultado = nota + cont
    }
    if(resultado >= 40){

        console.log(`O aluno foi aprovado com a nota ${resultado}`)
        
    } else {
        console.log(`O aluno foi reprovado com a nota ${resultado}`)
    }
}

SistemaDeNotas(66)