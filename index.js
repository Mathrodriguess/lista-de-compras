const itens = document.getElementById('input-item');
const botaoAdicionar = document.getElementById('adicionar-item');
const containerLista = document.getElementById('lista-de-compras') 
let contador = 0

botaoAdicionar.addEventListener('click', (evento) => {
    evento.preventDefault();
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
    containerLista.appendChild(itemDaLista);

    const diaDaSemana = new Date().toLocaleDateString('pt-BR', {
        weekday: 'long'
    });
    const data = new Date().toLocaleDateString('pt-BR');
    const hora = new Date().toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
    });

    const dataItem = document.createElement('p');
    dataItem.innerText = `${diaDaSemana} (${data}) às ${hora}`;
    dataItem.classList.add('texto-data');
    containerLista.appendChild(dataItem);  

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