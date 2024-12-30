// Fetch API

//fetch("https://viacep.com.br/ws/01001000/json/");

// Then/Catch

// fetch("https://viacep.com.br/ws/01001000/json/")
//   .then((resposta) => {
//     const data = resposta.json().then((dados) => console.log(dados));
//   })
//   .catch((erro) => {
//     console.log(erro);
//   });

// Async/Await

async function obterDadosDoCep() {
  try {
    const resposta = await fetch("https://viacep.com.br/ws/01001000/json/");
    const dados = await resposta.json();

    console.log(dados);
  } catch (erro) {
    console.log("Erro ao obter os dados", erro);
  } finally {
    console.log("Finalizou a execução");
  }
}

obterDadosDoCep();
