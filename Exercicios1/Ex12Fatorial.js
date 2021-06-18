let fatorial = (num) => {

    let resultado = 1

    if(num < 0){
        return 'Nao existe'
    }

    while(num != 1 && num > 0){
        resultado *= num
        num--
    }
    return resultado

}

console.log(`o Fatorial é: ${fatorial(2)}`)