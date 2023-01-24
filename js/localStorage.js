/*  */
const lista = document.getElementById('lista');
const items = JSON.parse(localStorage.getItem("items")) || [];

items.forEach((elemento) => {
    addItem(elemento)
})

function getResult(result) {
    const existe = items.find(element => element.item === result)

    const itemAdd = {
        "item": result
    }

    if (!existe) {
        itemAdd.id = items[items.length - 1] ? items[items.length - 1].id + 1 : 0;
        addItem(itemAdd);
        items.push(itemAdd);
    }
    localStorage.setItem("items", JSON.stringify(items))
}

function addItem(item) {
    const items = document.createElement('li');
    items.classList.add('items');
    items.dataset.id = item.id;
    items.innerHTML += item.item;

    /* ERRO ESTÁ AQUI */
    items.appendChild(buttonDelete(item.id)); 

    lista.appendChild(items);
}

function buttonDelete(id) {
    const button = document.createElement('button');
    button.innerText = 'X';

    button.addEventListener('click', function () {
        tag = this.parentNode;
        deleteItem(tag, id);
    })
    return button
}

function deleteItem(tag, id) {
    tag.remove();

    items.splice(items.findIndex(elemento => elemento.id === id), 1)

    localStorage.setItem("items", JSON.stringify(items))
}
