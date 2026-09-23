const inputTarefa = document.getElementById("tarefa");
const btnAdicionar = document.getElementById("btnAdicionarTarefa");

const listaAfazer = document.getElementById("listaAfazer");

btnAdicionar.addEventListener("click", function() {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = inputTarefa.value;

    inputTarefa.value = "";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    li.appendChild(checkbox);
    li.appendChild(span);

    listaAfazer.appendChild(li);
});

listaAfazer.addEventListener("click", function(event){
    if(event.target.tagName === "LI"){
        event.target.remove();
    } else if (event.target.tagName === "SPAN"){
        event.target.parentElement.remove()
    }
});