const prompt = require("prompt-sync")();

const idade = Number(prompt("Qual é a sua idade? "));

// // constante que armazena um resultado verdadeiro ou falso
// const EhMaiorDeIdade = idade >= 18;

// Estrutura condicional if/else:
if (idade >= 18) {
  //Faça alguma coisa
  console.log("Você é maior de idade!");
} else {
  //faça outra coisa
  console.log("Você é menor de idade!");
}

const mediaDoAluno = 7;

// Media >= 7 aprovado
// Media < 7 reprovado e Media >= 5 recuperação
// Media < 5 reprovado

if (mediaDoAluno >= 7) {
  console.log("Aluno aprovado!");
  console.log("Parabéns!");
} else if (mediaDoAluno < 7 && mediaDoAluno >= 5) {
  console.log("Aluno em Prova final!");
} else {
  console.log("Aluno reprovado!");
}

// 1- Precisa ser maior de idade
// 2- Precisa ter carteira de motorista

const idadePessoa = 18;
const temCNH = false;

if (idadePessoa >= 18 && temCNH) {
  console.log("Pode dirigir!");
} else {
  console.log("Não pode dirigir!");
}
