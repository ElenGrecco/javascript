/**
 * Cálculo do valor do desconto
 * @author Elen Grecco
 */

const input = require ('readline-sync')

//variaveis
let totalDesconto, total, desconto

console.clear()
console.log ("Calculo do valor do desconto")

//entrada
total = Number(input.question("Digiteo valor da compra: "))
desconto =Number(input.question("Digite o valor do desconto em %: "))



//saída
totalDesconto
console.log(`total com desconto: R$ ${totalDesconto.toFixed(2)}`)



