/**
 * Tabela de idade de obrigatoriedade de voto
 * @author Elen Grecco
 */

const input = require("readline-sync")
const colors = require("colors")

//variáveis 
let idade

console.clear()


idade = Number(input.question ("Digite sua idade: "))


// tabela idade
if (idade< 16) {
    console.log("Proibido votar".red)
} else if (idade=== 16 || idade === 17 || idade> 70) {
    console.log("Voto Facultativo".blue)
} else {
    console.log("Voto Obrigatório".green)

}
