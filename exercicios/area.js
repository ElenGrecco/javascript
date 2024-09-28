/**
 * Cáculo da área em metro quadrado
 * @author Elen Grecco
 */

const input = require('readline-sync')

//variável
let comprimento, largura, area

console.clear()
console.log("Cálcular o área de um terreno em metros quadrados")

//entrada
//No console entradas(input) numéricas precisam ser convertidas com o uso do método Number 
comprimento = Number(input.question("Digite o do comprimento do terreno: "))
largura = Number(input.question("Digite a da largura do terreno: "))

//processamento
area = comprimento * largura

//saída
console.log(`Area ${area.toFixed(2)}m²`)