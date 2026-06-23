function casdastrar() {
    let nome = document.getElementById('nome').value;
    let lista = document.getElementById('lista')
    lista.innerHTML +=`<p>${nome.value}</p>`;
    nome.value = ' ';
    nome.focus();
}