/**
 * Cálculo do troco
 * @author Elen Grecco
 */

const input = require('readline-sync')

//variaveis
let troco, valorPago, total

//entrada
total = Number (input.question("Qual o valor total da compra? "))
valorPago = Number(input.question("Qual o valor pago? "))

//processamento
troco = (valorPago - total)

//saida
console.log(`O valor de troco para o cliente é: R$ ${troco.toFixed(2)}`)



