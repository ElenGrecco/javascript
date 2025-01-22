/**
 * Data automática no rodapé
 * @author Elen Grecco
 */

function obterData() {
    const data = new Date()
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    return data.toLocaleDateString('pt-br', options)
}

// a linha abaixo insere na tag <p> identificada como dataAtual o retorno da função
document.getElementById('dataAtual').innerHTML = obterData()