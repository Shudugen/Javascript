let Ebissexto = (ano) => {

    if(ano % 400 == 0) {
        return true
    } else if (ano % 100 == 0 || ano % 4 != 0){
        return false
    } else {
        return true
    }

}

console.log(`É bissexto? ${Ebissexto(2021)}`)