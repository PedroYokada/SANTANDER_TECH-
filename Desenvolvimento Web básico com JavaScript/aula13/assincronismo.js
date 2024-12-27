const fs = require("fs");
const prom = require("prom");

// 1- Utilizando Callbacks

// console.log("ANTES da função de ler o arquivo");

//Função Assincrona (ler um arquivo leva um tempo)

// fs.readFile("./aula13/arquivo.txt", function () {

// });

// fs.readFile("./aula13/arquivo.html", (erro, ConteudoDoArquivo) => {
//   if (erro) {
//     console.log("Erro ao ler o arquivo", erro);
//   } else {
//     console.log(String(ConteudoDoArquivo));
//   }
// });

// fs.readFile("./aula13/arquivo.txt", (erro, ConteudoDoArquivo) => {
//   if (erro) {
//     console.log("Erro ao ler o arquivo", erro);
//   } else {
//     console.log(String(ConteudoDoArquivo));
//   }
// });

// console.log("DEPOIS da função de ler o arquivo");

// O JS EXECUTA A FUNÇÃO POR ULTIMO, POIS A FUNÇÃO DE LER O ARQUIVO LEVA UM TEMPO PARA SER EXECUTADA

//http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

// EXEMPLO 02: setTimeout (função que cria um timer)
// Função Assincrona

// console.log("ANTES do setTimeout");

// setTimeout(() => {
//   console.log("Isso aqui vai executar depois de 2s");
// }, 2 * 1000);

// console.log("DEPOIS do setTimeout");

// 2 - Utilizando Promises/ Promessas

// const promessa = new Promise(() => {});  //criando uma promessa
// console.log(promessa);

// console.log("ANTES da criação da promisse");

// const promessa = new Promise((resolve, reject) => {
//   fs.readFile("./aula13/arquivo.html", (erro, ConteudoDoArquivo) => {
//     if (erro) {
//       reject("Erro ao ler o arquivo", erro);
//     } else {
//       resolve(String(ConteudoDoArquivo));
//     }
//   });
// }); //criando uma promessa

// // Foco A partir daqui...
// promessa
//   .then((retornoDoResolveDoPromisse) => {
//     console.log("Deu certo", retornoDoResolveDoPromisse);
//   })
//   .catch((erro) => {
//     console.log("Deu erro", erro);
//   });

// console.log("ANTES da criação da promisse");

function lerArquivoPromisse() {
  return new Promise((resolve, reject) => {
    fs.readFile("./aula13/arquivo.txt", (erro, ConteudoDoArquivo) => {
      if (erro) {
        reject("Erro ao ler o arquivo", erro);
      } else {
        resolve(String(ConteudoDoArquivo));
      }
    });
  });
}

// // Foco A partir daqui...
// lerArquivoPromisse()
//   .then((retornoDoResolveDoPromisse) => {
//     console.log("Deu certo", retornoDoResolveDoPromisse);

// acaoAssincrona.then(() =>{
//   outraAssincrona.then(() => {
//     maisUmaAssincrona.then(() => {
//       console.log("Todas as promessas foram resolvidas");
//     })
//   })
// }

//   })
//   .catch((erro) => {
//     console.log("Deu erro", erro);
//   })
//   .finally(() => {
//     console.log(
//       "Isso aqui vai ser executado independente de dar certo ou errado a promessa, no final dela"
//     );
//   });

// 3 - Utilizando Async/Await

async function leituraDeDados() {
  console.log("Isso aqui é executado antes da promisse ser resolvida!");

  try {
    const dadosDoArquivoLido = await lerArquivoPromisse(); // Espera a promessa ser resolvida para avançar no código.

    console.log(dadosDoArquivoLido);
    console.log("Isso é executado ANTES da promisse ser resolvida!");
  } catch (erro) {
    console.log("Isso é executado quando a promisse (com erro).", erro);
  } finally {
    console.log("Dentro do finally!");
  }
}
leituraDeDados();

fetch();
