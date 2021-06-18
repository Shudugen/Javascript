let RevendaDeCarros = (modelo) => {

    switch (modelo){
        case 'hatch':
            return 'Compra efetuada com sucesso'
            break

        case 'sedan': case 'motocicleta': case 'caminhonete':
            return 'Tem certeza que não prefere este modelo?'
            break

        default:
            return 'Não trabalhamos com este tipo de automóvel aqui'
    }
} 

console.log(RevendaDeCarros('hatch'))
console.log(RevendaDeCarros('sedan'))
console.log(RevendaDeCarros('motocicleta'))
console.log(RevendaDeCarros('caminhonete'))
console.log(RevendaDeCarros('camaro'))