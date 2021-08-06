// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO


1.
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)
/*
O código cria um loop incremental, em que a cada iteração a variável valor é acrescida de i, que, por sua vez, é acrescida em 1 ao fim de todo loop.
Será impresso "10" ao final do loop. Explicação:
0 // Iteração 0, i = 0 e valor = 0 + 0
1 // Iteração 1, i = 1 e valor = 0 + 1
3 // Iteração 2, i = 2 e valor = 2 + 1
6 // Iteração 4, i = 3 e valor = 3 + 3
10 // Iteração 5, i = 4 e valor = 6 + 4

2. 

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

a) Serão impressos todos os números menores que 18 (10 11 12 15)
b) o "for... of..." não opera utilizando os índices do array, portanto podemos utilizar "console.log(lista.indexOf(numero))" dentro do loop "for"

3.

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

Será impresso:

O loop while rodará 4 vezes, enquanto "quantidadeAtual" for menor que "quantidadeTotal". "quantidadeAtual" começa em 0 e é incrementado em 1 ao fim do loop, enquanto "quantidadeTotal" é 4.
O loop for rodará antes, colocando 1 asterisco dentro da string "linha". Depois disso, o loop while rodará quatro vezes, até que quantidade atual chegue a 3 e pare o loop. Então, será impresso:
*
**
***
****

*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 1.

const numeroBichinhos = Number(prompt("Quantos bichinhos você tem?"))

if (numeroBichinhos === 0) {
    console.log("Que pena :^(")
} else if (numeroBichinhos > 0) {
    let i = 0
    let bichinhos = []
    while (i < numeroBichinhos) {
        bichinhos[i] = prompt(`Qual o nome do bichinho número ${i + 1}?`)
        i++
    }
    console.log(bichinhos)
}

// 2.

const arrayOriginal = [1,1,2,3,5,8,13,21,34,55]

function imprimeArray(array) {
    for (i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}
imprimeArray(arrayOriginal)

function imprimeArrayDivDez(array) {
    for (i = 0; i < array.length; i++) {
        console.log(array[i]/10)
    }
}
imprimeArrayDivDez(arrayOriginal)

function imprimeArrayApenasPares(array) {
    let arrayNovo = []
    for (i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            arrayNovo.push(array[i])
        }
    }
    console.log(arrayNovo)
}
imprimeArrayApenasPares(arrayOriginal)

function imprimeArrayTexto(array) {
    let arrayTexto = []
    for (i = 0; i < array.length; i++) {
        arrayTexto.push(`O elemento do índex ${i} é ${array[i]}`)
    }
    console.log(arrayTexto)
}
imprimeArrayTexto(arrayOriginal)

function imprimeMaiorEMenor (array) {
    let valorMaximo = array[0]
    for (i = 0; i < array.length; i++) {
        if (valorMaximo < array[i]) {
            valorMaximo = array[i]
        } 
    }

    let valorMinimo = array[0]
    for (i = 0; i < array.length; i++) {
        if (valorMinimo > array[i]) {
            valorMinimo = array[i]
        } 
    } console.log(`O menor valor do array é: ${valorMinimo} e o maior é ${valorMaximo}`)
}
imprimeMaiorEMenor(arrayOriginal)

// DESAFIO

// 1.
// const numero1 =  Number(prompt("Vamos jogar! Insira um número!"))
const numero1 =  Math.floor(Math.random()*10) // 2.
let numero2 = Number(prompt("Tente adivinhar o primeiro número!"))
let tentativas = 1

while (numero2 !== numero1) {
    if (numero2 > numero1) {
        console.log(`O número chutado foi: ${numero2}. Errou! O númer escolhido é menor!`)
        numero2 = Number(prompt("Tente adivinhar o primeiro número mais uma vez!"))
        tentativas++
    } else if (numero2 < numero1) {
        console.log(`O número chutado foi: ${numero2}. Errou! O númer escolhido é maior!`)
        numero2 = Number(prompt("Tente adivinhar o primeiro número mais uma vez!"))
        tentativas++
    }
} if (numero2 === numero1) {
    console.log(`Acertou! O número correta era ${numero1}.Tentativas: ${tentativas}`)
}
