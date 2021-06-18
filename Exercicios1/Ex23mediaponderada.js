let mediaPonderada = (codigo, nota1, nota2, nota3) => {

    let resultado = 0
    let aprovacao = ' '

    if(nota1 > nota2 && nota1 > nota3){
        resultado = ((nota1*4 + nota2*3 + nota3*3)/10)

    } else if(nota2 > nota1 && nota2 > nota3){
        resultado = ((nota1*3 + nota2*4 + nota3*3)/10)

    } else {
        resultado = ((nota1*3 + nota2*3 + nota3*4)/10)
    }

    if(resultado > 5){
        aprovacao = 'APROVADO'
    } else {
        aprovacao = 'REPROVADO'
    }

    console.log(`${codigo}, ${nota1}, ${nota2}, ${nota3}, ${resultado.toFixed(2)}, ${aprovacao}`)
}

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let codigo = 0

while(codigo >= 0){

    codigo = getInteiroAleatorioEntre(-5, 15)
    let nota1 = getInteiroAleatorioEntre(0, 10)
    let nota2 = getInteiroAleatorioEntre(0, 10)
    let nota3 = getInteiroAleatorioEntre(0, 10)
    mediaPonderada(codigo, nota1, nota2, nota3)

}