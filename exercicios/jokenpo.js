/**
 * Jokenpo
 * @author Elen Grecco
 */

//biblioteca
const input = require('readline-sync')

//variáveis
let jogador, computador

console.clear()
console.log("______Jokenpo______")
console.log("1. Pedra")
console.log("2. Papel")
console.log("3. Tesoura")

//lógica do joagador
jogador = Number(input.question("Digite a opcao desejada: "))
console.log("")
switch (jogador) {
    case 1:
        console.log("Jogador escolheu: PEDRA ")
        break
    case 2:
        console.log("Jogador escolheu: PAPEL ")
        break
    case 3:
        console.log("Jogador escolheu: TESOURA ")
        break
    default:
        console.log("Opcao invalida")
}

//lógica do computador
computador = Math.floor(Math.random() * 3 + 1)

switch (computador) {
    case 1:
        console.log("Computador escolheu: PEDRA ")
        break
    case 2:
        console.log("Computador escolheu: PAPEL ")
        break
    case 3:
        console.log("Computador escolheu: TESOURA ")
        break
}

//lógica para determinar o vencendor ou declarar empate
if (jogador === computador) {
    console.log("Empate! Tente novamente! ")
} else if (jogador === 1 && computador === 3 || jogador === 2 && computador === 1 || jogador === 3 && computador === 2) {
    console.log("Jogador VENCEU ")
} else {
    console.log("Computador VENCEU ")

}

