// const button = document.querySelector('section button');

// // console.log("Button");

// button.addEventListener('click', (event) => {
//     // console.log(event)
//     alert('Você clicou no botão!')
// });

const botaoAumentar = document.querySelector('#aumentar-botao');
const botaoDiminuir = document.querySelector('#diminuir-botao');

const contadorElemento = document.querySelector('#contador');


const input = document.querySelector('#input');

botaoAumentar.addEventListener('click', (event) => {
    const valorAtual = Number(contadorElemento.textContent);
    contadorElemento.textContent = valorAtual + 1;

    // Adiciona a classe 'btn' ao botão de aumentar
    botaoAumentar.classList.add('btn');
    // Remove a classe 'btn' do botão de diminuir
    botaoDiminuir.classList.remove('btn');
});

botaoDiminuir.addEventListener('click', (event) => {
    const valorAtual = Number(contadorElemento.textContent);
    contadorElemento.textContent = valorAtual - 1;

    // Adiciona a classe 'btn' ao botão de diminuir
    botaoDiminuir.classList.add('btn');
    // Remove a classe 'btn' do botão de aumentar
    botaoAumentar.classList.remove('btn');
});


input.addEventListener('input', () => {
    // console.log('Digitou algo...')
    console.log('input.value');

});

// Adicionando estilos inline no elemento cotnador

contadorElemento.style.color = 'red';
contadorElemento.style.padding = '0 2rem';
contadorElemento.style.backgroundColor = '#AAA'
contadorElemento.style.border = '1px solid'
contadorElemento.style.width = '150px'

// Manipular classes



console.log(botaoDiminuir.classList);

// botaoAumentar.classList.add('btn');
// botaoDiminuir.classList.remove('btn');

const themeButton = document.querySelector("#theme");

let darkTheme = localStorage.getItem("isDarkTheme") === 'true'; // Inicializa o estado do tema com base no localStorage

// Aplica o tema ao carregar a página
window.onload = () => {
    const isDarkThemeStorage = localStorage.getItem('isDarkTheme');
    darkTheme = isDarkThemeStorage === 'true'; // Converte o valor armazenado para booleano

    const body = document.querySelector('body');
    if (darkTheme) {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    } else {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    }
};

themeButton.addEventListener('click', () => {
    darkTheme = !darkTheme; // Alterna o estado do tema

    localStorage.setItem("isDarkTheme", darkTheme); // Atualiza o localStorage

    const body = document.querySelector('body');
    if (darkTheme) {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    } else {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    }
});
