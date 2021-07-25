/*
EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

1.
const bool1 = true
const bool2 = false
const bool3 = !bool2 // --> o "!" inverte o sentido de bool2, que é FALSE, tornando-o TRUE

let resultado = bool1 && bool2
console.log("a. ", resultado) // --> Retornará "a. FALSE"

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) // --> Retornará "b. FALSE", pois bool2 é FALSE

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) // --> Retornará "c. TRUE", porque resultado foi redefinido como FALSE na linha 10 e o resultado de bool1 OR bool2 é TRUE

console.log("d. ", typeof resultado) --> Retornará "d. boolean"

2.
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")
// Valores obtidos pelo prompt sempre são tratados como strings, que não podem sofrer operações aritméticas.

const soma = primeiroNumero + segundoNumero

console.log(soma) // Retornará NaN

3.
// Para resolver o problema acima, podemos usar "Number(prompt("..."))"

*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// 1.
const idade1 = prompt("Quantos anos você tem?")
const idade2 = prompt("Quantos anos tem o seu melhor amigo ou amiga?")

const maisVelho = idade1 > idade2
const diferenca = idade1 - idade2

console.log("Sua idade é maior do que a do seu melhor amigo?", maisVelho)
console.log("Diferença de idade: ", diferenca)

// 2.
const numPar = Number(prompt("Digite um número par:"))
const divisao2 = numPar % 2 


console.log(divisao2) // Sempre retornará "0", porque números pares divididos por 2 não deixam resto.
// Se um número ímpar fosse entrado, o retorno sempre seria 1, porque números ímpares são definidos por 2x + 1.

// 3.

const idadeAnos = Number(prompt("Qual a sua idade em anos?"))

const idadeDias = idadeAnos * 365.25 // 0.25 para considerar anos bissextos
console.log("Idade em dias: ", idadeDias)

const idadeHoras = idadeDias* 24
console.log("Idade em horas: ", idadeHoras)

// 4.

const numero1 = Number(prompt("Digite o primeiro número: "))
const numero2 = Number(prompt("Digite o segundo número: "))

const primeiroMaiorQueSegundo = numero1 > numero2
console.log("O primeiro número é maior que o segundo? ", primeiroMaiorQueSegundo)

const primeiroIgualAoSegundo = numero1 === numero2
console.log("O primeiro número é igual ao segundo? ", primeiroIgualAoSegundo)

const primeiroDivisivelPeloSegundo = numero1 % numero2 === 0
console.log("O primeiro número é divisível pelo segundo? ", primeiroDivisivelPeloSegundo)

const segundoDivisivelPeloPrimeiro = numero2 % numero1 === 0
console.log("O segundo número é divisível pelo primeiro? ", segundoDivisivelPeloPrimeiro)