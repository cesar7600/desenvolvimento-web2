window.alert('olá mundo!')
console.log('Olá mundo')
let nome = window.prompt('Digite seu nome: ')
let paragrafo = document.getElementById('texto')
console.log(paragrafo)
paragrafo.innerHTML=`<p>Olá mundo receba o ${nome} como o jogador</p>
paragrafo.style.color = `red`