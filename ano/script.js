/**
 * Ano automático
 * @author Elen Grecco
 */

//Inserindo o ano na tag <span>
let ano = document.getElementById('copyrigthYear')
let anoAtual = new Date().getFullYear()
ano.innerHTML = anoAtual