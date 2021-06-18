let Dinheiro = (valor) => {

    valor = valor.toFixed(2)
    let string = valor.toString()
    return string.replace('.', ',')

}

console.log(`O valor mostrado como moeda é: R$ ${Dinheiro(567845.89859454)}`)