const origem = document.getElementById("origem")
const destino = document.getElementById("destino")
const input = document.getElementById("input")
const valor = document.getElementById("valor")
const botao = document.getElementById("botao")
botao.addEventListener("click", converter)

function converter() {
    
    if (origem.value == "real" && destino.value == "dolar") {
        valor.innerHTML =  `$ ${(input.value / 5.8).toFixed(2)}`
    } else if (origem.value == "dolar" && destino.value == "real") {
        valor.innerHTML =  `R$ ${(input.value * 5.8).toFixed(2)}`
    } else if (origem.value == destino.value) {
        valor.innerHTML = parseFloat(input.value).toFixed(2)
    }
}



