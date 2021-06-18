let vendaFruta = (fruta) => {

    switch (fruta){
        case 'maçã':
            console.log('Não vendemos essa fruta aqui')
            break

        case 'kiwi':
            console.log('Estamos com escassex de kiwis')
            break

        case 'melancia':
            console.log('Aqui está, são 3 reais o quilo')
            break

        default:
            console.log('ERRO!')
    }
} 

vendaFruta('maçã')
vendaFruta('kiwi')
vendaFruta('melancia')
vendaFruta('banana')