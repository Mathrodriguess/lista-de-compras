import {criarItemDaLista} from "./scripts/criarItemDaLista.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js";
const botaoAdicionar = document.getElementById('adicionar-item');
const containerLista = document.getElementById('lista-de-compras'); 

botaoAdicionar.addEventListener('click', (evento) => {
    evento.preventDefault();
    const itemDaLista = criarItemDaLista();
    containerLista.appendChild(itemDaLista);    
    verificarListaVazia(containerLista)
});

verificarListaVazia(containerLista)