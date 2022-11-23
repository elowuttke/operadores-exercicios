console.log(" - EXERCÍCIO 1 OPERADORES -")

let numeroPar
numeroPar = Number(prompt("Insira um número par:"))
console.log("Número escolhido: "+numeroPar)

let saldo = numeroPar % 2
console.log("O resto da divisão de "+numeroPar+" por 2 é: "+saldo)

//sempre que entra um número par, o  resto é 0
//sempre que entra um número ímpar, o resto é 1

//let saldo = numeroPar % 2 === 0
//true é par, false é impar