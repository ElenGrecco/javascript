/**
 * 
 * 
 */

const input = require('readline-sync')

let login, senha

//estrutura de dados (simular um banco de dados)

const database = {
    admin: {
        usuario: "Administrador",
        senha: "password",
    },

    prof: {
        usuario: "Leandro Ramos",
        senha: "123456",
    },
}

//Autentificação de usuário
console.clear()
console.log("______________________")
console.log("      USUÁRIO         ")
console.log("______________________")
login = input.question("login: ")
senha = input.question("senha: ")
console.log("______________________")