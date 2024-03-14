let custo = parseFloat(prompt("Informe o valor do custo de fabrica!"));
let distribuidor = 28;
let impostos = 45;

let valorDistribuidor = (custo * distribuidor) / 100;
let valorImposto = (custo * impostos) / 100;
let custoConsumidor = valorDistribuidor + valorImposto + custo;

document.write(`O custo ao consumidor é ${custoConsumidor}`);