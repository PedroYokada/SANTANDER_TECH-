const prompt = require("prompt-sync")();

const n1 = prompt("Digite a primeira nota: ");
const number1 = parseFloat(n1);

const n2 = prompt("Digite a segunda nota: ");
const number2 = parseFloat(n2);

const n3 = (n1 + n2)/2;

if (n3 >= 7) {
  console.log("A média é: " + n3 + " portanto o aluno foi aprovado");
} else {  
  console.log("A média é: " + n3 + " portanto o aluno foi reprovado");
}