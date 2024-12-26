const prompt = require("prompt-sync")();

console.log("Escolha uma operação:");
console.log("1 - Soma");
console.log("2 - Subtração");
console.log("3 - Multiplicação");
console.log("4 - Divisão");
console.log("5 - Sair");

const operacao = parseInt(prompt("Digite o número da operação desejada: "), 10);

  const n1 = prompt("Digite um número: ");
  const number1 = parseFloat(n1);

  const n2 = prompt("Digite outro número: ");
  const number2 = parseFloat(n2);

  switch (operacao) {
    case 1:
      console.log("A soma dos números é: " + (number1 + number2));
      break;
    case 2:
      console.log("A subtração dos números é: " + (number1 - number2));
      break;
    case 3:
      console.log("A multiplicação dos números é: " + number1 * number2);
      break;
    case 4:
      if (number2 !== 0) {
        console.log("A divisão dos números é: " + number1 / number2);
      } else {
        console.log("Erro: Divisão por zero não é permitida.");
      }
      break;
    default:
      console.log("Operação inválida!");
      break;
  
}
