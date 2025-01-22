/**
 * Evento de intervalo
 * @author Elen Grecco
 */

function piscar() {
    let ligada = false
    //função nativa do JS para gerar intervalos
    //500 (500ms = 1s) isso irá gerar um intervalos em cada segundo nesta situação
    setInterval(() => {
        if (ligada === false) {
            document.getElementById('lamp').src = "img/on.jpg"
        } else {
            document.getElementById('lamp').src = "img/off.jpg"
        }
        ligada = !ligada //! (! significa NOT)

    },5000) 

}

