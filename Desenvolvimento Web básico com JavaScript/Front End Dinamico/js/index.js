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
