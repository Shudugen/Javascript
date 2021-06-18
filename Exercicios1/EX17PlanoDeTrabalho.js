let aumentoDeSalario = (plano, salarioAtual) => {

    switch (plano){
        case 'A':
            return salarioAtual += (salarioAtual*0.1)
            break
        case 'B':
            return salarioAtual += (salarioAtual*0.15)
            break
        case 'C':
            return salarioAtual += (salarioAtual*0.2)
            break
        default:
            return 'plano inválido'
    }

}

console.log(aumentoDeSalario('A', 1000))
console.log(aumentoDeSalario('B', 1000))
console.log(aumentoDeSalario('C', 1000))
console.log(aumentoDeSalario('D', 1000))