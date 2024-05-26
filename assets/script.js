const data = new Date()
const horarioAtual = data.getHours() 
const diaAtual = data.getDay()

let abertoFechado = document.querySelector(".abertoFechado");
let divAbertoFechado = document.querySelector(".divAbertoFechado")
let iconAbertoFechado = document.querySelector(".iconAbertoFechado")

if (horarioAtual >= 18 && horarioAtual < 23 && diaAtual != 1) {
    abertoFechado.innerHTML = "Aberto"
    divAbertoFechado.classList.add("bg-green-700")
    iconAbertoFechado.classList.add("fa-solid", "fa-store")
} else {
    abertoFechado.innerHTML = "Fechado"
    divAbertoFechado.classList.add("bg-red-700")
    iconAbertoFechado.classList.add("fa-solid", "fa-store-slash")   
}

function comprar() {
    window.alert("Ainda não é possível comprar pelo site!\nUse apenas como cardápio")    
}

function enviarEmail() {
    window.alert("Email enviado com sucesso!\nEm breve receberá informações e promoções")    
}