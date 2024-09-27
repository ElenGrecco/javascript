/**
 * Cáculo da média aritmética de 3 valores
 * @author Elen Grecco
 */

//importar a bilioteca read-linesync
const input = require('readline-sync')

//variável
let num1, num2, num3, media

console.clear()
console.log("Cálculo da média aritmética de 3 números")

//entrada
//No console entradas(input) numéricas precisam ser convertidas com o uso do método Number 
num1 = Number(input.question("Digite o primeiro numero: "))
num2 = Number(input.question("Digite o segundo numero: "))
num3 = Number(input.question("Digite o terceiro numero: "))

//processamento 
media = (num1 + num2 + num3) / 3

//saída
console.log(`Média: ${media.toFixed(1)}`)


