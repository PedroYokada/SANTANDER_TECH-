// console.log(document.title);
// console.log(document.url);

// // selecionar elementos HTML da nossa pagina utilizando o document

// const todosH1s = document.getElementsByTagName("h1");

// console.log(todosH1s[0]);

// 1 - pelo nome da tag
const todosP = document.getElementsByTagName('p');
console.log(todosP);

// 2 - pelo nome da classe

const todosClasseParagrafo = document.getElementsByClassName('paragrafo');

console.log(todosClasseParagrafo);


// 3 - Pelo Name da tag

const emailInput = document.getElementsByName('email');
console.log(emailInput)

// 4 - pelo id da tag

const jsLogoImg = document.getElementById('js-logo'); 
console.log(jsLogoImg);


// 5- Query Selector

const imagem = document.querySelector('body > img#js-logo');

console.log(imagem);

const paragrafos = document.querySelectorAll("p");
console.log(paragrafos);

console.clear();

// Acessando/alterando o conteudo HTML das tags

const primeiroParagrafo = document.querySelector('p.paragrafo');

console.log(primeiroParagrafo);

console.log('Conteúdo:',primeiroParagrafo.textContent);
console.log('innerHTML:', primeiroParagrafo.innerHTML);

primeiroParagrafo.textContent = '<strong>Outra coisa<strong>';
primeiroParagrafo.innerHTML = '<strong>Outra coisa<strong>';

// 

console.clear();

//console.log(emailInput.value);

emailInput[0].value = 'pedro@email.com'

// Criando elementos na página HTML


const listaUl = document.querySelector('ul#lista');
const listaLis = document.querySelectorAll('ul > li')

const novaTagLi = document.createElement('li'); // criando uma tag li vazia

novaTagLi.textContent = "Segundo item" // adicionando texto dentro da tag li

console.log(novaTagLi);

//listaUl.appendChild(novaTagLi);

listaUl.insertBefore(novaTagLi, listaLis[1]);

listaUl.removeChild(novaTagLi)