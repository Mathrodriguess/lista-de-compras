import gerarDiaDaSemana from "./gerarDiaDaSemana.js";

const itens = document.getElementById('input-item');
let contador = 0

export function criarItemDaLista() {
    
    if (itens.value === '') {
        alert('Favor adicionar um item');
        return;
    }

    const itemDaLista = document.createElement('li');
    const containerItemdaLista = document.createElement('div');
    containerItemdaLista.classList.add('lista-item-container');
    const inputCheckbox = document.createElement('input');
    inputCheckbox.type = 'checkbox';
    inputCheckbox.id = `checkbox-${contador++}`;
    const nomeItem = document.createElement('p');
    nomeItem.innerText = itens.value;

    inputCheckbox.addEventListener('click', function(){
         if (inputCheckbox.checked) {
             nomeItem.style.textDecoration = 'line-through';
         } else {
             nomeItem.style.textDecoration = 'none'
         }
    })

    containerItemdaLista.appendChild(inputCheckbox);
    containerItemdaLista.appendChild(nomeItem);

    itemDaLista.appendChild(containerItemdaLista);
    const dataCompleta = gerarDiaDaSemana();
   
    const dataItem = document.createElement('p');
    dataItem.innerText = dataCompleta;
    dataItem.classList.add('texto-data');
    itemDaLista.appendChild(dataItem); 

    return itemDaLista
}