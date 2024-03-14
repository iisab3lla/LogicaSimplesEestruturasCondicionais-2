let numero1 = parseFloat(prompt("Digite o primeiro número!"));
let numero2 = parseFloat(prompt("Digite o segundo número!"));
let calculo = prompt("Escolha a operação matemática: somar, subtrair, dividir e multiplicar!").toLowerCase()

let somar = numero1 + numero2;
let subtrair = numero1 - numero2;
let dividir = numero1 / numero2;
let multiplicar = numero1 * numero2;

switch (calculo){
    case 'somar':
        document.write(`O resultado da soma é ${somar}`)
    break;
    case 'subtrair':
        document.write(`O resultado da soma é ${subtrair}`)
    break;
    case 'dividir':
        document.write(`O resultado da soma é ${dividir}`)
    break;
    case 'multiplicar':
        document.write(`O resultado da soma é ${multiplicar}`)
    default:
        document.write(`Coloque uma operação válida!`)
};