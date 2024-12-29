const prompt = require("prompt-sync")();

const raiz = prompt("Digite um número: ");
const number1 = parseFloat(raiz);

console.log("A raiz quadrada de " + raiz + " é: " + Math.sqrt(raiz));

