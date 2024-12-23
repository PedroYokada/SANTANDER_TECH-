// Operador Ternário

const idade = 21;

// idade >= 18 ? console.log("Maior de idade") : console.log("Menor de idade!");

// a constante mensagem depende da constante idade para ser atribuída o valor de maior de idade ou menor de idade

// const mensagem = idade >= 18 ? "Maior de idade" : "Menor de idade";

// nao é boa pratica usar operador ternario dentro de outro operador ternario
const mensagem =
  idade >= 18
    ? "Maior de idade"
    : idade >= 16
    ? "Já pode votar"
    : "Não pode votar";

console.log(mensagem); // Maior de idade
