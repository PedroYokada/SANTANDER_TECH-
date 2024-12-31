const numero1 = 4;
const numero2 = "5";
const numero3 = undefined;

console.log(numero1 + numero2);

// Resultado: 45, isso é ruim pois o resultado esperado seria 9, o JavaScript não consegue somar um número com uma string, então ele concatena as duas.

console.log(numero1 + numero3); 

// Resultado: NaN, isso é ruim pois o resultado esperado seria 4, o JavaScript não consegue somar um número com undefined, então ele retorna NaN.
