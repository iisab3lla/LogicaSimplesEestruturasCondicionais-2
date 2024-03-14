let semana = prompt("Digite um número de 1 a 7!");

switch(semana){
    case '1':
        document.write('Segunda-Feira')
    break;
    case '2':
        document.write('Terça-Feira')
    break;
    case '3':
        document.write('Quarta-Feira')
    break;
    case '4':
        document.write('Quinta-Feira')
    break;
    case '5':
        document.write('Sexta-Feira')
    break;
    case '6':
        document.write('Sábado')
    break;
    case '7':
        document.write('Domingo')
    break;
    default:
        alert('Digite um número de 1 a 7, por favor!')
};