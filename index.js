import {criarItemDaLista} from "./scripts/criarItemDaLista.js";
const botaoAdicionar = document.getElementById('adicionar-item');
const containerLista = document.getElementById('lista-de-compras'); 

botaoAdicionar.addEventListener('click', (evento) => {
    evento.preventDefault();
    const itemDaLista = criarItemDaLista();
    containerLista.appendChild(itemDaLista);    
    verificarListaVazia()
});

const mensagemListaVazia = document.querySelector('.mensagem-lista-vazia');

function verificarListaVazia() {
    const itensDaLista = containerLista.querySelectorAll('li')
    if (itensDaLista.length === 0) {
        mensagemListaVazia.style.display = 'block'
    } else {
       mensagemListaVazia.style.display = 'none' 
    }
}

verificarListaVazia()