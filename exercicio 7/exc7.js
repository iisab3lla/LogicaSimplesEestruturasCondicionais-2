let saque = parseFloat(prompt("Digite um valor para a retirada!"));
let conta = 500;

let taxa = saque + 4.50;
let restante = conta - taxa;

if (saque % 5 === 0 && saque != 0){
    if (saque < conta){
        document.write(`O valor do saque foi de: R$${taxa}. O restante na conta ficou em: R$${restante}`)
    }
    else {
        document.write(`Você não possui saldo suficiente`)
    }
}
else {
    document.write(`Informe um valor diferente com final 5 ou 0.`)
};