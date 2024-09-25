/**
 * Ficha de um aluno de acdemia
 * @author Elen Grecco
 */

//variáveis 
let nome
let idade
let peso
let altura
let vip
let fcm
let imc

console.clear()

//entrada de dados
nome = "Elen Grecco"
idade = 40
peso = 62
altura = 1.59
vip = true 

//procssamento
fcm = 208-(0.7 * idade)
imc = peso / (altura * altura)

//saída
console.log("Ficha do aluno")
console.log("______________________________________")
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`Vip: ${vip}`)
console.log(`FCM: ${fcm}`)
console.log(`IMC: ${imc.toFixed(2)}`)