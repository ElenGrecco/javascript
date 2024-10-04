/**
 * PDV
 * @author Elen Grecco
 */

const input = require('readline-sync')

//variaveis
let total, desconto, totalDesconto, valorDesconto, valorPago, troco

console.clear()

console.log(" ___ _____   __")
console.log("| _ \\   \\ \\ / /")
console.log("|  _/ |) \\ V / ")
console.log("|_| |___/ \\_/  ")
console.log("")

//entrada 1
total = Number(input.question("Digite o valor da compra: "))
desconto = Number(input.question("Digite o valor do desconto em %: "))

//processamento 1
valorDesconto = total - (desconto * total) / 100

//processamento 2
totalDesconto = total - valorDesconto

//saida 1
console.log("")
console.log("__________________________________________________")
console.log(`Total R$ ${total.toFixed(2)}`)
console.log(`Desconto: ${desconto}%`)
console.log(`Valor do desconto: R$ ${totalDesconto.toFixed(2)}`)
console.log(`Total com desconto: R$ ${valorDesconto.toFixed(2)}`)
console.log("")


//entrada 2
valorPago = Number(input.question("Valor em dinheiro pago pelo cliente: R$ "))

//processamento 3
troco = valorPago - totalDesconto

//saida 2

console.log("")
console.log(`Valor pago em dinheiro: R$ ${valorPago.toFixed(2)}`)
console.log(`Troco: R$ ${troco.toFixed(2)}`)
console.log("__________________________________________________")







