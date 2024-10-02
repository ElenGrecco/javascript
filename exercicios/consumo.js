 /**
 * Cálculo do consumo de combustíel
 * @author Elen Grecco
 */

 const input = require ('readline-sync')

 //variáveis
 let distancia, litros, consumo

 console.clear()
 console.log("Cálculo do consumo de combustível ")

 //entrada
 distancia = Number(input.question("Digite a distancia percorrida(km):" ))
 litros = Number(input.question("Digite a quantidade de combustivel(L): "))

 //processamento
 media = distancia / litros

 //saída
 console.log(`A media de litros consumida é: ${media.toFixed(1)} Km/L`)



