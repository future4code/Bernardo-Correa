// EXERCÍCIOS DE INTERPRETAÇÃO:
/*
1.
let array
console.log('a. ', array) // Retornará "undefined"

array = null
console.log('b. ', array) // Retornará "null"

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // Retornará "11"

let i = 0
console.log('d. ', array[i]) // Retornará "3", o item de índice 0 do array acima

array[i+1] = 19
console.log('e. ', array) // Retornará "3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13", porque 19 está substituindo o valor de índice 1 ("4")

const valor = array[i+6]
console.log('f. ', valor) // Retornará "9", o valor de índice 7 (i + 6 = 1 + 6 = 7)

2.
const frase = prompt("Digite uma frase") 

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // Será impresso "SUBI NUM ÔNIBUS EM MIRROCOS 27"
*/

// EXERCÍCIOS DE ESCRITA:

// 1.

const nomeDoUsuario = prompt("Qual o seu nome?")
const emailDoUsuario = prompt("Qual o seu email?")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinde, ${nomeDoUsuario}`)

//2.

comidasFavoritasDoB = ["Feijão", "Pipoca", "Batata", "Ervilha", "Chocolate"]

console.log(comidasFavoritasDoB)
console.log(`Essas são as minhas comidas favoritas:
${comidasFavoritasDoB[0]}
${comidasFavoritasDoB[1]}
${comidasFavoritasDoB[2]}
${comidasFavoritasDoB[3]}
${comidasFavoritasDoB[4]}
`)

const novaComida = prompt("Qual a sua comida favorita?")

comidasFavoritasDoB[1] = novaComida
console.log(`Essas são as minhas comidas favoritas (lista atualizada):
${comidasFavoritasDoB[0]}
${comidasFavoritasDoB[1]}
${comidasFavoritasDoB[2]}
${comidasFavoritasDoB[3]}
${comidasFavoritasDoB[4]}
`)

// 3.

let listaDeTarefas = []

listaDeTarefas.push(prompt("Digite 3 tarefas no seu dia-a-dia (1/3):"))
listaDeTarefas.push(prompt("Digite 3 tarefas no seu dia-a-dia (2/3):"))
listaDeTarefas.push(prompt("Digite 3 tarefas no seu dia-a-dia (2/3):"))
console.log(listaDeTarefas)

listaDeTarefas.splice(prompt("Digite o índice de uma tarefa que você já tenha concluido:"), 1)
console.log(listaDeTarefas)

// DESAFIOS

// 1.
let frase = prompt("Digite uma frase qualquer:").split(' ')
console.log(frase)

// 2.

let array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log(
    `Índice de "Abacaxi":${array.indexOf("Abacaxi")}
Comprimento do array: ${array.length}`)