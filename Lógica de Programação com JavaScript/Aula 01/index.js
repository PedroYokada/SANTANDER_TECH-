


//console.log("Hello, World!");
//console.log("Estamos na aula de lógica com JavaScript!");

//sempre utilize camel case no js
var nomeDoProgramador = "Pedro Yokada"; //camel case
var idade = 26;

//Tipos de variáveis

// var idade = 26; o JS entende essa variavel como um number, nao diferencia inteiro e float
// var nomeDoProgramador = "Pedro Yokada"; ele entende essa variavel como uma string, utilize aspas

// o JS possui tipagem fraca

var altura = 1.71; //number
var estudando = true; //boolean
var estudando1 = false; //boolean verdadeiro ou falso

// operador unario
console.log(nomeDoProgramador, typeof nomeDoProgramador);

console.log(idade, typeof idade);

console.log(altura, typeof altura);

console.log(estudando, typeof estudando);

console.log(estudando1, typeof estudando1);

// variavel sem definição
var semConteudo;

console.log(semConteudo);

// é possivel executar varias variaveis ao mesmo tempo utilizando um var, como o exemplo abaixo mostra
var curso = "Curso de Lógica de Programação",
  topico = "JavaScript Básico I";

  console.log(curso, topico);

// nao utilizar var nos codigos de javascript, utilizar let e const, o let pode alterar o valor da variavel, ja o const nao pode alterar o valor da variavel

let notaDoAluno = 10;
const mediaDoAluno = 7;

notaDoAluno = 9;
// const mediaDoAluno = 6; o JS nao permite alterar o valor da constante

console.log(notaDoAluno);
console.log(mediaDoAluno);
