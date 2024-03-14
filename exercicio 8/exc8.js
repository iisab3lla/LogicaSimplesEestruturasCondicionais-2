let idade = prompt("Digite sua idade!");
let peso = parseFloat (prompt("Digite seu peso!"));

if (idade <= 12 ){
    document.write("Sua categoria é: Infantil")
}
else if( idade >= 13 && idade <= 16){
    if (peso <= 40){
        document.write("Sua categoria é: Juvenil leve")
    }
    else{
        document.write("Sua categoria é: Juvenil pesado")
    }
}
else if( idade >= 17 && idade <= 24){
    if (peso <= 45){
        document.write("Sua categoria é: Sênior leve")
    }
    else if(peso >= 45 && peso <= 60){
        document.write("Sua categoria é: Sênior médio")
    }
    else {
        document.write("Sua categoria é: Sênior pesado")
    }
}
else if (idade > 24){
    document.write("Sua categoria é: Veterano")
};