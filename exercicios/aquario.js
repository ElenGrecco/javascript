/**
 * Cálculo do volúme de um aquário
 * @author Elen Grecco
 */

const input = require( 'readline-sync')

//variáveis
let comprimento, largura, volume, altura

console.clear()
console.log("Cáculo do vólume de um aquário")

//entrada
comprimento = Number(input.question("Digite o comprimento em cm "))
largura = Number(input.question ("Digite a largura em cm "))
altura = Number(input.question("Digite a altura em cm "))

//processamento
volume = (comprimento * largura * altura) / 1000

//saída
console.log(`volume do aquario: ${volume.toFixed(2)} litros`)





