
let lista = [];
let idade = [2,5,9,10,15]
let nomes = ["Julio", "Maria", "João", "Ana", "Pedro"]

console.log(lista);
console.log(idade);
console.log(nomes);

console.log(`O tamanho da lista é: ${nomes.length}`);

for (var cont = 0; cont <= 3; cont++) {
    console.log(`Usuário - ${nomes[cont]}`)
}
for (var cont = 0; cont < nomes.length; cont++) {
    console.log(`Usuário - ${nomes[cont]}`)
}

lista.unshift(51)

console.log(lista)

lista.push(67)

lista.pop()
lista.shift()

lista.sort()
lista.reverse()
console.log(lista)
lista.splice(0, 1, "julio", "maria")
console.log(nomes)

    console.log(nomes.indexOf("Julio"))

var cadastro = [
    ['julio' ,73,36],
    ['maria', 65, 28]
]
console.log(cadastro[0][2])