/**
 * Estruturas de dados - Objetos
 * @author Elen Grecco
 */

console.clear()

const funcionario1 = {}
console.log(typeof (funcionario1))
//4 operações básicas da estruturas
// adicionar dados a estrutura
funcionario1.nome = "Jose"
funcionario1.cargo = "Professor"
funcionario1.email = "josedeassisfilho@gmail.com"
funcionario1.salario = 8000
funcionario1.insta = "@prof.joseassis"

//Listar os dados da estrutura
console.log(funcionario1)
console.log(funcionario1.cargo)

//modificar os dados da estrutura
funcionario1.nome = "Jose de Assis"
console.log(funcionario1)

//excluir dados da estrutura
delete funcionario1.insta
console.log(funcionario1)

const funcionario2 = {
    nome: "Bruce Wayne",
    cargo: "CEO",
    email: "batman@gmail.com",
    salario: 40000
}
console.log(funcionario2)

const endereco1 = {
    logaradouro: "Bat Caverna",
    cidade: "Gothan City",
    estado: "Nova Jersey"

}
console.log(endereco1)


// ... => spread operator (união de 2 estrutura de dados)
const funcionario3 = {
    nome: "Alfred Pennywort",
    cargo: "Mordomo",
    email: "alfred@gmail.com",
    salario: 20000,
    ...endereco1
}
console.log(funcionario3)

const funcionario4 = {
    nome: "Dick Grayson",
    cargo: "Acrobata",
    email: "robin@gmail.com",
    salario: 2000,
    ...endereco1
}
console.log(funcionario4)

const funcionario5 = {
    nome: "Tony Stark",
    cargo: "Engenheiro",
    email: "ironman@gmail.com",
    salario: 375000,
    armadura: {
        versao: "Mark II",
        ano: 2010,
        reator: "Arc 01",
    },
    suitUp: () => {
        console.log("🤖")
    }
}
console.log(funcionario5)
console.log(funcionario5.cargo)
console.log(funcionario5.armadura.versao)
funcionario5.suitUp() // executar a função interna da estrutura