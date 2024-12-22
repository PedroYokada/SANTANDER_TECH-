const prompt = require("readline-sync");

const idade = prompt.question("Qual eh a sua idade? ");

const idadeNumber = Number(idade);

console.log(idadeNumber, typeof idadeNumber);

// // console.log("O usuario tem idade : ",idade);

// console.log(idade , typeof idade);

// COERÇÃO EXPLICITA OU MANUAL

console.log(Number("X")); // NaN not a number, tipagem fraca

console.log(String("10"), typeof String("10")); // convertendo 10 para string

console.log(Boolean(2)); // 2 É TRUE
console.log(Boolean(0)); // 0 É FALSE
console.log(Boolean(-1)); // 1 É TRUE

// COERÇÃO IMPLÍCITA OU AUTOMÁTICA

console.log(1 + "1"); // 11
console.log("10" + 5); // 105
console.log("10" * 5); // 50
console.log("10" / 5); // 2
console.log(10 - "5"); // 5

let n = 1 + "1"; // 11 em formato de texto(string)
n = n - 1; // 11 - 1 = 10
console.log(n)

console.log(2 + 3 + 4 + "5"); // 95

console.log("5" + 2 + 3 + 4 ); // 5234

console.log("10" - "4" - "3" - 2 + "5" ); // 15
