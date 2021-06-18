function comparaStrings(string1, string2) {

let resultado = true

    for(let i = 0; i < string1.length; i++){

        let string1carac = string1.charAt(i).toLowerCase()

        for(let j = 0; j < string2.length; j++){

        let string2carac = string2.charAt(j).toLowerCase()
        
        if(string1carac == string2carac){
            resultado = true
            break

        } else {
            resultado = false
            
        }

        } 
        if(resultado == false){
            return false
        }

    }
    return true

}

console.log(comparaStrings('abcde', 'ebdca'))