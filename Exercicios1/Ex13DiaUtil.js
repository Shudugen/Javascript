let QueDiaE = (dia) => {

    switch (dia){
        case 1:
            return 'fim de semana'
            break
        case 2: case 3: case 4: case 5: case 6:
            return 'dia util'
        case 7:
            return 'fim de semana'
        default:
            return 'invalido'
    }
}

console.log(`o dia é ${QueDiaE(8)}`)