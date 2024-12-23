// Operadores Booleanos: Comparações

// const n1 = 10;
// const n2 = 5;

// console.log(n1 == n2); // false
// console.log(n1 === n2); // false
// console.log(n1 === "10"); // false
// console.log(n1 == "10"); // true
// console.log(n1 != n2); // true

// console.log(n1 != "10"); // false
// console.log(n1 !== "10"); // true

// console.log(n1 > n2); // true
// console.log(n1 < n2); // false
// console.log(n1 <= n2); // false
// console.log(n1 >= n2); // true

// Conjunção Lógicas

const idadePessoa1 = 16;
const idadePessoa2 = 39;

console.log(idadePessoa1 >= 18); // true
console.log(idadePessoa2 >= 18); // true

console.log(idadePessoa1 >= 18 && idadePessoa2 >= 18); // true
console.log(idadePessoa1 >= 18 || idadePessoa2 >= 18); // true

console.log(!true); // false
console.log(!false); // true

console.log(!(idadePessoa1 >= 18)); // retorna verdadeiro se a pessoa for menor de idade
