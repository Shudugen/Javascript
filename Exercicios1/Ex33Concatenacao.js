const vetorInteiro = [1,2,3,4]
const vetorString = ['abc', 'def', 'ghi', 'jkl']
const vetorDouble = [1.34, 8.65, 3.56, 9.4]
let resultado1 = []
let resultado2 = []

for(let i in vetorInteiro) {
    resultado1 = resultado1.concat(vetorInteiro[i]).concat(vetorString[i]).concat(vetorDouble[i])
}

for(let i = 0; i < vetorInteiro.length; i++ ){
    resultado2 = resultado2.concat(vetorInteiro[i]).concat(vetorString[i]).concat(vetorDouble[i])
}

console.log(resultado1)
console.log(resultado2)