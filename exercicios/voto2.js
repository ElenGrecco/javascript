/**
 * Tabela de idade de obrigatoriedade de voto2
 * @author Elen Grecco
 */

const input = require("readline-sync")
const colors = require("colors")

//variáveis 
let idade

console.clear()

//entrada de dados
idade = 21

//saída
console.log(`Idade: ${idade}`)

// tabela idade
if (idade< 16) {
    console.log("Proibido votar".red)
} else if (idade> 17 && idade< 71) {
    console.log("Voto Obrigatório".green )
} else {
    console.log("Voto Facultativo".blue)

}