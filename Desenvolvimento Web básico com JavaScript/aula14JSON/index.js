const fs = require('fs');

// lendo um arquivo JSON

fs.readFile('.eslintrc.json', (erro, dados) => {
  if (erro) {
    console.log('Deu erro', erro);
  } else {
    //dados: buffer com os dados do arquivo json
    const dadosObjeto = JSON.parse(String(dados)); // CONVERTENDO O BUFFER PARA OBJETO DE JS
    console.log(dadosObjeto.rules);
  }
});

//convertendo JSON, e formato de string para um objeto
const jsonString = '{"nome":"Pedro"}';

console.log(JSON.parse(jsonString)); //convertendo uma string JSON em um objeto JS

//convertendo um onjeto do JS,em um JSON (STRING)

const pessoa = {
  nome: 'Pedro',
  idade: 26,
  altura: 1.71,
};

console.log(JSON.stringify(pessoa)); //convertendo um objeto JS em uma string JSON
