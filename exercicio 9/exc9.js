let velocidade = prompt("Digite a velocidade atingida do carro!")

let permitido = 80;
let multa = (velocidade - permitido ) * 5;

if(velocidade > permitido) {
    multa 
    document.write(`Sua velocidade estava acima do permitido. Sua multa é de R$ ${multa}`)
} else {
    document.write(`A velocidade atingida está boa!`)
};
