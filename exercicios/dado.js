/**
 * Exemplo de uso do metodo para gerar números aleatorios
 * Jogo do dado e uso da estrutura do-while
 * @author Elen Grecco
 */

const input = require('readline-sync')

let face, opcao

do {
    console.clear()
    console.log("Jogo do dado")
    input.question("Pressione a tecla [Enter] para jogar o dado ")

    //Sorteio da face de um dado
    //Math classe matemática
    //floor() conversão para número inteiro
    //random() * (gerador de número aleátorio)
    face = Math.floor(Math.random() * 6 + 1) // 0 1 2 3 4 5
    console.log(`Face do dado: ${face}`)

    opcao = input.question("Deseja jogar novamente? (s/n): ")

} while (opcao === 's');

