// Captura o botão e o menu
const botao = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');

// Cria o evento de clique
botao.addEventListener('click', () => {  
    // Ativa e desativa a classe aberto (Usando: Toggle) 
    menu.classList.toggle('aberto');
});