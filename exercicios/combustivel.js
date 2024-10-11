/**
 * Cáculo da média combustivel
 * @author Elen Grecco
 */

const input = require('readline-sync')
const colors = require('colors')

let alcool, gasolina

console.clear()
alcool = Number(input.question("Digite o valor do alcool: R$ "))
gasolina = Number(input.question("Digite o valor da gasolina: R$ "))


if (alcool < 0.7 * gasolina) {
    console.log("Abasteça com alcool ")
} else {
    console.log("Abasteça com gasolina ")
}
console.log(alcool/gasolina)








