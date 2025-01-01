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


const idadess: number[] = [10, 20, 30, 40, 50];
const menoresDeIdade = idadess.filter(idade => idade < 18);
console.log(menoresDeIdade); // [10]
for (const idade of idadess){

}

//Object Type

//Interface
//Tipo customizado

interface Person1 {
  nome:String;
  idade:number;
  profissao?:string;
  altura:number;
}

const pessoaTupla:Person1 = {
  nome:'Pedro',
  idade: 26,
  profissao: 'Professor',
  altura: 1.71
}

// type = Person12 = {
//   nome: string;
//   idades = number;
//   profissao:? = string;
//   altura = number;
// }

type MyString = string;

const pessoaTupla2:Person1 = {
  nome:'Jose',
  idade: 32,
  altura: 1.90
}

pessoaTupla2.profissao = 'Fisico';

console.log(pessoaTupla2);

type Criterio = "greater" | "lower"

function chooseNumber(
  numero1: number,
  numero2: number,
  criterio?: "greater" | "lower"
): number {
  switch (criterio) {
    case "greater":
      return numero1 > numero2 ? numero1 : numero2;
    case "lower":
      return numero1 < numero2 ? numero1 : numero2;
    default:
      const numeroAleatorio = Math.random();
      return numeroAleatorio >= 0.5 ? numero1 : numero2;
  }
}



const numeroEscolhido = chooseNumber(10,20,undefined);

console.log("numeroEscolhido" , numeroEscolhido);

function somar(num1:number,num2:number): number {
  return num1 + num2;
}
// const person: [string,number] = ['Pedro',26]

// const personTupla: [string,number] = ['Yokada',26]

//pessoaTupla.nome = 'Yokada'

//Type

// Utility Types, a idadeia deles é permitir que voce crie novos tipos a partir de tipos ja existentes

// 1- partial

type PersonPartial = Partial<Person1>;

// const outraPessoa: PersonPartial = {

// }

// 2 - required

type PersonRequired = Required<Person1>

// 3- pick

type PersonPicked = Pick<Person1, 'nome' | 'idade'>

// 4 - Omit ,esconder

type PersonOmit = Omit<Person1, 'profissao'>

// 5 - Exclude

type CriterioExclude = Exclude<Criterio,'greater'>

// 6- Record

type Pessoas = Record<string,Person1>

const pessoas: Pessoas = {
  "123.456.789-00": {
    nome: 'Ana',
    idade: 40,
    altura: 1.78
  },
  "123.123.123-12":{
    nome: 'ig',
    idade: 21,
    altura: 1.48
  },
};