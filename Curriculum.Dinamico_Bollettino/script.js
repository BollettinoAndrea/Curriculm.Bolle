function creaElementoLista(containerId, inputId, tipo) {
    const container = document.getElementById(containerId);
    const valore = document.getElementById(inputId).value.trim();
    if (valore === "") return;
  
    const item = document.createElement("div");
    item.className = "item";
  
    const input = document.createElement("input");
    input.type = "text";
    input.value = valore;
    input.disabled = true;
  
    const actions = document.createElement("div");
    actions.className = "actions";
  
    const btnModifica = document.createElement("button");
    btnModifica.textContent = "Modifica";
    btnModifica.onclick = function () {
      input.disabled = !input.disabled;
      btnModifica.textContent = input.disabled ? "Modifica" : "Salva";
    };
  
    const btnElimina = document.createElement("button");
    btnElimina.textContent = "Elimina";
    btnElimina.onclick = function () {
      container.removeChild(item);
    };
  
    actions.appendChild(btnModifica);
    actions.appendChild(btnElimina);
    item.appendChild(input);
    item.appendChild(actions);
    container.appendChild(item);
  
    document.getElementById(inputId).value = "";
  }
  
  function aggiungiTitolo() {
    creaElementoLista("titoliContainer", "titoloInput", "titolo");
  }
  
  function aggiungiEsperienza() {
    creaElementoLista("esperienzeContainer", "esperienzaInput", "esperienza");
  }
  