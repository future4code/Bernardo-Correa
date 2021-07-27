// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// 1.
// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// a. Será impresso: 10 50 (em linhas diferentes)
// b. Seria impresso: 10 50 (na mesma linha)

// 2.
// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// a. Essa função converte uma string para "lower case" e busca a string "cenoura".
// A sua utilidade é detectar se dentro de uma string há "cenoura".

// b. Será impresso no console:
// i. true
// ii. true -> "CENOURA" é convertido para "cenoura" antes do .includes()
// iii. true -> A palavra "cenouras" contém a palavra "cenoura", por isso retorna true

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 1. a)

function bio() {
    console.log(`Eu me chamo Bernardo, tenho 24 anos, moro em Porto Alegre e sou estudante de biologia`)
}

bio()

// 1. b)

function bioQuestionario() {
    const nome = prompt("Qual seu nome?")
    const idade = Number(prompt("Quantos anos você tem?"))
    const cidade = prompt("Em que cidade você mora?")
    const ocupacao = prompt("Qual é sua ocupação?")
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${ocupacao}`)
}

bioQuestionario()

// 2. a)

function somaERetorna() {
    const numero1 = Number(prompt("Digite o primeiro número"))
    const numero2 = Number(prompt("Digite o segundo número"))

    const soma = numero1 + numero2
    return soma
}

console.log(somaERetorna())

// 2. b)

function comparaNumeros() {
    const numero1 = Number(prompt("Digite o primeiro número"))
    const numero2 = Number(prompt("Digite o segundo número"))

    const comp = numero1 >= numero2
    return comp
}

console.log(comparaNumeros())

// 2. c)

function parOuImpar() {
    const numero = Number(prompt("Digite um número"))
    const ePar = numero % 2 === 0
    return ePar
}

console.log(parOuImpar())

// 2. d)

function tamanhoEmVozAlta() {
    const string = prompt("Digite uma frase qualquer:")
    const stringTamanho = string.length
    const stringEmVozAlta = string.toUpperCase()

    console.log(`${stringEmVozAlta}
    ${stringTamanho}`)
}

tamanhoEmVozAlta()

// 3.

function somar(a, b) {
    soma = a + b
    return soma
}

function subtrair(a, b) {
    subtracao = a - b
    return subtracao
}

function multiplicar(a, b) {
    multiplicacao = a * b
    return multiplicacao
}

function dividir(a, b) {
    divisao = a / b
    return divisao
}

function imprimeTudo() {
    numero1 = Number(prompt("Digite o primeiro número:"))
    numero2 = Number(prompt("Digite o segundo número:"))

    console.log(`
        Números inseridos: ${numero1} e ${numero2}
        Soma: ${somar(numero1, numero2)}
        Diferença: ${subtrair(numero1, numero2)}
        Multiplicação: ${multiplicar(numero1, numero2)}
        Divisão: ${dividir(numero1, numero2)}
        `)
}

imprimeTudo()

// DESAFIOS

// 1. a)

const mensagem = (parametro) => console.log(parametro)
const mensagemImpressa = mensagem("Olá")

// 1. b)

const outraArrow = () => {
    parametro1 = Number(prompt("Digite o primeiro valor:"))
    parametro2 = Number(prompt("Digite o segundo valor:"))
    soma = parametro1 + parametro2
    mensagem(soma)
}

outraArrow()

// 2.

function teoremaDePitagoras() {
    cateto1 = Number(prompt("Digite o valor do primeiro cateto:"))
    cateto2 = Number(prompt("Digite o valor do segundo cateto:"))
    hipotenusa = Math.sqrt((cateto1 ** 2) + (cateto2 ** 2))
    return hipotenusa
}

console.log(teoremaDePitagoras())