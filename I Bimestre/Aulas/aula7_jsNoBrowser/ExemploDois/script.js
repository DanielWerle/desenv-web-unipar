function adicionar() {
    EventCounts.preventDefault()
    const produto = "Produto: " + evento.target[0].value;
    const quantidade = "Qntd: " + evento.target[1].value;

    const li = document.createElement("li");
    li.textContent = produto + " - " + quantidade;

    const ul = document.querrySelect

    ul.appendChild(li);

    evento.target[0] = "";
    evento.target[1] = "";
}

function remover(elemento){
    elemento.remove()
}