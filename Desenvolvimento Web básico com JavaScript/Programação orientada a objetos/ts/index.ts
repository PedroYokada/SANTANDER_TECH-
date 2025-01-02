// Aula de POO

// Forma de criar um objeto unico.
// const pessoa1 = {
//     nome: 'Pedro',
//     idade: 26
// }

// const pessoa2 = {
//     nome: 'João',
//     idade: 32,
//     altura: 1.71
// }



interface IPessoa {
    nome: string;
    idade: number;
    altura: number;
  //  peso: number;

    dormir: () => void;
    comer: () => void;
}

// Classe: Abstração
// Definindo a abstração de uma pessoa

class Pessoa implements IPessoa {
    // atributos: caracteristicas(variaveis)
    nome: string;
    idade: number;
    altura: number;
   // peso: number;
    private _cpf: string;
    // readonly cpf: string;
    //métodos: ação

    // Método construtor

    // peso: number
    constructor(nome: string, idade: number, altura: number, cpf: string ) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    //    this.peso = peso;
        this._cpf = cpf;
    }

    dormir(){
        console.log("Dormindo... 😴😴😴")
    }

    comer(){
        console.log("Comendo... 😋😋😋")
    }
    // acessor: getter

    get cpf(): string {
        return this._cpf
    }

    set cpf(newCpf: string){
        if (newCpf.length !== 14){
            // lançando um erro
            throw new  Error("CPF lenth is incorret!");
        }
        this._cpf = newCpf;
    }

    // accessor: setter
}

class Professor extends Pessoa {
    codigo: string;

    constructor(nome: string, idade: number, altura: number, cpf: string, codigo: string) {
        super(nome, idade, altura, cpf); // Chama o construtor da classe base
        this.codigo = codigo;
    }

    ensinar(){
        console.log("Ensinando...✨✨✨");
    }
}


    // Criando/Instanciando uma pessoa (individuo/objeto) a partir da definição da classe Pessoa

    const pessoa1 = new Pessoa('Pedro',26,1.71,'123.456.789-00')
    const pessoa2 = new Pessoa('Jack',30,1.86,'111.111.111-00')
    
    console.log(pessoa1);
    console.log(pessoa1.nome);

    console.log(pessoa2);
    console.log(pessoa2.dormir());

    pessoa1.nome = "Fulano";

    console.log(pessoa1.nome);
    console.log(pessoa1.cpf)

    pessoa1.cpf = '333.333.333-00';

    console.log(pessoa1.cpf);


    // Objeto da classe professor

    //const professor = new Professor('Professor', 38, 1.88, '222.222.222-01','0003');

    const professor = new Professor(
        "Professor",
        30,
        1.68,
        "0001", // Código
        "123.456.789-10" // CPF
    );
    
    console.log(professor);

    professor.dormir();
    professor.ensinar();

    // Polimorfismo

    console.log(pessoa1 instanceof Pessoa); //true
    console.log(pessoa1 instanceof Professor); // false
    console.log(professor instanceof Pessoa); // true
    console.log(professor instanceof Professor) //true
