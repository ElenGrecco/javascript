/**
 * Desenvolvimento de uma calculadora
 * @author Elen Grecco
 */

const input = require('readline-sync')

let a, b, opcao, resultado


do {
    console.clear()
console.log("Calculadora")

a = Number(input.question("Digite o primeiro numero:  "))
b = Number(input.question("Digite o segundo numero:  "))

console.log("")
console.log("1. Somar")
console.log("2. Subtrair")
console.log("3. Multiplicar")
console.log("4. Dividir")
console.log("5. Calcular a %")

opcao = Number(input.question("Digite a opcao desejada: "))
console.log("")
switch (opcao) {
    case 1:
        somar(a,b)
         
        break

    case 2:
        subtrair(a,b)
         

    case 3:
        multiplicar(a,b)
        
        break

    case 4:
        dividir(a,b)
        break

    case 5:
        porcentagem(a,b)
        break
    default:

    console.log("opção inválida")
}

//funções com parâmetros e retorno (não atribuidas) podem ser criadas em qualquer lugar.

//somar
function somar(a, b) {
    return console.log(`A soma de ${a} + ${b} = ${a + b}`)
}

//subtrair
function subtrair(a, b) {
    return console.log(`A subtração de ${a} - ${b} = ${a - b}`)
}

//multiplicar
function multiplicar(a, b) {
    return console.log(`A multiplicar de ${a} * ${b} = ${a * b}`)
}

//dividir
function divisão(a, b) {
    return console.log(`A divisão de ${a} / ${b} = ${a / b}`)
}

//porcentagem
function porcentagem(a, b) {
    return console.log(`A porcentagem de ${a} % ${b} = ${(a * b) /100}`)
}
resultado = input.question("Deseja jogar novamente? (s/n): ")

} while (resultado === 's');
