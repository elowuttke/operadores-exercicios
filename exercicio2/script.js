console.log(" - EXERCÍCIO 2 OPERADORES -")

let primeiro = Number(prompt("Escolhe um número entre 0 e 1.000.000:"))
let segundo = Number(prompt("Escolha mais um número entre 0 e 1.000.000:"))

console.log("O primeiro número escolhido é: "+primeiro)
console.log("O segundo número escolhido é: "+segundo)

console.log("O primeiro número é maior que o segundo?",primeiro>segundo)
console.log("O primeiro número é igual ao segundo?",primeiro==segundo)
console.log("O primeiro numero é divisível pelo segundo?",primeiro % segundo == 0)
console.log("O segundo numero é divisível pelo primeiro?",segundo % primeiro == 0)