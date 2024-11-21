/**
 * Desafio Carro
 * @author Elen Grecco
 */

console.clear()

// Criando a classe modelo
class Carro {
    // Atributos
    constructor(ano, cor) {
        this.ano = ano
        this.cor = cor
    }

    // Métodos
    criarCarro() {
        console.log("-----------------------------------")
        console.log("   _______ ")
        console.log("  /|_||_\\`.__")
        console.log(" (  _    _ _ \\ ")
        console.log("=`-(_)--(_)-'")
        console.log("-----------------------------------")
        console.log(`Carro de ${this.cor}`)
        console.log(`Ano: ${this.ano}`)
    }

    ligar() {
        console.log(`Carro de ${this.cor} ligado!`)
    }

    acelerar() {
        console.log("□ □ □ □ Carro se locomovendo!")
    }

    desligar() {
        console.log("□ □ □ □ Carro desligado!")
    }
}

// Herança
class Aviao extends Carro {
    // Atributos
    constructor(ano, cor, podeAterrizar) {
        super(ano, cor) // Herança
        this.podeAterrizar = podeAterrizar
    }

    // Método para criar o avião com arte ASCII
    criarAviao() {
        console.log("-------------------------------------------")
        console.log("       __|__")
        console.log("------(_)------")
        console.log("   __|__|__|__|__")
        console.log(`Aviao ${this.cor}`)
        console.log(`Ano: ${this.ano}`)
        console.log("-------------------------------------------")
    }

    // Método para aterrissar o avião
    aterrissar() {
        if (this.podeAterrizar) {
            console.log("._._._._._._._._._._._._._._._._._._._.")
            console.log("☀ Avião aterrissando!")
        } else {
            console.log("⚠ Avião não pode aterrissar neste momento!")
        }
    }
}

// Testando as classes

let carro = new Carro(1978, "vermelho");
carro.criarCarro();
carro.ligar();
carro.acelerar();
carro.desligar();

let aviao = new Aviao(2025, "azul", true);
aviao.criarAviao();
aviao.aterrissar();


//***** Mundo *****/
console.log(" ")
console.log("")
console.log("")
console.log("")
console.log("")

//Instanciando (Criando) um objeto.
const Carro1 = new Carro("Fusca", 1)
carro.criarCarro()



const Aviao1 = new Aviao("madeira", 2, false)
aviao1.criarAviao()
aviao1.aterrizar()

