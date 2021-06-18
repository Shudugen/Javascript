let cardapio = (codigo, quantidade) =>{

    let resultado = 0
    switch (codigo) {
        case 100:
            resultado = (quantidade * 3.00).toFixed(2)
            break
        case 200:
            resultado = (quantidade * 4.00).toFixed(2)
            break
        case 300:
            resultado = (quantidade * 5.50).toFixed(2)
            break
        case 400:
            resultado = (quantidade * 7.50).toFixed(2)
            break
        case 500:
            resultado = (quantidade * 3.50).toFixed(2)
            break
        case 600:
            resultado = (quantidade * 2.80).toFixed(2)
            break
        default:
            return ('Produto não existente')    
    }
    
    let string = resultado.toString()
    return (`O total foi de R$ ${string.replace('.', ',')}`)
}

console.log(cardapio(100,5))
console.log(cardapio(200,2))
console.log(cardapio(300,4))
console.log(cardapio(400,7))
console.log(cardapio(500,6))
console.log(cardapio(600,2))
console.log(cardapio(700,4))