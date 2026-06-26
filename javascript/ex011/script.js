function gerarTabuada() {
    var numero = Number(document.getElementById("num").value);
    var resultado = document.getElementById("resultado");

    if (isNaN(numero)) {
        resultado.innerHTML = "Digite um número válido.";
        return;
    }

    resultado.innerHTML = "";

    for (var i = 1; i <= 10; i++) {
        resultado.innerHTML += numero + " x " + i + " = " + (numero * i) + "<br>";
    }
}
