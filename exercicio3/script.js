console.log(" - EXERCÍCIO 3 OPERADORES -")
//Parte 1
console.log(" - PARTE 1 -")

console.log("5 é maior que 20 e também é menor que 2")
console.log("2 > 5 > 20")
console.log(2>5>20)

console.log("5 é igual a 5 ou é igual a “5”")
console.log("5 == 5 || 5 == “5”")
console.log(5 == 5 || 5 == "5")

console.log("negação de (vinte é maior que cinquenta)")
console.log("!20 > 50")
console.log(!20 > 50)

console.log("negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)")
console.log("!20 > 50 || 50 > 60")
console.log(!20 > 50 || 50 > 60)

//Parte 2
console.log(" - PARTE 2 -")

let nomeCompleto = "Fulano da Silva"
let cpf = "000.000.000-00"
let dataNascimento = "10/02/1990"
let endereço = "Rua dos bobos nº 0"
let numeroFilhos = 2
let possuiCNH = true
let cargo = "vendedor"
let salario = 2000
let comissao = 0.1
let anoAdmissão = "2019"

let auxCreche = 45.5 * numeroFilhos

const vendJan = 5784.50
const vendFev = 3418.41
const vendMar = 4124.10
const vendAbr = 1874.00
const vendMai = 7000.00
const vendJun = 9450.00

let comJan = vendJan*comissao
let comFev = vendFev*comissao
let comMar = vendMar*comissao
let comAbr = vendAbr*comissao
let comMai = vendMai*comissao
let comJun = vendJun*comissao

let descINSS = salario*0.05

console.log("1. O salário fixo mais o auxílio creche é R$",salario+auxCreche)

console.log("2. Fulano de Silva receberá de comissão em janeiro R$", comJan)

let descINSSJan = Number(((salario+comJan)*0.05).toFixed(2))
console.log("3. Fulano de Silva será descontado em janeiro pelo INSS (levando em consideração salário + porcentagem de vendas) R$", descINSSJan)

let descINSSFev = Number(((salario+comFev)*0.05).toFixed(2))
let descINSSMar = Number(((salario+comMar)*0.05).toFixed(2))
let descINSSAbr = Number(((salario+comAbr)*0.05).toFixed(2))
let descINSSMai = Number(((salario+comMai)*0.05).toFixed(2))
let descINSSJun = Number(((salario+comJun)*0.05).toFixed(2))

let salTJan = Number(((salario+comJan+auxCreche-descINSSJan)).toFixed(2))
let salTFev = Number(((salario+comFev+auxCreche-descINSSFev)).toFixed(2))
let salTMar = Number(((salario+comMar+auxCreche-descINSSMar)).toFixed(2))
let salTAbr = Number(((salario+comAbr+auxCreche-descINSSAbr)).toFixed(2))
let salTMai = Number(((salario+comMai+auxCreche-descINSSMai)).toFixed(2))
let salTJun = Number(((salario+comJun+auxCreche-descINSSJun)).toFixed(2))

console.log(`
4. Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.\n
Salário Líquido de Janeiro = R$ ${salTJan} \n
Salário Líquido de Fevereiro = R$ ${salTFev}\n
Salário Líquido de Março = R$ ${salTMar}\n
Salário Líquido de Abril = R$ ${salTAbr}\n
Salário Líquido de Maio = R$ ${salTMai}\n
Salário Líquido de Junho = R$ ${salTJun}
`)

let salTmedia = Number(((salTJan+salTFev+salTMar+salTAbr+salTMai+salTJun)/6).toFixed(2))
console.log("5. A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio, é igual a R$ ",salTmedia)