const prompt = require("prompt-sync")();
const operacao = prompt("Digite um número de 1 a 4: ");
const number = parseInt(operacao, 10); 

switch(number){
  case 1:
    console.log("Feliz Natal!");
    break;
  case 2:
    console.log("Merry Christmas!");
    break;
  case 3:
    console.log("Frohe Weihnachten!");
    break;
  case 4:
    console.log(" Wesołych Świąt");
    break;
  default:
    console.log("Valor inválido!");
    break;
}
