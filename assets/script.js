const data = new Date()
const horarioAtual = data.getHours() 
const diaAtual = data.getDay()

document.querySelector(".abertoFechado").innerHTML = (horarioAtual >= 18 && horarioAtual < 23 && diaAtual != 1) ? "Aberto" : "Fechado"
document.querySelector(".divAbertoFechado").classList.add((horarioAtual >= 18 && horarioAtual < 23 && diaAtual != 1) ? "bg-green-700" : "bg-red-700")

function comprar() {
    window.alert("Ainda não é possível comprar pelo site!\nUse apenas como cardápio")    
}