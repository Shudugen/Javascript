function ConceitoNotas (notas) {
   
let resultado = []  
  
for(let i in notas) {

    if (notas[i] >= 0.0 && notas[i] < 4.9){
        resultado[i] = 'D'

    } else if( notas[i] <= 6.9 ) {
        resultado[i] = 'C'

    } else if (notas[i] <= 8.9) {
        resultado[i] = 'B'

    } else if (notas[i] <= 10.0) {
        resultado[i] = 'A'

    } else {
        resultado[i] = 'Nota inválida'
    }
} return resultado

}

let notas = [6.7, 5.5, 1.2, 9.6, 10, 3.6, 4.8, 7.9]
console.log(`Resultado das notas: ${ConceitoNotas(notas)}`)