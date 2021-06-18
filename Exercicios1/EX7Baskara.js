let Baskara = (ax2, bx, c) => {

    let Delta = Math.pow(bx, 2) - 4*(ax2, c)

    if(Delta > 0) {
        let resultado1 = ((-bx + Math.sqrt(Delta))/(2*ax2))
        let resultado2 = ((-bx - Math.sqrt(Delta))/(2*ax2))
        
    resultado = [ resultado1.toFixed(2), resultado2.toFixed(2) ]   
    return resultado    

    } else {
        return'Delta é negativo'
    }
}

console.log(`Os resultados são: ${Baskara(3, -5, 12)}`) 
