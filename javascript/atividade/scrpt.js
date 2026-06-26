function verificar() {
    let velocidade = document.getElementById('velocidade').value;
    let resuldado = document.getElementById('resultado');
    if (velocidade > 80){
        resuldado.innerHTML += `<p>você está acima da velocidade permitida, você será multado.</p>`;
    }else {
        resuldado.innerHTML += `<p> Você está dentro da velocidade permitida.</p>`;
    }
