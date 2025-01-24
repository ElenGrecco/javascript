const imgs = document.getElementById('imagens')
const imagem = document.querySelectorAll('#imagens img')
let indice = 0

function carrossel() {
    indice++
    if (indice >= imagem.length) {
        indice = 0
    }

    // indice 0: é a posição inicial| 1: deslocar 512px esquerda| 2: deslocar 1024px esquerda
    imgs.style.transform = `translateX(${-indice * 512}px)`
}


setInterval(carrossel, 1800) //ajuste