/**
 * App - clculadora de saúde
 * @author Elen Grecco
 */

//variáveis 
let nome, idade, peso, altura, fcm, imc, consumo

//biblioteca
const input = require('readline-sync')
const colors = require('colors')

//limpar a tela
console.clear()

//banner
console.log("    __  __           ____  __       ______      __           __      __".red)               
console.log("   / / / /__  ____ _/ / /_/ /_     / ____/___ _/ /______  __/ /___ _/ /_____  _____".blue)    
console.log("  / /_/ / _ \\/ __ `/ / __/ __ \\   / /   / __ `/ / ___/ / / / / __ `/ __/ __ \\/ ___/".green)    
console.log(" / __  /  __/ /_/ / / /_/ / / /  / /___/ /_/ / / /__/ /_/ / / /_/ / /_/ /_/ / /".yellow)        
console.log("/_/ /_/\\___/\\__,_/_/\\__/_/ /_/   \\____/\\__,_/_/\\___/\\__,_/_/\\__,_/\\__/\\____/_/".magenta)   
console.log("")     
                                                                                    
//entrada de dados
nome = input.question("Digite seu nome: ")
idade = Number (input.question("Digite seu idade: "))
peso = Number (input.question("Digite seu peso em KG: "))
altura = Number (input.question("Digite a sua altura em metros: "))


//processamento
fcm = 208-(0.7 * idade)
imc = peso / (altura * altura)
consumo = peso *0.035 

//saída
console.log("")
console.log("Ficha do aluno")
console.log("______________________________________")
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`FCM: ${fcm}`)
console.log(`IMC: ${imc.toFixed(2)}`)


// tabela IMC
if (imc< 18.5) {
    console.log("Abaixo do peso".cyan)
} else if (imc< 25) {
    console.log("Peso normal".green )
} else if (imc< 30) {
    console.log("Levemente acima do peso".yellow )
} else if (imc< 35) {
    console.log("Obesidade classe I".magenta )
} else if (imc< 40) {
    console.log("Obesidade classe II (Severa)".red )
} else {
    console.log("Obesidade classe III (Mórbida)".bgRed )
}


//consumo de água
console.log(`Consumir por dia: ${consumo.toFixed(3)}`)