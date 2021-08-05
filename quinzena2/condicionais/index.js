// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// 1.
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a) O código compara o resto da divisão do número inserido pelo usuario com zero, ou seja, testa se o número é par ou não.
// Se for par, a comparação é "true" e no console aparecerá "Passou no teste."
// b) Para todos os pares.
// c) Para todos os ímpares.

// 2.

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) O código serve para imprimir o preço da fruta que o usuário insere no prompt.
// b) Será impresso: "O preço da fruta Maçã é R$ 2.25"
// c) Seria impresso: "O preço da fruta Pêra é R$ 5.5", porque sem o break o código continua a rodar e a variável preço é redefinida como 5.5.

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) Na primeira linha, é feito um prompt pedindo um número, que retorna uma string que será convertida em número por "Number()" e salva na variável "numero".
// b) Se o número inserido for 10, a mensagem será "Esse número passou no teste". Se fosse -10, nenhuma mensagem seria escrita pq a condição do if não foi cumprida.
// c) Sim, o console indicará que "mensagem" não foi definida, pq esta variável foi chamada no escopo pai, mas declarada no escopo filho, que é inacessivel ao pai.

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 1.

const idade = Number(prompt("Qual a sua idade?"))

if(idade >= 18) {
    console.log("Você pode dirigir!")
} else if (idade < 18 || idade >= 0) {
    console.log("Você não pode dirigir. Saia do carro imediatamente.")
} else (
    console.log("Digite uma idade válida.")
)

// 2.

const turno = prompt(`Em qual turno do dia você estuda?
Matutino - M
Vespertino - V
Noturno - N
`)

if (turno === "M") {
    console.log("Bom dia!")
} else if (turno === "V") {
    console.log("Boa tarde!")
} else if (turno === "N") {
    console.log("Boa noite!")
} else {
    console.log("Digite um turno válido. (M/V/N")
}

// 3.
switch (turno) {
    case "M":
        console.log("Bom dia!")
        break;
    case "V":
        console.log("Boa tarde!")
        break;
    case "N":
        console.log("Boa noite!")
        break;
    default:
        console.log("Digite um turno válido. (M/V/N)")
}

// 4.

const generoFilme = prompt("Que gênero de filme você quer?")
const precoFilme = Number(prompt("Qual é o preço do ingresso?"))
const lanchinho = prompt("Qual lanchinho você quer comprar?") // DESAFIO (não foi desafiador)

if (generoFilme === "fantasia" && precoFilme < 15) {
    console.log("Bom filme!")
    console.log(`Hummm... ${lanchinho} é gostoso demais... Aproveite!`) // DESAFIO
} else {
    console.log("Escolha outro filme :^(")
}

// DESAFIO

// 1. Linhas 109 e 113

// 2.

const nomeCliente = prompt("Qual o seu nome completo?")
const tipoJogo = prompt("Qual o tipo do jogo? Internacional - IN // Doméstico - DO")
const etapaJogo = prompt("Qual a etapa do jogo? Semifinal - SF // Decisão de terceiro lugar - DT")
const categoria = Number(prompt("Qual a categoria? (1/2/3/4)"))
const quantidadeIngressos = Number(prompt("Qual a quantidade de ingressos?"))

if (categoria === 1) {
    if (etapaJogo === "SF") {
        precoBase = 1320.00
    } else if (etapaJogo === "DT") {
        precoBase = 660.00
    } else if (etapaJogo === "FI") {
        precoBase = 1980.00
    }
} else if (categoria === 2) {
    if (etapaJogo === "SF") {
        precoBase = 880
    } else if (etapaJogo === "DT") {
        precoBase = 440
    } else if (etapaJogo === "FI") {
        precoBase = 1320
    }
} else if (categoria === 3) {
    if (etapaJogo === "SF") {
        precoBase = 550
    } else if (etapaJogo === "DT") {
        precoBase = 330
    } else if (etapaJogo === "FI") {
        precoBase = 880
    }
} else if (categoria === 4) {
    if (etapaJogo === "SF") {
        precoBase = 220
    } else if (etapaJogo === "DT") {
        precoBase = 170
    } else if (etapaJogo === "FI") {
        precoBase = 330
    }
}

// Talvez haja um jeito mais elegante de resolver isso...

if (tipoJogo === "IN") {
    precoBase = 4.10 * precoBase
}

precoFinal = precoBase * quantidadeIngressos

console.log(`
--- Dados da compra ---
Nome do cliente: ${nomeCliente}
Tipo de jogo: ${tipoJogo}
Etapa do jogo: ${etapaJogo}
Categoria: ${categoria}
Quantidade de ingressos: ${quantidadeIngressos}
--- Valores ---
Valor do ingresso: ${precoBase}
Valor total: ${precoFinal}
`)