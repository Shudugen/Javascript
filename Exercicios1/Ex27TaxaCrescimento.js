function taxaCrescimento (altura1, taxa1, altura2, taxa2) {
    
    let [alturaDoMaior, alturaDoMenor, taxaDoMaior, taxaDoMenor] = [ 0, 0, 0, 0]

    if(altura1 < altura2){

    [alturaDoMaior, alturaDoMenor, taxaDoMaior, taxaDoMenor] = [ altura2, altura1, taxa2, taxa1]

    } else {
  
    [alturaDoMaior, alturaDoMenor, taxaDoMaior, taxaDoMenor] = [ altura1, altura2, taxa1, taxa2]

    }

    if(taxaDoMenor > taxaDoMaior) {
            
        let contador = 0
        while (alturaDoMenor < alturaDoMaior){
                alturaDoMenor += taxaDoMenor
                alturaDoMaior += taxaDoMaior
                contador++
        }
        return (`a criança menor ultrapassará a maior em ${contador} anos`)

    } else {
        return 'a criança menor não irá ultrapassar a maior'
    }
    
}

console.log(taxaCrescimento(145, 2, 130, 4))