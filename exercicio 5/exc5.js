let peso = prompt("Digite seu peso! Ex: 45")
let altura = prompt("Digite sua altura! Ex: 1.60")

let imc = peso / (altura * altura)

if (imc < 18.5) {
    alert(`Você está abaixo da faixa de peso ideal. Seu IMC é: ${imc}`)
} else if (imc > 24.99) {
    alert(`Você está acima da faixa de peso ideal. Seu IMC é: ${imc}`)
} else if (imc => 18.5 && imc <= 24.99) {
    alert(`Você está dentro da faixa de peso ideal. Seu IMC é: ${imc}`)
};