"use strict";
// let numero = 20; // inferencia de tipo
// const pi = 3.1415;
// let nome = 'Pedro';
// let nome1: string = 'Pedro Henrique';
// let correta: boolean;
// let resultado = numero * pi;
// const nomeDoUsuario = prompt("Qual o seu nome ?")
// console.log(nomeDoUsuario?.toLowerCase())
// // o TS ao colocar "?" ele evita bugs no codigo. é um operador que evita erros
// //Tipagem de arrays
// const numeros: Array<Number> = [1,2,3,4,5];
// const  conjuntos_num: Number[] = [1,2,3,4,5];
// // const strings: string[] = ['1','2','3','4','5'];
// // const misto: (number|string)[] = ['Pedro',27,1.11];
// // // No TS não é uma boa pratica colocar variaveis de diferentes tipos
// // //Union Type
// TS
// const idadesss: any[] = [];
// TS, sempre evite usar any
// const idadess = [];
// // JS
const idadess = [10, 20, 30, 40, 50];
const menoresDeIdade = idadess.filter(idade => idade < 18);
console.log(menoresDeIdade); // [10]
for (const idade of idadess) {
}
const pessoaTupla = {
    nome: 'Pedro',
    idade: 26,
    profissao: 'Professor',
    altura: 1.71
};
const pessoaTupla2 = {
    nome: 'Jose',
    idade: 32,
    altura: 1.90
};
pessoaTupla2.profissao = 'Fisico';
console.log(pessoaTupla2);
function chooseNumber(numero1, numero2, criterio) {
    switch (criterio) {
        case 'greater':
            return numero1 > numero2 ? numero1 : numero2;
        case 'lower':
            return numero1 < numero2 ? numero1 : numero2;
        default:
            const numeroAleatorio = Math.random();
            if (numeroAleatorio >= 0.5)
                return numero1;
            return numero2;
    }
}
const numeroEscolhido = chooseNumber(10, 20, undefined);
console.log("numeroEscolhido", numeroEscolhido);
// const person: [string,number] = ['Pedro',26]
// const personTupla: [string,number] = ['Yokada',26]
//pessoaTupla.nome = 'Yokada'
//Type
