let planoDeSaude = (idade) => {
    
        if (idade <= 10){
            return (`R$ ${100 + 80}`)

        } else if( idade <= 30 ) {
            return (`R$ ${100 + 50}`)

        } else if (idade <= 60) {
            return (`R$ ${100 + 95}`)

        } else if (idade > 60) {
            return (`R$ ${100 + 130}`)

        } else {
            return ('Idade inválida')
        }
    
}

console.log(planoDeSaude(9))
console.log(planoDeSaude(22))
console.log(planoDeSaude(45))
console.log(planoDeSaude(70))
console.log(planoDeSaude(-34))