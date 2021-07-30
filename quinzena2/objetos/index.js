/*

EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

1.
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

a) Será impresso:
Matheus Nachtergaele
Virginia Cavendish
object: { canal: "Globo", horario "14h" }

2.
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

a) Será impresso:
object: {nome: "Juca", idade: 3, raca: "SRD"}
object: {nome "Juba", idade: 3, raca "SRD"}
object: {nome:"Jubo", idade:3, raca "SRD"}

b) A sintaxe "..." copia o objeto que a segue

3.
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

a) Será impresso:
false
undefined --> A propriedade altura não é definida dentro do objeto, portanto retorna "undefined"

*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 1.

const pessoa = {
    nome: "Bernardo",
    apelidos: ["Bê", "Bertoldo", "Bernildo"]
}

console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]}, ou ${pessoa.apelidos[2]}`)

const pessoa2 = {
    ...pessoa, apelidos: ["Ber", "B", "Toldo"]
}

console.log(`Eu sou ${pessoa2.nome}, mas pode me chamar de ${pessoa2.apelidos[0]}, ${pessoa2.apelidos[1]}, ou ${pessoa2.apelidos[2]}`)

// 2.

const sujeito1 = {
    nome: "Barnabé",
    idade: 57,
    profissão: "Marceneiro"
}

const sujeito2 = {
    nome: "Fernando",
    idade: 23,
    profissão: "Engenheiro"
}

function retornaArray(pessoa) {
    return [pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissão, pessoa.profissão.length]
}

console.log(retornaArray(sujeito1))
console.log(retornaArray(sujeito2))

// 3.

let carrinho = []

const fruta1 = {
    nome: "Manga",
    disponibilidade: true
}

const fruta2 = {
    nome: "Laranja",
    disponibilidade: true
}

const fruta3 = {
    nome: "Abacaxi",
    disponibilidade: true
}

function colocaNoCarrinho(fruta) {
    return carrinho.push(fruta)
}

colocaNoCarrinho(fruta1)
colocaNoCarrinho(fruta2)
colocaNoCarrinho(fruta3)

console.log(carrinho) // Aqui está retornando "false" para "disponibilidade" por causa das linhas abaixo.

// DESAFIO 3.

function tiraDoEstoque(fruta) {
    return fruta.disponibilidade = !fruta.disponibilidade
}

tiraDoEstoque(fruta1)
tiraDoEstoque(fruta2)
tiraDoEstoque(fruta3)



// DESAFIO:

// 1.
function identificacao() {
    const pessoa = {
    nome: prompt("Qual o seu nome?"),
    idade: Number(prompt("Qual a sua idade?")),
    profissao: prompt("Qual a sua ocupação?"),
    }
    return pessoa
}

retorna = identificacao()
console.log(retorna, typeof retorna)

// 2. 

filme1 = {
    nome: "Alien",
    anoLancamento: 1979
}

filme2 = {
    nome: "Aliens",
    anoLancamento: 1986
}

function comparaFilmes(filme1, filme2) {
    console.log(`O primeiro filme foi lançado antes do segundo? ${filme1.anoLancamento < filme2.anoLancamento}`)
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${filme1.anoLancamento === filme2.anoLancamento}`)
}

comparaFilmes(filme1, filme2)

// 3. ACIMA