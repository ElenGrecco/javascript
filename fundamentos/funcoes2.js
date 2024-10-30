/**
 * Estudo das funções com parâmetros e retorno
 * @author Elen Grecco
 */

function somar(a, b) {
    return (console.log(a + b))
}

somar(5, 2)

const somarA = function (a, b) {
    return (console.log(a + b))
}

somarA(5, 3)

const somarAF = (a, b) => {
    return (console.log(a + b))
}

somarAF(2, 2)

//na função abaixo o retorno é implícito
const somarAFS = (a, b) => console.log(a + b)
somarAFS(3, 9)


