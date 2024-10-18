
/**
 * Cálcilo de consumo de água
 * @author Elen Grecco
 */
//importar biblioteca
const input = require('readline-sync')

//variáveis
let consumo, peso

//limpar a tela antes de entrada
console.clear()

//entrada 
peso = Number(input.question("Digite o seu peso em KG: "))

//processamento 
consumo = peso *0.035 // (35ml de água por cada KG)

//saída
console.log(`Consumo diário de água deve ser: ${consumo.toFixed(3)}`)