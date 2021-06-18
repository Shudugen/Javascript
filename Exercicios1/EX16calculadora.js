let calculadora = (num1, operacao, num2) => {

switch (operacao){
    case '+':
        return num1 + num2
        break
    case '-':
        return num1 - num2
        break
     case '*':
         return num1 * num2
         break
    case '/':
        return num1 / num2
        break
    default:
        return 'operação inválida'
}

}

console.log(calculadora(2,'+',3))
console.log(calculadora(5,'-',2))
console.log(calculadora(5,'*',4))
console.log(calculadora(9,'/',3))
console.log(calculadora(6,'%',2))