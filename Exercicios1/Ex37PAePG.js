function PA (n, a1, r) {

let resultadoPA = []

    for(let i = 0; i < n; i++){
        resultadoPA[i] = (a1 + i*r)
    }
    
let somaPa = (n*(a1 + resultadoPA[n-1])/2) 

console.log(resultadoPA)
console.log(somaPa)

}

function PG (n, a1, r) {

let resultadoPG = []

    for(let i = 1; i <= n; i++){
        resultadoPG[i-1] = (a1 * Math.pow(r, i - 1))
    }
        
let somaPg = (a1*(Math.pow(r, n) - 1)/(r - 1)) 
    
console.log(resultadoPG)
console.log(somaPg)
    
}
    
PA(100, 2,2)
PG(5, 1, 3)