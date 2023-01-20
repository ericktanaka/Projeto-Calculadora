const adicionarCaracter = (num) => {
    const valorDisplay = document.querySelector(`.display`).value
    
    document.querySelector(`.display`).value = valorDisplay + num
}

const limpaTela = () => {
    document.querySelector(`.display`).value = ""
}

const calcular = () => {
    const valorDisplay = document.querySelector(`.display`).value
    document.querySelector(`.display`).value = eval(valorDisplay)
}

const inverterNumero = () => {
    const valorDisplay = document.querySelector(`.display`).value
    document.querySelector(`.display`).value = valorDisplay * -1
}