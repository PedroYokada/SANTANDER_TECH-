const prompt = require("prompt-sync")();

const n1 = prompt("Digite um número: ");
const number1 = parseFloat(n1);

const n2 = prompt("Digite outro número: ");
const number2 = parseFloat(n2);

const n3 = number1 + number2;

if (n3 > 10) {
  console.log("O Numero é: " + n3 + " portanto é maior que 10");
} else {
  console.log("O Numero é: " + n3 + " portanto é menor que 10");
}
